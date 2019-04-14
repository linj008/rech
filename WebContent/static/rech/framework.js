function encrypter(a, b, c, d, e, f) {
    b = b || "GREENPAY", c = 1, d = 1, e = b, f = 1;
    var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756),
        v = new Array((-2146402272), (-2147450880), 32768, 1081376, 1048576, 32, (-2146435040), (-2147450848), (-2147483616), (-2146402272), (-2146402304), (-2147483648), (-2147450880), 1048576, 32, (-2146435040), 1081344, 1048608, (-2147450848), 0, (-2147483648), 32768, 1081376, (-2146435072), 1048608, (-2147483616), 0, 1081344, 32800, (-2146402304), (-2146435072), 32800, 0, 1081376, (-2146435040), 1048576, (-2147450848), (-2146435072), (-2146402304), 32768, (-2146435072), (-2147450880), 32, (-2146402272), 1081376, 32, 32768, (-2147483648), 32800, (-2146402304), 1048576, (-2147483616), 1048608, (-2147450848), (-2147483616), 1048608, 1081344, 0, (-2147450880), 32800, (-2147483648), (-2146435040), (-2146402272), 1081344),
        w = new Array(520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584),
        x = new Array(8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928),
        y = new Array(256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080),
        z = new Array(536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312),
        A = new Array(2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154),
        B = new Array(268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696),
        C = encrypter_createKeys(b),
        D = 0,
        E = a.length,
        F = 0,
        G = 32 == C.length ? 3 : 9;
    for (n = 3 == G ? c ? new Array(0, 32, 2) : new Array(30, (-2), (-2)) : c ? new Array(0, 32, 2, 62, 30, (-2), 64, 96, 2) : new Array(94, 62, (-2), 32, 64, 2, 30, (-2), (-2)), 2 == f ? a += "        " : 1 == f ? (i = 8 - E % 8, a += String.fromCharCode(i, i, i, i, i, i, i, i), 8 == i && (E += 8)) : f || (a += "\0\0\0\0\0\0\0\0"), result = "", tempresult = "", 1 == d && (o = e.charCodeAt(D++) << 24 | e.charCodeAt(D++) << 16 | e.charCodeAt(D++) << 8 | e.charCodeAt(D++), q = e.charCodeAt(D++) << 24 | e.charCodeAt(D++) << 16 | e.charCodeAt(D++) << 8 | e.charCodeAt(D++), D = 0); D < E;) {
        for (l = a.charCodeAt(D++) << 24 | a.charCodeAt(D++) << 16 | a.charCodeAt(D++) << 8 | a.charCodeAt(D++), m = a.charCodeAt(D++) << 24 | a.charCodeAt(D++) << 16 | a.charCodeAt(D++) << 8 | a.charCodeAt(D++), 1 == d && (c ? (l ^= o, m ^= q) : (p = o, r = q, o = l, q = m)), i = 252645135 & (l >>> 4 ^ m), m ^= i, l ^= i << 4, i = 65535 & (l >>> 16 ^ m), m ^= i, l ^= i << 16, i = 858993459 & (m >>> 2 ^ l), l ^= i, m ^= i << 2, i = 16711935 & (m >>> 8 ^ l), l ^= i, m ^= i << 8, i = 1431655765 & (l >>> 1 ^ m), m ^= i, l ^= i << 1, l = l << 1 | l >>> 31, m = m << 1 | m >>> 31, h = 0; h < G; h += 3) {
            for (s = n[h + 1], t = n[h + 2], g = n[h]; g != s; g += t) j = m ^ C[g], k = (m >>> 4 | m << 28) ^ C[g + 1], i = l, l = m, m = i ^ (v[j >>> 24 & 63] | x[j >>> 16 & 63] | z[j >>> 8 & 63] | B[63 & j] | u[k >>> 24 & 63] | w[k >>> 16 & 63] | y[k >>> 8 & 63] | A[63 & k]);
            i = l, l = m, m = i
        }
        l = l >>> 1 | l << 31, m = m >>> 1 | m << 31, i = 1431655765 & (l >>> 1 ^ m), m ^= i, l ^= i << 1, i = 16711935 & (m >>> 8 ^ l), l ^= i, m ^= i << 8, i = 858993459 & (m >>> 2 ^ l), l ^= i, m ^= i << 2, i = 65535 & (l >>> 16 ^ m), m ^= i, l ^= i << 16, i = 252645135 & (l >>> 4 ^ m), m ^= i, l ^= i << 4, 1 == d && (c ? (o = l, q = m) : (l ^= p, m ^= r)), tempresult += String.fromCharCode(l >>> 24, l >>> 16 & 255, l >>> 8 & 255, 255 & l, m >>> 24, m >>> 16 & 255, m >>> 8 & 255, 255 & m), F += 8, 512 == F && (result += tempresult, tempresult = "", F = 0)
    }
    var H = stringToHex(result + tempresult);
    return H
}

function encrypter_createKeys(a) {
    pc2bytes0 = new Array(0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964), pc2bytes1 = new Array(0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697), pc2bytes2 = new Array(0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272), pc2bytes3 = new Array(0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144), pc2bytes4 = new Array(0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256), pc2bytes5 = new Array(0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488), pc2bytes6 = new Array(0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746), pc2bytes7 = new Array(0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568), pc2bytes8 = new Array(0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578), pc2bytes9 = new Array(0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488), pc2bytes10 = new Array(0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800), pc2bytes11 = new Array(0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744), pc2bytes12 = new Array(0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128), pc2bytes13 = new Array(0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261);
    for (var b, c, d, e = a.length > 8 ? 3 : 1, f = new Array(32 * e), g = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0), h = 0, i = 0, j = 0; j < e; j++) {
        left = a.charCodeAt(h++) << 24 | a.charCodeAt(h++) << 16 | a.charCodeAt(h++) << 8 | a.charCodeAt(h++), right = a.charCodeAt(h++) << 24 | a.charCodeAt(h++) << 16 | a.charCodeAt(h++) << 8 | a.charCodeAt(h++), d = 252645135 & (left >>> 4 ^ right), right ^= d, left ^= d << 4, d = 65535 & (right >>> -16 ^ left), left ^= d, right ^= d << -16, d = 858993459 & (left >>> 2 ^ right), right ^= d, left ^= d << 2, d = 65535 & (right >>> -16 ^ left), left ^= d, right ^= d << -16, d = 1431655765 & (left >>> 1 ^ right), right ^= d, left ^= d << 1, d = 16711935 & (right >>> 8 ^ left), left ^= d, right ^= d << 8, d = 1431655765 & (left >>> 1 ^ right), right ^= d, left ^= d << 1, d = left << 8 | right >>> 20 & 240, left = right << 24 | right << 8 & 16711680 | right >>> 8 & 65280 | right >>> 24 & 240, right = d;
        for (var k = 0; k < g.length; k++) g[k] ? (left = left << 2 | left >>> 26, right = right << 2 | right >>> 26) : (left = left << 1 | left >>> 27, right = right << 1 | right >>> 27), left &= -15, right &= -15, b = pc2bytes0[left >>> 28] | pc2bytes1[left >>> 24 & 15] | pc2bytes2[left >>> 20 & 15] | pc2bytes3[left >>> 16 & 15] | pc2bytes4[left >>> 12 & 15] | pc2bytes5[left >>> 8 & 15] | pc2bytes6[left >>> 4 & 15], c = pc2bytes7[right >>> 28] | pc2bytes8[right >>> 24 & 15] | pc2bytes9[right >>> 20 & 15] | pc2bytes10[right >>> 16 & 15] | pc2bytes11[right >>> 12 & 15] | pc2bytes12[right >>> 8 & 15] | pc2bytes13[right >>> 4 & 15], d = 65535 & (c >>> 16 ^ b), f[i++] = b ^ d, f[i++] = c ^ d << 16
    }
    return f
}

function stringToHex(a) {
    for (var b = "", c = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), d = 0; d < a.length; d++) b += c[a.charCodeAt(d) >> 4] + c[15 & a.charCodeAt(d)];
    return b.toUpperCase()
}

function hexToString(a) {
    for (var b = "", c = "0x" == a.substr(0, 2) ? 2 : 0; c < a.length; c += 2) b += String.fromCharCode(parseInt(a.substr(c, 2), 16));
    return b
}
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function (b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
    "use strict";

    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset(),
            h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function (a) {
    a.fn.scrollToTop = function (b) {
        var c = {
            speed: 500
        };
        return b && a.extend(c, {
            speed: b
        }), this.each(function () {
            var b = a(this);
            a(window).scroll(function () {
                a(this).scrollTop() > 40 ? b.fadeIn() : b.fadeOut()
            }), b.click(function (b) {
                b.preventDefault(), a("body, html").animate({
                    scrollTop: 0
                }, c.speed)
            })
        })
    }
}(jQuery),
function (a) {
    a(["jquery"], function (a) {
        return function () {
            function b(a, b, c) {
                return o({
                    type: v.error,
                    iconClass: p().iconClasses.error,
                    message: a,
                    optionsOverride: c,
                    title: b
                })
            }

            function c(b, c) {
                return b || (b = p()), r = a("#" + b.containerId), r.length ? r : (c && (r = l(b)), r)
            }

            function d(a, b, c) {
                return o({
                    type: v.info,
                    iconClass: p().iconClasses.info,
                    message: a,
                    optionsOverride: c,
                    title: b
                })
            }

            function e(a) {
                s = a
            }

            function f(a, b, c) {
                return o({
                    type: v.success,
                    iconClass: p().iconClasses.success,
                    message: a,
                    optionsOverride: c,
                    title: b
                })
            }

            function g(a, b, c) {
                return o({
                    type: v.warning,
                    iconClass: p().iconClasses.warning,
                    message: a,
                    optionsOverride: c,
                    title: b
                })
            }

            function h(a, b) {
                var d = p();
                r || c(d), k(a, d, b) || j(d)
            }

            function i(b) {
                var d = p();
                return r || c(d), b && 0 === a(":focus", b).length ? void q(b) : void(r.children().length && r.remove())
            }

            function j(b) {
                for (var c = r.children(), d = c.length - 1; d >= 0; d--) k(a(c[d]), b)
            }

            function k(b, c, d) {
                var e = !(!d || !d.force) && d.force;
                return !(!b || !e && 0 !== a(":focus", b).length) && (b[c.hideMethod]({
                    duration: c.hideDuration,
                    easing: c.hideEasing,
                    complete: function () {
                        q(b)
                    }
                }), !0)
            }

            function l(b) {
                return r = a("<div/>").attr("id", b.containerId).addClass(b.positionClass), r.appendTo(a(b.target)), r
            }

            function m() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    closeOnHover: !0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1
                }
            }

            function n(a) {
                s && s(a)
            }

            function o(b) {
                function d(a) {
                    return null == a && (a = ""), a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function e() {
                    i(), k(), l(), m(), o(), s(), j(), f()
                }

                function f() {
                    var a = "";
                    switch (b.iconClass) {
                        case "toast-success":
                        case "toast-info":
                            a = "polite";
                            break;
                        default:
                            a = "assertive"
                    }
                    D.attr("aria-live", a)
                }

                function g() {
                    A.closeOnHover && D.hover(y, x), !A.onclick && A.tapToDismiss && D.click(w), A.closeButton && H && H.click(function (a) {
                        a.stopPropagation ? a.stopPropagation() : void 0 !== a.cancelBubble && a.cancelBubble !== !0 && (a.cancelBubble = !0), A.onCloseClick && A.onCloseClick(a), w(!0)
                    }), A.onclick && D.click(function (a) {
                        A.onclick(a), w()
                    })
                }

                function h() {
                    D.hide(), D[A.showMethod]({
                        duration: A.showDuration,
                        easing: A.showEasing,
                        complete: A.onShown
                    }), A.timeOut > 0 && (C = setTimeout(w, A.timeOut), I.maxHideTime = parseFloat(A.timeOut), I.hideEta = (new Date).getTime() + I.maxHideTime, A.progressBar && (I.intervalId = setInterval(z, 10)))
                }

                function i() {
                    b.iconClass && D.addClass(A.toastClass).addClass(B)
                }

                function j() {
                    A.newestOnTop ? r.prepend(D) : r.append(D)
                }

                function k() {
                    if (b.title) {
                        var a = b.title;
                        A.escapeHtml && (a = d(b.title)), E.append(a).addClass(A.titleClass), D.append(E)
                    }
                }

                function l() {
                    if (b.message) {
                        var a = b.message;
                        A.escapeHtml && (a = d(b.message)), F.append(a).addClass(A.messageClass), D.append(F)
                    }
                }

                function m() {
                    A.closeButton && (H.addClass(A.closeClass).attr("role", "button"), D.prepend(H))
                }

                function o() {
                    A.progressBar && (G.addClass(A.progressClass), D.prepend(G))
                }

                function s() {
                    A.rtl && D.addClass("rtl")
                }

                function v(a, b) {
                    if (a.preventDuplicates) {
                        if (b.message === t) return !0;
                        t = b.message
                    }
                    return !1
                }

                function w(b) {
                    var c = b && A.closeMethod !== !1 ? A.closeMethod : A.hideMethod,
                        d = b && A.closeDuration !== !1 ? A.closeDuration : A.hideDuration,
                        e = b && A.closeEasing !== !1 ? A.closeEasing : A.hideEasing;
                    if (!a(":focus", D).length || b) return clearTimeout(I.intervalId), D[c]({
                        duration: d,
                        easing: e,
                        complete: function () {
                            q(D), clearTimeout(C), A.onHidden && "hidden" !== J.state && A.onHidden(), J.state = "hidden", J.endTime = new Date, n(J)
                        }
                    })
                }

                function x() {
                    (A.timeOut > 0 || A.extendedTimeOut > 0) && (C = setTimeout(w, A.extendedTimeOut), I.maxHideTime = parseFloat(A.extendedTimeOut), I.hideEta = (new Date).getTime() + I.maxHideTime)
                }

                function y() {
                    clearTimeout(C), I.hideEta = 0, D.stop(!0, !0)[A.showMethod]({
                        duration: A.showDuration,
                        easing: A.showEasing
                    })
                }

                function z() {
                    var a = (I.hideEta - (new Date).getTime()) / I.maxHideTime * 100;
                    G.width(a + "%")
                }
                var A = p(),
                    B = b.iconClass || A.iconClass;
                if ("undefined" != typeof b.optionsOverride && (A = a.extend(A, b.optionsOverride), B = b.optionsOverride.iconClass || B), !v(A, b)) {
                    u++, r = c(A, !0);
                    var C = null,
                        D = a("<div/>"),
                        E = a("<div/>"),
                        F = a("<div/>"),
                        G = a("<div/>"),
                        H = a(A.closeHtml),
                        I = {
                            intervalId: null,
                            hideEta: null,
                            maxHideTime: null
                        },
                        J = {
                            toastId: u,
                            state: "visible",
                            startTime: new Date,
                            options: A,
                            map: b
                        };
                    return e(), h(), g(), n(J), A.debug && console && console.log(J), D
                }
            }

            function p() {
                return a.extend({}, m(), w.options)
            }

            function q(a) {
                r || (r = c()), a.is(":visible") || (a.remove(), a = null, 0 === r.children().length && (r.remove(), t = void 0))
            }
            var r, s, t, u = 0,
                v = {
                    error: "error",
                    info: "info",
                    success: "success",
                    warning: "warning"
                },
                w = {
                    clear: h,
                    remove: i,
                    error: b,
                    getContainer: c,
                    info: d,
                    options: {},
                    subscribe: e,
                    success: f,
                    version: "2.1.4",
                    warning: g
                };
            return w
        }()
    })
}("function" == typeof define && define.amd ? define : function (a, b) {
    "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : window.toastr = b(window.jQuery)
}),
function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports && b(require("jquery"), a), "function" == typeof define ? define.cmd ? define(function (c, d, e) {
        var f = c("jquery");
        b(f, a)
    }) : define(["jquery"], function (c) {
        b(c, a)
    }) : b(a.jQuery, a)
}("undefined" != typeof window ? window : this, function (a, b, c) {
    "use strict";

    function d(b, c) {
        c = c || {}, this.dom = b, this.options = a.extend(!0, {}, d.defaultOptions, c), this.curtain = null, this.render().show()
    }
    if (a || (a = b.jQuery || null), !a) throw new TypeError("必须引入jquery库方可正常使用！");
    var e = Array.prototype.slice,
        f = function (a, b) {
            var c = !0;
            for (var d in a)
                if (a[d] !== b[a]) {
                    c = !0;
                    break
                } return c
        };
    d.prototype = {
        constructor: d,
        initElement: function () {
            var b = this.dom,
                c = (this.options, b.children(".mloading")),
                d = c.children(".mloading-body"),
                e = d.children(".mloading-bar"),
                f = e.find(".mloading-text");
            return 0 == c.length && (c = a('<div class="mloading"></div>'), b.append(c)), 0 == d.length && (d = a('<div class="mloading-body"></div>'), c.append(d)), 0 == e.length && (e = a('<div class="mloading-bar"></div>'), d.append(e)), 0 == f.length && (f = a('<span class="mloading-text"></span>'), e.append(f)), this.curtainElement = c, this.bodyElement = d, this.barElement = e, this.textElement = f, this
        },
        render: function () {
            var a = this.dom,
                b = this.options;
            return this.initElement(), a.is("html") || a.is("body") ? this.curtainElement.addClass("mloading-full") : (this.curtainElement.removeClass("mloading-full"), a.hasClass("mloading-container") || a.addClass("mloading-container")), b.mask ? this.curtainElement.addClass("mloading-mask") : this.curtainElement.removeClass("mloading-mask"), "" != b.content && "undefined" != typeof b.content ? b.html ? this.bodyElement.html(b.content) : this.bodyElement.text(b.content) : b.html ? this.textElement.html(b.text) : this.textElement.text(b.text), this
        },
        setOptions: function (b) {
            b = b || {};
            var c = this.options;
            this.options = a.extend(!0, {}, this.options, b), f(c, this.options) || this.render()
        },
        show: function () {
            var a = (this.dom, this.options, this.barElement);
            return this.curtainElement.addClass("active"), a.css({
                marginTop: "-" + a.outerHeight() / 2 + "px",
                marginLeft: "-" + a.outerWidth() / 2 + "px"
            }), this
        },
        hide: function () {
            var a = this.dom;
            this.options;
            return this.curtainElement.removeClass("active"), a.is("html") || a.is("body") || a.removeClass("mloading-container"), this
        },
        destroy: function () {
            var a = this.dom;
            this.options;
            return this.curtainElement.remove(), a.is("html") || a.is("body") || a.removeClass("mloading-container"), a.removeData(d.dataKey), this
        }
    }, d.dataKey = "MLoading", d.defaultOptions = {
        text: "加载中...",
        html: !1,
        content: "",
        mask: !0
    }, a.fn.mLoading = function (b) {
        var c = {},
            f = "",
            g = [];
        return "object" == typeof b ? c = b : "string" == typeof b && (f = b, g = e.call(arguments).splice(0, 1)), this.each(function (b, e) {
            var h = a(e),
                i = h.data(d.dataKey);
            if (i || (i = new d(h, c)), f) {
                var j = i[f];
                "function" == typeof j && j.apply(i, g)
            }
        })
    }
});
var honeySwitch = {};
honeySwitch.themeColor = "rgb(100, 189, 99)", honeySwitch.init = function () {
        var a = "<span class='slider'></span>";
        if ($("[class^=switch]").append(a), $("[class^=switch]").click(function () {
                if (!$(this).hasClass("switch-disabled"))
                    if ($(this).hasClass("switch-on")) $(this).removeClass("switch-on").addClass("switch-off"), $(".switch-off").css({
                        "border-color": "#dfdfdf",
                        "box-shadow": "rgb(223, 223, 223) 0px 0px 0px 0px inset",
                        "background-color": "rgb(255, 255, 255)"
                    });
                    else {
                        if ($(this).removeClass("switch-off").addClass("switch-on"), honeySwitch.themeColor) {
                            var a = honeySwitch.themeColor;
                            $(this).css({
                                "border-color": a,
                                "box-shadow": a + " 0px 0px 0px 16px inset",
                                "background-color": a
                            })
                        }
                        if ($(this).attr("themeColor")) {
                            var b = $(this).attr("themeColor");
                            $(this).css({
                                "border-color": b,
                                "box-shadow": b + " 0px 0px 0px 16px inset",
                                "background-color": b
                            })
                        }
                    }
            }), window.switchEvent = function (a, b, c, d) {
                $(a).click(function () {
                    $(this).hasClass("switch-disabled") || ($(this).hasClass("switch-on") ? "function" == typeof b && b() : "function" == typeof c && c())
                })
            }, this.themeColor) {
            var b = this.themeColor;
            $(".switch-on").css({
                "border-color": b,
                "box-shadow": b + " 0px 0px 0px 16px inset",
                "background-color": b
            }), $(".switch-off").css({
                "border-color": "#dfdfdf",
                "box-shadow": "rgb(223, 223, 223) 0px 0px 0px 0px inset",
                "background-color": "rgb(255, 255, 255)"
            })
        }
        $("[themeColor]").length > 0 && $("[themeColor]").each(function () {
            var a = $(this).attr("themeColor") || honeySwitch.themeColor;
            $(this).hasClass("switch-on") ? $(this).css({
                "border-color": a,
                "box-shadow": a + " 0px 0px 0px 16px inset",
                "background-color": a
            }) : $(".switch-off").css({
                "border-color": "#dfdfdf",
                "box-shadow": "rgb(223, 223, 223) 0px 0px 0px 0px inset",
                "background-color": "rgb(255, 255, 255)"
            })
        })
    }, honeySwitch.showOn = function (a) {
        if ($(a).removeClass("switch-off").addClass("switch-on"), honeySwitch.themeColor) {
            var b = honeySwitch.themeColor;
            $(a).css({
                "border-color": b,
                "box-shadow": b + " 0px 0px 0px 16px inset",
                "background-color": b
            })
        }
        if ($(a).attr("themeColor")) {
            var c = $(a).attr("themeColor");
            $(a).css({
                "border-color": c,
                "box-shadow": c + " 0px 0px 0px 16px inset",
                "background-color": c
            })
        }
    }, honeySwitch.showOff = function (a) {
        $(a).removeClass("switch-on").addClass("switch-off"), $(".switch-off").css({
            "border-color": "#dfdfdf",
            "box-shadow": "rgb(223, 223, 223) 0px 0px 0px 0px inset",
            "background-color": "rgb(255, 255, 255)"
        })
    }, $(function () {
        honeySwitch.init()
    }), $.extend({
        message: function (a) {
            var b = {
                message: "系统提示",
                time: "2000",
                type: "success",
                showClose: !1,
                autoClose: !0,
                onClose: function () {}
            };
            "string" == typeof a && (b.message = a), "object" == typeof a && (b = $.extend({}, b, a));
            var c, d, e, f = b.showClose ? '<a class="c-message-close">X</a>' : "",
                g = '<div class="c-message messageFadeInDown"><i class=" c-message-icon c-message-' + b.type + '"></i>' + f + '<div class="c-message--tip">' + b.message + "</div></div>",
                h = $("body"),
                i = $(g);
            d = function () {
                i.addClass("messageFadeOutUp"), i.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e()
                })
            }, e = function () {
                i.remove(), b.onClose(b), clearTimeout(c)
            }, $(".c-message").remove(), h.append(i), i.css({
                "margin-left": "-" + i.outerWidth() / 2 + "px"
            }), i.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                i.removeClass("messageFadeInDown")
            }), h.on("click", ".c-message-close", function (a) {
                d()
            }), b.autoClose && (c = setTimeout(function () {
                d()
            }, b.time))
        }
    }), "function" != typeof Object.create && (Object.create = function (a) {
        function b() {}
        return b.prototype = a, new b
    }),
    function (a, b, c, d) {
        var e = {
            init: function (b, c) {
                var d = this;
                d.$elem = a(c), d.options = a.extend({}, a.fn.owlCarousel.options, d.$elem.data(), b), d.userOptions = b, d.loadContent()
            },
            loadContent: function () {
                function b(a) {
                    if ("function" == typeof c.options.jsonSuccess) c.options.jsonSuccess.apply(this, [a]);
                    else {
                        var b = "";
                        for (var d in a.owl) b += a.owl[d].item;
                        c.$elem.html(b)
                    }
                    c.logIn()
                }
                var c = this;
                if ("function" == typeof c.options.beforeInit && c.options.beforeInit.apply(this, [c.$elem]), "string" == typeof c.options.jsonPath) {
                    var d = c.options.jsonPath;
                    a.getJSON(d, b)
                } else c.logIn()
            },
            logIn: function (a) {
                var b = this;
                b.$elem.data("owl-originalStyles", b.$elem.attr("style")).data("owl-originalClasses", b.$elem.attr("class")), b.$elem.css({
                    opacity: 0
                }), b.orignalItems = b.options.items, b.checkBrowser(), b.wrapperWidth = 0, b.checkVisible, b.setVars()
            },
            setVars: function () {
                var a = this;
                return 0 !== a.$elem.children().length && (a.baseClass(), a.eventTypes(), a.$userItems = a.$elem.children(), a.itemsAmount = a.$userItems.length, a.wrapItems(), a.$owlItems = a.$elem.find(".owl-item"), a.$owlWrapper = a.$elem.find(".owl-wrapper"), a.playDirection = "next", a.prevItem = 0, a.prevArr = [0], a.currentItem = 0, a.customEvents(), void a.onStartup())
            },
            onStartup: function () {
                var a = this;
                a.updateItems(), a.calculateAll(), a.buildControls(), a.updateControls(), a.response(), a.moveEvents(), a.stopOnHover(), a.owlStatus(), a.options.transitionStyle !== !1 && a.transitionTypes(a.options.transitionStyle), a.options.autoPlay === !0 && (a.options.autoPlay = 5e3), a.play(), a.$elem.find(".owl-wrapper").css("display", "block"), a.$elem.is(":visible") ? a.$elem.css("opacity", 1) : a.watchVisibility(), a.onstartup = !1, a.eachMoveUpdate(), "function" == typeof a.options.afterInit && a.options.afterInit.apply(this, [a.$elem])
            },
            eachMoveUpdate: function () {
                var a = this;
                a.options.lazyLoad === !0 && a.lazyLoad(), a.options.autoHeight === !0 && a.autoHeight(), a.onVisibleItems(), "function" == typeof a.options.afterAction && a.options.afterAction.apply(this, [a.$elem])
            },
            updateVars: function () {
                var a = this;
                "function" == typeof a.options.beforeUpdate && a.options.beforeUpdate.apply(this, [a.$elem]), a.watchVisibility(), a.updateItems(), a.calculateAll(), a.updatePosition(), a.updateControls(), a.eachMoveUpdate(), "function" == typeof a.options.afterUpdate && a.options.afterUpdate.apply(this, [a.$elem])
            },
            reload: function (a) {
                var b = this;
                setTimeout(function () {
                    b.updateVars()
                }, 0)
            },
            watchVisibility: function () {
                var a = this;
                return a.$elem.is(":visible") === !1 && (a.$elem.css({
                    opacity: 0
                }), clearInterval(a.autoPlayInterval), clearInterval(a.checkVisible), void(a.checkVisible = setInterval(function () {
                    a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                        opacity: 1
                    }, 200), clearInterval(a.checkVisible))
                }, 500)))
            },
            wrapItems: function () {
                var a = this;
                a.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), a.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), a.wrapperOuter = a.$elem.find(".owl-wrapper-outer"), a.$elem.css("display", "block")
            },
            baseClass: function () {
                var a = this,
                    b = a.$elem.hasClass(a.options.baseClass),
                    c = a.$elem.hasClass(a.options.theme);
                b || a.$elem.addClass(a.options.baseClass), c || a.$elem.addClass(a.options.theme)
            },
            updateItems: function () {
                var b = this;
                if (b.options.responsive === !1) return !1;
                if (b.options.singleItem === !0) return b.options.items = b.orignalItems = 1, b.options.itemsCustom = !1, b.options.itemsDesktop = !1, b.options.itemsDesktopSmall = !1, b.options.itemsTablet = !1, b.options.itemsTabletSmall = !1, b.options.itemsMobile = !1, !1;
                var c = a(b.options.responsiveBaseWidth).width();
                if (c > (b.options.itemsDesktop[0] || b.orignalItems) && (b.options.items = b.orignalItems), "undefined" != typeof b.options.itemsCustom && b.options.itemsCustom !== !1) {
                    b.options.itemsCustom.sort(function (a, b) {
                        return a[0] - b[0]
                    });
                    for (var d in b.options.itemsCustom) "undefined" != typeof b.options.itemsCustom[d] && b.options.itemsCustom[d][0] <= c && (b.options.items = b.options.itemsCustom[d][1])
                } else c <= b.options.itemsDesktop[0] && b.options.itemsDesktop !== !1 && (b.options.items = b.options.itemsDesktop[1]), c <= b.options.itemsDesktopSmall[0] && b.options.itemsDesktopSmall !== !1 && (b.options.items = b.options.itemsDesktopSmall[1]), c <= b.options.itemsTablet[0] && b.options.itemsTablet !== !1 && (b.options.items = b.options.itemsTablet[1]), c <= b.options.itemsTabletSmall[0] && b.options.itemsTabletSmall !== !1 && (b.options.items = b.options.itemsTabletSmall[1]), c <= b.options.itemsMobile[0] && b.options.itemsMobile !== !1 && (b.options.items = b.options.itemsMobile[1]);
                b.options.items > b.itemsAmount && b.options.itemsScaleUp === !0 && (b.options.items = b.itemsAmount)
            },
            response: function () {
                var c, d = this;
                if (d.options.responsive !== !0) return !1;
                var e = a(b).width();
                d.resizer = function () {
                    a(b).width() !== e && (d.options.autoPlay !== !1 && clearInterval(d.autoPlayInterval), clearTimeout(c), c = setTimeout(function () {
                        e = a(b).width(), d.updateVars()
                    }, d.options.responsiveRefreshRate))
                }, a(b).resize(d.resizer)
            },
            updatePosition: function () {
                var a = this;
                a.jumpTo(a.currentItem), a.options.autoPlay !== !1 && a.checkAp()
            },
            appendItemsSizes: function () {
                var b = this,
                    c = 0,
                    d = b.itemsAmount - b.options.items;
                b.$owlItems.each(function (e) {
                    var f = a(this);
                    f.css({
                        width: b.itemWidth
                    }).data("owl-item", Number(e)), e % b.options.items !== 0 && e !== d || e > d || (c += 1), f.data("owl-roundPages", c)
                })
            },
            appendWrapperSizes: function () {
                var a = this,
                    b = 0,
                    b = a.$owlItems.length * a.itemWidth;
                a.$owlWrapper.css({
                    width: 2 * b,
                    left: 0
                }), a.appendItemsSizes()
            },
            calculateAll: function () {
                var a = this;
                a.calculateWidth(), a.appendWrapperSizes(), a.loops(), a.max()
            },
            calculateWidth: function () {
                var a = this;
                a.itemWidth = Math.round(a.$elem.width() / a.options.items)
            },
            max: function () {
                var a = this,
                    b = (a.itemsAmount * a.itemWidth - a.options.items * a.itemWidth) * -1;
                return a.options.items > a.itemsAmount ? (a.maximumItem = 0, b = 0, a.maximumPixels = 0) : (a.maximumItem = a.itemsAmount - a.options.items, a.maximumPixels = b), b
            },
            min: function () {
                return 0
            },
            loops: function () {
                var b = this;
                b.positionsInArray = [0], b.pagesInArray = [];
                for (var c = 0, d = 0, e = 0; e < b.itemsAmount; e++)
                    if (d += b.itemWidth, b.positionsInArray.push(-d), b.options.scrollPerPage === !0) {
                        var f = a(b.$owlItems[e]),
                            g = f.data("owl-roundPages");
                        g !== c && (b.pagesInArray[c] = b.positionsInArray[e], c = g)
                    }
            },
            buildControls: function () {
                var b = this;
                b.options.navigation !== !0 && b.options.pagination !== !0 || (b.owlControls = a('<div class="owl-controls"/>').toggleClass("clickable", !b.browser.isTouch).appendTo(b.$elem)), b.options.pagination === !0 && b.buildPagination(), b.options.navigation === !0 && b.buildButtons()
            },
            buildButtons: function () {
                var b = this,
                    c = a('<div class="owl-buttons"/>');
                b.owlControls.append(c), b.buttonPrev = a("<div/>", {
                    "class": "owl-prev",
                    html: b.options.navigationText[0] || ""
                }), b.buttonNext = a("<div/>", {
                    "class": "owl-next",
                    html: b.options.navigationText[1] || ""
                }), c.append(b.buttonPrev).append(b.buttonNext), c.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
                    a.preventDefault()
                }), c.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (c) {
                    c.preventDefault(), a(this).hasClass("owl-next") ? b.next() : b.prev()
                })
            },
            buildPagination: function () {
                var b = this;
                b.paginationWrapper = a('<div class="owl-pagination"/>'), b.owlControls.append(b.paginationWrapper), b.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (c) {
                    c.preventDefault(), Number(a(this).data("owl-page")) !== b.currentItem && b.goTo(Number(a(this).data("owl-page")), !0)
                })
            },
            updatePagination: function () {
                var b = this;
                if (b.options.pagination === !1) return !1;
                b.paginationWrapper.html("");
                for (var c = 0, d = b.itemsAmount - b.itemsAmount % b.options.items, e = 0; e < b.itemsAmount; e++)
                    if (e % b.options.items === 0) {
                        if (c += 1, d === e) var f = b.itemsAmount - b.options.items;
                        var g = a("<div/>", {
                                "class": "owl-page"
                            }),
                            h = a("<span></span>", {
                                text: b.options.paginationNumbers === !0 ? c : "",
                                "class": b.options.paginationNumbers === !0 ? "owl-numbers" : ""
                            });
                        g.append(h), g.data("owl-page", d === e ? f : e), g.data("owl-roundPages", c), b.paginationWrapper.append(g)
                    } b.checkPagination()
            },
            checkPagination: function () {
                var b = this;
                return b.options.pagination !== !1 && void b.paginationWrapper.find(".owl-page").each(function (c, d) {
                    a(this).data("owl-roundPages") === a(b.$owlItems[b.currentItem]).data("owl-roundPages") && (b.paginationWrapper.find(".owl-page").removeClass("active"), a(this).addClass("active"))
                })
            },
            checkNavigation: function () {
                var a = this;
                return a.options.navigation !== !1 && void(a.options.rewindNav === !1 && (0 === a.currentItem && 0 === a.maximumItem ? (a.buttonPrev.addClass("disabled"), a.buttonNext.addClass("disabled")) : 0 === a.currentItem && 0 !== a.maximumItem ? (a.buttonPrev.addClass("disabled"), a.buttonNext.removeClass("disabled")) : a.currentItem === a.maximumItem ? (a.buttonPrev.removeClass("disabled"), a.buttonNext.addClass("disabled")) : 0 !== a.currentItem && a.currentItem !== a.maximumItem && (a.buttonPrev.removeClass("disabled"), a.buttonNext.removeClass("disabled"))))
            },
            updateControls: function () {
                var a = this;
                a.updatePagination(), a.checkNavigation(), a.owlControls && (a.options.items >= a.itemsAmount ? a.owlControls.hide() : a.owlControls.show())
            },
            destroyControls: function () {
                var a = this;
                a.owlControls && a.owlControls.remove()
            },
            next: function (a) {
                var b = this;
                if (b.isTransition) return !1;
                if (b.currentItem += b.options.scrollPerPage === !0 ? b.options.items : 1, b.currentItem > b.maximumItem + (1 == b.options.scrollPerPage ? b.options.items - 1 : 0)) {
                    if (b.options.rewindNav !== !0) return b.currentItem = b.maximumItem, !1;
                    b.currentItem = 0, a = "rewind"
                }
                b.goTo(b.currentItem, a)
            },
            prev: function (a) {
                var b = this;
                if (b.isTransition) return !1;
                if (b.options.scrollPerPage === !0 && b.currentItem > 0 && b.currentItem < b.options.items ? b.currentItem = 0 : b.currentItem -= b.options.scrollPerPage === !0 ? b.options.items : 1, b.currentItem < 0) {
                    if (b.options.rewindNav !== !0) return b.currentItem = 0, !1;
                    b.currentItem = b.maximumItem, a = "rewind"
                }
                b.goTo(b.currentItem, a)
            },
            goTo: function (a, b, c) {
                var d = this;
                if (d.isTransition) return !1;
                if ("function" == typeof d.options.beforeMove && d.options.beforeMove.apply(this, [d.$elem]), a >= d.maximumItem ? a = d.maximumItem : a <= 0 && (a = 0), d.currentItem = d.owl.currentItem = a, d.options.transitionStyle !== !1 && "drag" !== c && 1 === d.options.items && d.browser.support3d === !0) return d.swapSpeed(0), d.browser.support3d === !0 ? d.transition3d(d.positionsInArray[a]) : d.css2slide(d.positionsInArray[a], 1), d.afterGo(), d.singleItemTransition(), !1;
                var e = d.positionsInArray[a];
                d.browser.support3d === !0 ? (d.isCss3Finish = !1, b === !0 ? (d.swapSpeed("paginationSpeed"), setTimeout(function () {
                    d.isCss3Finish = !0
                }, d.options.paginationSpeed)) : "rewind" === b ? (d.swapSpeed(d.options.rewindSpeed), setTimeout(function () {
                    d.isCss3Finish = !0
                }, d.options.rewindSpeed)) : (d.swapSpeed("slideSpeed"), setTimeout(function () {
                    d.isCss3Finish = !0
                }, d.options.slideSpeed)), d.transition3d(e)) : b === !0 ? d.css2slide(e, d.options.paginationSpeed) : "rewind" === b ? d.css2slide(e, d.options.rewindSpeed) : d.css2slide(e, d.options.slideSpeed), d.afterGo()
            },
            jumpTo: function (a) {
                var b = this;
                "function" == typeof b.options.beforeMove && b.options.beforeMove.apply(this, [b.$elem]), a >= b.maximumItem || a === -1 ? a = b.maximumItem : a <= 0 && (a = 0), b.swapSpeed(0), b.browser.support3d === !0 ? b.transition3d(b.positionsInArray[a]) : b.css2slide(b.positionsInArray[a], 1), b.currentItem = b.owl.currentItem = a, b.afterGo()
            },
            afterGo: function () {
                var a = this;
                a.prevArr.push(a.currentItem), a.prevItem = a.owl.prevItem = a.prevArr[a.prevArr.length - 2], a.prevArr.shift(0), a.prevItem !== a.currentItem && (a.checkPagination(), a.checkNavigation(), a.eachMoveUpdate(), a.options.autoPlay !== !1 && a.checkAp()), "function" == typeof a.options.afterMove && a.prevItem !== a.currentItem && a.options.afterMove.apply(this, [a.$elem])
            },
            stop: function () {
                var a = this;
                a.apStatus = "stop", clearInterval(a.autoPlayInterval)
            },
            checkAp: function () {
                var a = this;
                "stop" !== a.apStatus && a.play()
            },
            play: function () {
                var a = this;
                return a.apStatus = "play", a.options.autoPlay !== !1 && (clearInterval(a.autoPlayInterval), void(a.autoPlayInterval = setInterval(function () {
                    a.next(!0)
                }, a.options.autoPlay)))
            },
            swapSpeed: function (a) {
                var b = this;
                "slideSpeed" === a ? b.$owlWrapper.css(b.addCssSpeed(b.options.slideSpeed)) : "paginationSpeed" === a ? b.$owlWrapper.css(b.addCssSpeed(b.options.paginationSpeed)) : "string" != typeof a && b.$owlWrapper.css(b.addCssSpeed(a))
            },
            addCssSpeed: function (a) {
                return {
                    "-webkit-transition": "all " + a + "ms ease",
                    "-moz-transition": "all " + a + "ms ease",
                    "-o-transition": "all " + a + "ms ease",
                    transition: "all " + a + "ms ease"
                }
            },
            removeTransition: function () {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function (a) {
                return {
                    "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
                    transform: "translate3d(" + a + "px, 0px,0px)"
                }
            },
            transition3d: function (a) {
                var b = this;
                b.$owlWrapper.css(b.doTranslate(a))
            },
            css2move: function (a) {
                var b = this;
                b.$owlWrapper.css({
                    left: a
                })
            },
            css2slide: function (a, b) {
                var c = this;
                c.isCssFinish = !1, c.$owlWrapper.stop(!0, !0).animate({
                    left: a
                }, {
                    duration: b || c.options.slideSpeed,
                    complete: function () {
                        c.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function () {
                var a = this,
                    d = "translate3d(0px, 0px, 0px)",
                    e = c.createElement("div");
                e.style.cssText = "  -moz-transform:" + d + "; -ms-transform:" + d + "; -o-transform:" + d + "; -webkit-transform:" + d + "; transform:" + d;
                var f = /translate3d\(0px, 0px, 0px\)/g,
                    g = e.style.cssText.match(f),
                    h = null !== g && 1 === g.length,
                    i = "ontouchstart" in b || navigator.msMaxTouchPoints;
                a.browser = {
                    support3d: h,
                    isTouch: i
                }
            },
            moveEvents: function () {
                var a = this;
                a.options.mouseDrag === !1 && a.options.touchDrag === !1 || (a.gestures(), a.disabledEvents())
            },
            eventTypes: function () {
                var a = this,
                    b = ["s", "e", "x"];
                a.ev_types = {}, a.options.mouseDrag === !0 && a.options.touchDrag === !0 ? b = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : a.options.mouseDrag === !1 && a.options.touchDrag === !0 ? b = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : a.options.mouseDrag === !0 && a.options.touchDrag === !1 && (b = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), a.ev_types.start = b[0], a.ev_types.move = b[1], a.ev_types.end = b[2]
            },
            disabledEvents: function () {
                var b = this;
                b.$elem.on("dragstart.owl", function (a) {
                    a.preventDefault()
                }), b.$elem.on("mousedown.disableTextSelect", function (b) {
                    return a(b.target).is("input, textarea, select, option")
                })
            },
            gestures: function () {
                function e(a) {
                    return a.touches ? {
                        x: a.touches[0].pageX,
                        y: a.touches[0].pageY
                    } : a.pageX !== d ? {
                        x: a.pageX,
                        y: a.pageY
                    } : {
                        x: a.clientX,
                        y: a.clientY
                    }
                }

                function f(b) {
                    "on" === b ? (a(c).on(j.ev_types.move, h), a(c).on(j.ev_types.end, i)) : "off" === b && (a(c).off(j.ev_types.move), a(c).off(j.ev_types.end))
                }

                function g(c) {
                    var c = c.originalEvent || c || b.event;
                    if (3 === c.which) return !1;
                    if (!(j.itemsAmount <= j.options.items)) {
                        if (j.isCssFinish === !1 && !j.options.dragBeforeAnimFinish) return !1;
                        if (j.isCss3Finish === !1 && !j.options.dragBeforeAnimFinish) return !1;
                        j.options.autoPlay !== !1 && clearInterval(j.autoPlayInterval), j.browser.isTouch === !0 || j.$owlWrapper.hasClass("grabbing") || j.$owlWrapper.addClass("grabbing"), j.newPosX = 0, j.newRelativeX = 0, a(this).css(j.removeTransition());
                        var d = a(this).position();
                        k.relativePos = d.left, k.offsetX = e(c).x - d.left, k.offsetY = e(c).y - d.top, f("on"), k.sliding = !1, k.targetElement = c.target || c.srcElement
                    }
                }

                function h(d) {
                    var d = d.originalEvent || d || b.event;
                    j.newPosX = e(d).x - k.offsetX, j.newPosY = e(d).y - k.offsetY, j.newRelativeX = j.newPosX - k.relativePos, "function" == typeof j.options.startDragging && k.dragging !== !0 && 0 !== j.newRelativeX && (k.dragging = !0, j.options.startDragging.apply(j, [j.$elem])), (j.newRelativeX > 8 || j.newRelativeX < -8 && j.browser.isTouch === !0) && (d.preventDefault ? d.preventDefault() : d.returnValue = !1, k.sliding = !0), (j.newPosY > 10 || j.newPosY < -10) && k.sliding === !1 && a(c).off("touchmove.owl");
                    var f = function () {
                            return j.newRelativeX / 5
                        },
                        g = function () {
                            return j.maximumPixels + j.newRelativeX / 5
                        };
                    j.newPosX = Math.max(Math.min(j.newPosX, f()), g()), j.browser.support3d === !0 ? j.transition3d(j.newPosX) : j.css2move(j.newPosX)
                }

                function i(c) {
                    var c = c.originalEvent || c || b.event;
                    if (c.target = c.target || c.srcElement, k.dragging = !1, j.browser.isTouch !== !0 && j.$owlWrapper.removeClass("grabbing"), j.newRelativeX < 0 ? j.dragDirection = j.owl.dragDirection = "left" : j.dragDirection = j.owl.dragDirection = "right", 0 !== j.newRelativeX) {
                        var d = j.getNewPosition();
                        if (j.goTo(d, !1, "drag"), k.targetElement === c.target && j.browser.isTouch !== !0) {
                            a(c.target).on("click.disable", function (b) {
                                b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(c.target).off("click.disable")
                            });
                            var e = a._data(c.target, "events").click,
                                g = e.pop();
                            e.splice(0, 0, g)
                        }
                    }
                    f("off")
                }
                var j = this,
                    k = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                j.isCssFinish = !0, j.$elem.on(j.ev_types.start, ".owl-wrapper", g)
            },
            getNewPosition: function () {
                var a, b = this;
                return a = b.closestItem(), a > b.maximumItem ? (b.currentItem = b.maximumItem, a = b.maximumItem) : b.newPosX >= 0 && (a = 0, b.currentItem = 0), a
            },
            closestItem: function () {
                var b = this,
                    c = b.options.scrollPerPage === !0 ? b.pagesInArray : b.positionsInArray,
                    d = b.newPosX,
                    e = null;
                return a.each(c, function (f, g) {
                    d - b.itemWidth / 20 > c[f + 1] && d - b.itemWidth / 20 < g && "left" === b.moveDirection() ? (e = g, b.options.scrollPerPage === !0 ? b.currentItem = a.inArray(e, b.positionsInArray) : b.currentItem = f) : d + b.itemWidth / 20 < g && d + b.itemWidth / 20 > (c[f + 1] || c[f] - b.itemWidth) && "right" === b.moveDirection() && (b.options.scrollPerPage === !0 ? (e = c[f + 1] || c[c.length - 1], b.currentItem = a.inArray(e, b.positionsInArray)) : (e = c[f + 1], b.currentItem = f + 1))
                }), b.currentItem
            },
            moveDirection: function () {
                var a, b = this;
                return b.newRelativeX < 0 ? (a = "right", b.playDirection = "next") : (a = "left", b.playDirection = "prev"), a
            },
            customEvents: function () {
                var a = this;
                a.$elem.on("owl.next", function () {
                    a.next()
                }), a.$elem.on("owl.prev", function () {
                    a.prev()
                }), a.$elem.on("owl.play", function (b, c) {
                    a.options.autoPlay = c, a.play(), a.hoverStatus = "play"
                }), a.$elem.on("owl.stop", function () {
                    a.stop(), a.hoverStatus = "stop"
                }), a.$elem.on("owl.goTo", function (b, c) {
                    a.goTo(c)
                }), a.$elem.on("owl.jumpTo", function (b, c) {
                    a.jumpTo(c)
                })
            },
            stopOnHover: function () {
                var a = this;
                a.options.stopOnHover === !0 && a.browser.isTouch !== !0 && a.options.autoPlay !== !1 && (a.$elem.on("mouseover", function () {
                    a.stop()
                }), a.$elem.on("mouseout", function () {
                    "stop" !== a.hoverStatus && a.play()
                }))
            },
            lazyLoad: function () {
                var b = this;
                if (b.options.lazyLoad === !1) return !1;
                for (var c = 0; c < b.itemsAmount; c++) {
                    var e = a(b.$owlItems[c]);
                    if ("loaded" !== e.data("owl-loaded")) {
                        var f, g = e.data("owl-item"),
                            h = e.find(".lazyOwl");
                        "string" == typeof h.data("src") ? (e.data("owl-loaded") === d && (h.hide(), e.addClass("loading").data("owl-loaded", "checked")), f = b.options.lazyFollow !== !0 || g >= b.currentItem, f && g < b.currentItem + b.options.items && h.length && b.lazyPreload(e, h)) : e.data("owl-loaded", "loaded")
                    }
                }
            },
            lazyPreload: function (a, b) {
                function c() {
                    f += 1, e.completeImg(b.get(0)) || g === !0 ? d() : f <= 100 ? setTimeout(c, 100) : d()
                }

                function d() {
                    a.data("owl-loaded", "loaded").removeClass("loading"), b.removeAttr("data-src"), "fade" === e.options.lazyEffect ? b.fadeIn(400) : b.show(), "function" == typeof e.options.afterLazyLoad && e.options.afterLazyLoad.apply(this, [e.$elem])
                }
                var e = this,
                    f = 0;
                if ("DIV" === b.prop("tagName")) {
                    b.css("background-image", "url(" + b.data("src") + ")");
                    var g = !0
                } else b[0].src = b.data("src");
                c()
            },
            autoHeight: function () {
                function b() {
                    g += 1, e.completeImg(f.get(0)) ? c() : g <= 100 ? setTimeout(b, 100) : e.wrapperOuter.css("height", "")
                }

                function c() {
                    var b = a(e.$owlItems[e.currentItem]).height();
                    e.wrapperOuter.css("height", b + "px"), e.wrapperOuter.hasClass("autoHeight") || setTimeout(function () {
                        e.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }
                var e = this,
                    f = a(e.$owlItems[e.currentItem]).find("img");
                if (f.get(0) !== d) {
                    var g = 0;
                    b()
                } else c()
            },
            completeImg: function (a) {
                return !!a.complete && ("undefined" == typeof a.naturalWidth || 0 != a.naturalWidth)
            },
            onVisibleItems: function () {
                var b = this;
                b.options.addClassActive === !0 && b.$owlItems.removeClass("active"), b.visibleItems = [];
                for (var c = b.currentItem; c < b.currentItem + b.options.items; c++) b.visibleItems.push(c), b.options.addClassActive === !0 && a(b.$owlItems[c]).addClass("active");
                b.owl.visibleItems = b.visibleItems
            },
            transitionTypes: function (a) {
                var b = this;
                b.outClass = "owl-" + a + "-out", b.inClass = "owl-" + a + "-in"
            },
            singleItemTransition: function () {
                function a(a, b) {
                    return {
                        position: "relative",
                        left: a + "px"
                    }
                }
                var b = this;
                b.isTransition = !0;
                var c = b.outClass,
                    d = b.inClass,
                    e = b.$owlItems.eq(b.currentItem),
                    f = b.$owlItems.eq(b.prevItem),
                    g = Math.abs(b.positionsInArray[b.currentItem]) + b.positionsInArray[b.prevItem],
                    h = Math.abs(b.positionsInArray[b.currentItem]) + b.itemWidth / 2;
                b.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": h + "px",
                    "-moz-perspective-origin": h + "px",
                    "perspective-origin": h + "px"
                });
                var i = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                f.css(a(g, 10)).addClass(c).on(i, function () {
                    b.endPrev = !0, f.off(i), b.clearTransStyle(f, c)
                }), e.addClass(d).on(i, function () {
                    b.endCurrent = !0, e.off(i), b.clearTransStyle(e, d)
                })
            },
            clearTransStyle: function (a, b) {
                var c = this;
                a.css({
                    position: "",
                    left: ""
                }).removeClass(b), c.endPrev && c.endCurrent && (c.$owlWrapper.removeClass("owl-origin"), c.endPrev = !1, c.endCurrent = !1, c.isTransition = !1)
            },
            owlStatus: function () {
                var a = this;
                a.owl = {
                    userOptions: a.userOptions,
                    baseElement: a.$elem,
                    userItems: a.$userItems,
                    owlItems: a.$owlItems,
                    currentItem: a.currentItem,
                    prevItem: a.prevItem,
                    visibleItems: a.visibleItems,
                    isTouch: a.browser.isTouch,
                    browser: a.browser,
                    dragDirection: a.dragDirection
                }
            },
            clearEvents: function () {
                var d = this;
                d.$elem.off(".owl owl mousedown.disableTextSelect"), a(c).off(".owl owl"), a(b).off("resize", d.resizer)
            },
            unWrap: function () {
                var a = this;
                0 !== a.$elem.children().length && (a.$owlWrapper.unwrap(), a.$userItems.unwrap().unwrap(), a.owlControls && a.owlControls.remove()), a.clearEvents(), a.$elem.attr("style", a.$elem.data("owl-originalStyles") || "").attr("class", a.$elem.data("owl-originalClasses"))
            },
            destroy: function () {
                var a = this;
                a.stop(), clearInterval(a.checkVisible), a.unWrap(), a.$elem.removeData()
            },
            reinit: function (b) {
                var c = this,
                    d = a.extend({}, c.userOptions, b);
                c.unWrap(), c.init(d, c.$elem)
            },
            addItem: function (a, b) {
                var c, e = this;
                return !!a && (0 === e.$elem.children().length ? (e.$elem.append(a), e.setVars(), !1) : (e.unWrap(), c = b === d || b === -1 ? -1 : b, c >= e.$userItems.length || c === -1 ? e.$userItems.eq(-1).after(a) : e.$userItems.eq(c).before(a), void e.setVars()))
            },
            removeItem: function (a) {
                var b, c = this;
                return 0 !== c.$elem.children().length && (b = a === d || a === -1 ? -1 : a, c.unWrap(), c.$userItems.eq(b).remove(), void c.setVars())
            }
        };
        a.fn.owlCarousel = function (b) {
            return this.each(function () {
                if (a(this).data("owl-init") === !0) return !1;
                a(this).data("owl-init", !0);
                var c = Object.create(e);
                c.init(b, this), a.data(this, "owlCarousel", c)
            })
        }, a.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: b,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document),
    function (a) {
        a.isScrollToFixed = function (b) {
            return !!a(b).data("ScrollToFixed")
        }, a.ScrollToFixed = function (b, c) {
            function d() {
                x.trigger("preUnfixed.ScrollToFixed"), k(), x.trigger("unfixed.ScrollToFixed"), B = -1, y = x.offset().top, z = x.offset().left, q.options.offsets && (z += x.offset().left - x.position().left), A == -1 && (A = z), r = x.css("position"), w = !0, q.options.bottom != -1 && (x.trigger("preFixed.ScrollToFixed"), i(), x.trigger("fixed.ScrollToFixed"))
            }

            function e() {
                var a = q.options.limit;
                return a ? "function" == typeof a ? a.apply(x) : a : 0
            }

            function f() {
                return "fixed" === r
            }

            function g() {
                return "absolute" === r
            }

            function h() {
                return !(f() || g())
            }

            function i() {
                if (!f()) {
                    var a = x[0].getBoundingClientRect();
                    C.css({
                        display: x.css("display"),
                        width: a.width,
                        height: a.height,
                        "float": x.css("float")
                    }), cssOptions = {
                        "z-index": q.options.zIndex,
                        position: "fixed",
                        top: q.options.bottom == -1 ? m() : "",
                        bottom: q.options.bottom == -1 ? "" : q.options.bottom,
                        "margin-left": "0px"
                    }, q.options.dontSetWidth || (cssOptions.width = x.css("width")), x.css(cssOptions), x.addClass(q.options.baseClassName), q.options.className && x.addClass(q.options.className), r = "fixed"
                }
            }

            function j() {
                var a = e(),
                    b = z;
                q.options.removeOffsets && (b = "", a -= y), cssOptions = {
                    position: "absolute",
                    top: a,
                    left: b,
                    "margin-left": "0px",
                    bottom: ""
                }, q.options.dontSetWidth || (cssOptions.width = x.css("width")), x.css(cssOptions), r = "absolute"
            }

            function k() {
                h() || (B = -1, C.css("display", "none"), x.css({
                    "z-index": v,
                    width: "",
                    position: s,
                    left: "",
                    top: u,
                    "margin-left": ""
                }), x.removeClass("scroll-to-fixed-fixed"), q.options.className && x.removeClass(q.options.className), r = null)
            }

            function l(a) {
                a != B && (x.css("left", z - a), B = a)
            }

            function m() {
                var a = q.options.marginTop;
                return a ? "function" == typeof a ? a.apply(x) : a : 0
            }

            function n() {
                if (a.isScrollToFixed(x) && !x.is(":hidden")) {
                    var b = w,
                        c = h();
                    w ? h() && (y = x.offset().top, z = x.offset().left) : d();
                    var n = a(window).scrollLeft(),
                        r = a(window).scrollTop(),
                        t = e();
                    q.options.minWidth && a(window).width() < q.options.minWidth ? h() && b || (p(), x.trigger("preUnfixed.ScrollToFixed"), k(), x.trigger("unfixed.ScrollToFixed")) : q.options.maxWidth && a(window).width() > q.options.maxWidth ? h() && b || (p(), x.trigger("preUnfixed.ScrollToFixed"), k(), x.trigger("unfixed.ScrollToFixed")) : q.options.bottom == -1 ? t > 0 && r >= t - m() ? c || g() && b || (p(), x.trigger("preAbsolute.ScrollToFixed"), j(), x.trigger("unfixed.ScrollToFixed")) : r >= y - m() ? (f() && b || (p(), x.trigger("preFixed.ScrollToFixed"), i(), B = -1, x.trigger("fixed.ScrollToFixed")), l(n)) : h() && b || (p(), x.trigger("preUnfixed.ScrollToFixed"), k(), x.trigger("unfixed.ScrollToFixed")) : t > 0 ? r + a(window).height() - x.outerHeight(!0) >= t - (m() || -o()) ? f() && (p(), x.trigger("preUnfixed.ScrollToFixed"), "absolute" === s ? j() : k(), x.trigger("unfixed.ScrollToFixed")) : (f() || (p(), x.trigger("preFixed.ScrollToFixed"), i()), l(n), x.trigger("fixed.ScrollToFixed")) : l(n)
                }
            }

            function o() {
                return q.options.bottom ? q.options.bottom : 0
            }

            function p() {
                var a = x.css("position");
                "absolute" == a ? x.trigger("postAbsolute.ScrollToFixed") : "fixed" == a ? x.trigger("postFixed.ScrollToFixed") : x.trigger("postUnfixed.ScrollToFixed")
            }
            var q = this;
            q.$el = a(b), q.el = b, q.$el.data("ScrollToFixed", q);
            var r, s, t, u, v, w = !1,
                x = q.$el,
                y = 0,
                z = 0,
                A = -1,
                B = -1,
                C = null,
                D = function (a) {
                    x.is(":visible") ? (w = !1, n()) : k()
                },
                E = function (a) {
                    window.requestAnimationFrame ? requestAnimationFrame(n) : n()
                },
                F = function (a) {
                    a = a || window.event, a.preventDefault && a.preventDefault(),
                        a.returnValue = !1
                };
            q.init = function () {
                q.options = a.extend({}, a.ScrollToFixed.defaultOptions, c), v = x.css("z-index"), q.$el.css("z-index", q.options.zIndex), C = a("<div />"), r = x.css("position"), s = x.css("position"), t = x.css("float"), u = x.css("top"), h() && q.$el.after(C), a(window).bind("resize.ScrollToFixed", D), a(window).bind("scroll.ScrollToFixed", E), "ontouchmove" in window && a(window).bind("touchmove.ScrollToFixed", n), q.options.preFixed && x.bind("preFixed.ScrollToFixed", q.options.preFixed), q.options.postFixed && x.bind("postFixed.ScrollToFixed", q.options.postFixed), q.options.preUnfixed && x.bind("preUnfixed.ScrollToFixed", q.options.preUnfixed), q.options.postUnfixed && x.bind("postUnfixed.ScrollToFixed", q.options.postUnfixed), q.options.preAbsolute && x.bind("preAbsolute.ScrollToFixed", q.options.preAbsolute), q.options.postAbsolute && x.bind("postAbsolute.ScrollToFixed", q.options.postAbsolute), q.options.fixed && x.bind("fixed.ScrollToFixed", q.options.fixed), q.options.unfixed && x.bind("unfixed.ScrollToFixed", q.options.unfixed), q.options.spacerClass && C.addClass(q.options.spacerClass), x.bind("resize.ScrollToFixed", function () {
                    C.height(x.height())
                }), x.bind("scroll.ScrollToFixed", function () {
                    x.trigger("preUnfixed.ScrollToFixed"), k(), x.trigger("unfixed.ScrollToFixed"), n()
                }), x.bind("detach.ScrollToFixed", function (b) {
                    F(b), x.trigger("preUnfixed.ScrollToFixed"), k(), x.trigger("unfixed.ScrollToFixed"), a(window).unbind("resize.ScrollToFixed", D), a(window).unbind("scroll.ScrollToFixed", E), x.unbind(".ScrollToFixed"), C.remove(), q.$el.removeData("ScrollToFixed")
                }), D()
            }, q.init()
        }, a.ScrollToFixed.defaultOptions = {
            marginTop: 0,
            limit: 0,
            bottom: -1,
            zIndex: 1e3,
            baseClassName: "scroll-to-fixed-fixed"
        }, a.fn.scrollToFixed = function (b) {
            return this.each(function () {
                new a.ScrollToFixed(this, b)
            })
        }
    }(jQuery);