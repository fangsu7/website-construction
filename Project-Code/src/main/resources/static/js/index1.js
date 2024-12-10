/*
Cache: jquery-lazy, thickbox, dt-main, dt-language, dt-main-op-jquery, dt-plugins, jquery-blockui, waypoints, vc_carousel_js, vc_transition_bootstrap_js, qfe_composer_front_js, landpage-script
*/
/* landpage-script: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-content/plugins/landingpage/assets/js/landpage.js) */
window.u$ = window.u$ || window.jQuery;
(function($, jQuery) {
    ! function(t) {
        function e(i) { if (n[i]) return n[i].exports; var o = n[i] = { i: i, l: false, exports: {} }; return t[i].call(o.exports, o, o.exports, e), o.l = true, o.exports } var n = {}; return e.m = t, e.c = n, e.d = function(t, n, i) { if (!e.o(t, n)) Object.defineProperty(t, n, { configurable: false, enumerable: true, get: i }) }, e.n = function(t) { var n = t && t.__esModule ? function e() { return t["default"] } : function e() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/Content/BundledScripts/", e(e.s = 2768) }({
        10: function(t, e, n) { "use strict";
            t.exports = { options: { usePureJavaScript: false } } },
        14: function(t, e, n) { "use strict";
            (function(e, i, o, a) {
                function s(t) { if (!(8 === t || 16 === t || 24 === t || 32 === t)) throw new Error("Only 8, 16, 24, or 32 bits supported: " + t) }

                function u(t) { if (this.data = "", this.read = 0, "string" == typeof t) this.data = t;
                    else if (util.isArrayBuffer(t) || util.isArrayBufferView(t))
                        if (void 0 !== a && t instanceof a) this.data = t.toString("binary");
                        else { var e = new Uint8Array(t); try { this.data = String.fromCharCode.apply(null, e) } catch (t) { for (var n = 0; n < e.length; ++n) this.putByte(e[n]) } }
                    else if (t instanceof u || "object" == typeof t && "string" == typeof t.data && "number" == typeof t.read) this.data = t.data, this.read = t.read;
                    this._constructedStringLength = 0 }

                function l(t, e) { e = e || {}, this.read = e.readOffset || 0, this.growSize = e.growSize || 1024; var n = util.isArrayBuffer(t),
                        i = util.isArrayBufferView(t); if (n || i) { if (n) this.data = new DataView(t);
                        else this.data = new DataView(t.buffer, t.byteOffset, t.byteLength); return this.write = "writeOffset" in e ? e.writeOffset : this.data.byteLength, void 0 } if (this.data = new DataView(new ArrayBuffer(0)), this.write = 0, null != t) this.putBytes(t); if ("writeOffset" in e) this.write = e.writeOffset } var f = n(10),
                    c = n(412),
                    util = t.exports = f.util = f.util || {};! function() { if (void 0 === e || !e.nextTick || e.browser) { if ("function" == typeof i) return util.setImmediate = function() { return i.apply(void 0, arguments) }, util.nextTick = function(t) { return i(t) }, void 0; if (util.setImmediate = function(t) { setTimeout(t, 0) }, "undefined" != typeof window && "function" == typeof window.postMessage) { var t = "forge.setImmediate",
                                n = [];

                            function e(e) { if (e.source === window && e.data === t) { e.stopPropagation(); var copy = n.slice();
                                    n.length = 0, copy.forEach((function(t) { t() })) } }
                            util.setImmediate = function(e) { if (n.push(e), 1 === n.length) window.postMessage(t, "*") }, window.addEventListener("message", e, true) } if ("undefined" != typeof MutationObserver) { var o = Date.now(),
                                a = true,
                                s = document.createElement("div"),
                                n = [];
                            new MutationObserver((function() { var copy = n.slice();
                                n.length = 0, copy.forEach((function(t) { t() })) })).observe(s, { attributes: true }); var u = util.setImmediate;
                            util.setImmediate = function(t) { if (Date.now() - o > 15) o = Date.now(), u(t);
                                else if (n.push(t), 1 === n.length) s.setAttribute("a", a = !a) } }
                        util.nextTick = util.setImmediate } else if (util.nextTick = e.nextTick, "function" == typeof i) util.setImmediate = i;
                    else util.setImmediate = util.nextTick }(), util.isNodejs = void 0 !== e && e.versions && e.versions.node, util.globalScope = function() { if (util.isNodejs) return o;
                    else return "undefined" == typeof self ? window : self }(), util.isArray = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) }, util.isArrayBuffer = function(t) { return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer }, util.isArrayBufferView = function(t) { return t && util.isArrayBuffer(t.buffer) && void 0 !== t.byteLength }, util.ByteBuffer = u, util.ByteStringBuffer = u; var h = 4096;
                util.ByteStringBuffer.prototype._optimizeConstructedString = function(t) { if (this._constructedStringLength += t, this._constructedStringLength > h) this.data.substr(0, 1), this._constructedStringLength = 0 }, util.ByteStringBuffer.prototype.length = function() { return this.data.length - this.read }, util.ByteStringBuffer.prototype.isEmpty = function() { return this.length() <= 0 }, util.ByteStringBuffer.prototype.putByte = function(t) { return this.putBytes(String.fromCharCode(t)) }, util.ByteStringBuffer.prototype.fillWithByte = function(t, e) { t = String.fromCharCode(t); for (var d = this.data; e > 0;) { if (1 & e) d += t; if ((e >>>= 1) > 0) t += t } return this.data = d, this._optimizeConstructedString(e), this }, util.ByteStringBuffer.prototype.putBytes = function(t) { return this.data += t, this._optimizeConstructedString(t.length), this }, util.ByteStringBuffer.prototype.putString = function(t) { return this.putBytes(util.encodeUtf8(t)) }, util.ByteStringBuffer.prototype.putInt16 = function(t) { return this.putBytes(String.fromCharCode(t >> 8 & 255) + String.fromCharCode(255 & t)) }, util.ByteStringBuffer.prototype.putInt24 = function(t) { return this.putBytes(String.fromCharCode(t >> 16 & 255) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(255 & t)) }, util.ByteStringBuffer.prototype.putInt32 = function(t) { return this.putBytes(String.fromCharCode(t >> 24 & 255) + String.fromCharCode(t >> 16 & 255) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(255 & t)) }, util.ByteStringBuffer.prototype.putInt16Le = function(t) { return this.putBytes(String.fromCharCode(255 & t) + String.fromCharCode(t >> 8 & 255)) }, util.ByteStringBuffer.prototype.putInt24Le = function(t) { return this.putBytes(String.fromCharCode(255 & t) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(t >> 16 & 255)) }, util.ByteStringBuffer.prototype.putInt32Le = function(t) { return this.putBytes(String.fromCharCode(255 & t) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(t >> 16 & 255) + String.fromCharCode(t >> 24 & 255)) }, util.ByteStringBuffer.prototype.putInt = function(t, e) { s(e); var n = "";
                    do { e -= 8, n += String.fromCharCode(t >> e & 255) } while (e > 0); return this.putBytes(n) }, util.ByteStringBuffer.prototype.putSignedInt = function(t, e) { if (t < 0) t += 2 << e - 1; return this.putInt(t, e) }, util.ByteStringBuffer.prototype.putBuffer = function(t) { return this.putBytes(t.getBytes()) }, util.ByteStringBuffer.prototype.getByte = function() { return this.data.charCodeAt(this.read++) }, util.ByteStringBuffer.prototype.getInt16 = function() { var t = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1); return this.read += 2, t }, util.ByteStringBuffer.prototype.getInt24 = function() { var t = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2); return this.read += 3, t }, util.ByteStringBuffer.prototype.getInt32 = function() { var t = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3); return this.read += 4, t }, util.ByteStringBuffer.prototype.getInt16Le = function() { var t = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8; return this.read += 2, t }, util.ByteStringBuffer.prototype.getInt24Le = function() { var t = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16; return this.read += 3, t }, util.ByteStringBuffer.prototype.getInt32Le = function() { var t = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24; return this.read += 4, t }, util.ByteStringBuffer.prototype.getInt = function(t) { s(t); var e = 0;
                    do { e = (e << 8) + this.data.charCodeAt(this.read++), t -= 8 } while (t > 0); return e }, util.ByteStringBuffer.prototype.getSignedInt = function(t) { var e = this.getInt(t),
                        n = 2 << t - 2; if (e >= n) e -= n << 1; return e }, util.ByteStringBuffer.prototype.getBytes = function(t) { var e; if (t) t = Math.min(this.length(), t), e = this.data.slice(this.read, this.read + t), this.read += t;
                    else if (0 === t) e = "";
                    else e = 0 === this.read ? this.data : this.data.slice(this.read), this.clear(); return e }, util.ByteStringBuffer.prototype.bytes = function(t) { return void 0 === t ? this.data.slice(this.read) : this.data.slice(this.read, this.read + t) }, util.ByteStringBuffer.prototype.at = function(t) { return this.data.charCodeAt(this.read + t) }, util.ByteStringBuffer.prototype.setAt = function(t, e) { return this.data = this.data.substr(0, this.read + t) + String.fromCharCode(e) + this.data.substr(this.read + t + 1), this }, util.ByteStringBuffer.prototype.last = function() { return this.data.charCodeAt(this.data.length - 1) }, util.ByteStringBuffer.prototype.copy = function() { var t = util.createBuffer(this.data); return t.read = this.read, t }, util.ByteStringBuffer.prototype.compact = function() { if (this.read > 0) this.data = this.data.slice(this.read), this.read = 0; return this }, util.ByteStringBuffer.prototype.clear = function() { return this.data = "", this.read = 0, this }, util.ByteStringBuffer.prototype.truncate = function(t) { var e = Math.max(0, this.length() - t); return this.data = this.data.substr(this.read, e), this.read = 0, this }, util.ByteStringBuffer.prototype.toHex = function() { for (var t = "", e = this.read; e < this.data.length; ++e) { var n = this.data.charCodeAt(e); if (n < 16) t += "0";
                        t += n.toString(16) } return t }, util.ByteStringBuffer.prototype.toString = function() { return util.decodeUtf8(this.bytes()) }, util.DataBuffer = l, util.DataBuffer.prototype.length = function() { return this.write - this.read }, util.DataBuffer.prototype.isEmpty = function() { return this.length() <= 0 }, util.DataBuffer.prototype.accommodate = function(t, e) { if (this.length() >= t) return this;
                    e = Math.max(e || this.growSize, t); var n = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength),
                        i = new Uint8Array(this.length() + e); return i.set(n), this.data = new DataView(i.buffer), this }, util.DataBuffer.prototype.putByte = function(t) { return this.accommodate(1), this.data.setUint8(this.write++, t), this }, util.DataBuffer.prototype.fillWithByte = function(t, e) { this.accommodate(e); for (var n = 0; n < e; ++n) this.data.setUint8(t); return this }, util.DataBuffer.prototype.putBytes = function(t, e) { if (util.isArrayBufferView(t)) { var n, i = (n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)).byteLength - n.byteOffset,
                            o; return this.accommodate(i), (o = new Uint8Array(this.data.buffer, this.write)).set(n), this.write += i, this } if (util.isArrayBuffer(t)) { var n = new Uint8Array(t),
                            o; return this.accommodate(n.byteLength), (o = new Uint8Array(this.data.buffer)).set(n, this.write), this.write += n.byteLength, this } if (t instanceof util.DataBuffer || "object" == typeof t && "number" == typeof t.read && "number" == typeof t.write && util.isArrayBufferView(t.data)) { var n = new Uint8Array(t.data.byteLength, t.read, t.length()),
                            o; return this.accommodate(n.byteLength), (o = new Uint8Array(t.data.byteLength, this.write)).set(n), this.write += n.byteLength, this } if (t instanceof util.ByteStringBuffer) t = t.data, e = "binary"; if (e = e || "binary", "string" == typeof t) { var view; if ("hex" === e) return this.accommodate(Math.ceil(t.length / 2)), view = new Uint8Array(this.data.buffer, this.write), this.write += util.binary.hex.decode(t, view, this.write), this; if ("base64" === e) return this.accommodate(3 * Math.ceil(t.length / 4)), view = new Uint8Array(this.data.buffer, this.write), this.write += util.binary.base64.decode(t, view, this.write), this; if ("utf8" === e) t = util.encodeUtf8(t), e = "binary"; if ("binary" === e || "raw" === e) return this.accommodate(t.length), view = new Uint8Array(this.data.buffer, this.write), this.write += util.binary.raw.decode(view), this; if ("utf16" === e) return this.accommodate(2 * t.length), view = new Uint16Array(this.data.buffer, this.write), this.write += util.text.utf16.encode(view), this; throw new Error("Invalid encoding: " + e) } throw Error("Invalid parameter: " + t) }, util.DataBuffer.prototype.putBuffer = function(t) { return this.putBytes(t), t.clear(), this }, util.DataBuffer.prototype.putString = function(t) { return this.putBytes(t, "utf16") }, util.DataBuffer.prototype.putInt16 = function(t) { return this.accommodate(2), this.data.setInt16(this.write, t), this.write += 2, this }, util.DataBuffer.prototype.putInt24 = function(t) { return this.accommodate(3), this.data.setInt16(this.write, t >> 8 & 65535), this.data.setInt8(this.write, t >> 16 & 255), this.write += 3, this }, util.DataBuffer.prototype.putInt32 = function(t) { return this.accommodate(4), this.data.setInt32(this.write, t), this.write += 4, this }, util.DataBuffer.prototype.putInt16Le = function(t) { return this.accommodate(2), this.data.setInt16(this.write, t, true), this.write += 2, this }, util.DataBuffer.prototype.putInt24Le = function(t) { return this.accommodate(3), this.data.setInt8(this.write, t >> 16 & 255), this.data.setInt16(this.write, t >> 8 & 65535, true), this.write += 3, this }, util.DataBuffer.prototype.putInt32Le = function(t) { return this.accommodate(4), this.data.setInt32(this.write, t, true), this.write += 4, this }, util.DataBuffer.prototype.putInt = function(t, e) { s(e), this.accommodate(e / 8);
                    do { e -= 8, this.data.setInt8(this.write++, t >> e & 255) } while (e > 0); return this }, util.DataBuffer.prototype.putSignedInt = function(t, e) { if (s(e), this.accommodate(e / 8), t < 0) t += 2 << e - 1; return this.putInt(t, e) }, util.DataBuffer.prototype.getByte = function() { return this.data.getInt8(this.read++) }, util.DataBuffer.prototype.getInt16 = function() { var t = this.data.getInt16(this.read); return this.read += 2, t }, util.DataBuffer.prototype.getInt24 = function() { var t = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2); return this.read += 3, t }, util.DataBuffer.prototype.getInt32 = function() { var t = this.data.getInt32(this.read); return this.read += 4, t }, util.DataBuffer.prototype.getInt16Le = function() { var t = this.data.getInt16(this.read, true); return this.read += 2, t }, util.DataBuffer.prototype.getInt24Le = function() { var t = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, true) << 8; return this.read += 3, t }, util.DataBuffer.prototype.getInt32Le = function() { var t = this.data.getInt32(this.read, true); return this.read += 4, t }, util.DataBuffer.prototype.getInt = function(t) { s(t); var e = 0;
                    do { e = (e << 8) + this.data.getInt8(this.read++), t -= 8 } while (t > 0); return e }, util.DataBuffer.prototype.getSignedInt = function(t) { var e = this.getInt(t),
                        n = 2 << t - 2; if (e >= n) e -= n << 1; return e }, util.DataBuffer.prototype.getBytes = function(t) { var e; if (t) t = Math.min(this.length(), t), e = this.data.slice(this.read, this.read + t), this.read += t;
                    else if (0 === t) e = "";
                    else e = 0 === this.read ? this.data : this.data.slice(this.read), this.clear(); return e }, util.DataBuffer.prototype.bytes = function(t) { return void 0 === t ? this.data.slice(this.read) : this.data.slice(this.read, this.read + t) }, util.DataBuffer.prototype.at = function(t) { return this.data.getUint8(this.read + t) }, util.DataBuffer.prototype.setAt = function(t, e) { return this.data.setUint8(t, e), this }, util.DataBuffer.prototype.last = function() { return this.data.getUint8(this.write - 1) }, util.DataBuffer.prototype.copy = function() { return new util.DataBuffer(this) }, util.DataBuffer.prototype.compact = function() { if (this.read > 0) { var t = new Uint8Array(this.data.buffer, this.read),
                            e = new Uint8Array(t.byteLength);
                        e.set(t), this.data = new DataView(e), this.write -= this.read, this.read = 0 } return this }, util.DataBuffer.prototype.clear = function() { return this.data = new DataView(new ArrayBuffer(0)), this.read = this.write = 0, this }, util.DataBuffer.prototype.truncate = function(t) { return this.write = Math.max(0, this.length() - t), this.read = Math.min(this.read, this.write), this }, util.DataBuffer.prototype.toHex = function() { for (var t = "", e = this.read; e < this.data.byteLength; ++e) { var n = this.data.getUint8(e); if (n < 16) t += "0";
                        t += n.toString(16) } return t }, util.DataBuffer.prototype.toString = function(t) { var view = new Uint8Array(this.data, this.read, this.length()); if ("binary" === (t = t || "utf8") || "raw" === t) return util.binary.raw.encode(view); if ("hex" === t) return util.binary.hex.encode(view); if ("base64" === t) return util.binary.base64.encode(view); if ("utf8" === t) return util.text.utf8.decode(view); if ("utf16" === t) return util.text.utf16.decode(view); throw new Error("Invalid encoding: " + t) }, util.createBuffer = function(input, t) { if (t = t || "raw", void 0 !== input && "utf8" === t) input = util.encodeUtf8(input); return new util.ByteBuffer(input) }, util.fillString = function(t, e) { for (var n = ""; e > 0;) { if (1 & e) n += t; if ((e >>>= 1) > 0) t += t } return n }, util.xorBytes = function(t, e, n) { for (var i = "", o = "", a = "", s = 0, u = 0; n > 0; --n, ++s) { if (o = t.charCodeAt(s) ^ e.charCodeAt(s), u >= 10) i += a, a = "", u = 0;
                        a += String.fromCharCode(o), ++u } return i += a }, util.hexToBytes = function(t) { var e = "",
                        n = 0; if (t.length & 1 == 1) n = 1, e += String.fromCharCode(parseInt(t[0], 16)); for (; n < t.length; n += 2) e += String.fromCharCode(parseInt(t.substr(n, 2), 16)); return e }, util.bytesToHex = function(t) { return util.createBuffer(t).toHex() }, util.int32ToBytes = function(t) { return String.fromCharCode(t >> 24 & 255) + String.fromCharCode(t >> 16 & 255) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(255 & t) }; var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    m = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
                    v = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
                util.encode64 = function(input, t) { for (var line = "", e = "", n, i, o, a = 0; a < input.length;) { if (n = input.charCodeAt(a++), i = input.charCodeAt(a++), o = input.charCodeAt(a++), line += p.charAt(n >> 2), line += p.charAt((3 & n) << 4 | i >> 4), isNaN(i)) line += "==";
                        else line += p.charAt((15 & i) << 2 | o >> 6), line += isNaN(o) ? "=" : p.charAt(63 & o); if (t && line.length > t) e += line.substr(0, t) + "\r\n", line = line.substr(t) } return e += line }, util.decode64 = function(input) { input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); for (var t = "", e, n, i, o, a = 0; a < input.length;)
                        if (e = m[input.charCodeAt(a++) - 43], n = m[input.charCodeAt(a++) - 43], i = m[input.charCodeAt(a++) - 43], o = m[input.charCodeAt(a++) - 43], t += String.fromCharCode(e << 2 | n >> 4), 64 !== i)
                            if (t += String.fromCharCode((15 & n) << 4 | i >> 2), 64 !== o) t += String.fromCharCode((3 & i) << 6 | o);
                    return t }, util.encodeUtf8 = function(t) { return unescape(encodeURIComponent(t)) }, util.decodeUtf8 = function(t) { return decodeURIComponent(escape(t)) }, util.binary = { raw: {}, hex: {}, base64: {}, base58: {}, baseN: { encode: c.encode, decode: c.decode } }, util.binary.raw.encode = function(t) { return String.fromCharCode.apply(null, t) }, util.binary.raw.decode = function(t, e, n) { var i = e; if (!i) i = new Uint8Array(t.length); for (var o = n = n || 0, a = 0; a < t.length; ++a) i[o++] = t.charCodeAt(a); return e ? o - n : i }, util.binary.hex.encode = util.bytesToHex, util.binary.hex.decode = function(t, e, n) { var i = e; if (!i) i = new Uint8Array(Math.ceil(t.length / 2)); var o = 0,
                        a = n = n || 0; if (1 & t.length) o = 1, i[a++] = parseInt(t[0], 16); for (; o < t.length; o += 2) i[a++] = parseInt(t.substr(o, 2), 16); return e ? a - n : i }, util.binary.base64.encode = function(input, t) { for (var line = "", e = "", n, i, o, a = 0; a < input.byteLength;) { if (n = input[a++], i = input[a++], o = input[a++], line += p.charAt(n >> 2), line += p.charAt((3 & n) << 4 | i >> 4), isNaN(i)) line += "==";
                        else line += p.charAt((15 & i) << 2 | o >> 6), line += isNaN(o) ? "=" : p.charAt(63 & o); if (t && line.length > t) e += line.substr(0, t) + "\r\n", line = line.substr(t) } return e += line }, util.binary.base64.decode = function(input, t, e) { var n = t,
                        i, o, a, s; if (!n) n = new Uint8Array(3 * Math.ceil(input.length / 4));
                    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); for (var u = 0, l = e = e || 0; u < input.length;)
                        if (i = m[input.charCodeAt(u++) - 43], o = m[input.charCodeAt(u++) - 43], a = m[input.charCodeAt(u++) - 43], s = m[input.charCodeAt(u++) - 43], n[l++] = i << 2 | o >> 4, 64 !== a)
                            if (n[l++] = (15 & o) << 4 | a >> 2, 64 !== s) n[l++] = (3 & a) << 6 | s;
                    return t ? l - e : n.subarray(0, l) }, util.binary.base58.encode = function(input, t) { return util.binary.baseN.encode(input, v, t) }, util.binary.base58.decode = function(input, t) { return util.binary.baseN.decode(input, v, t) }, util.text = { utf8: {}, utf16: {} }, util.text.utf8.encode = function(t, e, n) { t = util.encodeUtf8(t); var i = e; if (!i) i = new Uint8Array(t.length); for (var o = n = n || 0, a = 0; a < t.length; ++a) i[o++] = t.charCodeAt(a); return e ? o - n : i }, util.text.utf8.decode = function(t) { return util.decodeUtf8(String.fromCharCode.apply(null, t)) }, util.text.utf16.encode = function(t, e, n) { var i = e; if (!i) i = new Uint8Array(2 * t.length); for (var view = new Uint16Array(i.buffer), o = n = n || 0, a = n, s = 0; s < t.length; ++s) view[a++] = t.charCodeAt(s), o += 2; return e ? o - n : i }, util.text.utf16.decode = function(t) { return String.fromCharCode.apply(null, new Uint16Array(t.buffer)) }, util.deflate = function(t, e, n) { if (e = util.decode64(t.deflate(util.encode64(e)).rval), n) { var i = 2,
                            o; if (32 & e.charCodeAt(1)) i = 6;
                        e = e.substring(i, e.length - 4) } return e }, util.inflate = function(t, e, n) { var i = t.inflate(util.encode64(e)).rval; return null === i ? null : util.decode64(i) }; var g = function(t, id, e) { if (!t) throw new Error("WebStorage not available."); var n; if (null === e) n = t.removeItem(id);
                        else e = util.encode64(JSON.stringify(e)), n = t.setItem(id, e); if (void 0 !== n && true !== n.rval) { var i = new Error(n.error.message); throw i.id = n.error.id, i.name = n.error.name, i } },
                    y = function(t, id) { if (!t) throw new Error("WebStorage not available."); var e = t.getItem(id); if (t.init)
                            if (null === e.rval) { if (e.error) { var n = new Error(e.error.message); throw n.id = e.error.id, n.name = e.error.name, n }
                                e = null } else e = e.rval;
                        if (null !== e) e = JSON.parse(util.decode64(e)); return e },
                    w = function(t, id, e, data) { var n = y(t, id); if (null === n) n = {};
                        n[e] = data, g(t, id, n) },
                    b = function(t, id, e) { var n = y(t, id); if (null !== n) n = e in n ? n[e] : null; return n },
                    C = function(t, id, e) { var n = y(t, id); if (null !== n && e in n) { delete n[e]; var empty = true; for (var i in n) { empty = false; break } if (empty) n = null;
                            g(t, id, n) } },
                    x = function(t, id) { g(t, id, null) },
                    S = function(t, e, n) { var i = null,
                            type; if (void 0 === n) n = ["web", "flash"]; var o = false,
                            a = null; for (var s in n) { type = n[s]; try { if ("flash" === type || "both" === type) { if (null === e[0]) throw new Error("Flash local storage not available.");
                                    i = t.apply(this, e), o = "flash" === type } if ("web" === type || "both" === type) e[0] = localStorage, i = t.apply(this, e), o = true } catch (t) { a = t } if (o) break } if (!o) throw a; return i };
                util.setItem = function(t, id, e, data, n) { S(w, arguments, n) }, util.getItem = function(t, id, e, n) { return S(b, arguments, n) }, util.removeItem = function(t, id, e, n) { S(C, arguments, n) }, util.clearItems = function(t, id, e) { S(x, arguments, e) }, util.isEmpty = function(t) { for (var e in t)
                        if (t.hasOwnProperty(e)) return false;
                    return true }, util.format = function(format) { for (var t = /%./g, e, n, i = 0, o = [], a = 0; e = t.exec(format);) { if ((n = format.substring(a, t.lastIndex - 2)).length > 0) o.push(n);
                        a = t.lastIndex; var s = e[0][1]; switch (s) {
                            case "s":
                            case "o":
                                if (i < arguments.length) o.push(arguments[i++ + 1]);
                                else o.push("<?>"); break;
                            case "%":
                                o.push("%"); break;
                            default:
                                o.push("<%" + s + "?>") } } return o.push(format.substring(a)), o.join("") }, util.formatNumber = function(t, e, n, i) { var o = t,
                        a = isNaN(e = Math.abs(e)) ? 2 : e,
                        d = void 0 === n ? "," : n,
                        s = void 0 === i ? "." : i,
                        u = o < 0 ? "-" : "",
                        l = parseInt(o = Math.abs(+o || 0).toFixed(a), 10) + "",
                        f = l.length > 3 ? l.length % 3 : 0; return u + (f ? l.substr(0, f) + s : "") + l.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + s) + (a ? d + Math.abs(o - l).toFixed(a).slice(2) : "") }, util.formatSize = function(size) { if (size >= 1073741824) size = util.formatNumber(size / 1073741824, 2, ".", "") + " GiB";
                    else if (size >= 1048576) size = util.formatNumber(size / 1048576, 2, ".", "") + " MiB";
                    else if (size >= 1024) size = util.formatNumber(size / 1024, 0) + " KiB";
                    else size = util.formatNumber(size, 0) + " bytes"; return size }, util.bytesFromIP = function(t) { if (-1 !== t.indexOf(".")) return util.bytesFromIPv4(t); if (-1 !== t.indexOf(":")) return util.bytesFromIPv6(t);
                    else return null }, util.bytesFromIPv4 = function(t) { if (4 !== (t = t.split(".")).length) return null; for (var e = util.createBuffer(), n = 0; n < t.length; ++n) { var i = parseInt(t[n], 10); if (isNaN(i)) return null;
                        e.putByte(i) } return e.getBytes() }, util.bytesFromIPv6 = function(t) { for (var e = 0, n = 2 * (8 - (t = t.split(":").filter((function(t) { if (0 === t.length) ++e; return true }))).length + e), i = util.createBuffer(), o = 0; o < 8; ++o)
                        if (t[o] && 0 !== t[o].length) { var a = util.hexToBytes(t[o]); if (a.length < 2) i.putByte(0);
                            i.putBytes(a) } else i.fillWithByte(0, n), n = 0;
                    return i.getBytes() }, util.bytesToIP = function(t) { if (4 === t.length) return util.bytesToIPv4(t); if (16 === t.length) return util.bytesToIPv6(t);
                    else return null }, util.bytesToIPv4 = function(t) { if (4 !== t.length) return null; for (var e = [], n = 0; n < t.length; ++n) e.push(t.charCodeAt(n)); return e.join(".") }, util.bytesToIPv6 = function(t) { if (16 !== t.length) return null; for (var e = [], n = [], i = 0, o = 0; o < t.length; o += 2) { for (var a = util.bytesToHex(t[o] + t[o + 1]);
                            "0" === a[0] && "0" !== a;) a = a.substr(1); if ("0" === a) { var s = n[n.length - 1],
                                u = e.length; if (!s || u !== s.end + 1) n.push({ start: u, end: u });
                            else if (s.end = u, s.end - s.start > n[i].end - n[i].start) i = n.length - 1 }
                        e.push(a) } if (n.length > 0) { var group = n[i]; if (group.end - group.start > 0) { if (e.splice(group.start, group.end - group.start + 1, ""), 0 === group.start) e.unshift(""); if (7 === group.end) e.push("") } } return e.join(":") }, util.estimateCores = function(t, e) {
                    function n(t, a, s) { if (0 === a) { var u = Math.floor(t.reduce((function(t, e) { return t + e }), 0) / t.length); return util.cores = Math.max(1, u), URL.revokeObjectURL(o), e(null, util.cores) }
                        map(s, (function(e, o) { t.push(i(s, o)), n(t, a - 1, s) })) }

                    function map(t, e) { for (var n = [], i = [], a = 0; a < t; ++a) { var worker = new Worker(o);
                            worker.addEventListener("message", (function(o) { if (i.push(o.data), i.length === t) { for (var a = 0; a < t; ++a) n[a].terminate();
                                    e(null, i) } })), n.push(worker) } for (var a = 0; a < t; ++a) n[a].postMessage(a) }

                    function i(t, e) { for (var n = [], i = 0; i < t; ++i)
                            for (var o = e[i], overlap = n[i] = [], a = 0; a < t; ++a)
                                if (i !== a) { var s = e[a]; if (o.st > s.st && o.st < s.et || s.st > o.st && s.st < o.et) overlap.push(a) }
                        return n.reduce((function(t, overlap) { return Math.max(t, overlap.length) }), 0) } if ("function" == typeof t) e = t, t = {}; if (t = t || {}, "cores" in util && !t.update) return e(null, util.cores); if ("undefined" != typeof navigator && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) return util.cores = navigator.hardwareConcurrency, e(null, util.cores); if ("undefined" == typeof Worker) return util.cores = 1, e(null, util.cores); if ("undefined" == typeof Blob) return util.cores = 2, e(null, util.cores); var o = URL.createObjectURL(new Blob(["(", function() { self.addEventListener("message", (function(t) { for (var e = Date.now(), et = e + 4; Date.now() < et;);
                            self.postMessage({ st: e, et: et }) })) }.toString(), ")()"], { type: "application/javascript" }));
                    n([], 5, 16) } }).call(e, n(89), n(261).setImmediate, n(45), n(46).Buffer) },
        140: function(t, e, n) { "use strict";

            function Accordion(link) { this.selector = ".u-accordion", this.activeClass = "u-accordion-active", this._paneSelector = ".u-accordion-pane", this.activeSelector = "." + this.activeClass, this._linkSelector = ".u-accordion-link", this.activeLinkClass = "active", this.activeLinkSelector = "." + this.activeLinkClass, this._isCollapsedByDefaultSelector = ".u-collapsed-by-default", this._link = link, this._accordion = this._link.closest(this.selector) }
            t.exports = Accordion, Accordion.prototype.show = function(t) { var link = this._link; if (link.is(this.activeLinkSelector) && !t) return this._removeActiveLink(), this._hidePane(link), void 0;
                this._removeActiveLink(), this._hidePane(link), this._addActiveLink(link), this._activatePane(link) }, Accordion.prototype._removeActiveLink = function() { var t = this._getActiveLink();
                t.removeClass(this.activeLinkClass), t.attr("aria-selected", false) }, Accordion.prototype._getActiveLink = function() { return this._accordion.find(this.activeLinkSelector) }, Accordion.prototype._addActiveLink = function(link) { link.addClass(this.activeLinkClass), link.attr("aria-selected", true) }, Accordion.prototype._activatePane = function(link) { var pane;
                this._accordion.find(this.activeSelector).removeClass(this.activeClass), this._getPane(link).addClass(this.activeClass) }, Accordion.prototype._getPane = function(link) { return link.siblings(this._paneSelector) }, Accordion.prototype._hidePane = function(link) { var pane;
                this._getPane(link).removeClass(this.activeClass) }, Accordion.prototype.closeAll = function() { this._accordion.find(this._linkSelector + this.activeLinkSelector).removeClass(this.activeLinkClass).attr("aria-selected", false), this._accordion.find(this._paneSelector + this.activeSelector).removeClass(this.activeClass) }, Accordion.prototype.isCollapsedByDefault = function() { return this._accordion.is(this._isCollapsedByDefaultSelector) } },
        185: function(t, e, n) { "use strict";

            function Dialog(t) { this._openClass = "u-dialog-open", this._dialogBlockClass = "u-dialog-block", this._dialogBlockSelector = "." + this._dialogBlockClass, this._dialog = t.closest(this._dialogBlockSelector) }

            function i(t) { if (!window._responsive) return false; var e = t.find(".u-dialog"),
                    n = window._responsive.mode || "XL"; return e.is(".u-hidden, .u-hidden-" + n.toLowerCase()) }
            t.exports = Dialog, Dialog.prototype.open = function(t) { this._dialog.each(function(e, block) { var n = $(block); if (!i(n)) { if (n.addClass(this._openClass), "function" == typeof t) t(n);
                        n.trigger("opened.np.dialog", [this]) } }.bind(this)) }, Dialog.prototype.close = function() { this._dialog.removeClass(this._openClass), this._dialog.trigger("closed.np.dialog", [this]) }, Dialog.prototype.getInterval = function() { return this._dialog.attr("data-dialog-show-interval") || 3e3 } },
        186: function(t, e) {},
        187: function(t, e, n) { "use strict";

            function i() { this.hint = null, this.animations = [] }
            t.exports = i; var o = null;
            i.instance = function instance() { if (!o) o = new i; return o }, i.prototype.createAnimation = function t(e) { for (var n = 0; n < this.animations.length; n++)
                    if (this.animations[n].isMatch(e)) return this.animations[n].create(e, this.hint);
                return null }, i.prototype.setHint = function t(e) { this.hint = e }, i.prototype.registerAnimation = function(animation) { this.animations.push(animation) }, window.AnimationFactory = i },
        188: function(t, e, n) { "use strict";

            function i(t, e) { if (!t) throw new Error("animationInfo is null or undefined"); if (this.info = t, this.hint = e, this.animatedClass = ["animated"], this.backstageClass = ["backstage"], this.animationInClass = this.getAnimationClass(), this.isInOutAnimation()) this.animationOutClass = this.getAnimationOutClass();
                this._reqestId = null, this._timeoutId = null, this._animationInTimeoutId = null, this._handleAnimationEnd = this._handleAnimationEnd.bind(this), this._playing = null, this._playNext = null, this._playNextDuration = null }

            function o(t) { if (!t) return null; if (t < l) t = l; return t + "ms" }

            function a(t, e) { if (e = o(e)) t.style["animation-duration"] = e }

            function s(t) { switch (t) {
                    case "Down":
                        return "Up";
                    case "Up":
                        return "Down";
                    default:
                        return t } } var u = n(256);
            t.exports = i; var l = 100,
                f = 500,
                c = "In",
                h = "Out";
            i.isMatch = function() { return true }, i.create = function(t, e) { return new i(t, e) }, i.prototype._handleAnimationEnd = function t(e) { if (e.target === this.info.element) { if (this._playing = null, a(this.info.element, this.info.duration), this.info.element.classList.contains(this.animationInClass)) this.info.element.classList.remove(this.animationInClass), this.info.element.classList.add(this.animationInClass + "-played");
                    else this.info.element.classList.remove(this.animationInClass + "-played"); if (this._playNext) { var n = this._playNext,
                            i = this._playNextDuration;
                        this._playNext = null, this._playNextDuration = null, this._play(n, i) } } }, i.prototype.subscribe = function t() { this.info.element.addEventListener("animationend", this._handleAnimationEnd) }, i.prototype.unsubscribe = function t() { this.info.element.removeEventListener("animationend", this._handleAnimationEnd) }, i.prototype.init = function init() { if (this.hint) this.hint.hintBrowser(this.info);
                this.subscribe(), this.reset() }, i.prototype.clear = function t() { if (this.info) { if (this.backstageClass) this.info.element.classList.remove.apply(this.info.element.classList, this.backstageClass); if (this.animatedClass) this.info.element.classList.remove.apply(this.info.element.classList, this.animatedClass); if (this.animationInClass) this.info.element.classList.remove(this.animationInClass); if (this.outAnimatedClass) this.info.element.classList.remove(this.animationOutClass); if (this.info.element.style["animation-duration"] = "", this.hint) this.hint.removeHint(this.info); if (this._animationInTimeoutId) clearTimeout(this._animationInTimeoutId), this._animationInTimeoutId = null;
                    this._playing = null, this._playNext = null, this.unsubscribe() } }, i.prototype.requestAnimationFrame = function t(e) { return u.requestAnimationFrame(e) }, i.prototype.cancelAnimationFrame = function t(id) { if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id), void 0; if (window.mozCancelAnimationFrame) window.mozCancelAnimationFrame(id) }, i.prototype.getAnimationClass = function t() { if (!this.info) return null; var e = this.info.name; if (this.info.direction) e += this.info.direction; return e }, i.prototype.getAnimationOutClass = function t() { if (!this.info) return null; var e = this.info.name; if (this.isInOutAnimation()) e = e.slice(0, 0 - c.length) + h; if (this.info.direction) e += s(this.info.direction); return e }, i.prototype.isInOutAnimation = function t() { if (!this.info || !this.info.name || !this.info.animationOut) return false;
                else return this.info.name.indexOf(c) + c.length === this.info.name.length }, i.prototype.start = function t() { if (this.info) { var e = this.info.delay,
                        n = function() { this._animationInTimeoutId = null, this._play(this.animationInClass) }.bind(this); if (this._animationInTimeoutId) clearTimeout(this._animationInTimeoutId); if (!e) return n(), void 0;
                    this._animationInTimeoutId = setTimeout(n, e) } }, i.prototype.startOut = function t() { if (this.info)
                    if (this.animationOutClass)
                        if (this._animationInTimeoutId) return clearInterval(this._animationInTimeoutId), this._animationInTimeoutId = null, void 0;
                        else return this._play(this.animationOutClass, f), void 0 }, i.prototype._play = function t(animation, e) { if (!animation) animation = this.animationInClass; if (e) a(this.info.element, e); if (this._playing === animation) return this._playNext = null, void 0; if (this._playing) return this._playNext = animation, this._playNextDuration = e, void 0; if (this._playing = animation, this._reqestId) this.cancelAnimationFrame(this._reqestId);
                this._reqestId = this.requestAnimationFrame(function() { if (this._reqestId = null, this.backstageClass) this.info.element.classList.remove.apply(this.info.element.classList, this.backstageClass); if (this.animationOutClass) this.info.element.classList.remove(this.animationOutClass); if (this.animationInClass) this.info.element.classList.remove(this.animationInClass); if (animation) this.info.element.classList.add(animation) }.bind(this)) }, i.prototype.reset = function t() { if (this.info) { var e = this.info.duration; if (a(this.info.element, e), this._playing = null, this._playNext = null, this.backstageClass) this.info.element.classList.add.apply(this.info.element.classList, this.backstageClass); if (this.animatedClass) this.info.element.classList.add.apply(this.info.element.classList, this.animatedClass) } }, i.prototype.needOutAnimation = function t() { if (!this.isInOutAnimation()) return false; if (this._animationInTimeoutId) return true;
                else return (this.info.element.classList.contains(this.animationInClass) || this.info.element.classList.contains(this.animationInClass + "-played")) && !this.info.element.classList.contains(this.backstageClass[0]) }, i.prototype.getTime = function t() { if (!this.info) return 0; var e = this.info.duration,
                    n = this.info.delay; if (isNaN(n)) n = 0; return n + e }, i.prototype.getOutTime = function t() { if (!this.info || !this.isInOutAnimation()) return 0;
                else return f } },
        189: function(t, e, n) { "use strict";

            function CountdownUpdater(t) { this.$dom = t, this.countdownCommon = new CountdownCommon(t) }
            t.exports = CountdownUpdater; var CountdownCommon = n(31);
            CountdownUpdater.prototype.startUpdate = function(t) { var e = this.getUpdateTimeout(); if (e) this.update(t, true), setInterval(this.update.bind(this), e, t) }, CountdownUpdater.prototype.getUpdateTimeout = function() { if (this.countdownCommon.getAfterCountFinished()) return 0; var countdownType = this.countdownCommon.getType(); if ("to-date" === countdownType || "to-time" === countdownType) return 350; if ("to-number" === countdownType) { var t = this.countdownCommon.getFrequency(),
                        e = CountdownCommon.timeStringToMilliseconds(t); return e = Math.max(e, 0), e = Math.min(e, 350) } return 0 }, CountdownUpdater.prototype.getAnimationProps = function(t, e) { if (e) return { animation: "none" };
                else return { animation: "runtime" === t && this.countdownCommon.getCountAnimation() || "none", animationSpeed: this.getUpdateTimeout() } }, CountdownUpdater.prototype.update = function(t, e) { if (!this.countdownCommon.getAfterCountFinished()) { var countdownType = this.countdownCommon.getType(); if ("to-date" === countdownType || "to-time" === countdownType) this.updateDateAndTime(t, e); if ("to-number" === countdownType) this.updateNumber(t, e) } }, CountdownUpdater.prototype.updateDateAndTime = function(t, e) { var n = this.countdownCommon.getDate(),
                    diff = this.getTimeDiff(n); if (!this.afterCount(diff, t)) { var props = this.getAnimationProps(t, e);
                    this.countdownCommon.setValue("years", diff.years, false, props), this.countdownCommon.setValue("days", diff.days, false, props), this.countdownCommon.setValue("hours", diff.hours, false, props), this.countdownCommon.setValue("minutes", diff.minutes, false, props), this.countdownCommon.setValue("seconds", diff.seconds, false, props), this.countdownCommon.showLabel("years", !!diff.years), this.countdownCommon.showLabel("days", !!diff.days) } }, CountdownUpdater.prototype.updateNumber = function(t, e) { var n = this.countdownCommon.getNumber(),
                    i = this.countdownCommon.getStartTime(),
                    o = this.countdownCommon.getFrequency(),
                    diff = this.countdownCommon.calcNumber(n, i, o); if ("per-visitor" === this.countdownCommon.getFor()) { var a = this.countdownCommon.getTimerId();
                    i = this.getStartDate(a), diff = this.countdownCommon.calcNumber(n, i, o) } if (!this.afterCount(diff, t)) { var props = this.getAnimationProps(t, e);
                    this.countdownCommon.setValue("numbers", diff, false, props) } }, CountdownUpdater.prototype.getTimeDiff = function(t) { if ("everyone" === this.countdownCommon.getFor()) return this.countdownCommon.timeDiff(t); var e = this.getStartDate(),
                    n = this.countdownCommon.getTimeLeft(); return t = this.countdownCommon.parseTime(n, e), this.countdownCommon.timeDiff(t) }, CountdownUpdater.prototype.getStartDate = function() { var t = this.countdownCommon.getTimerKey(),
                    e = localStorage.getItem(t); if (e) return new Date(e); var n = new Date; return localStorage.setItem(t, n.toUTCString()), n }, CountdownUpdater.prototype.afterCount = function(diff, t) { var e = this.countdownCommon.getDirection(),
                    n = this.countdownCommon.getAfterCount(); if (t = t || "", "none" !== n && "down" === e && CountdownCommon.isEmptyDiff(diff)) { if ("message" === n) this.showMessage(); if ("redirect" === n)
                        if (this.$dom.find(".u-countdown-message").text("Redirecting..."), this.showMessage(), "preview" !== t) { var i = this.countdownCommon.getRedirectUrl();
                            window.location.href = i }
                    if ("preview" !== t) this.countdownCommon.setAfterCountFinished(); return true } return false }, CountdownUpdater.prototype.showMessage = function() { if (this.$dom.find(".u-countdown-message").is(".u-hidden")) this.$dom.find(".u-countdown-wrapper").addClass("u-invisible"), this.$dom.find(".u-countdown-message").removeClass("u-hidden") }, CountdownUpdater.prototype.hideMessage = function() { if (this.$dom.find(".u-countdown-message").not(".u-hidden")) this.$dom.find(".u-countdown-wrapper").removeClass("u-invisible"), this.$dom.find(".u-countdown-message").addClass("u-hidden") }, CountdownUpdater.findAll = function() { return $(".u-countdown") } },
        190: function(t, e, n) { "use strict";

            function i() { u = String.fromCharCode(128), u += a.util.fillString(String.fromCharCode(0), 64), f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], l = true }

            function o(t, e, n) { for (var i, o, a, s, u, l, c, h, p, m, d, v, g, y, w, b = n.length(); b >= 64;) { for (c = 0; c < 16; ++c) e[c] = n.getInt32(); for (; c < 64; ++c) i = ((i = e[c - 2]) >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10, o = ((o = e[c - 15]) >>> 7 | o << 25) ^ (o >>> 18 | o << 14) ^ o >>> 3, e[c] = i + e[c - 7] + o + e[c - 16] | 0; for (h = t.h0, p = t.h1, m = t.h2, d = t.h3, v = t.h4, g = t.h5, y = t.h6, w = t.h7, c = 0; c < 64; ++c) a = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10), l = h & p | m & (h ^ p), i = w + (s = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7)) + (u = y ^ v & (g ^ y)) + f[c] + e[c], w = y, y = g, g = v, v = d + i >>> 0, d = m, m = p, p = h, h = i + (o = a + l) >>> 0;
                    t.h0 = t.h0 + h | 0, t.h1 = t.h1 + p | 0, t.h2 = t.h2 + m | 0, t.h3 = t.h3 + d | 0, t.h4 = t.h4 + v | 0, t.h5 = t.h5 + g | 0, t.h6 = t.h6 + y | 0, t.h7 = t.h7 + w | 0, b -= 64 } } var a = n(10);
            n(57), n(14); var s = t.exports = a.sha256 = a.sha256 || {};
            a.md.sha256 = a.md.algorithms.sha256 = s, s.create = function() { if (!l) i(); var t = null,
                    e = a.util.createBuffer(),
                    n = new Array(64),
                    s = { algorithm: "sha256", blockLength: 64, digestLength: 32, messageLength: 0, fullMessageLength: null, messageLengthSize: 8, start: function() { s.messageLength = 0, s.fullMessageLength = s.messageLength64 = []; for (var n = s.messageLengthSize / 4, i = 0; i < n; ++i) s.fullMessageLength.push(0); return e = a.util.createBuffer(), t = { h0: 1779033703, h1: 3144134277, h2: 1013904242, h3: 2773480762, h4: 1359893119, h5: 2600822924, h6: 528734635, h7: 1541459225 }, s } }; return s.start(), s.update = function(i, u) { if ("utf8" === u) i = a.util.encodeUtf8(i); var l = i.length;
                    s.messageLength += l, l = [l / 4294967296 >>> 0, l >>> 0]; for (var f = s.fullMessageLength.length - 1; f >= 0; --f) s.fullMessageLength[f] += l[1], l[1] = l[0] + (s.fullMessageLength[f] / 4294967296 >>> 0), s.fullMessageLength[f] = s.fullMessageLength[f] >>> 0, l[0] = l[1] / 4294967296 >>> 0; if (e.putBytes(i), o(t, n, e), e.read > 2048 || 0 === e.length()) e.compact(); return s }, s.digest = function() { var i = a.util.createBuffer();
                    i.putBytes(e.bytes()); var l, f = s.fullMessageLength[s.fullMessageLength.length - 1] + s.messageLengthSize & s.blockLength - 1,
                        c, h;
                    i.putBytes(u.substr(0, s.blockLength - f)); for (var p = 8 * s.fullMessageLength[0], m = 0; m < s.fullMessageLength.length - 1; ++m) p += h = (c = 8 * s.fullMessageLength[m + 1]) / 4294967296 >>> 0, i.putInt32(p >>> 0), p = c >>> 0;
                    i.putInt32(p); var v = { h0: t.h0, h1: t.h1, h2: t.h2, h3: t.h3, h4: t.h4, h5: t.h5, h6: t.h6, h7: t.h7 };
                    o(v, n, i); var g = a.util.createBuffer(); return g.putInt32(v.h0), g.putInt32(v.h1), g.putInt32(v.h2), g.putInt32(v.h3), g.putInt32(v.h4), g.putInt32(v.h5), g.putInt32(v.h6), g.putInt32(v.h7), g }, s }; var u = null,
                l = false,
                f = null },
        255: function(t, e, n) { "use strict"; var i = t.exports = function t() { this.expr = null, this.tokens = [] };
            i.prototype.replace = function replace(t, e) { t = t.toUpperCase(), this.tokens = this.getTokens(t, e).sort((function(t, e) { return e.length - t.length })); for (var n = 0; n < this.tokens.length; n++) t = t.split(this.tokens[n].toUpperCase()).join(" " + e[this.tokens[n]] + " "); return this.expr = t, this }, i.prototype.getTokens = function t(e, n) { return e = e.toUpperCase(), Object.keys(n).filter((function(t) { return /^[a-zA-Z_$][\w$-]*$/.test(t) })).filter((function(t) { return e.includes(t.toUpperCase()) })) } },
        256: function(t, e, n) { "use strict"; var i;
            t.exports.requestAnimationFrame = function t(e) { if (window.requestAnimationFrame) return window.requestAnimationFrame(e); if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame(e); if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(e); if (window.msRequestAnimationFrame) return window.msRequestAnimationFrame(e);
                else return e(), void 0 } },
        257: function(t, e, n) { "use strict";

            function i(t, section) { if (this.element = t, this.section = section, this.name = t.getAttribute("data-animation-name"), this.event = "scroll", this.durationRaw = t.getAttribute("data-animation-duration"), this.duration = Number(this.durationRaw), isNaN(this.duration) || !isFinite(this.duration) || this.duration < 0) this.duration = 0; var e = t.getAttribute("data-animation-event"); if (e) this.event = e; if (this.delayRaw = t.getAttribute("data-animation-delay"), this.delay = 0, this.delayRaw)
                    if (this.delay = Number(this.delayRaw), isNaN(this.delay) || !isFinite(this.delay) || this.delay < 0) this.delay = 0;
                var n = t.getAttribute("data-animation-cycle"); if (n)
                    if (n = Number(n), !isNaN(n)) this.animationCycle = n;
                var i = t.getAttribute("data-animation-direction"); if (i && "customAnimationIn" !== this.name) this.direction = i;
                this.animationOut = !t.hasAttribute("data-animation-out") || parseFloat(t.getAttribute("data-animation-out")), this.infinite = t.classList.contains("infinite") }
            t.exports = i, window.AnimationInfo = i },
        258: function(t, e, n) { "use strict";

            function HorizontalLayoutSlider(slider, t) { if (slider && slider.length) { var e = slider.children(".u-gallery-inner, .u-repeater"); if (e.length) { this.viewport = e; var n = slider.children(".u-gallery-nav"); if (n.length) { if (this.controls = n, this.data = { offset: 0, width: 0, scrollWidth: 0, maxOffset: 0 }, t) this._onScroll = this.onScroll.bind(this), this._onlazyloaded = this.onlazyloaded.bind(this), this.viewport.scroll(this._onScroll), this.viewport.find("img.lazyload").each(function(t, e) { e.onload = this._onlazyloaded }.bind(this)); if (this.updateInnerData(), t) this.updateControls() } } } }
            t.exports = HorizontalLayoutSlider, HorizontalLayoutSlider.prototype.onScroll = function() { this.updateControls() }, HorizontalLayoutSlider.prototype.onlazyloaded = function t() { this.updateInnerData(), this.updateControls() }, HorizontalLayoutSlider.prototype.updateControls = function() { this.updateOffset(); var data = this.data;
                this.controls.each((function() { var t = $(this),
                        state = t.hasClass("u-gallery-nav-next") ? data.offset >= data.maxOffset - 1 : data.offset <= 0;
                    t.toggleClass("u-hidden", state) })) }, HorizontalLayoutSlider.prototype.updateOffset = function() { this.data.offset = this.viewport.scrollLeft() }, HorizontalLayoutSlider.prototype.updateInnerData = function() { if (this.data && this.viewport && this.viewport[0]) { this.data.scrollWidth = this.viewport[0].scrollWidth, this.data.width = this.viewport.innerWidth(); var t = this.viewport.scrollLeft();
                    this.scrollToEnd(), this.data.maxOffset = this.viewport.scrollLeft(), this.viewport.scrollLeft(t) } }, HorizontalLayoutSlider.prototype.navigate = function(t) { if (!t.hasClass("u-hidden") && this.viewport) { this.updateInnerData(), this.updateOffset(); var e = this.data.offset,
                        n = this.data.width - 50,
                        i = .3 * this.data.width,
                        o = this.viewport.children().toArray().map((function(t) { return e + Math.round($(t).position().left) }));
                    o.push(this.data.maxOffset + this.data.width); var a = function(t) { return o.reduce((function(e, n) { return Math.abs(n - t) < Math.abs(e - t) ? n : e })) }; if (t.hasClass("u-gallery-nav-next")) { if (e = a(e + n) - 1, this.data.scrollWidth - (e + this.data.width) < i) e = this.data.maxOffset + i } else if (e > 0)
                        if ((e = a(e + this.data.width - n) - this.data.width - 1) < i) e = 0;
                    this.viewport.animate({ scrollLeft: e }, 500 * (Math.abs(this.data.offset - e) / n), "swing") } }, HorizontalLayoutSlider.prototype.scrollToEnd = function() { if (this.viewport) this.viewport.scrollLeft(this.data.scrollWidth) }, window._npHorizontalLayoutSlider = HorizontalLayoutSlider },
        259: function(t, e, n) { "use strict";

            function TabsControl(t) { this.tabsSelector = ".u-tabs", this.activeClass = "u-tab-active", this.activeSelector = "." + this.activeClass, this.activeLinkClass = "active", this.activeLinkSelector = "." + this.activeLinkClass, this.tabListSelector = ".u-tab-list", this.tabContentSelector = ".u-tab-content", this.tabLinkSelector = ".u-tab-link", this.tabPaneSelector = ".u-tab-pane", this._tabLink = this._getLink(t), this._tabList = this._tabLink.closest(this.tabListSelector), this._tabContent = this._tabLink.closest(this.tabsSelector).children(this.tabContentSelector) }
            TabsControl.prototype.show = function() { var link = this._tabLink; if (!link.is(this.activeLinkSelector)) this._removeActiveLink(), this._addActiveLink(link), this._activateTabPane(link) }, TabsControl.prototype._getLink = function(t) { if (t.is(this.tabPaneSelector)) return this._findLinkByPane(t);
                else return t.is(this.tabLinkSelector) ? t : t.children(this.tabLinkSelector) }, TabsControl.prototype._findLinkByPane = function(pane) { var t = pane.attr("aria-labelledby"),
                    tabList; return pane.closest(this.tabsSelector).children(this.tabListSelector).find("#" + t) }, TabsControl.prototype._removeActiveLink = function() { var t = this._getActiveLink();
                t.removeClass(this.activeLinkClass), t.attr("aria-selected", false) }, TabsControl.prototype._getActiveLink = function() { return this._tabList.find(this.activeLinkSelector) }, TabsControl.prototype._addActiveLink = function(link) { link.addClass(this.activeLinkClass), link.attr("aria-selected", true) }, TabsControl.prototype._activateTabPane = function(link) { var t, e;
                this._tabContent.children(this.activeSelector).removeClass(this.activeClass), this.getTabPane(link).addClass(this.activeClass) }, TabsControl.prototype.getTabPane = function(t) { var link, e = this._getLink(t).attr("href"); return this._tabContent.children(e) }, TabsControl.prototype.getTabLink = function() { return this._tabLink }, TabsControl.prototype.removeId = function() { this._tabList.find(this.tabLinkSelector).removeAttr("id"), this._tabContent.children().removeAttr("id") }, t.exports = TabsControl, window.TabsControl = TabsControl },
        260: function(t, e, n) { "use strict";

            function CountdownAnimate(t) { if (this.$dom = t, this.$html = this.$dom.find(".counter-animation"), !this.$html.length) { var e = this.$dom.text();
                    this.$html = $('<div class="counter-animation" style="display: none;"></div>'), this.$html.append('<div class="counter-wrapper"></div>'), this.$html.find(".counter-wrapper").append('<div class="counter-html"></div>'), this.$html.find(".counter-html").append($('<div class="old-val"></div>')), this.$html.find(".counter-html").append($('<div class="new-val"></div>')), this.$dom.empty(), this.$dom.append($('<span class="start-val"></span>').text(e)), this.$dom.append(this.$html) }
                this.onResize(), $(window).on("resize", function() { this.onResize() }.bind(this)) }
            t.exports = CountdownAnimate, CountdownAnimate.prototype.rollNumber = function(t, props) { if (!this.$dom.is(".updating")) { this.$dom.addClass("updating"); var e = this.getOldVal(),
                        n = this.$dom.find(".start-val"),
                        i = this.$dom.find(".counter-animation"),
                        o = 350; if (props.animationSpeed) o = props.animationSpeed > 20 ? props.animationSpeed - 20 : 0;
                    this.$html.find(".old-val").text(e), this.$html.find(".new-val").text(t), this.$html.find(".counter-html").css("top", 0), requestAnimationFrame(function() { n.css("display", "none"), i.css("display", "flex") }.bind(this)), this.$html.find(".counter-html").animate({ top: -this.height + "px" }, o, "swing", function() { requestAnimationFrame(function() { n.text(t), n.css("display", "inline-block"), i.css("display", "none"), this.$dom.removeClass("updating") }.bind(this)) }.bind(this)) } }, CountdownAnimate.prototype.onResize = function() { this.height = this.$dom.height(), this.$html.find(".counter-wrapper").css("height", this.height + "px") }, CountdownAnimate.prototype.getOldVal = function() { return this.$dom.find(".start-val").text() } },
        261: function(t, e, n) { "use strict";
            (function(t) {
                function i(id, t) { this._id = id, this._clearFn = t } var o = void 0 !== t && t || "undefined" != typeof self && self || window,
                    a = Function.prototype.apply;
                e.setTimeout = function() { return new i(a.call(setTimeout, o, arguments), clearTimeout) }, e.setInterval = function() { return new i(a.call(setInterval, o, arguments), clearInterval) }, e.clearTimeout = e.clearInterval = function(t) { if (t) t.close() }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() { this._clearFn.call(o, this._id) }, e.enroll = function(t, e) { clearTimeout(t._idleTimeoutId), t._idleTimeout = e }, e.unenroll = function(t) { clearTimeout(t._idleTimeoutId), t._idleTimeout = -1 }, e._unrefActive = e.active = function(t) { clearTimeout(t._idleTimeoutId); var e = t._idleTimeout; if (e >= 0) t._idleTimeoutId = setTimeout((function e() { if (t._onTimeout) t._onTimeout() }), e) }, n(408), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate }).call(e, n(45)) },
        2768: function(t, e, n) { "use strict";
            n(2769), n(2835), n(2836), n(2837), n(2838), n(2839) },
        2769: function(t, e, n) { "use strict";
            n(2770) },
        2770: function(t, e, n) { "use strict";
            n(2771), n(2772), n(395), n(2773), n(2774), n(2777), n(2778), n(2779), n(400), n(402), n(2780), n(2788), n(2789), n(2791), n(2793), n(2794), n(2795), n(2796), n(186), n(2797), n(2802), n(2803), n(2805), n(2806), n(2808), n(2810), n(2811), n(2813), n(2814), n(2815), n(2816), n(2817), n(2818), n(2819), n(2820), n(2821), n(2822), n(2823), n(2824), n(2827), n(2828), n(2829), n(2832), n(2834) },
        2771: function(t, e, n) { "use strict";

            function i() { if (window && document && "complete" !== document.readyState) { var t = document.body; if (t && t.classList && "function" == typeof t.classList.add && "function" == typeof t.classList.remove && "function" == typeof t.appendChild && "function" == typeof document.createElement && "function" == typeof window.addEventListener) { var e = "u-disable-duration";
                        t.classList.add(e); var styleNode = document.createElement("style");
                        styleNode.innerHTML = ".u-disable-duration * {transition-duration: 0s !important;}", t.appendChild(styleNode), window.addEventListener("load", (function() { t.classList.remove(e) })) } } }
            i() },
        2772: function(t, e, n) { "use strict"; if (!("CSS" in window)) window.CSS = {}; if (!("supports" in window.CSS)) "use strict", window.CSS._cacheSupports = {}, window.CSS.supports = function(t, e) {
                function n(t, e) { var style = document.createElement("div").style; if (void 0 === e) { var n = function(t, e) { var n = t.split(e); if (n.length > 1) return n.map((function(t, index, e) { return index % 2 == 0 ? t + e[index + 1] : "" })).filter(Boolean) },
                            i = n(t, /([)])\s*or\s*([(])/gi); if (i) return i.some((function(t) { return window.CSS.supports(t) })); var o = n(t, /([)])\s*and\s*([(])/gi); if (o) return o.every((function(t) { return window.CSS.supports(t) }));
                        style.cssText = t.replace("(", "").replace(/[)]$/, "") } else style.cssText = t + ":" + e; return !!style.length } var i = [t, e].toString(); if (i in window.CSS._cacheSupports) return window.CSS._cacheSupports[i];
                else return window.CSS._cacheSupports[i] = n(t, e) } },
        2773: function(t, e, n) { "use strict";

            function i(t) { if (this.prevMode = "", this.resizeTimeout = 50, this.sheet = { XS: 340, SM: 540, MD: 720, LG: 940, XL: 1140, XXL: 1320 }, this.mediaMax = { XS: 575, SM: 767, MD: 991, LG: 1199 }, this.modes = ["XL", "LG", "MD", "SM", "XS"], this.defaultMode = "XL", document.body.classList.contains("u-xxl-mode")) this.mediaMax.XXL = 1399, this.defaultMode = "XXL", this.modes.splice(0, 0, "XXL");
                this._handlers = [], this.modes.forEach((function(t) { var e = document.body.style.getPropertyValue("--theme-sheet-width-" + t.toLowerCase()); if (e = parseFloat(e), Number.isFinite(e)) this.sheet[t] = e })), this.init(t || []) } var ResponsiveMenu = n(396),
                o = n(9);
            Object.defineProperty(i.prototype, "mode", { get: function() { var t = (document.documentElement || document.body).clientWidth || window.innerWidth; if (this.scrolbar) document.documentElement.setAttribute("style", "overflow-y:hidden"), t = (document.documentElement || document.body).clientWidth || window.innerWidth, document.documentElement.removeAttribute("style"); for (var e in this.mediaMax)
                        if (this.mediaMax.hasOwnProperty(e))
                            if (t <= this.mediaMax[e]) return e;
                    return this.defaultMode } }), i.prototype.init = function init(t) { o(function() { this.update(true), this.scrolbar = !!(document.body && document.body.clientWidth !== document.body.scrollWidth) }.bind(this)), o(window).on("resize", function() { this.update(true) }.bind(this)), t.forEach((function(t) { this._handlers.push(new t(this)) }), this), this.update() }, i.prototype.update = function update(t) { var e = function() { if (this.mode !== this.prevMode || this.getContentWidth() < this.sheet[this.mode]) this._handlers.forEach((function(t) { if ("function" == typeof t.onResponsiveBefore) t.onResponsiveBefore() })), this.responsiveClass(o("html")), this._handlers.forEach((function(t) { if ("function" == typeof t.onResponsiveAfter) t.onResponsiveAfter() })), this.prevMode = this.mode;
                    this._handlers.forEach((function(t) { if ("function" == typeof t.onResponsiveResize) t.onResponsiveResize() })) }.bind(this); if (t) clearTimeout(this._timeoutId), this._timeoutId = setTimeout(e, this.resizeTimeout);
                else e() }, i.prototype.responsiveClass = function t(e) { var removeList = Object.keys(this.sheet).map((function(t) { return "u-responsive-" + t.toLowerCase() })).join(" ");
                e.removeClass(removeList), e.addClass("u-responsive-" + this.mode.toLowerCase()) }, i.prototype.getContentWidth = function() { return o(".u-body section:first").parent().width() }, o((function() { window._responsive = new i([ResponsiveMenu]), o(document).on("click", "[data-href]:not(.u-back-to-top), [data-post-link]", (function(t) { if (!t.isDefaultPrevented()) { var e = o(this),
                            url = e.attr("data-href") || e.attr("data-post-link"),
                            n = e.attr("data-target") || ""; if (n) window.open(url, n);
                        else window.location.href = url } })) })) },
        2774: function(t, e, n) { "use strict";

            function i() { return { submit: function(t) { t.preventDefault(), t.stopPropagation(); var form = h(this);
                        form.find('input[type="submit"]').prop("disabled", true); var url = form.attr("action"),
                            e = form.attr("source"),
                            n = form.attr("method") || "POST",
                            i = ""; if (c(form), ("email" === e || "customphp" === e) && "true" === form.attr("redirect")) i = form.attr("redirect-url") && !h.isNumeric(form.attr("redirect-url")) ? form.attr("redirect-url") : form.attr("redirect-address"); if ("email" === e && !h(form).find('input[name="npspec-referer"]').length) h(form).append('<input type="hidden" name="npspec-referer" value="' + window.location.href + '">'); var o = document.location && document.location.protocol,
                            u; if (navigator.userAgent && navigator.userAgent.match(/firefox|fxios/i) && "file:" === o) FormMessage.showError(form, "The page is opened as a file on disk and sending emails is not supported.\n" + "Sending emails works only for pages opened from the domain.");
                        else { var services = form.find('input[name="formServices"]'),
                                l = Const.formActionUrl + "v2/form/process",
                                f = url === l; if (services.length) s(form, { url: l, method: "POST", redirectAddress: i, showSuccess: f, success: function() { if (!f) a(form, { url: url, method: n, redirectAddress: i }) } });
                            else a(form, { url: url, method: n, redirectAddress: i }) } }, click: function(t) { t.preventDefault(), t.stopPropagation(), h(this).find(".u-form-send-success").hide(), h(this).find(".u-form-send-error").hide(); var form = h(this).closest("form"); if (o(form), !p.signatureValidation(form)) return FormMessage.showError(form, "The Signature field is required"), void 0; if (!f(form)) return FormMessage.showError(form, "The File field is required"), void 0;
                        else return p.addSignatureFiles(form), form.find('input[type="submit"]').click(), void 0 } } }

            function o(form) { form.find(".u-form-checkbox-group").each((function() { var t = h(this),
                        e = t.find("input"),
                        n = e.length,
                        i = n > 0 ? e[0] : null,
                        o; if (e.attr("required") || t.attr("data-required")) { e.removeAttr("required"), t.attr("data-required", "required"); for (var a = false, s = 0; s < n; s++)
                            if (e[s].checked) { a = true; break }
                        var u = !a ? "At least one checkbox must be selected." : "";
                        i.setCustomValidity(u) } })) }

            function a(form, t) { if (/list-manage[1-9]?.com/i.test(t.url)) return u(form, t.url), void 0;
                s(form, { url: t.url, method: t.method, redirectAddress: t.redirectAddress, success: l, showSuccess: true }) }

            function s(form, t) { var e = function() { h.ajax({ type: t.method, url: t.url, data: new FormData(form[0]), dataType: "json", processData: false, contentType: false }).done((function(data, e) { if (data && (data.success || data.ok) || !data && "success" === e) { if (t.showSuccess) FormMessage.showSuccess(form); if (t.redirectAddress) setTimeout((function() { window.location.replace(t.redirectAddress) }), 2e3);
                            else t.success(form) } else data = data || {}, FormMessage.showError(form, data.error, data.errorId, data.email) })).fail((function() { FormMessage.showError(form) })) }; if (void 0 !== window.recaptchaObject) window.recaptchaObject.executeContact(e);
                else e() }

            function u(form, url) { var t = form.find("input[name=name]").val(),
                    email = form.find("input[name=email]").val(),
                    data = { Email: email, EMAIL: email }; if (t) data.Name = t, data.FNAME = t; var e = form.find("input, textarea");
                h.each(e, (function(index, t) { var e = h(t).attr("name"),
                        n = h(t).val(); if (e && n) data[e.toUpperCase()] = n })); var n = (url = url.replace("/post?", "/post-json?") + "&c=?").indexOf("u=") + 2;
                n = url.substring(n, url.indexOf("&", n)); var i = url.indexOf("id=") + 3;
                i = url.substring(i, url.indexOf("&", i)), data["b_" + n + "_" + i] = "", h.ajax({ url: url, data: data, dataType: "jsonp" }).done((function(t) { var e; if ("success" === t.result || /already/.test(t.msg)) FormMessage.showSuccess(form), l(form);
                    else FormMessage.showError(form, t.msg) })).fail((function() { FormMessage.showError(form) })) }

            function l(form) { var dialog = new Dialog(form);
                setTimeout((function() { dialog.close() }), 2e3) }

            function f(form) { var t = form.find('input[type="file"][required]'); if (!t.length) return true;
                else return t.toArray().every((function(input) { return input.files.length })) }

            function c(form) { var t;
                form.find("input[type=tel]").each((function() { var t = h(this),
                        e = t.parents(".iti").find(".iti__selected-flag").attr("title") || "";
                    t.val(e + " " + t.val()) })) } var h = n(9),
                Dialog = n(185),
                p = n(2775),
                FormMessage = n(782),
                Const = n(2776);
            h((function() { var form = new i;
                h("form.u-form-vertical:not(.u-form-custom-backend), form.u-form-horizontal:not(.u-form-custom-backend)").submit(form.submit), h(".u-form .u-btn-submit").click(form.click) })), window.MailChimpForm = i },
        2775: function(t, e, n) { "use strict";

            function i(t) { var e = JSON.parse(t.getAttribute("data-canvas-default-options") || "{}");
                a(t, e) }

            function o(t) { var e, n = t.clone().get(0),
                    i = JSON.parse(n.getAttribute("data-canvas-default-options") || "{}"); return a(n, i), n.toDataURL() }

            function a(t, e) { var n = t.getContext("2d");
                n.clearRect(0, 0, e.width, e.height), n.lineWidth = e.lineWidth, n.strokeStyle = e.strokeStyle, n.fillStyle = e.fillStyle, n.fillRect(0, 0, e.width, e.height), n.beginPath(), n.moveTo(e.signatureLine.startX, e.signatureLine.startY), n.lineTo(e.signatureLine.endX, e.signatureLine.endY), n.stroke() }

            function s(t, fileName) { for (var e = t.split(","), n = e[0].match(/:(.*?);/)[1], i = atob(e[1]), o = i.length, a = new Uint8Array(o); o--;) a[o] = i.charCodeAt(o); var s = new Blob([a], { type: n }); return new File([s], fileName) } var u = t.exports = {};
            u.signatureValidation = function t(form) { var e = form.find("canvas"),
                    n, data; if (!e.length) return true; if (!e.attr("data-required")) return true;
                else return o(e) !== e.get(0).toDataURL() }, u.addSignatureFiles = function t(form) { form.find("canvas").each((function() { var t = $(this).get(0),
                        e, n = s(t.toDataURL(), "signature.png"),
                        o = form.find(".u-form-signature-file"); if (o.length) o.remove(); var file = $('<input class="u-form-signature-file" style="display:none" type="file" name="file">');
                    form.append(file); var a = new DataTransfer;
                    a.items.add(n), file[0].files = a.files, i(t) })) } },
        2776: function(t, e, n) { "use strict"; var Const;
            (t.exports = {}).formActionUrl = ["https://forms.", "n", "i", "c", "e", "p", "a", "g", "e", "srv.com/"].join("") },
        2777: function(t, e, n) { "use strict"; var i = n(397).evaluate,
                o = n(398);
            $((function() {
                function t(t) { var form;
                    $(t && t.target).closest("form").each((function(index, form) { var t = new o(form).getScope();
                        $(form).find("[data-expression]").each((function() { var e = $(this),
                                n = e.closest(".u-form-calc").find(".u-calc-input"); try { var o = e.attr("data-expression"),
                                    a = i(o, t);
                                e.text(a), n.val(a) } catch (t) { e.text(0), n.val(0) } })) })) }
                $("body").on("input", "input[type=number][name]", t), $("body").on("change", "input[type=range][name], input[type=radio][name], input[type=checkbox][name], select[name]", t) })) },
        2778: function(t, e, n) { "use strict";

            function i() { $(".u-form input[type=file]").change((function() { var form = $(this).closest(".u-form");
                    l(form), f(form) })) }

            function o() { $(".u-form .u-upload-button").click((function(t) { t.stopPropagation(), t.preventDefault(), $(this).closest(".u-form").find('input[type="file"]').click() })) }

            function a() { $(".u-form").on("click", ".u-file-remove", (function(t) { t.stopPropagation(), t.preventDefault(); var e = $(this),
                        form = e.closest(".u-form"),
                        n = e.closest(".u-file-item"),
                        i = parseFloat(n.attr("data-i")); if (Number.isFinite(i)) c(form, i), f(form) })) }

            function s() { $(".u-form").on("reset", (function() { var form = $(this).closest(".u-form"),
                        input = form.find('input[type="file"]').get(0); if (input) input.files = (new DataTransfer).files, f(form) })) }

            function u() { $('.u-form input[type="file"]').each((function() { var t = $(this),
                        e = t.attr("accept"); if (e in FormFileAccept) e = FormFileAccept[e];
                    t.attr("accept", e) })) }

            function l(form) { var input = form.find('input[type="file"]').get(0),
                    t = []; if (input)
                    if (Array.from(input.files).forEach((function(file, e) { if (file.size > h || e >= p) t.push({ i: e, name: file.name }) })), t.length) { c(form, t.map((function(t) { return t.i }))); var e = '"{files}" file(s) size exceeds maximum limit.',
                            n = t.map((function(t) { return t.name })).join(", ");
                        FormMessage.showError(form, e.replace(/\{files\}/, n)) } }

            function f(form) { form.find(".u-file-list .u-file-item:not(.u-file-template)").remove(); var input = form.find('input[type="file"]').get(0),
                    t = form.find(".u-file-template"); if (input) Array.from(input.files).forEach((function(file, e) { var n = t.clone();
                    n.removeClass("u-file-template"), n.find(".u-file-name").text(file.name), n.attr("data-i", e), form.find(".u-file-list").append(n) })) }

            function c(form, index) { var input = form.find('input[type="file"]').get(0),
                    t = new DataTransfer; if (input) { if (!Array.isArray(index)) index = [index];
                    Array.from(input.files).forEach((function(file, e) { if (!index.includes(e)) t.items.add(file) })), input.files = t.files } } var FormFileAccept = n(399),
                FormMessage = n(782),
                h = 10 * 1024 * 1024,
                p = 10;
            $((function() { i(), o(), a(), s(), u() })) },
        2779: function(t, e, n) { "use strict";

            function i(el) { var video;
                el.find(".u-video .embed-responsive-item").each((function() { if (this.matches("video")) this.pause();
                    else if (this.matches("iframe")) { var t = this.getAttribute("src");
                        this.setAttribute("src", t.replace(/autoplay=1?/gi, "")) } })) }

            function o(t) { var video;
                (t.hasClass("u-video") ? t : t.find(".u-video")).find(".embed-responsive-item[data-autoplay]").each((function() { a(s(this).closest(".u-video")) })) }

            function a(video) { if (!video.closest(".u-dialog-block:not(.u-dialog-open)").length) { var t = video.find("iframe"),
                        e = t.attr("data-src") || t.attr("src"),
                        n = video.find("video"); if (e) video.addClass("active"), e += (-1 === e.indexOf("?") ? "?" : "&") + "autoplay=1", t.attr("src", e);
                    else if (n.length) { video.addClass("active"); var i = n[0]; if (i.paused) i.play();
                        else i.pause() } } } var s = n(9);
            s(document).on("click", ".u-video-poster, .u-video video", (function(t) { var e, video;
                t.preventDefault(), a(s(this).closest(".u-video")) })), s((function() { s(".u-video-background .u-video-poster, .u-video-background .u-video video").each((function() { a(s(this).closest(".u-video")) })), s(".u-video .embed-responsive-item:not(.lazyloading, .lazyloaded) + .u-video-poster").each((function() { var t = this.getAttribute("data-src"); if (t) this.style.backgroundImage = "url(" + t + ")";
                    o(s(this).closest(".u-video")) })) })), s(document).on("opened.np.dialog", ".u-dialog-block", (function(t) { o(s(t.currentTarget)) })), s(document).on("closed.np.dialog", ".u-dialog-block", (function(t) { i(s(t.currentTarget)) })) },
        2780: function(t, e, n) { "use strict"; var i = n(9),
                o = n(2781);
            i((function() {
                (new o).init() })) },
        2781: function(t, e, n) { "use strict";

            function i() { this.galleries = null, this._pswpElement = null, this._listeners = [], this._onItemClick = this.onItemClick.bind(this) } var Utils = n(2782),
                o = n(2783),
                a = n(2784),
                s = n(2785),
                u = n(9),
                l = n(2786),
                f = n(2787);
            t.exports = i, Object.defineProperty(i.prototype, "pswpElement", { get: function() { if (!this._pswpElement) this._pswpElement = u(".pswp")[0]; if (!this._pswpElement) { var t = u(a.PSQF_TEMPLATE).appendTo(".u-body");
                        this._pswpElement = t[0] } return this._pswpElement } }), i.prototype.init = function() { this.initGallery(), this.subscribe(), this.checkHashUrl() }, i.prototype.initGallery = function() { var t = {};
                u(a.LIGHTBOX_SELECTOR).each((function(t) { u(this).attr("data-psqf-uid", t + 1) })), u(a.GALLERY_ITEM_SELECTOR).each((function() { var e = this.closest(a.LIGHTBOX_SELECTOR); if (e && this !== e) { var n = e.getAttribute("data-psqf-uid"),
                            gallery = t[n]; if (!gallery) gallery = { dom: e, items: [] };
                        this.setAttribute("data-psqf-item-id", gallery.items.length), this.setAttribute("data-gallery-uid", n), gallery.items.push(this), t[n] = gallery } })), this.galleries = t }, i.prototype.subscribe = function() { for (var t = Object.keys(this.galleries), e = 0; e < t.length; e++)
                    for (var id = t[e], gallery = this.galleries[id], n = 0; n < gallery.items.length; n++) { var i = gallery.items[n];
                        u(i).on("click", this._onItemClick) } }, i.prototype.onItemClick = function(t) { var e = t.currentTarget; if (!e.matches("[data-href]")) { t.preventDefault(), t.stopPropagation(), t.returnValue = false; var index = e.getAttribute("data-psqf-item-id"),
                        n = e.getAttribute("data-gallery-uid"),
                        gallery = this.galleries[n]; if (gallery && index >= 0) this.openOnClick(index, gallery) } }, i.prototype.listen = function(t, e) { this._listeners.push({ event: t, func: e }) }, i.prototype.checkHashUrl = function() { var t = Utils.parseHash(); if (t.pid && t.gid) this.openFromUrl(t.pid, this.galleries[t.gid]) }, i.prototype.openOnClick = function(index, gallery) { var t = gallery.dom.getAttribute("data-psqf-uid");
                o.gallery(gallery, (function(items) { var e = this.buildOptions(t, items);
                    e.index = parseFloat(index), e.showPreviews = gallery.dom.classList.contains("u-product-control"), this.showPswp(items, e) }), this) }, i.prototype.openFromUrl = function(index, gallery) { var t = gallery.dom.getAttribute("data-psqf-uid");
                o.gallery(gallery, (function(items) { var e = this.buildOptions(t, items); if (e.showAnimationDuration = 0, e.index = parseFloat(index) - 1, e.showPreviews = gallery.dom.classList.contains("u-product-control"), e.galleryPIDs)
                        for (var n = 0; n < items.length; n++)
                            if (items[n].pid == index) { e.index = n; break }
                    this.showPswp(items, e) }), this) }, i.prototype.showPswp = function(items, t) { if (Number.isFinite(t.index)) { var e = new l(this.pswpElement, f, items, t);
                    s.init(e, t), this._listeners.forEach((function(t) { e.listen(t.event, t.func) })), e.init() } }, i.prototype.buildOptions = function(t, items) { var e; return { galleryUID: t, getThumbBoundsFn: function(index) { var t = window.pageYOffset || document.documentElement.scrollTop,
                            rect = items[index].el.getBoundingClientRect(); return { x: rect.left, y: rect.top + t, w: rect.width } }, addCaptionHTMLFn: function(t, e, n) { if (n) return e.children[0].innerHTML = "<br><br>", true; if (!t.title) return e.children[0].innerHTML = "", false; var i = t.title; if (t.desc) i += "<br><small>" + t.desc + "</small>"; return e.children[0].innerHTML = i, true }, showHideOpacity: true, history: window.location === window.parent.location } }, window.Lightbox = i },
        2782: function(t, e, n) { "use strict"; var Utils;
            (t.exports = {}).parseHash = function t() { var hash = window.location.hash.substring(1),
                    e = {}; if (hash.length < 5) return e; for (var n = hash.split("&"), i = 0; i < n.length; i++)
                    if (n[i]) { var o = n[i].split("="); if (!(o.length < 2)) e[o[0]] = o[1] }
                if (e.gid) e.gid = parseInt(e.gid, 10); return e } },
        2783: function(t, e, n) { "use strict";

            function i(t) { return new Promise((function(e, n) { if (t.is(".u-background-effect ~ .u-container-layout")) i(t.prev(".u-background-effect").find(".u-background-effect-image")).then((function(t) { e(t) }), n);
                    else if (t.is("img")) { var a = t[0].naturalWidth || t.attr("data-image-width") || t.attr("imgwidth") || t.width(),
                            s = t[0].naturalHeight || t.attr("data-image-height") || t.attr("imgheight") || t.height();
                        e({ el: t[0], src: t.attr("src"), msrc: t.attr("src"), w: parseFloat(a), h: parseFloat(s) }) } else if (t.is(".u-video")) e({ el: t[0], html: t.find(".u-background-video").get(0).outerHTML });
                    else if (t.is(".u-gallery-item")) i(t.find(".u-back-slide")).then((function(t) { e(t) }), n);
                    else if (t.is(".u-back-slide")) i(t.find(".u-back-image")).then((function(n) { var i = t.siblings(".u-over-slide"),
                            o = t.closest(".u-gallery").is(".u-layout-thumbnails"); if (i.length && !o) n.title = i.find(".u-gallery-heading").html(), n.desc = i.find(".u-gallery-text").html();
                        e(n) }), n);
                    else o(t).then((function(n) { e({ el: t[0], src: n.src, msrc: n.src, w: n.width, h: n.height }) }), n) })) }

            function o(t) { var e = t.css("background-image"),
                    n = e.match(/url\(['"]?(.+?)['"]?\)/); return new Promise((function(t, i) { if (n) { var o = new Image;
                        o.onload = t.bind(null, o), o.onerror = o.onabort = i, o.src = n[1] } else i(new Error("Invalid source: " + e)) })) } var a = n(9),
                s;
            (t.exports = {}).gallery = function gallery(gallery, t, e) { e = e || null; var n = gallery.items.map((function(t) { return i(t = a(t)) }));
                Promise.all(n).then(t.bind(e), console.log) } },
        2784: function(t, e, n) { "use strict"; var i = t.exports = {};
            i.LIGHTBOX_SELECTOR = ".u-lightbox", i.GALLERY_ITEM_SELECTOR = [".u-image:not(.u-carousel-thumbnail-image):not(.u-background-effect-image)", ".u-gallery-item", ".u-background-effect ~ .u-container-layout"].join(", "), i.PSQF_TEMPLATE = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n' + '  <div class="psqf__bg"></div>\n' + '  <div class="psqf__scroll-wrap">\n' + '    <div class="psqf__container">\n' + '     <div class="psqf__item"></div>\n' + '     <div class="psqf__item"></div>\n' + '      <div class="psqf__item"></div>\n' + "    </div>\n" + '    <div class="psqf__ui psqf__ui--hidden">\n' + '      <div class="psqf__top-bar">\n ' + '       <div class="psqf__counter"></div>\n' + '        <button class="psqf__button psqf__button--close" title="Close (Esc)"></button>\n' + '        <button class="psqf__button psqf__button--share" title="Share"></button>\n' + '        <button class="psqf__button psqf__button--fs" title="Toggle fullscreen"></button>\n' + '        <button class="psqf__button psqf__button--zoom" title="Zoom in/out"></button>\n' + '        <div class="psqf__preloader">\n' + '          <div class="psqf__preloader__icn">\n' + '            <div class="psqf__preloader__cut">\n' + '              <div class="psqf__preloader__donut"></div>\n' + "            </div>\n" + "          </div>\n" + "        </div>\n" + "      </div>\n" + '      <div class="psqf__share-modal psqf__share-modal--hidden psqf__single-tap">\n' + '        <div class="psqf__share-tooltip"></div>\n' + "      </div>\n" + '      <button class="psqf__button psqf__button--arrow--left" title="Previous (arrow left)"></button>\n' + '      <button class="psqf__button psqf__button--arrow--right" title="Next (arrow right)"></button>\n' + '      <div class="psqf__previews" data-previews="data-previews" style="display: none"></div>' + '      <div class="psqf__caption">\n' + '        <div class="psqf__caption__center"></div>\n' + "      </div>\n" + "    </div>\n" + "  </div>\n" + "</div>" },
        2785: function(t, e, n) { "use strict";

            function i(gallery, selector) { var t = gallery.scrollWrap,
                    e = t.querySelector(selector),
                    n;
                t.querySelector(".psqf__caption").style.display = "none", e.style.display = "" }

            function o(gallery, selector) { var t = gallery.scrollWrap,
                    e = t.querySelector(selector),
                    n;
                t.querySelector(".psqf__caption").style.display = "", e.style.display = "none" }

            function add(gallery, selector) { var t = gallery.scrollWrap,
                    items = gallery.items,
                    e = t.querySelector(selector);
                items.forEach((function(t) { var preview = t.msrc,
                        n = document.createElement("img");
                    n.setAttribute("src", preview), n.addEventListener("click", (function() { gallery.goTo(items.indexOf(t)) })), e.appendChild(n) })) }

            function remove(gallery, selector) { var t, e;
                gallery.scrollWrap.querySelector(selector).innerHTML = "" }

            function a(gallery, selector) { var t = gallery.scrollWrap,
                    e, preview = gallery.currItem.msrc,
                    n, i;
                t.querySelector(selector).querySelectorAll("img").forEach((function(t) { var e, n = "active"; if (t.getAttribute("src") === preview) t.classList.add(n), t.scrollIntoView({ behavior: "smooth" });
                    else t.classList.remove(n) })) } var s;
            t.exports.init = function init(gallery, t) { var e = false;
                gallery.listen("gettingData", (function() { if (!e) { if (e = true, t.showPreviews) i(gallery, "[data-previews]");
                        else o(gallery, "[data-previews]");
                        add(gallery, "[data-previews]") } })), gallery.listen("close", (function() { remove(gallery, "[data-previews]") })), gallery.listen("afterChange", (function() { a(gallery, "[data-previews]") })) } },
        2786: function(t, e, n) { "use strict"; var i, o;
            /*! PhotoSwipe - v4.1.3 - 2019-01-08
             * http://photoswipe.com
             * Copyright (c) 2019 Dmitry Semenov; */
            ! function(a, factory) { if (true) !(void 0 !== (o = "function" == typeof(i = factory) ? i.call(e, n, e, t) : i) && (t.exports = o));
                else if ("object" == typeof e) t.exports = factory();
                else a.PhotoSwipe = factory() }(this, (function() { var t = function(template, t, items, e) { var n = { features: null, bind: function(t, type, e, n) { var i = (n ? "remove" : "add") + "EventListener";
                            type = type.split(" "); for (var o = 0; o < type.length; o++)
                                if (type[o]) t[i](type[o], e, false) }, isArray: function(t) { return t instanceof Array }, createEl: function(t, e) { var el = document.createElement(e || "div"); if (t) el.className = t; return el }, getScrollY: function() { var t = window.pageYOffset; return void 0 !== t ? t : document.documentElement.scrollTop }, unbind: function(t, type, e) { n.bind(t, type, e, true) }, removeClass: function(el, t) { var e = new RegExp("(\\s|^)" + t + "(\\s|$)");
                            el.className = el.className.replace(e, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }, addClass: function(el, t) { if (!n.hasClass(el, t)) el.className += (el.className ? " " : "") + t }, hasClass: function(el, t) { return el.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(el.className) }, getChildByClass: function(t, e) { for (var i = t.firstChild; i;) { if (n.hasClass(i, e)) return i;
                                i = i.nextSibling } }, arraySearch: function(t, e, n) { for (var i = t.length; i--;)
                                if (t[i][n] === e) return i;
                            return -1 }, extend: function(t, e, n) { for (var i in e)
                                if (e.hasOwnProperty(i)) { if (n && t.hasOwnProperty(i)) continue;
                                    t[i] = e[i] } }, easing: { sine: { out: function(t) { return Math.sin(t * (Math.PI / 2)) }, inOut: function(t) { return -(Math.cos(Math.PI * t) - 1) / 2 } }, cubic: { out: function(t) { return --t * t * t + 1 } } }, detectFeatures: function() { if (n.features) return n.features; var t, e = n.createEl().style,
                                i = "",
                                o = {}; if (o.oldIE = document.all && !document.addEventListener, o.touch = "ontouchstart" in window, window.requestAnimationFrame) o.raf = window.requestAnimationFrame, o.caf = window.cancelAnimationFrame; if (o.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled, !o.pointerEvent) { var a = navigator.userAgent; if (/iP(hone|od)/.test(navigator.platform)) { var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/); if (s && s.length > 0)
                                        if ((s = parseInt(s[1], 10)) >= 1 && s < 8) o.isOldIOSPhone = true } var u = a.match(/Android\s([0-9\.]*)/),
                                    l = u ? u[1] : 0; if ((l = parseFloat(l)) >= 1) { if (l < 4.4) o.isOldAndroid = true;
                                    o.androidVersion = l }
                                o.isMobileOpera = /opera mini|opera mobi/i.test(a) } for (var f = ["transform", "perspective", "animationName"], c = ["", "webkit", "Moz", "ms", "O"], h, p, m = 0; m < 4; m++) { i = c[m]; for (var v = 0; v < 3; v++)
                                    if (h = f[v], p = i + (i ? h.charAt(0).toUpperCase() + h.slice(1) : h), !o[h] && p in e) o[h] = p;
                                if (i && !o.raf)
                                    if (i = i.toLowerCase(), o.raf = window[i + "RequestAnimationFrame"], o.raf) o.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"] } if (!o.raf) { var g = 0;
                                o.raf = function(t) { var e = (new Date).getTime(),
                                        n = Math.max(0, 16 - (e - g)),
                                        id = window.setTimeout((function() { t(e + n) }), n); return g = e + n, id }, o.caf = function(id) { clearTimeout(id) } } return o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, n.features = o, o } }; if (n.detectFeatures(), n.features.oldIE) n.bind = function(t, type, e, n) { type = type.split(" "); for (var i = (n ? "detach" : "attach") + "Event", o, a = function() { e.handleEvent.call(e) }, s = 0; s < type.length; s++)
                            if (o = type[s])
                                if ("object" == typeof e && e.handleEvent) { if (!n) e["oldIE" + o] = a;
                                    else if (!e["oldIE" + o]) return false;
                                    t[i]("on" + o, e["oldIE" + o]) } else t[i]("on" + o, e) }; var i = this,
                        o = 25,
                        a = 3,
                        s = { allowPanToNext: true, spacing: .12, bgOpacity: 1, mouseUsed: false, loop: true, pinchToClose: true, closeOnScroll: true, closeOnVerticalDrag: true, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: false, focus: true, escKey: true, arrowKeys: true, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(el) { return "A" === el.tagName }, getDoubleTapZoom: function(t, e) { if (t) return 1;
                                else return e.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: true, scaleMode: "fit" };
                    n.extend(s, e); var u = function() { return { x: 0, y: 0 } },
                        l, f, c, h, p, m, v = { x: 0, y: 0 },
                        g = { x: 0, y: 0 },
                        y = { x: 0, y: 0 },
                        w, b, C, x = {},
                        S, A, _, T, I, E, k = 0,
                        M = {},
                        L = { x: 0, y: 0 },
                        B, O, P = 0,
                        F, N, z, U, H, $, V = true,
                        Y, W = [],
                        j, G, X, Z, K, J, tt, nt = {},
                        rt = false,
                        ot, at = function(t, e) { n.extend(i, e.publicMethods), W.push(t) },
                        st = function(index) { var t = wn(); if (index > t - 1) return index - t;
                            else if (index < 0) return t + index; return index },
                        ut = {},
                        lt = function(t, e) { if (!ut[t]) ut[t] = []; return ut[t].push(e) },
                        ft = function(t) { var e = ut[t]; if (e) { var n = Array.prototype.slice.call(arguments);
                                n.shift(); for (var o = 0; o < e.length; o++) e[o].apply(i, n) } },
                        ct = function() { return (new Date).getTime() },
                        dt = function(t) { Le = t, i.bg.style.opacity = t * s.bgOpacity },
                        ht = function(t, e, n, o, a) { if (!rt || a && a !== i.currItem) o /= a ? a.fitRatio : i.currItem.fitRatio;
                            t[H] = _ + e + "px, " + n + "px" + T + " scale(" + o + ")" },
                        pt = function(t) { if (Se) { if (t)
                                    if (S > i.currItem.fitRatio) { if (!rt) In(i.currItem, false, true), rt = true } else if (rt) In(i.currItem), rt = false;
                                ht(Se, y.x, y.y, S) } },
                        mt = function(t) { if (t.container) ht(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t) },
                        vt = function(t, e) { e[H] = _ + t + "px, 0px" + T },
                        gt = function(t, e) { if (!s.loop && e) { var n = h + (L.x * k - t) / L.x,
                                    i = Math.round(t - xe.x); if (n < 0 && i > 0 || n >= wn() - 1 && i < 0) t = xe.x + i * s.mainScrollEndFriction }
                            xe.x = t, vt(t, p) },
                        yt = function(t, e) { var n = _e[t] - M[t]; return g[t] + v[t] + n - n * (e / A) },
                        wt = function(t, e) { if (t.x = e.x, t.y = e.y, e.id) t.id = e.id },
                        bt = function(t) { t.x = Math.round(t.x), t.y = Math.round(t.y) },
                        Ct = null,
                        xt = function() { if (Ct) n.unbind(document, "mousemove", xt), n.addClass(template, "psqf--has_mouse"), s.mouseUsed = true, ft("mouseUsed");
                            Ct = setTimeout((function() { Ct = null }), 100) },
                        St = function() { if (n.bind(document, "keydown", i), tt.transform) n.bind(i.scrollWrap, "click", i); if (!s.mouseUsed) n.bind(document, "mousemove", xt);
                            n.bind(window, "resize scroll orientationchange", i), ft("bindEvents") },
                        At = function() { if (n.unbind(window, "resize scroll orientationchange", i), n.unbind(window, "scroll", C.scroll), n.unbind(document, "keydown", i), n.unbind(document, "mousemove", xt), tt.transform) n.unbind(i.scrollWrap, "click", i); if (ue) n.unbind(window, w, i);
                            clearTimeout(ot), ft("unbindEvents") },
                        _t = function(t, update) { var e = Sn(i.currItem, x, t); if (update) Ce = e; return e },
                        Tt = function(t) { if (!t) t = i.currItem; return t.initialZoomLevel },
                        Dt = function(t) { if (!t) t = i.currItem; return t.w > 0 ? s.maxSpreadZoom : 1 },
                        kt = function(t, e, n, o) { if (o === i.currItem.initialZoomLevel) return n[t] = i.currItem.initialPosition[t], true;
                            else if (n[t] = yt(t, o), n[t] > e.min[t]) return n[t] = e.min[t], true;
                            else if (n[t] < e.max[t]) return n[t] = e.max[t], true; return false },
                        Mt = function() { if (H) { var t = tt.perspective && !Y; return _ = "translate" + (t ? "3d(" : "("), T = tt.perspective ? ", 0px)" : ")", void 0 }
                            H = "left", n.addClass(template, "psqf--ie"), vt = function(t, e) { e.left = t + "px" }, mt = function(t) { var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                                    n = t.container.style,
                                    i = e * t.w,
                                    o = e * t.h;
                                n.width = i + "px", n.height = o + "px", n.left = t.initialPosition.x + "px", n.top = t.initialPosition.y + "px" }, pt = function() { if (Se) { var t = Se,
                                        e = i.currItem,
                                        n = e.fitRatio > 1 ? 1 : e.fitRatio,
                                        o = n * e.w,
                                        a = n * e.h;
                                    t.width = o + "px", t.height = a + "px", t.left = y.x + "px", t.top = y.y + "px" } } },
                        Lt = function(t) { var e = ""; if (s.escKey && 27 === t.keyCode) e = "close";
                            else if (s.arrowKeys)
                                if (37 === t.keyCode) e = "prev";
                                else if (39 === t.keyCode) e = "next"; if (e)
                                if (!(t.ctrlKey || t.altKey || t.shiftKey || t.metaKey)) { if (t.preventDefault) t.preventDefault();
                                    else t.returnValue = false;
                                    i[e]() } },
                        Bt = function(t) { if (t)
                                if (ce || fe || Ae || ie) t.preventDefault(), t.stopPropagation() },
                        Ot = function() { i.setScrollOffset(0, n.getScrollY()) },
                        Pt = {},
                        Ft = 0,
                        Rt = function(t) { if (Pt[t]) { if (Pt[t].raf) G(Pt[t].raf);
                                Ft--, delete Pt[t] } },
                        Nt = function(t) { if (Pt[t]) Rt(t); if (!Pt[t]) Ft++, Pt[t] = {} },
                        zt = function() { for (var t in Pt)
                                if (Pt.hasOwnProperty(t)) Rt(t) },
                        Ut = function(t, e, n, d, i, o, a) { var s = ct(),
                                u;
                            Nt(t); var l = function() { if (Pt[t]) { if ((u = ct() - s) >= d) { if (Rt(t), o(n), a) a(); return }
                                    o((n - e) * i(u / d) + e), Pt[t].raf = j(l) } };
                            l() },
                        qt = { shout: ft, listen: lt, viewportSize: x, options: s, isMainScrollAnimating: function() { return Ae }, getZoomLevel: function() { return S }, getCurrentIndex: function() { return h }, isDragging: function() { return ue }, isZooming: function() { return ye }, setScrollOffset: function(t, e) { M.x = t, J = M.y = e, ft("updateScrollOffset", M) }, applyZoomPan: function(t, e, n, i) { y.x = e, y.y = n, S = t, pt(i) }, init: function() { if (!l && !f) { var e;
                                    i.framework = n, i.template = template, i.bg = n.getChildByClass(template, "psqf__bg"), X = template.className, l = true, tt = n.detectFeatures(), j = tt.raf, G = tt.caf, H = tt.transform, K = tt.oldIE, i.scrollWrap = n.getChildByClass(template, "psqf__scroll-wrap"), i.container = n.getChildByClass(i.scrollWrap, "psqf__container"), p = i.container.style, i.itemHolders = B = [{ el: i.container.children[0], wrap: 0, index: -1 }, { el: i.container.children[1], wrap: 0, index: -1 }, { el: i.container.children[2], wrap: 0, index: -1 }], B[0].el.style.display = B[2].el.style.display = "none", Mt(), C = { resize: i.updateSize, orientationchange: function() { clearTimeout(ot), ot = setTimeout((function() { if (x.x !== i.scrollWrap.clientWidth) i.updateSize() }), 500) }, scroll: Ot, keydown: Lt, click: Bt }; var o = tt.isOldIOSPhone || tt.isOldAndroid || tt.isMobileOpera; if (!tt.animationName || !tt.transform || o) s.showAnimationDuration = s.hideAnimationDuration = 0; for (e = 0; e < W.length; e++) i["init" + W[e]](); if (t) { var u;
                                        (i.ui = new t(i, n)).init() } if (ft("firstUpdate"), h = h || s.index || 0, isNaN(h) || h < 0 || h >= wn()) h = 0; if (i.currItem = yn(h), tt.isOldIOSPhone || tt.isOldAndroid) V = false; if (template.setAttribute("aria-hidden", "false"), s.modal)
                                        if (!V) template.style.position = "absolute", template.style.top = n.getScrollY() + "px";
                                        else template.style.position = "fixed";
                                    if (void 0 === J) ft("initialLayout"), J = Z = n.getScrollY(); var c = "psqf--open "; if (s.mainClass) c += s.mainClass + " "; if (s.showHideOpacity) c += "psqf--animate_opacity "; for (c += Y ? "psqf--touch" : "psqf--notouch", c += tt.animationName ? " psqf--css_animation" : "", c += tt.svg ? " psqf--svg" : "", n.addClass(template, c), i.updateSize(), m = -1, P = null, e = 0; e < a; e++) vt((e + m) * L.x, B[e].el.style); if (!K) n.bind(i.scrollWrap, b, i); if (lt("initialZoomInEnd", (function() { if (i.setContent(B[0], h - 1), i.setContent(B[2], h + 1), B[0].el.style.display = B[2].el.style.display = "block", s.focus) template.focus();
                                            St() })), i.setContent(B[1], h), i.updateCurrItem(), ft("afterInit"), !V) I = setInterval((function() { if (!Ft && !ue && !ye && S === i.currItem.initialZoomLevel) i.updateSize() }), 1e3);
                                    n.addClass(template, "psqf--visible") } }, close: function() { if (l) l = false, f = true, ft("close"), At(), cn(i.currItem, null, true, i.destroy) }, destroy: function() { if (ft("destroy"), fn) clearTimeout(fn); if (template.setAttribute("aria-hidden", "true"), template.className = X, I) clearInterval(I);
                                n.unbind(i.scrollWrap, b, i), n.unbind(window, "scroll", i), Re(), zt(), ut = null }, panTo: function(t, e, n) { if (!n) { if (t > Ce.min.x) t = Ce.min.x;
                                    else if (t < Ce.max.x) t = Ce.max.x; if (e > Ce.min.y) e = Ce.min.y;
                                    else if (e < Ce.max.y) e = Ce.max.y }
                                y.x = t, y.y = e, pt() }, handleEvent: function(t) { if (t = t || window.event, C[t.type]) C[t.type](t) }, goTo: function(index) { var diff = (index = st(index)) - h;
                                P = diff, h = index, i.currItem = yn(h), k -= diff, gt(L.x * k), zt(), Ae = false, i.updateCurrItem() }, next: function() { i.goTo(h + 1) }, prev: function() { i.goTo(h - 1) }, updateCurrZoomItem: function(t) { if (t) ft("beforeChange", 0); if (B[1].el.children.length) { var e = B[1].el.children[0]; if (n.hasClass(e, "psqf__zoom-wrap")) Se = e.style;
                                    else Se = null } else Se = null; if (Ce = i.currItem.bounds, A = S = i.currItem.initialZoomLevel, y.x = Ce.center.x, y.y = Ce.center.y, t) ft("afterChange") }, invalidateCurrItems: function() { E = true; for (var t = 0; t < a; t++)
                                    if (B[t].item) B[t].item.needsUpdate = true }, updateCurrItem: function(t) { if (0 !== P) { var e = Math.abs(P),
                                        n; if (!(t && e < 2)) { if (i.currItem = yn(h), rt = false, ft("beforeChange", P), e >= a) m += P + (P > 0 ? -a : a), e = a; for (var o = 0; o < e; o++)
                                            if (P > 0) n = B.shift(), B[a - 1] = n, m++, vt((m + 2) * L.x, n.el.style), i.setContent(n, h - e + o + 1 + 1);
                                            else n = B.pop(), B.unshift(n), m--, vt(m * L.x, n.el.style), i.setContent(n, h + e - o - 1 - 1);
                                        if (Se && 1 === Math.abs(P)) { var s = yn(O); if (s.initialZoomLevel !== S) Sn(s, x), In(s), mt(s) }
                                        P = 0, i.updateCurrZoomItem(), O = h, ft("afterChange") } } }, updateSize: function(t) { if (!V && s.modal) { var e = n.getScrollY(); if (J !== e) template.style.top = e + "px", J = e; if (!t && nt.x === window.innerWidth && nt.y === window.innerHeight) return;
                                    nt.x = window.innerWidth, nt.y = window.innerHeight, template.style.height = nt.y + "px" } if (x.x = i.scrollWrap.clientWidth, x.y = i.scrollWrap.clientHeight, Ot(), L.x = x.x + Math.round(x.x * s.spacing), L.y = x.y, gt(L.x * k), ft("beforeResize"), void 0 !== m) { for (var o, u, l, f = 0; f < a; f++) { if (o = B[f], vt((f + m) * L.x, o.el.style), l = h + f - 1, s.loop && wn() > 2) l = st(l); if ((u = yn(l)) && (E || u.needsUpdate || !u.bounds)) { if (i.cleanSlide(u), i.setContent(o, l), 1 === f) i.currItem = u, i.updateCurrZoomItem(true);
                                            u.needsUpdate = false } else if (-1 === o.index && l >= 0) i.setContent(o, l); if (u && u.container) Sn(u, x), In(u), mt(u) }
                                    E = false } if (A = S = i.currItem.initialZoomLevel, Ce = i.currItem.bounds) y.x = Ce.center.x, y.y = Ce.center.y, pt(true);
                                ft("resize") }, zoomTo: function(t, e, i, o, a) { if (e) A = S, _e.x = Math.abs(e.x) - y.x, _e.y = Math.abs(e.y) - y.y, wt(g, y); var s = _t(t, false),
                                    u = {};
                                kt("x", s, u, t), kt("y", s, u, t); var l = S,
                                    f = y.x,
                                    c = y.y;
                                bt(u); var h = function(e) { if (1 === e) S = t, y.x = u.x, y.y = u.y;
                                    else S = (t - l) * e + l, y.x = (u.x - f) * e + f, y.y = (u.y - c) * e + c; if (a) a(e);
                                    pt(1 === e) }; if (i) Ut("customZoomTo", 0, 1, i, o || n.easing.sine.inOut, h);
                                else h(1) } },
                        Ht = 30,
                        $t = 10,
                        Vt, Yt, Wt = {},
                        jt = {},
                        Gt = {},
                        Xt = {},
                        Zt = {},
                        Kt = [],
                        Jt = {},
                        Qt, te = [],
                        ee = {},
                        ne, ie, re, oe = 0,
                        ae = { x: 0, y: 0 },
                        se = 0,
                        ue, le, fe, ce, pe, ve, ge, ye, we, be, Ce, xe = { x: 0, y: 0 },
                        Se, Ae, _e = { x: 0, y: 0 },
                        Te = { x: 0, y: 0 },
                        Ie, Ee, ke, Le, Be, Oe = function(t, e) { return t.x === e.x && t.y === e.y },
                        Pe = function(t, e) { return Math.abs(t.x - e.x) < o && Math.abs(t.y - e.y) < o },
                        Fe = function(t, e) { return ee.x = Math.abs(t.x - e.x), ee.y = Math.abs(t.y - e.y), Math.sqrt(ee.x * ee.x + ee.y * ee.y) },
                        Re = function() { if (pe) G(pe), pe = null },
                        Ne = function() { if (ue) pe = j(Ne), nn() },
                        ze = function() { return !("fit" === s.scaleMode && S === i.currItem.initialZoomLevel) },
                        Ue = function(el, t) { if (!el || el === document) return false; if (el.getAttribute("class") && el.getAttribute("class").indexOf("psqf__scroll-wrap") > -1) return false; if (t(el)) return el;
                            else return Ue(el.parentNode, t) },
                        qe = {},
                        $e = function(t, e) { return qe.prevent = !Ue(t.target, s.isClickableElement), ft("preventDragEvent", t, e, qe), qe.prevent },
                        Ve = function(t, e) { return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e },
                        Ye = function(t, e, n) { n.x = .5 * (t.x + e.x), n.y = .5 * (t.y + e.y) },
                        We = function(t, e, n) { if (t - Yt > 50) { var i = te.length > 2 ? te.shift() : {};
                                i.x = e, i.y = n, te.push(i), Yt = t } },
                        je = function() { var t = y.y - i.currItem.initialPosition.y; return 1 - Math.abs(t / (x.y / 2)) },
                        Ge = {},
                        Xe = {},
                        Ze = [],
                        Ke, Je = function(t) { for (; Ze.length > 0;) Ze.pop(); if (!$)
                                if (t.type.indexOf("touch") > -1) { if (t.touches && t.touches.length > 0)
                                        if (Ze[0] = Ve(t.touches[0], Ge), t.touches.length > 1) Ze[1] = Ve(t.touches[1], Xe) } else Ge.x = t.pageX, Ge.y = t.pageY, Ge.id = "", Ze[0] = Ge;
                            else Ke = 0, Kt.forEach((function(t) { if (0 === Ke) Ze[0] = t;
                                else if (1 === Ke) Ze[1] = t;
                                Ke++ })); return Ze },
                        Qe = function(t, e) { var n, o = 0,
                                a = y[t] + e[t],
                                u, l = e[t] > 0,
                                f = xe.x + e.x,
                                c = xe.x - Jt.x,
                                h, p; if (a > Ce.min[t] || a < Ce.max[t]) n = s.panEndFriction;
                            else n = 1; if (a = y[t] + e[t] * n, s.allowPanToNext || S === i.currItem.initialZoomLevel) { if (!Se) p = f;
                                else if ("h" === Ie && "x" === t && !fe)
                                    if (l) { if (a > Ce.min[t]) n = s.panEndFriction, o = Ce.min[t] - a, u = Ce.min[t] - g[t]; if ((u <= 0 || c < 0) && wn() > 1) { if (p = f, c < 0 && f > Jt.x) p = Jt.x } else if (Ce.min.x !== Ce.max.x) h = a } else { if (a < Ce.max[t]) n = s.panEndFriction, o = a - Ce.max[t], u = g[t] - Ce.max[t]; if ((u <= 0 || c > 0) && wn() > 1) { if (p = f, c > 0 && f < Jt.x) p = Jt.x } else if (Ce.min.x !== Ce.max.x) h = a }
                                if ("x" === t) { if (void 0 !== p)
                                        if (gt(p, true), p === Jt.x) ve = false;
                                        else ve = true;
                                    if (Ce.min.x !== Ce.max.x)
                                        if (void 0 !== h) y.x = h;
                                        else if (!ve) y.x += e.x * n; return void 0 !== p } } if (!Ae)
                                if (!ve)
                                    if (S > i.currItem.fitRatio) y[t] += e[t] * n },
                        tn = function(t) { if (!("mousedown" === t.type && t.button > 0)) { if (vn) return t.preventDefault(), void 0; if (!re || "mousedown" !== t.type) { if ($e(t, true)) t.preventDefault(); if (ft("pointerDown"), $) { var e = n.arraySearch(Kt, t.pointerId, "id"); if (e < 0) e = Kt.length;
                                        Kt[e] = { x: t.pageX, y: t.pageY, id: t.pointerId } } var o = Je(t),
                                        a = o.length; if (ge = null, zt(), !ue || 1 === a) ue = Ee = true, n.bind(window, w, i), ne = Be = ke = ie = ve = ce = le = fe = false, Ie = null, ft("firstTouchStart", o), wt(g, y), v.x = v.y = 0, wt(Xt, o[0]), wt(Zt, Xt), Jt.x = L.x * k, te = [{ x: Xt.x, y: Xt.y }], Yt = Vt = ct(), _t(S, true), Re(), Ne(); if (!ye && a > 1 && !Ae && !ve) A = S, fe = false, ye = le = true, v.y = v.x = 0, wt(g, y), wt(Wt, o[0]), wt(jt, o[1]), Ye(Wt, jt, Te), _e.x = Math.abs(Te.x) - y.x, _e.y = Math.abs(Te.y) - y.y, we = be = Fe(Wt, jt) } } },
                        en = function(t) { if (t.preventDefault(), $) { var e = n.arraySearch(Kt, t.pointerId, "id"); if (e > -1) { var i = Kt[e];
                                    i.x = t.pageX, i.y = t.pageY } } if (ue) { var o = Je(t); if (!Ie && !ce && !ye)
                                    if (xe.x !== L.x * k) Ie = "h";
                                    else { var diff = Math.abs(o[0].x - Xt.x) - Math.abs(o[0].y - Xt.y); if (Math.abs(diff) >= $t) Ie = diff > 0 ? "h" : "v", ge = o }
                                else ge = o } },
                        nn = function() { if (ge) { var t = ge.length; if (0 !== t)
                                    if (wt(Wt, ge[0]), Gt.x = Wt.x - Xt.x, Gt.y = Wt.y - Xt.y, ye && t > 1) { if (Xt.x = Wt.x, Xt.y = Wt.y, !Gt.x && !Gt.y && Oe(ge[1], jt)) return; if (wt(jt, ge[1]), !fe) fe = true, ft("zoomGestureStarted"); var e = Fe(Wt, jt),
                                            n = un(e); if (n > i.currItem.initialZoomLevel + i.currItem.initialZoomLevel / 15) Be = true; var o = 1,
                                            a = Tt(),
                                            u = Dt(); if (n < a)
                                            if (s.pinchToClose && !Be && A <= i.currItem.initialZoomLevel) { var l, f = 1 - (a - n) / (a / 1.2);
                                                dt(f), ft("onPinchClose", f), ke = true } else { if ((o = (a - n) / a) > 1) o = 1;
                                                n = a - o * (a / 3) }
                                        else if (n > u) { if ((o = (n - u) / (6 * a)) > 1) o = 1;
                                            n = u + o * a } if (o < 0) o = 0;
                                        we = e, Ye(Wt, jt, ae), v.x += ae.x - Te.x, v.y += ae.y - Te.y, wt(Te, ae), y.x = yt("x", n), y.y = yt("y", n), ne = n > S, S = n, pt() } else { if (!Ie) return; if (Ee) { if (Ee = false, Math.abs(Gt.x) >= $t) Gt.x -= ge[0].x - Zt.x; if (Math.abs(Gt.y) >= $t) Gt.y -= ge[0].y - Zt.y } if (Xt.x = Wt.x, Xt.y = Wt.y, 0 === Gt.x && 0 === Gt.y) return; if ("v" === Ie && s.closeOnVerticalDrag)
                                            if (!ze()) { v.y += Gt.y, y.y += Gt.y; var c = je(); return ie = true, ft("onVerticalDrag", c), dt(c), pt(), void 0 }
                                        var h; if (We(ct(), Wt.x, Wt.y), ce = true, Ce = i.currItem.bounds, !Qe("x", Gt)) Qe("y", Gt), bt(y), pt() } } },
                        rn = function(t) { if (tt.isOldAndroid) { if (re && "mouseup" === t.type) return; if (t.type.indexOf("touch") > -1) clearTimeout(re), re = setTimeout((function() { re = 0 }), 600) } if (ft("pointerUp"), $e(t, false)) t.preventDefault(); var e; if ($) { var o = n.arraySearch(Kt, t.pointerId, "id"); if (o > -1)
                                    if (e = Kt.splice(o, 1)[0], navigator.msPointerEnabled) { var a = { 4: "mouse", 2: "touch", 3: "pen" }; if (e.type = a[t.pointerType], !e.type) e.type = t.pointerType || "mouse" } else e.type = t.pointerType || "mouse" } var u = Je(t),
                                l, f = u.length; if ("mouseup" === t.type) f = 0; if (2 === f) return ge = null, true; if (1 === f) wt(Zt, u[0]); if (0 === f && !Ie && !Ae) { if (!e)
                                    if ("mouseup" === t.type) e = { x: t.pageX, y: t.pageY, type: "mouse" };
                                    else if (t.changedTouches && t.changedTouches[0]) e = { x: t.changedTouches[0].pageX, y: t.changedTouches[0].pageY, type: "touch" };
                                ft("touchRelease", t, e) } var c = -1; if (0 === f)
                                if (ue = false, n.unbind(window, w, i), Re(), ye) c = 0;
                                else if (-1 !== se) c = ct() - se; if (se = 1 === f ? ct() : -1, -1 !== c && c < 150) l = "zoom";
                            else l = "swipe"; if (ye && f < 2) { if (ye = false, 1 === f) l = "zoomPointerUp";
                                ft("zoomGestureEnded") } if (ge = null, ce || fe || Ae || ie) { if (zt(), !Qt) Qt = on(); if (Qt.calculateSwipeSpeed("x"), !ie) { if ((ve || Ae) && 0 === f) { var h; if (sn(l, Qt)) return;
                                        l = "zoomPointerUp" } if (!Ae) { if ("swipe" !== l) return ln(), void 0; if (!ve && S > i.currItem.fitRatio) an(Qt) } } else { var p; if (je() < s.verticalDragRange) i.close();
                                    else { var m = y.y,
                                            v = Le;
                                        Ut("verticalDrag", 0, 1, 300, n.easing.cubic.out, (function(t) { y.y = (i.currItem.initialPosition.y - m) * t + m, dt((1 - v) * t + v), pt() })), ft("onVerticalDrag", 1) } } } },
                        on = function() { var t, e, i = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(n) { if (te.length > 1) t = ct() - Yt + 50, e = te[te.length - 2][n];
                                    else t = ct() - Vt, e = Zt[n]; if (i.lastFlickOffset[n] = Xt[n] - e, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20) i.lastFlickSpeed[n] = i.lastFlickOffset[n] / t;
                                    else i.lastFlickSpeed[n] = 0; if (Math.abs(i.lastFlickSpeed[n]) < .1) i.lastFlickSpeed[n] = 0;
                                    i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1 }, calculateOverBoundsAnimOffset: function(t, e) { if (!i.backAnimStarted[t]) { if (y[t] > Ce.min[t]) i.backAnimDestination[t] = Ce.min[t];
                                        else if (y[t] < Ce.max[t]) i.backAnimDestination[t] = Ce.max[t]; if (void 0 !== i.backAnimDestination[t])
                                            if (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05) i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = true, Ut("bounceZoomPan" + t, y[t], i.backAnimDestination[t], e || 300, n.easing.sine.out, (function(e) { y[t] = e, pt() })) } }, calculateAnimOffset: function(t) { if (!i.backAnimStarted[t]) i.speedDecelerationRatio[t] = i.speedDecelerationRatio[t] * (i.slowDownRatio[t] + i.slowDownRatioReverse[t] - i.slowDownRatioReverse[t] * i.timeDiff / 10), i.speedDecelerationRatioAbs[t] = Math.abs(i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]), i.distanceOffset[t] = i.lastFlickSpeed[t] * i.speedDecelerationRatio[t] * i.timeDiff, y[t] += i.distanceOffset[t] }, panAnimLoop: function() { if (Pt.zoomPan)
                                        if (Pt.zoomPan.raf = j(i.panAnimLoop), i.now = ct(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), pt(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) return y.x = Math.round(y.x), y.y = Math.round(y.y), pt(), Rt("zoomPan"), void 0 } }; return i },
                        an = function(t) { if (t.calculateSwipeSpeed("y"), Ce = i.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05) return t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), true;
                            Nt("zoomPan"), t.lastNow = ct(), t.panAnimLoop() },
                        sn = function(t, e) { var o, a, u; if (!Ae) oe = h; if ("swipe" === t) { var l = Xt.x - Zt.x,
                                    f = e.lastFlickDist.x < 10; if (l > Ht && (f || e.lastFlickOffset.x > 20)) a = -1;
                                else if (l < -Ht && (f || e.lastFlickOffset.x < -20)) a = 1 } if (a) { if ((h += a) < 0) h = s.loop ? wn() - 1 : 0, u = true;
                                else if (h >= wn()) h = s.loop ? 0 : wn() - 1, u = true; if (!u || s.loop) P += a, k -= a, o = true } var c = L.x * k,
                                p = Math.abs(c - xe.x),
                                m; if (!o && c > xe.x != e.lastFlickSpeed.x > 0) m = 333;
                            else m = Math.abs(e.lastFlickSpeed.x) > 0 ? p / Math.abs(e.lastFlickSpeed.x) : 333, m = Math.min(m, 400), m = Math.max(m, 250); if (oe === h) o = false; if (Ae = true, ft("mainScrollAnimStart"), Ut("mainScroll", xe.x, c, m, n.easing.cubic.out, gt, (function() { if (zt(), Ae = false, oe = -1, o || oe !== h) i.updateCurrItem();
                                    ft("mainScrollAnimComplete") })), o) i.updateCurrItem(true); return o },
                        un = function(t) { return 1 / be * t * A },
                        ln = function() { var t = S,
                                e = Tt(),
                                o = Dt(); if (S < e) t = e;
                            else if (S > o) t = o; var a = 1,
                                s, u = Le; if (ke && !ne && !Be && S < e) return i.close(), true; if (ke) s = function(t) { dt((a - u) * t + u) }; return i.zoomTo(t, 0, 200, n.easing.cubic.out, s), true };
                    at("Gestures", { publicMethods: { initGestures: function() { var t = function(t, e, move, n, i) { if (F = t + e, N = t + move, z = t + n, i) U = t + i;
                                    else U = "" }; if (($ = tt.pointerEvent) && tt.touch) tt.touch = false; if ($)
                                    if (navigator.msPointerEnabled) t("MSPointer", "Down", "Move", "Up", "Cancel");
                                    else t("pointer", "down", "move", "up", "cancel");
                                else if (tt.touch) t("touch", "start", "move", "end", "cancel"), Y = true;
                                else t("mouse", "down", "move", "up"); if (w = N + " " + z + " " + U, b = F, $ && !Y) Y = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1; if (i.likelyTouchDevice = Y, C[F] = tn, C[N] = en, C[z] = rn, U) C[U] = C[z]; if (tt.touch) b += " mousedown", w += " mousemove mouseup", C.mousedown = C[F], C.mousemove = C[N], C.mouseup = C[z]; if (!Y) s.allowPanToNext = false } } }); var fn, cn = function(t, e, o, a) { if (fn) clearTimeout(fn); var u; if (vn = true, mn = true, t.initialLayout) u = t.initialLayout, t.initialLayout = null;
                            else u = s.getThumbBoundsFn && s.getThumbBoundsFn(h); var l = o ? s.hideAnimationDuration : s.showAnimationDuration,
                                f = function() { if (Rt("initialZoom"), !o) { if (dt(1), e) e.style.display = "block";
                                        n.addClass(template, "psqf--animated-in"), ft("initialZoom" + (o ? "OutEnd" : "InEnd")) } else i.template.removeAttribute("style"), i.bg.removeAttribute("style"); if (a) a();
                                    vn = false }; if (l && u && void 0 !== u.x) { var p;
                                (function() { var e = c,
                                        a = !i.currItem.src || i.currItem.loadError || s.showHideOpacity; if (t.miniImg) t.miniImg.style.webkitBackfaceVisibility = "hidden"; if (!o) S = u.w / t.w, y.x = u.x, y.y = u.y - Z, i[a ? "template" : "bg"].style.opacity = .001, pt(); if (Nt("initialZoom"), o && !e) n.removeClass(template, "psqf--animated-in"); if (a)
                                        if (o) n[(e ? "remove" : "add") + "Class"](template, "psqf--animate_opacity");
                                        else setTimeout((function() { n.addClass(template, "psqf--animate_opacity") }), 30);
                                    fn = setTimeout((function() { if (ft("initialZoom" + (o ? "Out" : "In")), !o) { if (S = t.initialZoomLevel, wt(y, t.initialPosition), pt(), dt(1), a) template.style.opacity = 1;
                                            else dt(1);
                                            fn = setTimeout(f, l + 20) } else { var i = u.w / t.w,
                                                s = { x: y.x, y: y.y },
                                                c = S,
                                                h = Le,
                                                p = function(t) { if (1 === t) S = i, y.x = u.x, y.y = u.y - J;
                                                    else S = (i - c) * t + c, y.x = (u.x - s.x) * t + s.x, y.y = (u.y - J - s.y) * t + s.y; if (pt(), a) template.style.opacity = 1 - t;
                                                    else dt(h - t * h) }; if (e) Ut("initialZoom", 0, 1, l, n.easing.cubic.out, p, f);
                                            else p(1), fn = setTimeout(f, l + 20) } }), o ? 25 : 90) })() } else if (ft("initialZoom" + (o ? "Out" : "In")), S = t.initialZoomLevel, wt(y, t.initialPosition), pt(), template.style.opacity = o ? 0 : 1, dt(1), l) setTimeout((function() { f() }), l);
                            else f() },
                        dn, hn = {},
                        pn = [],
                        mn, vn, gn = { index: 0, errorMsg: '<div class="psqf__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: false, preload: [1, 1], getNumItemsFn: function() { return dn.length } },
                        yn, wn, bn, Cn = function() { return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } },
                        xn = function(t, e, n) { var i = t.bounds;
                            i.center.x = Math.round((hn.x - e) / 2), i.center.y = Math.round((hn.y - n) / 2) + t.vGap.top, i.max.x = e > hn.x ? Math.round(hn.x - e) : i.center.x, i.max.y = n > hn.y ? Math.round(hn.y - n) + t.vGap.top : i.center.y, i.min.x = e > hn.x ? 0 : i.center.x, i.min.y = n > hn.y ? t.vGap.top : i.center.y },
                        Sn = function(t, e, n) { if (t.src && !t.loadError) { var i = !n; if (i) { if (!t.vGap) t.vGap = { top: 0, bottom: 0 };
                                    ft("parseVerticalMargin", t) } if (hn.x = e.x, hn.y = e.y - t.vGap.top - t.vGap.bottom, i) { var o = hn.x / t.w,
                                        a = hn.y / t.h;
                                    t.fitRatio = o < a ? o : a; var u = s.scaleMode; if ("orig" === u) n = 1;
                                    else if ("fit" === u) n = t.fitRatio; if (n > 1) n = 1; if (t.initialZoomLevel = n, !t.bounds) t.bounds = { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } } if (!n) return; if (xn(t, t.w * n, t.h * n), i && n === t.initialZoomLevel) t.initialPosition = t.bounds.center; return t.bounds } else return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } }, t.initialPosition = t.bounds.center, t.bounds },
                        An = function(index, t, e, n, o, a) { if (!t.loadError)
                                if (n)
                                    if (t.imageAppended = true, In(t, n, t === i.currItem && rt), e.appendChild(n), a) setTimeout((function() { if (t && t.loaded && t.placeholder) t.placeholder.style.display = "none", t.placeholder = null }), 500) },
                        _n = function(t) { t.loading = true, t.loaded = false; var e = t.img = n.createEl("psqf__img", "img"),
                                i = function() { if (t.loading = false, t.loaded = true, t.loadComplete) t.loadComplete(t);
                                    else t.img = null;
                                    e.onload = e.onerror = null, e = null }; return e.onload = i, e.onerror = function() { t.loadError = true, i() }, e.src = t.src, e },
                        Tn = function(t, e) { if (t.src && t.loadError && t.container) { if (e) t.container.innerHTML = ""; return t.container.innerHTML = s.errorMsg.replace("%url%", t.src), true } },
                        In = function(t, e, n) { if (t.src) { if (!e) e = t.container.lastChild; var i = n ? t.w : Math.round(t.w * t.fitRatio),
                                    o = n ? t.h : Math.round(t.h * t.fitRatio); if (t.placeholder && !t.loaded) t.placeholder.style.width = i + "px", t.placeholder.style.height = o + "px";
                                e.style.width = i + "px", e.style.height = o + "px" } },
                        En = function() { if (pn.length) { for (var t, e = 0; e < pn.length; e++)
                                    if ((t = pn[e]).holder.index === t.index) An(t.index, t.item, t.baseDiv, t.img, false, t.clearPlaceholder);
                                pn = [] } };
                    at("Controller", { publicMethods: { lazyLoadItem: function(index) { index = st(index); var t = yn(index); if (t && (!t.loaded && !t.loading || E))
                                    if (ft("gettingData", index, t), t.src) _n(t) }, initController: function() { if (n.extend(s, gn, true), i.items = dn = items, yn = i.getItemAt, wn = s.getNumItemsFn, bn = s.loop, wn() < 3) s.loop = false;
                                lt("beforeChange", (function(diff) { var t = s.preload,
                                        e = null === diff ? true : diff >= 0,
                                        n = Math.min(t[0], wn()),
                                        o = Math.min(t[1], wn()),
                                        a; for (a = 1; a <= (e ? o : n); a++) i.lazyLoadItem(h + a); for (a = 1; a <= (e ? n : o); a++) i.lazyLoadItem(h - a) })), lt("initialLayout", (function() { i.currItem.initialLayout = s.getThumbBoundsFn && s.getThumbBoundsFn(h) })), lt("mainScrollAnimComplete", En), lt("initialZoomInEnd", En), lt("destroy", (function() { for (var t, e = 0; e < dn.length; e++) { if ((t = dn[e]).container) t.container = null; if (t.placeholder) t.placeholder = null; if (t.img) t.img = null; if (t.preloader) t.preloader = null; if (t.loadError) t.loaded = t.loadError = false }
                                    pn = null })) }, getItemAt: function(index) { if (index >= 0) return void 0 !== dn[index] ? dn[index] : false;
                                else return false }, allowProgressiveImg: function() { return s.forceProgressiveLoading || !Y || s.mouseUsed || screen.width > 1200 }, setContent: function(t, index) { if (s.loop) index = st(index); var e = i.getItemAt(t.index); if (e) e.container = null; var o = i.getItemAt(index),
                                    a; if (!o) return t.el.innerHTML = "", void 0;
                                ft("gettingData", index, o), t.index = index, t.item = o; var u = o.container = n.createEl("psqf__zoom-wrap"); if (!o.src && o.html)
                                    if (o.html.tagName) u.appendChild(o.html);
                                    else u.innerHTML = o.html;
                                if (Tn(o), Sn(o, x), o.src && !o.loadError && !o.loaded) { if (o.loadComplete = function(e) { if (l) { if (t && t.index === index) { if (Tn(e, true)) { if (e.loadComplete = e.img = null, Sn(e, x), mt(e), t.index === h) i.updateCurrZoomItem(); return } if (!e.imageAppended)
                                                        if (tt.transform && (Ae || vn)) pn.push({ item: e, baseDiv: u, img: e.img, index: index, holder: t, clearPlaceholder: true });
                                                        else An(index, e, u, e.img, Ae || vn, true);
                                                    else if (!vn && e.placeholder) e.placeholder.style.display = "none", e.placeholder = null }
                                                e.loadComplete = null, e.img = null, ft("imageLoadComplete", index, e) } }, n.features.transform) { var f = "psqf__img psqf__img--placeholder";
                                        f += o.msrc ? "" : " psqf__img--placeholder--blank"; var placeholder = n.createEl(f, o.msrc ? "img" : ""); if (o.msrc) placeholder.src = o.msrc;
                                        In(o, placeholder), u.appendChild(placeholder), o.placeholder = placeholder } if (!o.loading) _n(o); if (i.allowProgressiveImg())
                                        if (!mn && tt.transform) pn.push({ item: o, baseDiv: u, img: o.img, index: index, holder: t });
                                        else An(index, o, u, o.img, true, true) } else if (o.src && !o.loadError)(a = n.createEl("psqf__img", "img")).style.opacity = 1, a.src = o.src, In(o, a), An(index, o, u, a, true); if (!mn && index === h) Se = u.style, cn(o, a || o.img);
                                else mt(o);
                                t.el.innerHTML = "", t.el.appendChild(u) }, cleanSlide: function(t) { if (t.img) t.img.onload = t.img.onerror = null;
                                t.loaded = t.loading = t.img = t.imageAppended = false } } }); var Dn, kn = {},
                        Mn = function(t, e, n) { var i = document.createEvent("CustomEvent"),
                                o = { origEvent: t, target: t.target, releasePoint: e, pointerType: n || "touch" };
                            i.initCustomEvent("pswpTap", true, true, o), t.target.dispatchEvent(i) },
                        Ln;
                    at("Tap", { publicMethods: { initTap: function() { lt("firstTouchStart", i.onTapStart), lt("touchRelease", i.onTapRelease), lt("destroy", (function() { kn = {}, Dn = null })) }, onTapStart: function(t) { if (t.length > 1) clearTimeout(Dn), Dn = null }, onTapRelease: function(t, e) { if (e)
                                    if (!ce && !le && !Ft) { var i = e,
                                            o; if (Dn)
                                            if (clearTimeout(Dn), Dn = null, Pe(i, kn)) return ft("doubleTap", i), void 0;
                                        if ("mouse" === e.type) return Mn(t, e, "mouse"), void 0; if ("BUTTON" === t.target.tagName.toUpperCase() || n.hasClass(t.target, "psqf__single-tap")) return Mn(t, e), void 0;
                                        wt(kn, i), Dn = setTimeout((function() { Mn(t, e), Dn = null }), 300) } } } }), at("DesktopZoom", { publicMethods: { initDesktopZoom: function() { if (!K)
                                    if (Y) lt("mouseUsed", (function() { i.setupDesktopZoom() }));
                                    else i.setupDesktopZoom(true) }, setupDesktopZoom: function(t) { Ln = {}; var events = "wheel mousewheel DOMMouseScroll";
                                lt("bindEvents", (function() { n.bind(template, events, i.handleMouseWheel) })), lt("unbindEvents", (function() { if (Ln) n.unbind(template, events, i.handleMouseWheel) })), i.mouseZoomedIn = false; var e, o = function() { if (i.mouseZoomedIn) n.removeClass(template, "psqf--zoomed-in"), i.mouseZoomedIn = false; if (S < 1) n.addClass(template, "psqf--zoom-allowed");
                                        else n.removeClass(template, "psqf--zoom-allowed");
                                        a() },
                                    a = function() { if (e) n.removeClass(template, "psqf--dragging"), e = false }; if (lt("resize", o), lt("afterChange", o), lt("pointerDown", (function() { if (i.mouseZoomedIn) e = true, n.addClass(template, "psqf--dragging") })), lt("pointerUp", a), !t) o() }, handleMouseWheel: function(t) { if (S <= i.currItem.fitRatio) { if (s.modal)
                                        if (!s.closeOnScroll || Ft || ue) t.preventDefault();
                                        else if (H && Math.abs(t.deltaY) > 2) c = true, i.close(); return true } if (t.stopPropagation(), Ln.x = 0, "deltaX" in t)
                                    if (1 === t.deltaMode) Ln.x = 18 * t.deltaX, Ln.y = 18 * t.deltaY;
                                    else Ln.x = t.deltaX, Ln.y = t.deltaY;
                                else if ("wheelDelta" in t) { if (t.wheelDeltaX) Ln.x = -.16 * t.wheelDeltaX; if (t.wheelDeltaY) Ln.y = -.16 * t.wheelDeltaY;
                                    else Ln.y = -.16 * t.wheelDelta } else if ("detail" in t) Ln.y = t.detail;
                                else return;
                                _t(S, true); var e = y.x - Ln.x,
                                    n = y.y - Ln.y; if (s.modal || e <= Ce.min.x && e >= Ce.max.x && n <= Ce.min.y && n >= Ce.max.y) t.preventDefault();
                                i.panTo(e, n) }, toggleDesktopZoom: function(t) { t = t || { x: x.x / 2 + M.x, y: x.y / 2 + M.y }; var e = s.getDoubleTapZoom(true, i.currItem),
                                    o = S === e;
                                i.mouseZoomedIn = !o, i.zoomTo(o ? i.currItem.initialZoomLevel : e, t, 333), n[(!o ? "add" : "remove") + "Class"](template, "psqf--zoomed-in") } } }); var Bn = { history: true, galleryUID: 1 },
                        On, Pn, Fn, Rn, Nn, zn, Un, qn, Hn, $n, Vn, Yn, Wn = function() { return Vn.hash.substring(1) },
                        jn = function() { if (On) clearTimeout(On); if (Fn) clearTimeout(Fn) },
                        Gn = function() { var hash = Wn(),
                                t = {}; if (hash.length < 5) return t; var e, n = hash.split("&"); for (e = 0; e < n.length; e++)
                                if (n[e]) { var i = n[e].split("="); if (!(i.length < 2)) t[i[0]] = i[1] }
                            if (s.galleryPIDs) { var o = t.pid; for (t.pid = 0, e = 0; e < dn.length; e++)
                                    if (dn[e].pid === o) { t.pid = e; break } } else t.pid = parseInt(t.pid, 10) - 1; if (t.pid < 0) t.pid = 0; return t },
                        Xn = function() { if (Fn) clearTimeout(Fn); if (Ft || ue) return Fn = setTimeout(Xn, 500), void 0; if (Rn) clearTimeout(Pn);
                            else Rn = true; var t = h + 1,
                                e = yn(h); if (e.hasOwnProperty("pid")) t = e.pid; var n = Un + "&" + "gid=" + s.galleryUID + "&" + "pid=" + t; if (!qn)
                                if (-1 === Vn.hash.indexOf(n)) $n = true;
                            var i = Vn.href.split("#")[0] + "#" + n; if (Yn) { if ("#" + n !== window.location.hash) history[qn ? "replaceState" : "pushState"]("", document.title, i) } else if (qn) Vn.replace(i);
                            else Vn.hash = n;
                            qn = true, Pn = setTimeout((function() { Rn = false }), 60) };
                    at("History", { publicMethods: { initHistory: function() { if (n.extend(s, Bn, true), s.history) { if (Vn = window.location, $n = false, Hn = false, qn = false, Un = Wn(), Yn = "pushState" in history, Un.indexOf("gid=") > -1) Un = (Un = Un.split("&gid=")[0]).split("?gid=")[0];
                                    lt("afterChange", i.updateURL), lt("unbindEvents", (function() { n.unbind(window, "hashchange", i.onHashChange) })); var t = function() { if (zn = true, !Hn)
                                            if ($n) history.back();
                                            else if (Un) Vn.hash = Un;
                                        else if (Yn) history.pushState("", document.title, Vn.pathname + Vn.search);
                                        else Vn.hash = "";
                                        jn() };
                                    lt("unbindEvents", (function() { if (c) t() })), lt("destroy", (function() { if (!zn) t() })), lt("firstUpdate", (function() { h = Gn().pid })); var index = Un.indexOf("pid="); if (index > -1)
                                        if ("&" === (Un = Un.substring(0, index)).slice(-1)) Un = Un.slice(0, -1);
                                    setTimeout((function() { if (l) n.bind(window, "hashchange", i.onHashChange) }), 40) } }, onHashChange: function() { if (Wn() === Un) return Hn = true, i.close(), void 0; if (!Rn) Nn = true, i.goTo(Gn().pid), Nn = false }, updateURL: function() { if (jn(), !Nn)
                                    if (!qn) Xn();
                                    else On = setTimeout(Xn, 800) } } }), n.extend(i, qt) }; return t })) },
        2787: function(t, e, n) { "use strict"; var i, o;
            /*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
             * http://photoswipe.com
             * Copyright (c) 2019 Dmitry Semenov; */
            ! function(a, factory) { if (true) !(void 0 !== (o = "function" == typeof(i = factory) ? i.call(e, n, e, t) : i) && (t.exports = o));
                else if ("object" == typeof e) t.exports = factory();
                else a.PhotoSwipeUI_Default = factory() }(this, (function() { var t; return function(t, e) { var n = this,
                        i = false,
                        o = true,
                        a, s, u, l, f, c, h, p = true,
                        m, v, g, y, w, b, C, x, S = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(t, e) { if (!t.title) return e.children[0].innerHTML = "", false;
                                else return e.children[0].innerHTML = t.title, true }, closeEl: true, captionEl: true, fullscreenEl: true, zoomEl: true, shareEl: true, counterEl: true, arrowEl: true, preloaderEl: true, tapToClose: false, tapToToggleControls: true, clickToCloseNonZoomable: true, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/" + "?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: true }], getImageURLForShare: function() { return t.currItem.src || "" }, getPageURLForShare: function() { return window.location.href }, getTextForShare: function() { return t.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
                        A, _, T = function(t) { if (A) return true; if (t = t || window.event, x.timeToIdle && x.mouseUsed && !v) U(); for (var n, i, o = (t.target || t.srcElement).getAttribute("class") || "", a, s = 0; s < X.length; s++)
                                if ((i = X[s]).onTap && o.indexOf("psqf__" + i.name) > -1) i.onTap(), a = true;
                            if (a) { if (t.stopPropagation) t.stopPropagation();
                                A = true; var u = e.features.isOldAndroid ? 600 : 30;
                                _ = setTimeout((function() { A = false }), u) } },
                        I = function() { return !t.likelyTouchDevice || x.mouseUsed || screen.width > x.fitControlsWidth },
                        E = function(el, t, add) { e[(add ? "add" : "remove") + "Class"](el, "psqf__" + t) },
                        k = function() { var t = 1 === x.getNumItemsFn(); if (t !== C) E(s, "ui--one-slide", t), C = t },
                        M = function() { E(h, "share-modal--hidden", p) },
                        L = function() { if (!(p = !p)) M(), setTimeout((function() { if (!p) e.addClass(h, "psqf__share-modal--fade-in") }), 30);
                            else e.removeClass(h, "psqf__share-modal--fade-in"), setTimeout((function() { if (p) M() }), 300); if (!p) O(); return false },
                        B = function(e) { var n = (e = e || window.event).target || e.srcElement; if (t.shout("shareLinkClick", e, n), !n.href) return false; if (n.hasAttribute("download")) return true; if (window.open(n.href, "psqf_share", "scrollbars=yes,resizable=yes,toolbar=no," + "location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), !p) L(); return false },
                        O = function() { for (var t = "", e, n, i, o, a, s = 0; s < x.shareButtons.length; s++)
                                if (e = x.shareButtons[s], i = x.getImageURLForShare(e), o = x.getPageURLForShare(e), a = x.getTextForShare(e), t += '<a href="' + (n = e.url.replace("{{url}}", encodeURIComponent(o)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(a))) + '" target="_blank" ' + 'class="psqf__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", x.parseShareButtonOut) t = x.parseShareButtonOut(e, t);
                            h.children[0].innerHTML = t, h.children[0].onclick = B },
                        P = function(t) { for (var n = 0; n < x.closeElClasses.length; n++)
                                if (e.hasClass(t, "psqf__" + x.closeElClasses[n])) return true },
                        F, N, z = 0,
                        U = function() { if (clearTimeout(N), z = 0, v) n.setIdle(false) },
                        H = function(t) { var e = (t = t ? t : window.event).relatedTarget || t.toElement; if (!e || "HTML" === e.nodeName) clearTimeout(N), N = setTimeout((function() { n.setIdle(true) }), x.timeToIdleOutside) },
                        $ = function() { if (x.fullscreenEl && !e.features.isOldAndroid) { if (!a) a = n.getFullscreenAPI(); if (a) e.bind(document, a.eventK, n.updateFullscreen), n.updateFullscreen(), e.addClass(t.template, "psqf--supports-fs");
                                else e.removeClass(t.template, "psqf--supports-fs") } },
                        V = function() { if (x.preloaderEl) Y(true), g("beforeChange", (function() { clearTimeout(b), b = setTimeout((function() { if (t.currItem && t.currItem.loading) { if (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) Y(false) } else Y(true) }), x.loadingIndicatorDelay) })), g("imageLoadComplete", (function(index, e) { if (t.currItem === e) Y(true) })) },
                        Y = function(t) { if (w !== t) E(y, "preloader--active", !t), w = t },
                        W = function(t) { var n = t.vGap; if (I()) { var i = x.barsSize; if (x.captionEl && "auto" === i.bottom) { if (!l)(l = e.createEl("psqf__caption psqf__caption--fake")).appendChild(e.createEl("psqf__caption__center")), s.insertBefore(l, u), e.addClass(s, "psqf__ui--fit"); if (x.addCaptionHTMLFn(t, l, true)) { var o = l.clientHeight;
                                        n.bottom = parseInt(o, 10) || 44 } else n.bottom = i.top } else n.bottom = "auto" === i.bottom ? 0 : i.bottom;
                                n.top = i.top } else n.top = n.bottom = 0 },
                        j = function() { if (x.timeToIdle) g("mouseUsed", (function() { e.bind(document, "mousemove", U), e.bind(document, "mouseout", H), F = setInterval((function() { if (2 === ++z) n.setIdle(true) }), x.timeToIdle / 2) })) },
                        G = function() { var t;
                            g("onVerticalDrag", (function(t) { if (o && t < .95) n.hideControls();
                                else if (!o && t >= .95) n.showControls() })), g("onPinchClose", (function(e) { if (o && e < .9) n.hideControls(), t = true;
                                else if (t && !o && e > .9) n.showControls() })), g("zoomGestureEnded", (function() { if ((t = false) && !o) n.showControls() })) },
                        X = [{ name: "caption", option: "captionEl", onInit: function(el) { u = el } }, { name: "share-modal", option: "shareEl", onInit: function(el) { h = el }, onTap: function() { L() } }, { name: "button--share", option: "shareEl", onInit: function(el) { c = el }, onTap: function() { L() } }, { name: "button--zoom", option: "zoomEl", onTap: t.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(el) { f = el } }, { name: "button--close", option: "closeEl", onTap: t.close }, { name: "button--arrow--left", option: "arrowEl", onTap: t.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: t.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { if (a.isFullscreen()) a.exit();
                                else a.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(el) { y = el } }],
                        Z = function() { var t, n, i, o = function(o) { if (o)
                                    for (var a = o.length, s = 0; s < a; s++) { t = o[s], n = t.className; for (var u = 0; u < X.length; u++)
                                            if (i = X[u], n.indexOf("psqf__" + i.name) > -1)
                                                if (x[i.option]) { if (e.removeClass(t, "psqf__element--disabled"), i.onInit) i.onInit(t) } else e.addClass(t, "psqf__element--disabled") } };
                            o(s.children); var a = e.getChildByClass(s, "psqf__top-bar"); if (a) o(a.children) };
                    n.init = function() { if (e.extend(t.options, S, true), x = t.options, s = e.getChildByClass(t.scrollWrap, "psqf__ui"), g = t.listen, G(), g("beforeChange", n.update), g("doubleTap", (function(e) { var n = t.currItem.initialZoomLevel; if (t.getZoomLevel() !== n) t.zoomTo(n, e, 333);
                                else t.zoomTo(x.getDoubleTapZoom(false, t.currItem), e, 333) })), g("preventDragEvent", (function(t, e, n) { var i = t.target || t.srcElement; if (i && i.getAttribute("class") && t.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName))) n.prevent = false })), g("bindEvents", (function() { if (e.bind(s, "pswpTap click", T), e.bind(t.scrollWrap, "pswpTap", n.onGlobalTap), !t.likelyTouchDevice) e.bind(t.scrollWrap, "mouseover", n.onMouseOver) })), g("unbindEvents", (function() { if (!p) L(); if (F) clearInterval(F); if (e.unbind(document, "mouseout", H), e.unbind(document, "mousemove", U), e.unbind(s, "pswpTap click", T), e.unbind(t.scrollWrap, "pswpTap", n.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", n.onMouseOver), a) { if (e.unbind(document, a.eventK, n.updateFullscreen), a.isFullscreen()) x.hideAnimationDuration = 0, a.exit();
                                    a = null } })), g("destroy", (function() { if (x.captionEl) { if (l) s.removeChild(l);
                                    e.removeClass(u, "psqf__caption--empty") } if (h) h.children[0].onclick = null;
                                e.removeClass(s, "psqf__ui--over-close"), e.addClass(s, "psqf__ui--hidden"), n.setIdle(false) })), !x.showAnimationDuration) e.removeClass(s, "psqf__ui--hidden"); if (g("initialZoomIn", (function() { if (x.showAnimationDuration) e.removeClass(s, "psqf__ui--hidden") })), g("initialZoomOut", (function() { e.addClass(s, "psqf__ui--hidden") })), g("parseVerticalMargin", W), Z(), x.shareEl && c && h) p = true;
                        k(), j(), $(), V() }, n.setIdle = function(t) { v = t, E(s, "ui--idle", t) }, n.update = function() { if (o && t.currItem) { if (n.updateIndexIndicator(), x.captionEl) x.addCaptionHTMLFn(t.currItem, u), E(u, "caption--empty", !t.currItem.title);
                            i = true } else i = false; if (!p) L();
                        k() }, n.updateFullscreen = function(n) { if (n) setTimeout((function() { t.setScrollOffset(0, e.getScrollY()) }), 50);
                        e[(a.isFullscreen() ? "add" : "remove") + "Class"](t.template, "psqf--fs") }, n.updateIndexIndicator = function() { if (x.counterEl) f.innerHTML = t.getCurrentIndex() + 1 + x.indexIndicatorSep + x.getNumItemsFn() }, n.onGlobalTap = function(i) { var a = (i = i || window.event).target || i.srcElement; if (!A)
                            if (i.detail && "mouse" === i.detail.pointerType) { if (P(a)) return t.close(), void 0; if (e.hasClass(a, "psqf__img"))
                                    if (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio) { if (x.clickToCloseNonZoomable) t.close() } else t.toggleDesktopZoom(i.detail.releasePoint) } else { if (x.tapToToggleControls)
                                    if (o) n.hideControls();
                                    else n.showControls();
                                if (x.tapToClose && (e.hasClass(a, "psqf__img") || P(a))) return t.close(), void 0 } }, n.onMouseOver = function(t) { var e = (t = t || window.event).target || t.srcElement;
                        E(s, "ui--over-close", P(e)) }, n.hideControls = function() { e.addClass(s, "psqf__ui--hidden"), o = false }, n.showControls = function() { if (o = true, !i) n.update();
                        e.removeClass(s, "psqf__ui--hidden") }, n.supportsFullscreen = function() { var d = document; return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen) }, n.getFullscreenAPI = function() { var e = document.documentElement,
                            n, i = "fullscreenchange"; if (e.requestFullscreen) n = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: i };
                        else if (e.mozRequestFullScreen) n = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + i };
                        else if (e.webkitRequestFullscreen) n = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + i };
                        else if (e.msRequestFullscreen) n = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }; if (n) n.enter = function() { if (m = x.closeOnScroll, x.closeOnScroll = false, "webkitRequestFullscreen" === this.enterK) t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
                            else return t.template[this.enterK]() }, n.exit = function() { return x.closeOnScroll = m, document[this.exitK]() }, n.isFullscreen = function() { return document[this.elementK] }; return n } } })) },
        2788: function(t, e, n) { "use strict"; var i = n(9); if (!window.Utility) window.Utility = {};
            Utility.decodeJsonAttribute = function(t) { return JSON.parse(decodeURIComponent(atob(t))) }, i(window.loadMapsContent) },
        2789: function(t, e, n) { "use strict"; var i = n(9);
            n(2790), i(window).on("load", (function() { var t; if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || navigator.vendor || window.opera)) { var items = i(".u-parallax"); if (items.length > 0) { items.each((function() { var t = i(this); if (t.css("background-attachment", "fixed"), t.hasClass("u-shading")) t.attr("data-bottom-top", "background-position: 50% 0, 50% 0vh;"), t.attr("data-top-bottom", "background-position: 50% 0, 50% -20vh");
                            else t.attr("data-bottom-top", "background-position: 50% 0vh;"), t.attr("data-top-bottom", "background-position: 50% -20vh") })); var e = { forceHeight: false };
                        skrollr.init(e) } } })) },
        2790: function(t, e) {
            var e = void 0,
                t = void 0;
            (function() {
                /*!
                 * skrollr core
                 *
                 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
                 *
                 * Free to use under terms of MIT license
                 */
                ! function(e, n, i) { "use strict";

                    function o(t) { if (f = n.documentElement, c = n.body, K(), Mt = this, Nt = (t = t || {}).constants || {}, t.easing)
                            for (var i in t.easing) nt[i] = t.easing[i]; if (Jt = t.edgeStrategy || "set", Ot = { beforerender: t.beforerender, render: t.render, keyframe: t.keyframe }, Pt = false !== t.forceHeight) Rt = t.scale || 1; if (zt = t.mobileDeceleration || I, jt = false !== t.smoothScrolling, Gt = t.smoothScrollingDuration || k, Xt = { targetTop: Mt.getScrollTop() }, Qt = (t.mobileCheck || function() { return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera) })()) { if (Bt = n.getElementById(t.skrollrBody || E)) mt();
                            rt(), At(f, [C, A], [x]) } else At(f, [C, S], [x]);
                        Mt.refresh(), vt(e, "resize orientationchange", (function() { var t = f.clientWidth,
                                e = f.clientHeight; if (e !== Vt || t !== $t) Vt = e, $t = t, Yt = true })); var o = J(); return ! function t() { st(), ie = o(t) }(), Mt } var a = { get: function() { return Mt }, init: function(t) { return Mt || new o(t) }, VERSION: "0.6.30" },
                        s = Object.prototype.hasOwnProperty,
                        u = e.Math,
                        l = e.getComputedStyle,
                        f, c, h = "touchstart",
                        p = "touchmove",
                        m = "touchcancel",
                        v = "touchend",
                        g = "skrollable",
                        y = g + "-before",
                        w = g + "-between",
                        b = g + "-after",
                        C = "skrollr",
                        x = "no-" + C,
                        S = C + "-desktop",
                        A = C + "-mobile",
                        _ = "linear",
                        T = 1e3,
                        I = .004,
                        E = "skrollr-body",
                        k = 200,
                        M = "start",
                        L = "end",
                        B = "center",
                        O = "bottom",
                        P = "___skrollable_id",
                        F = /^(?:input|textarea|button|select)$/i,
                        N = /^\s+|\s+$/g,
                        z = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
                        U = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
                        H = /^(@?[a-z\-]+)\[(\w+)\]$/,
                        $ = /-([a-z0-9_])/g,
                        V = function(t, e) { return e.toUpperCase() },
                        Y = /[\-+]?[\d]*\.?[\d]+/g,
                        W = /\{\?\}/g,
                        j = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
                        G = /[a-z\-]+-gradient/g,
                        X = "",
                        Z = "",
                        K = function() { var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/; if (l) { var style = l(c, null); for (var e in style)
                                    if (X = e.match(t) || +e == e && style[e].match(t)) break;
                                if (!X) return X = Z = "", void 0; if ("-" === (X = X[0]).slice(0, 1)) Z = X, X = { "-webkit-": "webkit", "-moz-": "Moz", "-ms-": "ms", "-o-": "O" }[X];
                                else Z = "-" + X.toLowerCase() + "-" } },
                        J = function() { var t = e.requestAnimationFrame || e[X.toLowerCase() + "RequestAnimationFrame"],
                                n = Dt(); if (Qt || !t) t = function(t) { var i = Dt() - n,
                                    o = u.max(0, 1e3 / 60 - i); return e.setTimeout((function() { n = Dt(), t() }), o) }; return t },
                        tt = function() { var t = e.cancelAnimationFrame || e[X.toLowerCase() + "CancelAnimationFrame"]; if (Qt || !t) t = function(t) { return e.clearTimeout(t) }; return t },
                        nt = { begin: function() { return 0 }, end: function() { return 1 }, linear: function(t) { return t }, quadratic: function(t) { return t * t }, cubic: function(t) { return t * t * t }, swing: function(t) { return -u.cos(t * u.PI) / 2 + .5 }, sqrt: function(t) { return u.sqrt(t) }, outCubic: function(t) { return u.pow(t - 1, 3) + 1 }, bounce: function(t) { var e; if (t <= .5083) e = 3;
                                else if (t <= .8489) e = 9;
                                else if (t <= .96208) e = 27;
                                else if (t <= .99981) e = 91;
                                else return 1; return 1 - u.abs(3 * u.cos(t * e * 1.028) / e) } };
                    o.prototype.refresh = function(t) { var e, o, a = false; if (t === i) a = true, Lt = [], Kt = 0, t = n.getElementsByTagName("*");
                        else if (t.length === i) t = [t]; for (e = 0, o = t.length; e < o; e++) { var el = t[e],
                                s = el,
                                u = [],
                                l = jt,
                                f = Jt,
                                c = false; if (a && P in el) delete el[P]; if (el.attributes) { for (var h = 0, p = el.attributes.length; h < p; h++) { var m = el.attributes[h]; if ("data-anchor-target" !== m.name)
                                        if ("data-smooth-scrolling" !== m.name)
                                            if ("data-edge-strategy" !== m.name)
                                                if ("data-emit-events" !== m.name) { var v = m.name.match(z); if (null !== v) { var y = { props: m.value, element: el, eventType: m.name.replace($, V) };
                                                        u.push(y); var w = v[1]; if (w) y.constant = w.substr(1); var b = v[2]; if (/p$/.test(b)) y.isPercentage = true, y.offset = (0 | b.slice(0, -1)) / 100;
                                                        else y.offset = 0 | b; var C = v[3],
                                                            x = v[4] || C; if (!C || C === M || C === L) { if (y.mode = "absolute", C === L) y.isEnd = true;
                                                            else if (!y.isPercentage) y.offset = y.offset * Rt } else y.mode = "relative", y.anchors = [C, x] } } else c = true;
                                    else f = m.value;
                                    else l = "off" !== m.value;
                                    else if (null === (s = n.querySelector(m.value))) throw 'Unable to find anchor target "' + m.value + '"' } if (u.length) { var S, A, id; if (!a && P in el) id = el[P], S = Lt[id].styleAttr, A = Lt[id].classAttr;
                                    else id = el[P] = Kt++, S = el.style.cssText, A = St(el);
                                    Lt[id] = { element: el, styleAttr: S, classAttr: A, anchorTarget: s, keyFrames: u, smoothScrolling: l, edgeStrategy: f, emitEvents: c, lastFrameIndex: -1 }, At(el, [g], []) } } } for (bt(), e = 0, o = t.length; e < o; e++) { var sk = Lt[t[e][P]]; if (sk !== i) ut(sk), ft(sk) } return Mt }, o.prototype.relativeToAbsolute = function(t, e, n) { var i = f.clientHeight,
                            o = t.getBoundingClientRect(),
                            a = o.top,
                            s = o.bottom - o.top; if (e === O) a -= i;
                        else if (e === B) a -= i / 2; if (n === O) a += s;
                        else if (n === B) a += s / 2; return (a += Mt.getScrollTop()) + .5 | 0 }, o.prototype.animateTo = function(t, e) { e = e || {}; var n = Dt(),
                            o = Mt.getScrollTop(),
                            a = e.duration === i ? T : e.duration; if (!(Wt = { startTop: o, topDiff: t - o, targetTop: t, duration: a, startTime: n, endTime: n + a, easing: nt[e.easing || _], done: e.done }).topDiff) { if (Wt.done) Wt.done.call(Mt, false);
                            Wt = i } return Mt }, o.prototype.stopAnimateTo = function() { if (Wt && Wt.done) Wt.done.call(Mt, true);
                        Wt = i }, o.prototype.isAnimatingTo = function() { return !!Wt }, o.prototype.isMobile = function() { return Qt }, o.prototype.setScrollTop = function(t, n) { if (Zt = true === n, Qt) te = u.min(u.max(t, 0), Ft);
                        else e.scrollTo(0, t); return Mt }, o.prototype.getScrollTop = function() { if (Qt) return te;
                        else return e.pageYOffset || f.scrollTop || c.scrollTop || 0 }, o.prototype.getMaxScrollTop = function() { return Ft }, o.prototype.on = function(t, e) { return Ot[t] = e, Mt }, o.prototype.off = function(t) { return delete Ot[t], Mt }, o.prototype.destroy = function() { var t;
                        tt()(ie), yt(), At(f, [x], [C, S, A]); for (var e = 0, n = Lt.length; e < n; e++) pt(Lt[e].element); if (f.style.overflow = c.style.overflow = "", f.style.height = c.style.height = "", Bt) a.setStyle(Bt, "transform", "none");
                        Mt = i, Bt = i, Ot = i, Pt = i, Ft = 0, Rt = 1, Nt = i, zt = i, Ut = "down", qt = -1, $t = 0, Vt = 0, Yt = false, Wt = i, jt = i, Gt = i, Xt = i, Zt = i, Kt = 0, Jt = i, Qt = false, te = 0, ee = i }; var rt = function() { var t, o, a, s, l, g, y, w, b, C, x, S;
                            vt(f, [h, p, m, v].join(" "), (function(e) { var f = e.changedTouches[0]; for (s = e.target; 3 === s.nodeType;) s = s.parentNode; if (l = f.clientY, g = f.clientX, C = e.timeStamp, !F.test(s.tagName)) e.preventDefault(); switch (e.type) {
                                    case h:
                                        if (t) t.blur();
                                        Mt.stopAnimateTo(), t = s, o = y = l, a = g, b = C; break;
                                    case p:
                                        if (F.test(s.tagName) && n.activeElement !== s) e.preventDefault();
                                        w = l - y, S = C - x, Mt.setScrollTop(te - w, true), y = l, x = C; break;
                                    default:
                                    case m:
                                    case v:
                                        var c = o - l,
                                            A = a - g,
                                            _; if (A * A + c * c < 49) { if (!F.test(t.tagName)) { t.focus(); var T = n.createEvent("MouseEvents");
                                                T.initMouseEvent("click", true, true, e.view, 1, f.screenX, f.screenY, f.clientX, f.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), t.dispatchEvent(T) } return }
                                        t = i; var I = w / S;
                                        I = u.max(u.min(I, 3), -3); var E = u.abs(I / zt),
                                            k = I * E + .5 * zt * E * E,
                                            M = Mt.getScrollTop() - k,
                                            L = 0; if (M > Ft) L = (Ft - M) / k, M = Ft;
                                        else if (M < 0) L = -M / k, M = 0;
                                        E *= 1 - L, Mt.animateTo(M + .5 | 0, { easing: "outCubic", duration: E }); break } })), e.scrollTo(0, 0), f.style.overflow = c.style.overflow = "hidden" },
                        ot = function() { var t = f.clientHeight,
                                e = Ct(),
                                n, i, o, a, s, l, c, h, p, m, v; for (h = 0, p = Lt.length; h < p; h++)
                                for (i = (n = Lt[h]).element, o = n.anchorTarget, s = 0, l = (a = n.keyFrames).length; s < l; s++) { if (m = (c = a[s]).offset, v = e[c.constant] || 0, c.frame = m, c.isPercentage) m *= t, c.frame = m; if ("relative" === c.mode) pt(i), c.frame = Mt.relativeToAbsolute(o, c.anchors[0], c.anchors[1]) - m, pt(i, true); if (c.frame += v, Pt)
                                        if (!c.isEnd && c.frame > Ft) Ft = c.frame }
                            for (Ft = u.max(Ft, xt()), h = 0, p = Lt.length; h < p; h++) { for (s = 0, l = (a = (n = Lt[h]).keyFrames).length; s < l; s++)
                                    if (v = e[(c = a[s]).constant] || 0, c.isEnd) c.frame = Ft - c.offset + v;
                                n.keyFrames.sort(kt) } },
                        at = function(t, e) { for (var n = 0, i = Lt.length; n < i; n++) { var o = Lt[n],
                                    u = o.element,
                                    l = o.smoothScrolling ? t : e,
                                    f = o.keyFrames,
                                    c = f.length,
                                    h = f[0],
                                    p = f[f.length - 1],
                                    m = l < h.frame,
                                    v = l > p.frame,
                                    C = m ? h : p,
                                    x = o.emitEvents,
                                    S = o.lastFrameIndex,
                                    A, _; if (m || v) { if (m && -1 === o.edge || v && 1 === o.edge) continue; if (m) { if (At(u, [y], [b, w]), x && S > -1) wt(u, h.eventType, Ut), o.lastFrameIndex = -1 } else if (At(u, [b], [y, w]), x && S < c) wt(u, p.eventType, Ut), o.lastFrameIndex = c; switch (o.edge = m ? -1 : 1, o.edgeStrategy) {
                                        case "reset":
                                            pt(u); continue;
                                        case "ease":
                                            l = C.frame; break;
                                        default:
                                        case "set":
                                            var props = C.props; for (A in props)
                                                if (s.call(props, A))
                                                    if (_ = ht(props[A].value), 0 === A.indexOf("@")) u.setAttribute(A.substr(1), _);
                                                    else a.setStyle(u, A, _);
                                            continue } } else if (0 !== o.edge) At(u, [g, w], [y, b]), o.edge = 0; for (var T = 0; T < c - 1; T++)
                                    if (l >= f[T].frame && l <= f[T + 1].frame) { var I = f[T],
                                            E = f[T + 1]; for (A in I.props)
                                            if (s.call(I.props, A)) { var k = (l - I.frame) / (E.frame - I.frame); if (k = I.props[A].easing(k), _ = dt(I.props[A].value, E.props[A].value, k), _ = ht(_), 0 === A.indexOf("@")) u.setAttribute(A.substr(1), _);
                                                else a.setStyle(u, A, _) }
                                        if (x)
                                            if (S !== T) { if ("down" === Ut) wt(u, I.eventType, Ut);
                                                else wt(u, E.eventType, Ut);
                                                o.lastFrameIndex = T }
                                        break } } },
                        st = function() { if (Yt) Yt = false, bt(); var t = Mt.getScrollTop(),
                                e, n = Dt(),
                                o; if (Wt) { if (n >= Wt.endTime) t = Wt.targetTop, e = Wt.done, Wt = i;
                                else o = Wt.easing((n - Wt.startTime) / Wt.duration), t = Wt.startTop + o * Wt.topDiff | 0;
                                Mt.setScrollTop(t, true) } else if (!Zt) { var s; if (Xt.targetTop - t) Xt = { startTop: qt, topDiff: t - qt, targetTop: t, startTime: Ht, endTime: Ht + Gt }; if (n <= Xt.endTime) o = nt.sqrt((n - Xt.startTime) / Gt), t = Xt.startTop + o * Xt.topDiff | 0 } if (Zt || qt !== t) { Zt = false; var u = { curTop: t, lastTop: qt, maxTop: Ft, direction: Ut = t > qt ? "down" : t < qt ? "up" : Ut },
                                    l; if (false !== (Ot.beforerender && Ot.beforerender.call(Mt, u))) { if (at(t, Mt.getScrollTop()), Qt && Bt) a.setStyle(Bt, "transform", "translate(0, " + -te + "px) " + ee); if (qt = t, Ot.render) Ot.render.call(Mt, u) } if (e) e.call(Mt, false) }
                            Ht = n },
                        ut = function(t) { for (var e = 0, n = t.keyFrames.length; e < n; e++) { for (var i = t.keyFrames[e], o, a, s, props = {}, u; null !== (u = U.exec(i.props));) { if (s = u[1], a = u[2], null !== (o = s.match(H))) s = o[1], o = o[2];
                                    else o = _;
                                    a = a.indexOf("!") ? lt(a) : [a.slice(1)], props[s] = { value: a, easing: nt[o] } }
                                i.props = props } },
                        lt = function(t) { var e = []; if (j.lastIndex = 0, t = t.replace(j, (function(t) { return t.replace(Y, (function(t) { return t / 255 * 100 + "%" })) })), Z) G.lastIndex = 0, t = t.replace(G, (function(t) { return Z + t })); return t = t.replace(Y, (function(t) { return e.push(+t), "{?}" })), e.unshift(t), e },
                        ft = function(sk) { var t = {},
                                e, n; for (e = 0, n = sk.keyFrames.length; e < n; e++) ct(sk.keyFrames[e], t); for (t = {}, e = sk.keyFrames.length - 1; e >= 0; e--) ct(sk.keyFrames[e], t) },
                        ct = function(t, e) { var n; for (n in e)
                                if (!s.call(t.props, n)) t.props[n] = e[n];
                            for (n in t.props) e[n] = t.props[n] },
                        dt = function(t, e, n) { var i, o = t.length; if (o !== e.length) throw "Can't interpolate between \"" + t[0] + '" and "' + e[0] + '"'; var a = [t[0]]; for (i = 1; i < o; i++) a[i] = t[i] + (e[i] - t[i]) * n; return a },
                        ht = function(t) { var e = 1; return W.lastIndex = 0, t[0].replace(W, (function() { return t[e++] })) },
                        pt = function(t, e) { for (var n, i, o = 0, a = (t = [].concat(t)).length; o < a; o++)
                                if (i = t[o], n = Lt[i[P]])
                                    if (e) i.style.cssText = n.dirtyStyleAttr, At(i, n.dirtyClassAttr);
                                    else n.dirtyStyleAttr = i.style.cssText, n.dirtyClassAttr = St(i), i.style.cssText = n.styleAttr, At(i, n.classAttr) },
                        mt = function() { ee = "translateZ(0)", a.setStyle(Bt, "transform", ee); var t = l(Bt),
                                e = t.getPropertyValue("transform"),
                                n = t.getPropertyValue(Z + "transform"),
                                i; if (!(e && "none" !== e || n && "none" !== n)) ee = "" };
                    a.setStyle = function(el, t, e) { var style = el.style; if ("zIndex" === (t = t.replace($, V).replace("-", "")))
                            if (isNaN(e)) style[t] = e;
                            else style[t] = "" + (0 | e);
                        else if ("float" === t) style.styleFloat = style.cssFloat = e;
                        else try { if (X) style[X + t.slice(0, 1).toUpperCase() + t.slice(1)] = e;
                            style[t] = e } catch (t) {} }; var vt = a.addEvent = function(t, names, n) { for (var i = function(t) { if (!(t = t || e.event).target) t.target = t.srcElement; if (!t.preventDefault) t.preventDefault = function() { t.returnValue = false, t.defaultPrevented = true }; return n.call(this, t) }, o, a = 0, s = (names = names.split(" ")).length; a < s; a++) { if (o = names[a], t.addEventListener) t.addEventListener(o, n, false);
                                else t.attachEvent("on" + o, i);
                                ne.push({ element: t, name: o, listener: n }) } },
                        gt = a.removeEvent = function(t, names, e) { for (var n = 0, i = (names = names.split(" ")).length; n < i; n++)
                                if (t.removeEventListener) t.removeEventListener(names[n], e, false);
                                else t.detachEvent("on" + names[n], e) },
                        yt = function() { for (var t, e = 0, n = ne.length; e < n; e++) t = ne[e], gt(t.element, t.name, t.listener);
                            ne = [] },
                        wt = function(t, e, n) { if (Ot.keyframe) Ot.keyframe.call(Mt, t, e, n) },
                        bt = function() { var t = Mt.getScrollTop(); if (Ft = 0, Pt && !Qt) c.style.height = ""; if (ot(), Pt && !Qt) c.style.height = Ft + f.clientHeight + "px"; if (Qt) Mt.setScrollTop(u.min(Mt.getScrollTop(), Ft));
                            else Mt.setScrollTop(t, true);
                            Zt = true },
                        Ct = function() { var t = f.clientHeight,
                                copy = {},
                                e, n; for (e in Nt) { if ("function" == typeof(n = Nt[e])) n = n.call(Mt);
                                else if (/p$/.test(n)) n = n.slice(0, -1) / 100 * t;
                                copy[e] = n } return copy },
                        xt = function() { var t = 0,
                                e; if (Bt) t = u.max(Bt.offsetHeight, Bt.scrollHeight); return (e = u.max(t, c.scrollHeight, c.offsetHeight, f.scrollHeight, f.offsetHeight, f.clientHeight)) - f.clientHeight },
                        St = function(t) { var n = "className"; if (e.SVGElement && t instanceof e.SVGElement) t = t[n], n = "baseVal"; return t[n] },
                        At = function(t, add, remove) { var n = "className"; if (e.SVGElement && t instanceof e.SVGElement) t = t[n], n = "baseVal"; if (remove === i) return t[n] = add, void 0; for (var o = t[n], a = 0, s = remove.length; a < s; a++) o = Tt(o).replace(Tt(remove[a]), " ");
                            o = _t(o); for (var u = 0, l = add.length; u < l; u++)
                                if (-1 === Tt(o).indexOf(Tt(add[u]))) o += " " + add[u];
                            t[n] = _t(o) },
                        _t = function(t) { return t.replace(N, "") },
                        Tt = function(t) { return " " + t + " " },
                        Dt = Date.now || function() { return +new Date },
                        kt = function(t, e) { return t.frame - e.frame },
                        Mt, Lt, Bt, Ot, Pt, Ft = 0,
                        Rt = 1,
                        Nt, zt, Ut = "down",
                        qt = -1,
                        Ht = Dt(),
                        $t = 0,
                        Vt = 0,
                        Yt = false,
                        Wt, jt, Gt, Xt, Zt, Kt = 0,
                        Jt, Qt = false,
                        te = 0,
                        ee, ne = [],
                        ie; if ("function" == typeof define && define.amd) define([], (function() { return a }));
                    else if (void 0 !== t && t.exports) t.exports = a;
                    else e.skrollr = a }(window, document)
            }).call(window)
        },
        2791: function(t, e, n) { "use strict";

            function i(t) { this.initialize(t) }

            function o(t) { if (!window.getComputedStyle) return null; var transform = getComputedStyle(t).transform,
                    e = /matrix\(([^)]+)\)/.exec(transform); if (!e || e.length < 2) return null; if ((e = e[1].split(",")).length < 6) return null;
                else return { a: parseFloat(e[0], 10), b: parseFloat(e[1], 10), c: parseFloat(e[2], 10), d: parseFloat(e[3], 10), tx: parseFloat(e[4], 10), ty: parseFloat(e[5], 10) } }

            function a(t, e, n, i) { var a = o(e),
                    s = 0,
                    u = 0,
                    l, f; if (a && !isNaN(a.tx)) s = a.tx; if (a && !isNaN(a.ty)) u = a.ty; if ("horizontal" === n) l = t.innerWidth(), f = s;
                else l = t.innerHeight(), f = u; return Math.ceil(l * i + f) }

            function s(t) { if (!t && !t.element) return false; var e = t.element.getAttribute("data-animation-name"); if (e && "slidein" === e.toLowerCase()) return true;
                else return false }

            function u(t) { if (!s(t)) return t; var e = t.offset; if ("string" == typeof e)
                    if (e = parseFloat(e), t.offset.indexOf("%") > -1) e /= 100;
                return (t = $.extend({}, t)).offset = function() { return a(this.context, this.element, this.axis, e) }, t }
            n(2792), i.prototype.initialize = function t(e) { if (!this.waypoint)
                    if (e && e.element && "function" == typeof e.handler) e = u(e), this.waypoint = new Waypoint(e) }, i.prototype.destroy = function t() { if (this.waypoint) this.waypoint.destroy(), this.waypoint = null }, window.WaypointAdapter = i },
        2792: function(t, e) {
            var e = void 0,
                t = void 0;
            (function() {
                /*!
                Waypoints - 4.0.1
                Copyright Â© 2011-2016 Caleb Troughton
                Licensed under the MIT license.
                https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
                */
                ! function() { "use strict";

                    function t(i) { if (!i) throw new Error("No options passed to Waypoint constructor"); if (!i.element) throw new Error("No element option passed to Waypoint constructor"); if (!i.handler) throw new Error("No handler option passed to Waypoint constructor"); if (this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, i), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset]) this.options.offset = t.offsetAliases[this.options.offset];
                        this.group.add(this), this.context.add(this), n[this.key] = this, e += 1 } var e = 0,
                        n = {};
                    t.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function(t) { if (this.enabled)
                            if (this.callback) this.callback.apply(this, t) }, t.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete n[this.key] }, t.prototype.disable = function() { return this.enabled = false, this }, t.prototype.enable = function() { return this.context.refresh(), this.enabled = true, this }, t.prototype.next = function() { return this.group.next(this) }, t.prototype.previous = function() { return this.group.previous(this) }, t.invokeAll = function(t) { var e = []; for (var i in n) e.push(n[i]); for (var o = 0, a = e.length; o < a; o++) e[o][t]() }, t.destroyAll = function() { t.invokeAll("destroy") }, t.disableAll = function() { t.invokeAll("disable") }, t.enableAll = function() { for (var e in t.Context.refreshAll(), n) n[e].enabled = true; return this }, t.refreshAll = function() { t.Context.refreshAll() }, t.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function() { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: true, enabled: true, group: "default", horizontal: false, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t }(),
                function() { "use strict";

                    function t(t) { window.setTimeout(t, 1e3 / 60) }

                    function e(t) { if (this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = false, this.didResize = false, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, n += 1, !o.windowContext) o.windowContext = true, o.windowContext = new e(window);
                        this.createThrottledScrollHandler(), this.createThrottledResizeHandler() } var n = 0,
                        i = {},
                        o = window.Waypoint,
                        a = window.onload;
                    e.prototype.add = function(t) { var e = t.options.horizontal ? "horizontal" : "vertical";
                        this.waypoints[e][t.key] = t, this.refresh() }, e.prototype.checkEmpty = function() { var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                            n = this.element == this.element.window; if (t && e && !n) this.adapter.off(".waypoints"), delete i[this.key] }, e.prototype.createThrottledResizeHandler = function() {
                        function t() { e.handleResize(), e.didResize = false } var e = this;
                        this.adapter.on("resize.waypoints", (function() { if (!e.didResize) e.didResize = true, o.requestAnimationFrame(t) })) }, e.prototype.createThrottledScrollHandler = function() {
                        function t() { e.handleScroll(), e.didScroll = false } var e = this;
                        this.adapter.on("scroll.waypoints", (function() { if (!e.didScroll || o.isTouch) e.didScroll = true, o.requestAnimationFrame(t) })) }, e.prototype.handleResize = function() { o.Context.refreshAll() }, e.prototype.handleScroll = function() { var t = {},
                            e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }; for (var n in e) { var i = e[n],
                                o, a = i.newScroll > i.oldScroll ? i.forward : i.backward; for (var s in this.waypoints[n]) { var u = this.waypoints[n][s]; if (null !== u.triggerPoint) { var l = i.oldScroll < u.triggerPoint,
                                        f = i.newScroll >= u.triggerPoint,
                                        c, h; if (l && f || !l && !f) u.queueTrigger(a), t[u.group.id] = u.group } } } for (var p in t) t[p].flushTriggers();
                        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll } }, e.prototype.innerHeight = function() { if (this.element == this.element.window) return o.viewportHeight();
                        else return this.adapter.innerHeight() }, e.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function() { if (this.element == this.element.window) return o.viewportWidth();
                        else return this.adapter.innerWidth() }, e.prototype.destroy = function() { var t = []; for (var e in this.waypoints)
                            for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]); for (var i = 0, o = t.length; i < o; i++) t[i].destroy() }, e.prototype.refresh = function() { var t = this.element == this.element.window,
                            e = t ? void 0 : this.adapter.offset(),
                            n = {},
                            i; for (var a in this.handleScroll(), i = { horizontal: { contextOffset: t ? 0 : e.left, contextScroll: t ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: t ? 0 : e.top, contextScroll: t ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }) { var s = i[a]; for (var u in this.waypoints[a]) { var l = this.waypoints[a][u],
                                    f = l.options.offset,
                                    c = l.triggerPoint,
                                    h = 0,
                                    p = null == c,
                                    m, v, g, y, w; if (l.element !== l.element.window) h = l.adapter.offset()[s.offsetProp]; if ("function" == typeof f) f = f.apply(l);
                                else if ("string" == typeof f)
                                    if (f = parseFloat(f), l.options.offset.indexOf("%") > -1) f = Math.ceil(s.contextDimension * f / 100);
                                if (m = s.contextScroll - s.contextOffset, l.triggerPoint = Math.floor(h + m - f), v = c < s.oldScroll, g = l.triggerPoint >= s.oldScroll, w = !v && !g, !p && (y = v && g)) l.queueTrigger(s.backward), n[l.group.id] = l.group;
                                else if (!p && w) l.queueTrigger(s.forward), n[l.group.id] = l.group;
                                else if (p && s.oldScroll >= l.triggerPoint) l.queueTrigger(s.forward), n[l.group.id] = l.group } } return o.requestAnimationFrame((function() { for (var t in n) n[t].flushTriggers() })), this }, e.findOrCreateByElement = function(t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function() { for (var t in i) i[t].refresh() }, e.findByElement = function(t) { return i[t.waypointContextKey] }, window.onload = function() { if (a) a();
                        e.refreshAll() }, o.requestAnimationFrame = function(e) { var n;
                        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e) }, o.Context = e }(),
                function() { "use strict";

                    function t(t, e) { return t.triggerPoint - e.triggerPoint }

                    function e(t, e) { return e.triggerPoint - t.triggerPoint }

                    function Group(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this } var n = { vertical: {}, horizontal: {} },
                        i = window.Waypoint;
                    Group.prototype.add = function(t) { this.waypoints.push(t) }, Group.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, Group.prototype.flushTriggers = function() { for (var n in this.triggerQueues) { var i = this.triggerQueues[n],
                                o = "up" === n || "left" === n;
                            i.sort(o ? e : t); for (var a = 0, s = i.length; a < s; a += 1) { var u = i[a]; if (u.options.continuous || a === i.length - 1) u.trigger([n]) } }
                        this.clearTriggerQueues() }, Group.prototype.next = function(e) { this.waypoints.sort(t); var index = i.Adapter.inArray(e, this.waypoints),
                            n; return index === this.waypoints.length - 1 ? null : this.waypoints[index + 1] }, Group.prototype.previous = function(e) { this.waypoints.sort(t); var index = i.Adapter.inArray(e, this.waypoints); return index ? this.waypoints[index - 1] : null }, Group.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, Group.prototype.remove = function(t) { var index = i.Adapter.inArray(t, this.waypoints); if (index > -1) this.waypoints.splice(index, 1) }, Group.prototype.first = function() { return this.waypoints[0] }, Group.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, Group.findOrCreate = function(t) { return n[t.axis][t.name] || new Group(t) }, i.Group = Group }(),
                function() { "use strict";

                    function t(t) { return t === t.window }

                    function e(e) { if (t(e)) return e;
                        else return e.defaultView }

                    function n(t) { this.element = t, this.handlers = {} } var i = window.Waypoint;
                    n.prototype.innerHeight = function() { var e; return t(this.element) ? this.element.innerHeight : this.element.clientHeight }, n.prototype.innerWidth = function() { var e; return t(this.element) ? this.element.innerWidth : this.element.clientWidth }, n.prototype.off = function(t, e) {
                        function n(t, e, n) { for (var i = 0, o = e.length - 1; i < o; i++) { var a = e[i]; if (!n || n === a) t.removeEventListener(a) } } var i = t.split("."),
                            o = i[0],
                            a = i[1],
                            s = this.element; if (a && this.handlers[a] && o) n(s, this.handlers[a][o], e), this.handlers[a][o] = [];
                        else if (o)
                            for (var u in this.handlers) n(s, this.handlers[u][o] || [], e), this.handlers[u][o] = [];
                        else if (a && this.handlers[a]) { for (var type in this.handlers[a]) n(s, this.handlers[a][type], e);
                            this.handlers[a] = {} } }, n.prototype.offset = function() { if (!this.element.ownerDocument) return null; var t = this.element.ownerDocument.documentElement,
                            n = e(this.element.ownerDocument),
                            rect = { top: 0, left: 0 }; if (this.element.getBoundingClientRect) rect = this.element.getBoundingClientRect(); return { top: rect.top + n.pageYOffset - t.clientTop, left: rect.left + n.pageXOffset - t.clientLeft } }, n.prototype.on = function(t, e) { var n = t.split("."),
                            i = n[0],
                            o = n[1] || "__default",
                            a = this.handlers[o] = this.handlers[o] || {},
                            s;
                        (a[i] = a[i] || []).push(e), this.element.addEventListener(i, e) }, n.prototype.outerHeight = function(e) { var n = this.innerHeight(),
                            i; if (e && !t(this.element)) i = window.getComputedStyle(this.element), n += parseInt(i.marginTop, 10), n += parseInt(i.marginBottom, 10); return n }, n.prototype.outerWidth = function(e) { var n = this.innerWidth(),
                            i; if (e && !t(this.element)) i = window.getComputedStyle(this.element), n += parseInt(i.marginLeft, 10), n += parseInt(i.marginRight, 10); return n }, n.prototype.scrollLeft = function() { var t = e(this.element); return t ? t.pageXOffset : this.element.scrollLeft }, n.prototype.scrollTop = function() { var t = e(this.element); return t ? t.pageYOffset : this.element.scrollTop }, n.extend = function() {
                        function merge(t, e) { if ("object" == typeof t && "object" == typeof e)
                                for (var n in e)
                                    if (e.hasOwnProperty(n)) t[n] = e[n];
                            return t } for (var t = Array.prototype.slice.call(arguments), e = 1, n = t.length; e < n; e++) merge(t[0], t[e]); return t[0] }, n.inArray = function(t, e, n) { return null == e ? -1 : e.indexOf(t, n) }, n.isEmptyObject = function(t) { for (var e in t) return false; return true }, i.adapters.push({ name: "noframework", Adapter: n }), i.Adapter = n }()
            }).call(window)
        },
        2793: function(t, e, n) { "use strict"; var i = n(9);
            i(document).ready((function() {
                function t(t) { return e() ? 0 : n(t) }

                function e() { return a.hasClass("u-overlap") }

                function n(t) { var rect; return t[0].getBoundingClientRect().height } var o = i("header.u-sticky"); if (o.length && !o.closest(".u-overlap").length && !CSS.supports("position", "sticky") && !CSS.supports("position", "-webkit-sticky")) { o.css("width", "100%"); var update = function() { o.each((function() { var t = i(this),
                                e = t.height(),
                                n = t.data("additionalMargin") || 0; if (e !== n) { t.data("additionalMargin", e); var o = t;
                                do { o = o.next() } while (o.length > 0 && "none" === o.css("display"));
                                o.css("margin-top", parseFloat(o.css("margin-top")) - n + e + "px") } })) };
                    update(), i(window).load(update), i(window).resize(update) } var a = i(".u-body"); if (a.hasClass("u-overlap-transparent")) a.data("overlap-transparent", true); if (a.hasClass("u-overlap-contrast")) a.data("overlap-contrast", true);
                i(window).scroll((function e() { i("header.u-sticky").each((function() { var e = i(this),
                            n = e.nextAll(":visible:first"); if (n.length) { var o = n.offset().top,
                                s = e.offset().top,
                                u, l = s + t(e) > o,
                                f; if (a.toggleClass("u-sticky-fixed", l), s > o) a.addClass("u-sticky-scroll"), a.removeClass("u-overlap-transparent u-overlap-contrast");
                            else a.toggleClass("u-overlap-transparent", !!a.data("overlap-transparent")), a.toggleClass("u-overlap-contrast", !!a.data("overlap-contrast")), a.removeClass("u-sticky-scroll") } })) })) })) },
        2794: function(t, e, n) { "use strict";

            function i(t) {
                function e() { f = []; var e = o("html").scrollTop();
                    t.each((function() { var rect = this.getBoundingClientRect();
                        f.push({ height: rect.height, top: rect.top + e }) })) }

                function n(index) { for (var e = 0, n = 0; n < index; n++) { var i; if (t.eq(n).hasClass(c)) { var rect;
                            e += (f[n] || {}).height || 0 } } return e }

                function i() { l.refresh() }

                function a() { clearTimeout(p), p = setTimeout((function() { for (var n = 0; n < t.length; n++) { var i;
                            u(t.eq(n)) }
                        e(), l.refresh() }), 25) }

                function s(t, e, n) { if (!(t = o(t)).hasClass(c)) { var i = o("<div></div>");
                        i.addClass(h), i.css("height", e + "px"), t.after(i), t.addClass(c), t.css("top", n + "px") } }

                function u(t) {
                    (t = o(t)).nextAll("." + h).remove(), t.removeClass(c), t.css("top", "") } var l = {},
                    f = [],
                    c = "u-sticky-fixed",
                    h = "u-sticky-placeholder",
                    p = null; return l.init = function init() { o(window).on("scroll", i), o(window).on("resize", a), e() }, l.destroy = function t() { o(window).off("scroll", i), o(window).off("resize", a) }, l.refresh = function e() { var i = o("html").scrollTop();
                    t.each((function(t, el) { var e = n(t); if (i + e > f[t].top) s(el, f[t].height, e);
                        else u(el) })) }, l } var o = n(9);
            o(window).on("load", (function() { var t, sticky = i(o(".u-section-row.u-sticky"));
                sticky.init(), sticky.refresh() })), window._npStickyStack = i },
        2795: function(t, e, n) { "use strict"; var i = n(9);
            i((function() { i(".u-nav-container .u-nav-link").each((function() { window._npInitMenuLink(i(this)) })), i(".u-nav-container-collapse .u-nav-link").each((function() { window._npInitMenuLink(i(this), true) })) })), window._npInitMenuLink = function t(e, n) { var o = i("body"),
                    a = /#.*?$/,
                    s = o.attr("data-home-page-name"),
                    homePage = o.attr("data-home-page"),
                    pageTitle = i("title").text().trim(),
                    nav = e.closest(".u-menu"),
                    u = nav.attr("data-submenu-level") || "on-click",
                    l = nav.is(".u-menu-mega"),
                    f = e.attr("href") || "",
                    c = (e[0].href || "").replace(a, ""),
                    h = f.replace(a, ""),
                    p = s || pageTitle,
                    m = e.text().trim(),
                    hash = f.replace(/^[^#]+/, ""); if (!hash || "#" === hash || !i(hash).length) { var v = c.split(".").slice(0, -1).join("."),
                        pageName = h.replace(".html", ""),
                        g = new RegExp(pageName + "_[\\s\\S]+?.html", "gm"); if (h && window.location.href.toString() === c || h && window.location.href.toString() === v || h && window.location.href.toString().search(g) > -1 || m && p === m || homePage && h === homePage) { var y = e; if (!l || n) y = e.parents(".u-nav-item").children(".u-nav-link"); if (y.addClass("active"), "with-reload" === u && n) y.siblings(".u-nav-popup").addClass("open").css("max-height", "none") } } } },
        2796: function(t, e, n) { "use strict"; var i = n(9),
                o; if ("Microsoft Internet Explorer" === navigator.appName || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || void 0 !== i.browser && 1 === i.browser.msie) i((function() { i(".u-social-icons, .u-language").each((function(t, e) { var n = i(e),
                        size = n.css("height");
                    n.find(".u-svg-link").css("width", size) })) })) },
        2797: function(t, e, n) { "use strict"; var Animation = n(2798),
                i = n(187);
            n(403), window.uAnimation = new Animation(i.instance()).init() },
        2798: function(t, e, n) { "use strict";

            function Animation(factory) { this.factory = factory, this.animationElements = null, this.animationEvents = [], this._section = null, this._sliderNode = null, this._slideNumber = null, this._slideEvent = null, this._animationInfo = null, this._animation = null, this._subscribeQueue = [], this.status = "loading", this._onDOMContentLoaded = this._onDOMContentLoaded.bind(this), this._onLoadingComplete = this._onLoadingComplete.bind(this) }

            function i(t) { var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame; if (!e) return t(), void 0;
                e.apply(window, arguments) }

            function o(t) { return "string" == typeof t.name && -1 !== m.indexOf(t.name.toLowerCase()) }

            function a(t) { return "string" == typeof t.direction && -1 !== v.indexOf(t.direction.toLowerCase()) }

            function s(section, t) { if (t && t.length)
                    if (u())
                        for (var e = 0; e < t.length; e++)
                            if (a(t[e]) || o(t[e])) { section.style.overflow = "hidden"; break } }

            function u() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || navigator.vendor || window.opera) } var l = n(256),
                f = n(257),
                c = n(2799),
                h = n(2800),
                p = n(2801);
            Animation.utils = l, Animation.prototype.init = function init() { if ("loading" !== document.readyState) return this._onDOMContentLoaded(), void 0;
                else return document.addEventListener("DOMContentLoaded", this._onDOMContentLoaded), this }, Animation.prototype.start = function t() { var e = this._subscribeQueue;
                i((function() { e.forEach((function(el) { if (el.event && el.animation) el.event.subscribe(el.animation) })), e.length = 0 })) }, Animation.prototype.visitSection = function t(e) { if (e.classList.contains("u-carousel")) return this.visitSlider(e), void 0;
                this._section = e, this._visitElementsInContentSlider(e), this._visitElementsNotInSlider(e), this._section = null }, Animation.prototype._visitElementsInContentSlider = function(t) { for (var e = t.querySelectorAll(".u-carousel"), n = 0; n < e.length; n++) this.visitSlider(e[n]) }, Animation.prototype._visitElementsNotInSlider = function(t) { for (var e = [], n = t.querySelectorAll("[data-animation-name]"), o = 0; o < n.length; o++) { var a = n[o]; if (a.closest && null === a.closest(".u-carousel") && a.getAttribute("data-animation-name")) this.visitAnimatedElement(a), e.push(this._animationInfo), this._subscribeQueue.push({ animation: this._animation, event: c }), i(this._animation.init.bind(this._animation)) }
                s(t, e) }, Animation.prototype.visitSlider = function t(e) { this._sliderNode = e; for (var n = e.querySelectorAll(".u-carousel-item"), i = 0; i < n.length; i++) this._slideNumber = i, this.visitSlide(n[i]) }, Animation.prototype.visitSlide = function t(e) { var n = e.querySelectorAll("[data-animation-name]"),
                    i = [];
                this._slideEvent = new h(this._sliderNode, e, this._slideNumber); for (var o = 0; o < n.length; o++)
                    if (n[o].getAttribute("data-animation-name")) this.visitAnimatedElement(n[o]), i.push(this._animationInfo), this._animation.init(), this._slideEvent.animations.push(this._animation);
                this._slideEvent.init(), s(e, i) }, Animation.prototype.visitAnimatedElement = function t(e) { this._animationInfo = new f(e, this._section), this._animation = this.factory.createAnimation(this._animationInfo), this.animationElements.push(this._animation) }, Animation.prototype._onDOMContentLoaded = function() { if (this.status = "DOMContentLoaded", document.removeEventListener("DOMContentLoaded", this._onDOMContentLoaded), !this.animationElements) { this.animationElements = [], this.factory.setHint(p); var sections = $("section, header, footer"),
                        length = sections.length; if (sections.each(function(index, t) { if (this.visitSection(t), !--length) this.factory.setHint(null) }.bind(this)), "interactive" !== document.readyState) return this._onLoadingComplete(), void 0;
                    window.addEventListener("load", this._onLoadingComplete) } }, Animation.prototype._onLoadingComplete = function() { this.status = "complete", window.removeEventListener("load", this._onLoadingComplete), this.start() }; var m = ["lightspeedin", "flipin", "flipout"],
                v = ["right", "downright", "upright"];
            t.exports = Animation, window.Animation = Animation },
        2799: function(t, e, n) { "use strict";

            function i(animation) { if (animation.start(), !animation.isInOutAnimation() && !animation.info.infinite) { var t = animation.info.duration,
                        e = animation.info.delay;
                    setTimeout((function() { animation.clear() }), t + e) } }

            function o(animation) { if (animation.isInOutAnimation()) animation.startOut() } var a = { subscribe: function t(animation) { var e = animation && animation.info || {},
                        n = e.section || e.element;
                    animation.info.eventObject = new WaypointAdapter({ element: n, handler: function(t) { if (animation)
                                if ("up" === t) return o(animation), void 0;
                                else return i(animation), void 0 }, offset: "70%" }) } };
            t.exports = a, window.AnimationEventScroll = a },
        2800: function(t, e, n) { "use strict";

            function i(carousel, slide, t) { this.carousel = $(carousel), this.slide = $(slide), this.slideNum = t, this.animations = [], this._delays = [], this._autoplayPaused = false, this._handleSlide = o.bind(this), this._handleSlid = a.bind(this) }

            function o(t) { if (t)
                    if (t.from === this.slideNum) this.slideOut(t) }

            function a(t) { if (t && t.to === this.slideNum) this.pauseAutoplayWhileInAnimation(), this.startInAnimation() }
            i.prototype.init = function init() { if ($(this.carousel).on("u-slide.bs.u-carousel", this._handleSlide), $(this.carousel).on("slid.bs.u-carousel", this._handleSlid), this.slide.is(".u-active")) { if (this._isAutoplayOnStart()) this.pauseAutoplayWhileInAnimation();
                    this.startInAnimation() } }, i.prototype.deinit = function t() { $(this.carousel).off("slid.bs.u-carousel", this._handleSlid), $(this.carousel).off("u-slide.bs.u-carousel", this._handleSlide) }, i.prototype.resetAnimations = function t() { for (var e = 0; e < this.animations.length; e++)
                    if (this.animations[e].reset) this.animations[e].reset() }, i.prototype.pauseAutoplayWhileInAnimation = function t() { var e = this.countMaxInAnimationTime(); if (e > 0) this._pauseAutoplay(), this._delay(e, function() { this._continueAutoplay(), this._clearDelays() }.bind(this)) }, i.prototype.startInAnimation = function t() { this.animations.forEach(function(animation) { animation.start() }.bind(this)) }, i.prototype.needOutAnimation = function t() { for (var e = 0, length = this.animations.length; e < length; e++)
                    if (this.animations[e].needOutAnimation && this.animations[e].needOutAnimation()) return true;
                return false }, i.prototype.startOutAnimations = function t() { for (var e = 0; e < this.animations.length; e++)
                    if (this.animations[e].startOut) this.animations[e].startOut() }, i.prototype.countMaxOutAnimationTime = function t() { if (!this.animations || !this.animations.length) return 0; var e = this.animations.map((function(animation) { return animation.getOutTime() })); return Math.max.apply(null, e) }, i.prototype.countMaxInAnimationTime = function t() { if (!this.animations || !this.animations.length) return 0; var e = this.animations.map((function(animation) { return animation.getTime() })); return Math.max.apply(null, e) }, i.prototype.slideOut = function t(e) { if (this._delays.length > 0) this._cancelDelays(); if (this._continueAutoplay(), !this.needOutAnimation()) return this.resetAnimations(), void 0;
                e.preventDefault(); var n = this.countMaxOutAnimationTime(),
                    i = "number" == typeof e.to ? e.to : null,
                    o = e.direction;
                setTimeout(function() { if (this.resetAnimations(), null !== i) return $(e.target)["u-carousel"](i), void 0; if ("left" === o) return $(e.target)["u-carousel"]("next"), void 0; if ("right" === o) $(e.target)["u-carousel"]("prev") }.bind(this), n), this.startOutAnimations() }, i.prototype._delay = function t(e, n) { this._delays.push(setTimeout((function() { n() }), e)) }, i.prototype._cancelDelays = function t() { this._delays.forEach((function(id) { clearTimeout(id) })), this._delays.length = 0 }, i.prototype._clearDelays = function t() { this._delays.length = 0 }, i.prototype._isAutoplayOnStart = function t() { var e = this.carousel.attr("data-u-ride"); if (!e) return false;
                else return "carousel" === (e = e.toLowerCase()) }, i.prototype._pauseAutoplay = function t() { this.carousel["u-carousel"]("pause"), this._autoplayPaused = true }, i.prototype._continueAutoplay = function t() { if (this._autoplayPaused) this.carousel["u-carousel"]("cycle"), this._autoplayPaused = false }, t.exports = i, window.AnimationEventSlider = i },
        2801: function(t, e, n) { "use strict";

            function i(t) { var e = []; if (-1 !== a.indexOf(t.name) || t.direction) e.push("transform"); if (-1 !== s.indexOf(t.name)) e.push("opacity"); if (-1 !== u.indexOf(t.name)) e.push("contents"); if (0 === e.length) e.push("auto"); return e.join(", ") } var o = {},
                a = ["bounce", "headShake", "heartBeat", "jello", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "bounceIn", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "rotateIn", "slideIn", "hinge", "jackInTheBox", "rollIn", "zoomIn", "customAnimationIn", "customAnimationOut"],
                s = ["flash", "bounceIn", "fadeIn", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "rotateIn", "hinge", "jackInTheBox", "rollIn", "zoomIn", "customAnimationIn", "customAnimationOut"],
                u = ["counter"];
            o.hintBrowser = function t(e) { if (e && e.element) e.element.style.willChange = i(e) }, o.removeHint = function t(e) { e.element.style.willChange = "auto" }, t.exports = o, window.WillChangeHint = o },
        2802: function(t, e, n) {
            "use strict";

            function i() {}

            function o(t, props) { document.body.classList.add("u-scrollspy-prevent"), t.animate(props, { done: function() { document.body.classList.remove("u-scrollspy-prevent") } }) }
            var a = n(9);
            i.prototype.scroll = function(t) { var e = 1,
                    n = a(".u-sticky").toArray().reduce((function(t, el) { return t + (a(el).outerHeight(true) || 0) - e }), 0);
                o(a("html, body"), { scrollTop: t.offset().top - n }) }, i.prototype.scrollTop = function() { o(a("html, body"), { scrollTop: 0 }) }, i.prototype.update = function(t) {
                var e = "string" == typeof t ? t : a(t.currentTarget).attr("href");
                if ((e = (e || "").replace(/^[^#]+/, "")).match(/^#[\d\w-_]+$/i)) {
                    var n = a(e);
                    if (n.length) {
                        if (t.preventDefault) t.preventDefault(); {
                            this.scroll(n);
                            setTimeout(
                                function() {
                                    if (a(t.currentTarget).parent().parent().hasClass("u-nav")) {
                                        a(t.currentTarget).parent().parent().find(">li,>li>a").removeClass("active");
                                        a(t.currentTarget).addClass("active");
                                    }
                                },
                                100)
                        }
                    }
                }
            }, window._npScrollAnchor = new i, a(window).on("load", (function() { window._npScrollAnchor.update(window.location.hash), a("body").on("click", "a:not([data-u-slide], [data-u-slide-to], [data-toggle], .u-tab-link, .u-quantity-button)", (function(t) { if (!a(this).is(".u-dialog-link") && a(this).closest(".u-shortcode,.mypages").length == 0) { window._npScrollAnchor.update(t) } })), a("body").on("click", ".u-back-to-top", (function() { window._npScrollAnchor.scrollTop() })) }))
        },
        2803: function(t, e, n) { "use strict"; var i = n(9),
                o = n(2804),
                a = "u-gdpr-cookie",
                s = "u-cookies-consent",
                u = "u-button-confirm",
                l = "u-button-decline",
                f = "_u_GDPRConfirmCode";
            i((function() { var t; try { t = o.get(a) } catch (e) { t = false } var e = window[f] || function() {}; if (!t) { var n = i("." + s);
                    n.addClass("show"), n.find("." + u).on("click", (function(t) { t.preventDefault(), o.set(a, true, { expires: 365, secure: true }), n.removeClass("show"), e() })), n.find("." + l).on("click", (function(t) { t.preventDefault(), o.set(a, false, { expires: 365, secure: false }), n.removeClass("show") })) } else if ("true" === t) e() })) },
        2804: function(t, e, n) { "use strict"; var i, o;
            /*!
             * JavaScript Cookie v2.2.1
             * https://github.com/js-cookie/js-cookie
             *
             * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
             * Released under the MIT license
             */
            ! function(factory) { var a; if (true) !(void 0 !== (o = "function" == typeof(i = factory) ? i.call(e, n, e, t) : i) && (t.exports = o)), a = true; if (true) t.exports = factory(), a = true; if (!a) { var s = window.Cookies,
                        u = window.Cookies = factory();
                    u.noConflict = function() { return window.Cookies = s, u } } }((function() {
                function t() { for (var t = 0, e = {}; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) e[i] = n[i] } return e }

                function e(t) { return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) }

                function init(n) {
                    function i() {}

                    function o(e, o, a) { if ("undefined" != typeof document) { if ("number" == typeof(a = t({ path: "/" }, i.defaults, a)).expires) a.expires = new Date(1 * new Date + 864e5 * a.expires);
                            a.expires = a.expires ? a.expires.toUTCString() : ""; try { var s = JSON.stringify(o); if (/^[\{\[]/.test(s)) o = s } catch (t) {}
                            o = n.write ? n.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape); var u = ""; for (var l in a)
                                if (a[l])
                                    if (u += "; " + l, true !== a[l]) u += "=" + a[l].split(";")[0];
                            u = u.replace('; secure', ''); return document.cookie = e + "=" + o + u } }

                    function a(t, i) { if ("undefined" != typeof document) { for (var o = {}, a = document.cookie ? document.cookie.split("; ") : [], s = 0; s < a.length; s++) { var u = a[s].split("="),
                                    l = u.slice(1).join("="); if (!i && '"' === l.charAt(0)) l = l.slice(1, -1); try { var f = e(u[0]); if (l = (n.read || n)(l, f) || e(l), i) try { l = JSON.parse(l) } catch (t) {}
                                    if (o[f] = l, t === f) break } catch (t) {} } return t ? o[t] : o } } return i.set = o, i.get = function(t) { return a(t, false) }, i.getJSON = function(t) { return a(t, true) }, i.remove = function(e, n) { o(e, "", t(n, { expires: -1 })) }, i.defaults = {}, i.withConverter = init, i } return init((function() {})) })) },
        2805: function(t, e, n) { "use strict";
            $((function() { var selector = ".u-back-to-top";
                $(selector).hide(), $(window).scroll((function() { if ($(this).scrollTop() > 100) $(selector).fadeIn().css("display", "block");
                    else $(selector).fadeOut() })) })) },
        2806: function(t, e, n) { "use strict"; var i = n(9),
                o = n(2807);
            window._npScrollSpyInit = function() { var t = '.u-menu .u-nav-container .u-nav-link[href*="#"]',
                    e = '.u-menu .u-nav-container-collapse .u-nav-link[href*="#"]',
                    n; if (document.querySelectorAll(t).length) try { o(t, { nested: true, offset: function() { var t, e; return (i(".u-header.u-sticky").outerHeight(true) || 0) + 1 } }), o(e, { nested: true, offset: function() { return i(".u-header.u-sticky").outerHeight(true) || 0 } }) } catch (t) { console.warn("ScrollSpy: has no items") } }, document.addEventListener("gumshoeActivate", (function(t) { var link;
                t.detail.link.classList.add("active") }), false), document.addEventListener("gumshoeDeactivate", (function(t) { var link;
                t.detail.link.classList.remove("active") }), false), i((function() { window._npScrollSpyInit() })) },
        2807: function(t, e, n) { "use strict";
            (function(n) { var i, o;
                /*!
                 * gumshoejs v5.1.2
                 * A simple, framework-agnostic scrollspy script.
                 * (c) 2019 Chris Ferdinandi
                 * MIT License
                 * http://github.com/cferdinandi/gumshoe
                 */
                ! function(n, factory) { if (true) !(void 0 !== (o = function() { return factory(n) }.apply(e, i = [])) && (t.exports = o));
                    else if ("object" == typeof e) t.exports = factory(n);
                    else n.Gumshoe = factory(n) }(void 0 !== n ? n : "undefined" != typeof window ? window : this, (function(t) { var e = { navClass: "active", contentClass: "active", nested: false, nestedClass: "active", offset: 0, reflow: false, events: true },
                        n = function() { var t = {}; return Array.prototype.forEach.call(arguments, (function(e) { for (var n in e)
                                    if (e.hasOwnProperty(n)) t[n] = e[n] })), t },
                        i = function(type, t, e) { if (e.settings.events) { var n = new CustomEvent(type, { bubbles: true, cancelable: true, detail: e });
                                t.dispatchEvent(n) } },
                        o = function(t) { var e = 0; if (t.offsetParent)
                                for (; t;) e += t.offsetTop, t = t.offsetParent; return e >= 0 ? e : 0 },
                        a = function(t) { if (t) t.sort((function(t, e) { var n, i; if (o(t.content) < o(e.content)) return -1;
                                else return 1 })) },
                        s = function(settings) { if ("function" == typeof settings.offset) return parseFloat(settings.offset());
                            else return parseFloat(settings.offset) },
                        u = function() { return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) },
                        l = function(e, settings, n) { var i = e.getBoundingClientRect(),
                                o = s(settings); if (n) return parseInt(i.bottom, 10) < (t.innerHeight || document.documentElement.clientHeight);
                            else return parseInt(i.top, 10) <= o },
                        f = function() { if (t.innerHeight + t.pageYOffset >= u()) return true;
                            else return false },
                        c = function(t, settings) { if (f() && l(t.content, settings, true)) return true;
                            else return false },
                        h = function(t, settings) { if (t.length) { var e = t[t.length - 1]; if (c(e, settings)) return e; for (var n = t.length - 1; n >= 0; n--)
                                    if (l(t[n].content, settings)) return t[n] } },
                        p = function(nav, settings) { if (settings.nested && nav.parentNode) { var t = nav.parentNode.closest("li"); if (t) t.classList.remove(settings.nestedClass), p(t, settings) } },
                        m = function(items, settings) { if (items) { var t = items.nav.closest("li"); if (t) t.classList.remove(settings.navClass), items.content.classList.remove(settings.contentClass), p(t, settings), i("gumshoeDeactivate", t, { link: items.nav, content: items.content, settings: settings }) } },
                        v = function(nav, settings) { if (settings.nested) { var t = nav.parentNode.closest("li"); if (t) t.classList.add(settings.nestedClass), v(t, settings) } },
                        g = function(items, settings) { if (items) { var t = items.nav.closest("li"); if (t) t.classList.add(settings.navClass), items.content.classList.add(settings.contentClass), v(t, settings), i("gumshoeActivate", t, { link: items.nav, content: items.content, settings: settings }) } },
                        y; return function(selector, i) { var o = {},
                            s, u, l, f, settings;
                        o.setup = function() { s = document.querySelectorAll(selector), u = [], Array.prototype.forEach.call(s, (function(t) { var e = document.getElementById(decodeURIComponent(t.hash.substr(1))); if (e) u.push({ nav: t, content: e }) })), a(u) }, o.detect = function() { if (!document.body.classList.contains("u-scrollspy-prevent")) { var t = h(u, settings); if (t) { if (!l || t.content !== l.content) m(l, settings), g(t, settings), l = t } else if (l) m(l, settings), l = null } }; var c = function() { if (f) t.cancelAnimationFrame(f);
                                f = t.requestAnimationFrame(o.detect) },
                            p = function() { if (f) t.cancelAnimationFrame(f);
                                f = t.requestAnimationFrame((function() { a(u), o.detect() })) },
                            init; return o.destroy = function() { if (l) m(l, settings); if (t.removeEventListener("scroll", c, false), settings.reflow) t.removeEventListener("resize", p, false);
                                u = null, s = null, l = null, f = null, settings = null },
                            function() { if (settings = n(e, i || {}), o.setup(), o.detect(), t.addEventListener("scroll", c, false), settings.reflow) t.addEventListener("resize", p, false) }(), o } })) }).call(e, n(45)) },
        2808: function(t, e, n) { "use strict"; var i = n(9),
                o = n(2809),
                HorizontalLayoutSlider = n(258);
            i(window).on("load", (function() { setTimeout((function() { i(".u-gallery").removeClass("u-no-transition"), i(".u-layout-horizontal").each((function() { var gallery = i(this),
                            slider = new HorizontalLayoutSlider(gallery, true);
                        gallery.children(".u-gallery-nav").click((function(t) { t.preventDefault(); var e = i(t.currentTarget);
                            slider.navigate(e) })) })) }), 250) })), i((function() { var t;
                i("body").on("mouseenter", ".u-gallery.u-no-transition", (function() { i(this).closest(".u-gallery").removeClass("u-no-transition") })), new o([".u-gallery.u-product-zoom.u-layout-thumbnails", ".u-gallery.u-product-zoom.u-layout-carousel"]).init() })) },
        2809: function(t, e, n) { "use strict";

            function i(t) { this.galleryZoomSelector = t }

            function o(t) { var e = t.currentTarget,
                    n, i = u(e).closest(".u-gallery-item").data("zoom_click"),
                    o = e.getBoundingClientRect(),
                    a = e.querySelector("img"),
                    s = t.clientX,
                    l = t.clientY,
                    f = t.originalEvent.changedTouches; if (!i && !f) { u(e).addClass("hover"); var c = s - o.x,
                        h = l - o.y;
                    requestAnimationFrame((function() { var t = c * (1 - a.offsetWidth / e.offsetWidth),
                            n = h * (1 - a.offsetHeight / e.offsetHeight);
                        a.style.left = t + "px", a.style.top = n + "px" })) } }

            function a(t) { var e = u(t.currentTarget),
                    n;
                u(e).removeClass("hover"), u(e).closest(".u-gallery-item").data("zoom_click") }

            function s(t) { var e = u(t.currentTarget);
                u(e).removeClass("hover") } var u = n(9);
            t.exports = i, i.prototype.init = function() { var t = this.galleryZoomSelector.map((function(selector) { return selector + " .u-back-slide" })).join(", "),
                    e = this.galleryZoomSelector.map((function(selector) { return selector + " .u-back-image" })).join(", ");
                u("body").on("mousedown touchstart", t, a), u("body").on("mousemove touchmove", t, o), u("body").on("click mouseup mouseout touchend touchcancel", t, s), u(e).each((function(t, e) { var url = e.getAttribute("src");
                    u(e).parent().css("background-image", "url(" + url + ")") })) }, window.ImageZoom = i },
        2810: function(t, e, n) { "use strict"; var i = n(9),
                TabsControl = n(259);
            window._npTabsInit = function() {
                function t(t) { t.preventDefault(), t.stopPropagation(); var link = i(t.currentTarget),
                        tabsControl;
                    new TabsControl(link).show() }
                i("body").on("click", ".u-tab-link", t) }, i((function() { window._npTabsInit() })) },
        2811: function(t, e, n) { "use strict"; var i = n(2812);
            window._npLazyImages = { setup: function() { window.lazySizesConfig = window.lazySizesConfig || {}, window.lazySizesConfig.init = false, document.addEventListener("lazybeforeunveil", (function(t) { var el = t.target; if (el.matches("video")) { var e = el.getAttribute("data-src"),
                                n = el.querySelector("source"); if (n && e) n.setAttribute("src", e) } else { var i = el.getAttribute("data-bg"); if (i) { var list = cssBgParser.parseElementStyle(getComputedStyle(el)); if (list.backgrounds.length) list.backgrounds[0].color = "";
                                list.backgrounds.push(new cssBgParser.Background({ image: i })), el.style.backgroundImage = list.toString("image") } } })) }, init: function() { i.init() } }, window._npLazyImages.setup(), $((function() { window._npLazyImages.init() })) },
        2812: function(t, e, n) { "use strict";! function(e, factory) { var n = factory(e, e.document, Date); if (e.lazySizes = n, "object" == typeof t && t.exports) t.exports = n }("undefined" != typeof window ? window : {}, (function t(e, n, i) { var o, a; if (! function() { var t, n = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: true, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: true, ricTimeout: 0, throttleDelay: 125 }; for (t in a = e.lazySizesConfig || e.lazysizesConfig || {}, n)
                            if (!(t in a)) a[t] = n[t] }(), !n || !n.getElementsByClassName) return { init: function() {}, cfg: a, noSupport: true }; var s = n.documentElement,
                    u = e.HTMLPictureElement,
                    l = "addEventListener",
                    f = "getAttribute",
                    c = e[l].bind(e),
                    h = e.setTimeout,
                    p = e.requestAnimationFrame || h,
                    m = e.requestIdleCallback,
                    v = /^picture$/i,
                    g = ["load", "error", "lazyincluded", "_lazyloaded"],
                    y = {},
                    w = Array.prototype.forEach,
                    b = function(t, e) { if (!y[e]) y[e] = new RegExp("(\\s|^)" + e + "(\\s|$)"); return y[e].test(t[f]("class") || "") && y[e] },
                    C = function(t, e) { if (!b(t, e)) t.setAttribute("class", (t[f]("class") || "").trim() + " " + e) },
                    x = function(t, e) { var n; if (n = b(t, e)) t.setAttribute("class", (t[f]("class") || "").replace(n, " ")) },
                    S = function(t, e, add) { var n = add ? l : "removeEventListener"; if (add) S(t, e);
                        g.forEach((function(i) { t[n](i, e) })) },
                    A = function(t, e, i, a, s) { var u = n.createEvent("Event"); if (!i) i = {}; return i.instance = o, u.initEvent(e, !a, !s), u.detail = i, t.dispatchEvent(u), u },
                    _ = function(el, t) { var n; if (!u && (n = e.picturefill || a.pf)) { if (t && t.src && !el[f]("srcset")) el.setAttribute("srcset", t.src);
                            n({ reevaluate: true, elements: [el] }) } else if (t && t.src) el.src = t.src },
                    T = function(t, style) { return (getComputedStyle(t, null) || {})[style] },
                    I = function(t, e, n) { for (n = n || t.offsetWidth; n < a.minSize && e && !t._lazysizesWidth;) n = e.offsetWidth, e = e.parentNode; return n },
                    E = (B = [], O = L = [], F = function(t, e) { if (k && !e) t.apply(this, arguments);
                        else if (O.push(t), !M) M = true, (n.hidden ? h : p)(P) }, F._lsFlush = P = function() { var t = O; for (O = L.length ? B : L, k = true, M = false; t.length;) t.shift()();
                        k = false }, F),
                    k, M, L, B, O, P, F, N = function(t, simple) { return simple ? function() { E(t) } : function() { var e = this,
                                n = arguments;
                            E((function() { t.apply(e, n) })) } },
                    z = function(t) { var e, n = 0,
                            o = a.throttleDelay,
                            s = a.ricTimeout,
                            u = function() { e = false, n = i.now(), t() },
                            l = m && s > 49 ? function() { if (m(u, { timeout: s }), s !== a.ricTimeout) s = a.ricTimeout } : N((function() { h(u) }), true); return function(t) { var a; if (t = true === t) s = 33; if (!e) { if (e = true, (a = o - (i.now() - n)) < 0) a = 0; if (t || a < 9) l();
                                else h(l, a) } } },
                    U = function(t) { var e, n, o = 99,
                            a = function() { e = null, t() },
                            s = function() { var t = i.now() - n; if (t < o) h(s, o - t);
                                else(m || a)(a) }; return function() { if (n = i.now(), !e) e = h(s, o) } },
                    loader = (nt = /^img$/i, rt = /^iframe$/i, ot = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent), at = 0, st = 0, ut = 0, lt = -1, ft = function(t) { if (ut--, !t || ut < 0 || !t.target) ut = 0 }, ct = function(t) { if (null == tt) tt = "hidden" == T(n.body, "visibility"); return tt || !("hidden" == T(t.parentNode, "visibility") && "hidden" == T(t, "visibility")) }, dt = function(t, e) { var i, o = t,
                            visible = ct(t); for (X -= e, J += e, Z -= e, K += e; visible && (o = o.offsetParent) && o != n.body && o != s;)
                            if ((visible = (T(o, "opacity") || 1) > 0) && "visible" != T(o, "overflow")) i = o.getBoundingClientRect(), visible = K > i.left && Z < i.right && J > i.top - 1 && X < i.bottom + 1;
                        return visible }, pt = z(ht = function() { var t, e, rect, i, u, l, c, h, p, m, v, g, y = o.elements; if ((Y = a.loadMode) && ut < 8 && (t = y.length)) { for (e = 0, lt++; e < t; e++)
                                if (y[e] && !y[e]._lazyRace)
                                    if (!(!ot || o.prematureUnveil && o.prematureUnveil(y[e]))) { if (!(h = y[e][f]("data-expand")) || !(l = 1 * h)) l = st; if (!m)
                                            if (m = !a.expand || a.expand < 1 ? s.clientHeight > 500 && s.clientWidth > 500 ? 500 : 370 : a.expand, o._defEx = m, v = m * a.expFactor, g = a.hFac, tt = null, st < v && ut < 1 && lt > 2 && Y > 2 && !n.hidden) st = v, lt = 0;
                                            else if (Y > 1 && lt > 1 && ut < 6) st = m;
                                        else st = at; if (p !== l) j = innerWidth + l * g, G = innerHeight + l, c = -1 * l, p = l; if (rect = y[e].getBoundingClientRect(), (J = rect.bottom) >= c && (X = rect.top) <= G && (K = rect.right) >= c * g && (Z = rect.left) <= j && (J || K || Z || X) && (a.loadHidden || ct(y[e])) && ($ && ut < 3 && !h && (Y < 3 || lt < 4) || dt(y[e], l))) { if (Ct(y[e]), u = true, ut > 9) break } else if (!u && $ && !i && ut < 4 && lt < 4 && Y > 2 && (H[0] || a.preloadAfterLoad) && (H[0] || !h && (J || K || Z || X || "auto" != y[e][f](a.sizesAttr)))) i = H[0] || y[e] } else Ct(y[e]);
                            if (i && !u) Ct(i) } }), vt = N(mt = function(t) { var e = t.target; if (e._lazyCache) return delete e._lazyCache, void 0;
                        ft(t), C(e, a.loadedClass), x(e, a.loadingClass), S(e, gt), A(e, "lazyloaded") }), gt = function(t) { vt({ target: t.target }) }, yt = function(t, e) { try { t.contentWindow.location.replace(e) } catch (n) { t.src = e } }, wt = function(t) { var e, n = t[f](a.srcsetAttr); if (e = a.customMedia[t[f]("data-media") || t[f]("media")]) t.setAttribute("media", e); if (n) t.setAttribute("srcset", n) }, bt = N((function(t, e, n, i, o) { var s, u, l, c, p, m; if (!(p = A(t, "lazybeforeunveil", e)).defaultPrevented) { if (i)
                                if (n) C(t, a.autosizesClass);
                                else t.setAttribute("sizes", i);
                            if (u = t[f](a.srcsetAttr), s = t[f](a.srcAttr), o) c = (l = t.parentNode) && v.test(l.nodeName || ""); if (m = e.firesLoad || "src" in t && (u || s || c), p = { target: t }, C(t, a.loadingClass), m) clearTimeout(V), V = h(ft, 2500), S(t, gt, true); if (c) w.call(l.getElementsByTagName("source"), wt); if (u) t.setAttribute("srcset", u);
                            else if (s && !c)
                                if (rt.test(t.nodeName)) yt(t, s);
                                else t.src = s;
                            if (o && (u || c)) _(t, { src: s }) } if (t._lazyRace) delete t._lazyRace;
                        x(t, a.lazyClass), E((function() { var e = t.complete && t.naturalWidth > 1; if (!m || e) { if (e) C(t, "ls-is-cached");
                                mt(p), t._lazyCache = true, h((function() { if ("_lazyCache" in t) delete t._lazyCache }), 9) } if ("lazy" == t.loading) ut-- }), true) })), Ct = function(t) { if (!t._lazyRace) { var e, n = nt.test(t.nodeName),
                                i = n && (t[f](a.sizesAttr) || t[f]("sizes")),
                                o = "auto" == i; if (!o && $ || !n || !t[f]("src") && !t.srcset || t.complete || b(t, a.errorClass) || !b(t, a.lazyClass)) { if (e = A(t, "lazyunveilread").detail, o) _t.updateElem(t, true, t.offsetWidth);
                                t._lazyRace = true, ut++, bt(t, e, o, i, n) } } }, xt = U((function() { a.loadMode = 3, pt() })), At = function() { if (!$) { if (i.now() - W < 999) return h(At, 999), void 0;
                            $ = true, a.loadMode = 3, pt(), c("scroll", St, true) } }, { _: function() { if (W = i.now(), o.elements = n.getElementsByClassName(a.lazyClass), H = n.getElementsByClassName(a.lazyClass + " " + a.preloadClass), c("scroll", pt, true), c("resize", pt, true), c("pageshow", (function(t) { if (t.persisted) { var e = n.querySelectorAll("." + a.loadingClass); if (e.length && e.forEach) p((function() { e.forEach((function(t) { if (t.complete) Ct(t) })) })) } })), e.MutationObserver) new MutationObserver(pt).observe(s, { childList: true, subtree: true, attributes: true });
                            else s[l]("DOMNodeInserted", pt, true), s[l]("DOMAttrModified", pt, true), setInterval(pt, 999); if (c("hashchange", pt, true), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(t) { n[l](t, pt, true) })), /d$|^c/.test(n.readyState)) At();
                            else c("load", At), n[l]("DOMContentLoaded", pt), h(At, 2e4); if (o.elements.length) ht(), E._lsFlush();
                            else pt() }, checkElems: pt, unveil: Ct, _aLSL: St = function() { if (3 == a.loadMode) a.loadMode = 2;
                            xt() } }),
                    H, $, V, Y, W, j, G, X, Z, K, J, tt, nt, rt, ot, at, st, ut, lt, ft, ct, dt, ht, pt, mt, vt, gt, yt, wt, bt, Ct, xt, St, At, _t = (Dt = N((function(t, e, n, i) { var o, a, s; if (t._lazysizesWidth = i, i += "px", t.setAttribute("sizes", i), v.test(e.nodeName || ""))
                            for (a = 0, s = (o = e.getElementsByTagName("source")).length; a < s; a++) o[a].setAttribute("sizes", i); if (!n.detail.dataAttr) _(t, n.detail) })), kt = function(t, e, n) { var i, o = t.parentNode; if (o)
                            if (n = I(t, o, n), !(i = A(t, "lazybeforesizes", { width: n, dataAttr: !!e })).defaultPrevented)
                                if ((n = i.detail.width) && n !== t._lazysizesWidth) Dt(t, o, i, n) }, { _: function() { Tt = n.getElementsByClassName(a.autosizesClass), c("resize", Lt) }, checkElems: Lt = U((function() { var t, e = Tt.length; if (e)
                                for (t = 0; t < e; t++) kt(Tt[t]) })), updateElem: kt }),
                    Tt, Dt, kt, Mt, Lt, init = function() { if (!init.i && n.getElementsByClassName) init.i = true, _t._(), loader._() }; return h((function() { if (a.init) init() })), o = { cfg: a, autoSizer: _t, loader: loader, init: init, uP: _, aC: C, rC: x, hC: b, fire: A, gW: I, rAF: E } })) },
        2813: function(t, e, n) { "use strict"; var i = n(9),
                Dialog = n(185);
            window._npDialogsInit = function() {
                function t(t) { var dialog;
                    t.preventDefault(), t.stopPropagation(), n(t).open() }

                function e(t) { var dialog;
                    t.preventDefault(), t.stopPropagation(), n(t).close() }

                function n(t) { var link = i(t.currentTarget),
                        e = link.attr("href") || link.attr("data-href"),
                        n = i(e); return n = n.length ? n : link, new Dialog(n) }

                function o() { return new Dialog(i('[data-dialog-show-on="page_exit"]')) }

                function a() { return new Dialog(i('[data-dialog-show-on="timer"]')) }

                function s(t) { if (t.clientY < 50 && null == t.relatedTarget && "select" !== t.target.nodeName.toLowerCase()) { var dialog;
                        o().open((function() { document.removeEventListener("mouseout", s) })) } }

                function u() { var dialog = a();
                    setTimeout((function() { dialog.open() }), dialog.getInterval()) }

                function l(t) { var e = i(t.currentTarget);
                    setTimeout((function() { new Dialog(e).close() })) }
                i("body").on("click", ".u-dialog-link", t), i("body").on("click", ".u-dialog-close-button", e), i("body").on("click", ".u-dialog .u-btn:not(.u-btn-step)", l), document.addEventListener("mouseout", s), u() }, i((function() { window._npDialogsInit() })) },
        2814: function(t, e, n) { "use strict"; var i = n(9),
                CountdownUpdater = n(189);
            i(window).on("load", (function() {
                function update() { t.each((function(t, el) { var countdownUpdater;
                        new CountdownUpdater(i(el)).startUpdate("runtime") })) } var t = CountdownUpdater.findAll(); if (t.length) update() })) },
        2815: function(t, e, n) { "use strict"; var i = n(9);
            i((function() { i(document).on("click", ".u-quantity-input a", (function(t) { var e;
                    t.preventDefault(); var n = i(this),
                        o = n.siblings("input"); if (n.hasClass("minus")) e = (e = parseFloat(o.val()) - 1) < 1 ? 1 : e, o.val(e); if (n.hasClass("plus")) e = parseFloat(o.val()) + 1, o.val(e);
                    n.siblings(".minus").addBack(".minus").toggleClass("disabled", 1 === e), o.change() })) })) },
        2816: function(t, e, n) { "use strict"; var i = n(9),
                Accordion = n(140);
            window._npAccordionInit = function() {
                function t(t) { t.preventDefault(), t.stopPropagation(); var link = i(t.currentTarget),
                        accordion;
                    new Accordion(link).show() }
                i("body").on("click", ".u-accordion-link", t) }, i((function() { window._npAccordionInit() })) },
        2817: function(t, e, n) { "use strict";

            function i(t) { t.preventDefault(), t.stopPropagation(); var form = l(this),
                    password;
                a(form.find("input[name=password]").val() || "", (function() { s(form) })) }

            function o() { a(localStorage.getItem(f)), l("#password-redirect-style").remove() }

            function a(password, t) { if (password) { var e = l("body"),
                        n = e.attr("data-salt"),
                        i = e.attr("data-salted-password"),
                        hash = u.create().update(password).digest().toHex(),
                        o = u.create().update(password + n).digest().toHex(),
                        homePage, url = (e.attr("data-home-page") || window.location.pathname).replace(/\.html(\?[\s\S]*)?$/, "_" + hash + ".html$1"); if (o === i) localStorage.setItem(f, password), window.location.replace(url);
                    else if ("function" == typeof t) t() } }

            function s(form) { var t = form.find(".u-form-send-error");
                t.show(), setTimeout((function() { t.hide() }), 2e3) } var u = n(190),
                l = n(9),
                f = "auth_key";
            window.sha256 = u, window._npAuthInit = function() { var form = l(".u-password-control form"),
                    t = form.find("input[name=password_hash]"); if (t.length) form.find(".u-form-submit a").click((function(e) { e.preventDefault(), e.stopPropagation(); var password = form.find("input[name=password]").val() || "",
                        hash = u.create().update(password).digest().toHex();
                    t.val(hash), l(this).closest("form").find(":submit").click() }));
                else form.submit(i) }, l((function() { window._npAuthInit(), o() })) },
        2818: function(t, e, n) { "use strict"; var i = n(9);
            i((function() { i("body").on("click", ".u-language-active", (function(t) { t.preventDefault() })) })) },
        2819: function(t, e, n) { "use strict"; var FormRating = t.exports = {},
                i = n(9),
                o = ".u-form-rating-item:visible";
            i((function() { FormRating.init() })), FormRating.selectStars = function t(e, n) { var o = e.find(".u-active-icon"),
                    a = e.find(".u-passive-icon"),
                    s = o.length;
                o.hide(), a.hide(), i(o.toArray().slice(0, n)).show(), i(a.toArray().slice(0, s - n)).show() }, FormRating.onStarClick = function t(e) { var n = i(e.currentTarget),
                    a = n.parents(".u-form-rating").find("input"),
                    s, u = n.prevAll(o).length + 1,
                    l = a.val() + ""; if (u.toString() === l) return a.val(""), void 0;
                a.val(u) }, FormRating.onStarHover = function t(e) { var n = i(e.currentTarget),
                    a = n.prevAll(o);
                FormRating.selectStars(n.parent(), a.length + 1) }, FormRating.onLeave = function t(e) { var n = i(e.currentTarget),
                    o, a = n.find("input").val() || 0;
                FormRating.selectStars(n, a) }, FormRating.init = function init() { var t = ".u-form .u-form-rating .u-form-rating-item",
                    e = i(".u-form .u-form-rating");
                FormRating.onLeave({ currentTarget: e }), e.mouseleave(FormRating.onLeave), i(t).hover(FormRating.onStarHover), i(t).click(FormRating.onStarClick); var n = e.find("input[type=hidden][required]"); if (n && n.length) n.addClass("u-input-hidden"), n.attr("type", "text") } },
        2820: function(t, e, n) { "use strict"; var i = n(9);
            i((function() { i("body").on("click", ".u-form .u-gallery-item", (function(t) { if (!i(t.target).is("input, label")) { var input = i(this).find("input");
                        input.prop("checked", !input.prop("checked")) } })) })) },
        2821: function(t, e, n) { "use strict";

            function i(input) { var t = parseFloat(input.prop("max")),
                    e = parseFloat(input.prop("min")),
                    n = parseFloat(input.prop("value")),
                    i = 0; if (n) i = 100 * (n - e) / (t - e); var formField = input.closest(".u-form-number"); if (formField.length) formField[0].style.setProperty("--progress", i + "%") }

            function o(t, e) { if (e.length && t.length) e.prop("value", t.prop("value")), e.trigger("change") }

            function a(t) { if (t.length) { var e = t.prop("value");
                    t.closest(".u-input-row").attr("data-value", e) } } var s = n(9);
            s((function() { var t = s("body");
                t.on("input", '.u-form .u-form-number input[type="range"]', (function() { var input = s(this),
                        t = input.siblings("input"); if (t.length) o(input, t);
                    i(input), a(input) })), t.on("input", '.u-form .u-form-number input[type="number"]', (function() { var input = s(this),
                        t = input.siblings("input"); if (t.length) o(input, t), i(t);
                    a(input) })) })) },
        2822: function(t, e, n) { "use strict";

            function i(t, dependency) { var e = ['[name="' + dependency.field + '"]', '[name="' + dependency.field + '[]"]'].join(", "),
                    n = t.find(e); if (!n.length) return false; if (!(dependency.condition in f)) return false;
                else return f[dependency.condition](n, dependency.value) }

            function o(t, e) { if (e in l) l[e](t) }

            function a(t) { return t.toArray().filter((function(el) { return el.checked })).map((function(el) { var t = el.value; if (!t) t = el.getAttribute("data-calc") || ""; return String(t).trim() })) }

            function s(t, e) { return String(t).trim() === String(e).trim() } var FormDependency = t.exports = {},
                u = n(9);
            u((function() { u(".u-form").each((function() { FormDependency.process(u(this)) })); var t = function() { FormDependency.process(u(this).closest(".u-form")) };
                u("body").on("input", ".u-form input[name], .u-form input[name]", t).on("change", ".u-form input[name], .u-form select[name]", t) })), FormDependency.process = function t(e) { e.find("[data-dependency]").each((function() { var t = u(this),
                        dependency; try { dependency = JSON.parse(t.attr("data-dependency"))[0] } catch (t) { dependency = null } if (dependency)
                        if (i(e, dependency)) o(t, dependency.action);
                        else { var n;
                            o(t, { hide: "show", show: "hide" }[dependency.action]) } })) }; var l = { show: function(t) { t.closest(".u-form-group").show() }, hide: function(t) { t.closest(".u-form-group").hide() } },
                f = { equal: function(t, e) { if (t.is('input[type="checkbox"], input[type="radio"]')) return this.has.apply(this, arguments);
                        else return s(t.val(), e) }, "not-equal": function() { return !this.equal.apply(this, arguments) }, contain: function(t, e) { if (t.is('input[type="checkbox"], input[type="radio"]')) { var n; return a(t).some((function(t) { return String(t).includes(e) }), this) } return String(t.val()).includes(e) }, "not-contain": function() { return !this.contain.apply(this, arguments) }, has: function(t, e) { return a(t).includes(String(e).trim()) }, "not-has": function() { return !this.has.apply(this, arguments) }, "number-equal": function(t, e) { var n = parseFloat(t.val()); if (n === (e = parseFloat(e))) return true; var diff = Math.abs(n - e),
                            i; if (diff < Number.EPSILON) return true;
                        else return diff <= Math.min(Math.abs(n), Math.abs(e)) * Number.EPSILON }, "number-not-equal": function() { return this["="].apply(this, arguments) }, "number-greater": function(t, e) { var n; return parseFloat(t.val()) > (e = parseFloat(e)) }, "number-greater-or-equal": function() { return this[">"].apply(this, arguments) || this["="].apply(this, arguments) }, "number-less": function(t, e) { var n; return parseFloat(t.val()) < (e = parseFloat(e)) }, "number-less-or-equal": function() { return this["<"].apply(this, arguments) || this["="].apply(this, arguments) } } },
        2823: function(t, e, n) { "use strict";

            function i(form) { var activeSlide, t; return form.find(".u-slide.active, .u-slide.u-active").find("input, textarea, select").toArray().every((function(input) { return input.reportValidity() })) } var o = n(9),
                FormProgress = n(413),
                a = n(414),
                s = "u-carousel";
            o((function() { var t = o("body"),
                    e = o(".u-form.u-carousel");
                e.find(".u-carousel-inner").css("overflow", "unset"), a.update(e), FormProgress.update(e), t.on("click", ".u-btn-step", (function(t) { t.preventDefault(); var button = o(this),
                        e = button.closest(".u-carousel"); if (e.length)
                        if (button.hasClass("u-btn-step-next")) e[s]("next");
                        else if (button.hasClass("u-btn-step-prev")) e[s]("prev") })), e.on("u-slide.bs.u-carousel", (function(t) { var form = o(this); if (0 !== t.to && t.to > t.from && !i(form)) return t.preventDefault(), void 0;
                    a.update(o(this), t.to), FormProgress.update(o(this), t.to), form.find(".u-carousel-inner").css("overflow", "") })).on("slid.bs.u-carousel", (function() { var form;
                    o(this).find(".u-carousel-inner").css("overflow", "unset") })).on("reset", (function() { o(this)[s]("to", 0) })) })) },
        2824: function(t, e, n) { "use strict";

            function i() { return -1 !== (u("html").attr("class") || "").search(/u-responsive-(xs|sm)/) }

            function o() { var t = 0; if (Intl && Intl.Locale && navigator.language && new Intl.Locale(navigator.language).weekInfo) t = new Intl.Locale(navigator.language).weekInfo.firstDay || 0; return t } var a = n(2825),
                s = n(2826),
                u = n(9),
                l = { init: function(el) { if (i()) return l.switchToDate(el), null;
                        else return l.create(el) }, create: function(el) { return l.switchToText(el), a(el, { formatter: function(input, t) { var format = input.getAttribute("data-date-format"); if ("local" === format && Intl && Intl.DateTimeFormat) t = Intl.DateTimeFormat().format(t);
                                else t = s(t, format || "default");
                                input.setAttribute("value", t) }, startDay: o() }) }, remove: function(el, t) { if (t) t.remove();
                        l.switchToDate(el) }, switchToDate: function(el) { el.removeAttribute("value"), el.removeAttribute("readonly"), el.type = "date" }, switchToText: function(el) { el.setAttribute("readonly", "readonly"), el.type = "text" } };
            u((function() { var selector;
                u("form input[data-date-format]").each((function() { var t = l.init(this);
                    u(this).focus((function(e) { var n = e.target; if (!i()) { if (!t) t = l.create(n) } else if (t) l.remove(n, t), t = null })) })) })) },
        2825: function(t, e, n) { "use strict"; var i, o;
            i = window, o = function() { return function(t) {
                    function e(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports } var n = {}; return e.m = t, e.c = n, e.d = function(t, n, i) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: i }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) { if (1 & n && (t = e(t)), 8 & n) return t; if (4 & n && "object" == typeof t && t && t.__esModule) return t; var i = Object.create(null); if (e.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
                            for (var r in t) e.d(i, r, function(e) { return t[e] }.bind(null, r)); return i }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 0) }([function(t, e, n) {
                    function i() {}

                    function d(t) { z.forEach((function(e) { t.addEventListener(e, t === document ? x : S) })) }

                    function o(t) { return Array.isArray(t) ? t.map(o) : "[object Object]" === b(t) ? Object.keys(t).reduce((function(e, n) { return e[n] = o(t[n]), e }), {}) : t }

                    function a(t, e) { var n = t.calendar.querySelector(".qs-overlay"),
                            i = n && !n.classList.contains("qs-hidden");
                        e = e || new Date(t.currentYear, t.currentMonth), t.calendar.innerHTML = [s(e, t, i), u(e, t, i), l(t, i)].join(""), i && window.requestAnimationFrame((function() { y(!0, t) })) }

                    function s(t, e, n) { return ['<div class="qs-controls' + (n ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year">', '<span class="qs-month">' + e.months[t.getMonth()] + "</span>", '<span class="qs-year">' + t.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>"].join("") }

                    function u(t, e, n) { var i = e.currentMonth,
                            r = e.currentYear,
                            o = e.dateSelected,
                            a = e.maxDate,
                            s = e.minDate,
                            u = e.showAllDates,
                            d = e.days,
                            l = e.disabledDates,
                            f = e.startDay,
                            c = e.weekendIndices,
                            h = e.events,
                            p = e.getRange ? e.getRange() : {},
                            m = +p.start,
                            g = +p.end,
                            y = v(new Date(t).setDate(1)),
                            w = y.getDay() - f,
                            D = w < 0 ? 7 : 0;
                        y.setMonth(y.getMonth() + 1), y.setDate(0); var b = y.getDate(),
                            q = [],
                            C = D + 7 * ((w + b) / 7 | 0);
                        C += (w + b) % 7 ? 7 : 0; for (var x = 1; x <= C; x++) { var S = (x - 1) % 7,
                                A = d[S],
                                _ = x - (w >= 0 ? w : 7 + w),
                                T = new Date(r, i, _),
                                I = h[+T],
                                E = _ < 1 || _ > b,
                                k = E ? _ < 1 ? -1 : 1 : 0,
                                M = E && !u,
                                L = M ? "" : T.getDate(),
                                B = +T == +o,
                                O = S === c[0] || S === c[1],
                                P = m !== g,
                                F = "qs-square " + A;
                            I && !M && (F += " qs-event"), E && (F += " qs-outside-current-month"), !u && E || (F += " qs-num"), B && (F += " qs-active"), (l[+T] || e.disabler(T) || O && e.noWeekends || s && +T < +s || a && +T > +a) && !M && (F += " qs-disabled"), +v(new Date) == +T && (F += " qs-current"), +T === m && g && P && (F += " qs-range-start"), +T > m && +T < g && (F += " qs-range-middle"), +T === g && m && P && (F += " qs-range-end"), M && (F += " qs-empty", L = ""), q.push('<div class="' + F + '" data-direction="' + k + '">' + L + "</div>") } var R = d.map((function(t) { return '<div class="qs-square qs-day">' + t + "</div>" })).concat(q); return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"), R.join("") }

                    function l(t, e) { var n = t.overlayPlaceholder,
                            i = t.overlayButton; return ['<div class="qs-overlay' + (e ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + t.overlayMonths.map((function(t, e) { return '<div class="qs-overlay-month" data-month-num="' + e + '">' + t + "</div>" })).join("") + "</div>", '<div class="qs-submit qs-disabled">' + i + "</div>", "</div>"].join("") }

                    function f(t, e, n) { var i = e.el,
                            r = e.calendar.querySelector(".qs-active"),
                            o = t.textContent,
                            s = e.sibling;
                        (i.disabled || i.readOnly) && e.respectDisabledReadOnly || (e.dateSelected = n ? void 0 : new Date(e.currentYear, e.currentMonth, o), r && r.classList.remove("qs-active"), n || t.classList.add("qs-active"), h(i, e, n), n || q(e), s && (c({ instance: e, deselect: n }), e.first && !s.dateSelected && (s.currentYear = e.currentYear, s.currentMonth = e.currentMonth, s.currentMonthName = e.currentMonthName), a(e), a(s)), e.onSelect(e, n ? void 0 : new Date(e.dateSelected))) }

                    function c(t) { var e = t.instance.first ? t.instance : t.instance.sibling,
                            n = e.sibling;
                        e === t.instance ? t.deselect ? (e.minDate = e.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = e.dateSelected : t.deselect ? (n.maxDate = n.originalMaxDate, e.maxDate = e.originalMaxDate) : e.maxDate = n.dateSelected }

                    function h(t, e, n) { if (!e.nonInput) return n ? t.value = "" : e.formatter !== i ? e.formatter(t, e.dateSelected, e) : void(t.value = e.dateSelected.toDateString()) }

                    function p(t, e, n, i) { n || i ? (n && (e.currentYear = +n), i && (e.currentMonth = +i)) : (e.currentMonth += t.contains("qs-right") ? 1 : -1, 12 === e.currentMonth ? (e.currentMonth = 0, e.currentYear++) : -1 === e.currentMonth && (e.currentMonth = 11, e.currentYear--)), e.currentMonthName = e.months[e.currentMonth], a(e), e.onMonthChange(e) }

                    function D(t) { if (!t.noPosition) { var e = t.position.top,
                                n = t.position.right; if (t.position.centered) return t.calendarContainer.classList.add("qs-centered"); var i = t.positionedEl.getBoundingClientRect(),
                                r = t.el.getBoundingClientRect(),
                                o = t.calendarContainer.getBoundingClientRect(),
                                a = r.top - i.top + (e ? -1 * o.height : r.height) + "px",
                                s = r.left - i.left + (n ? r.width - o.width : 0) + "px";
                            t.calendarContainer.style.setProperty("top", a), t.calendarContainer.style.setProperty("left", s) } }

                    function m(t) { return "[object Date]" === b(t) && "Invalid Date" !== t.toString() }

                    function v(t) { if (m(t) || "number" == typeof t && !isNaN(t)) { var e = new Date(+t); return new Date(e.getFullYear(), e.getMonth(), e.getDate()) } }

                    function q(t) { t.disabled || !t.calendarContainer.classList.contains("qs-hidden") && !t.alwaysShow && ("overlay" !== t.defaultView && y(!0, t), t.calendarContainer.classList.add("qs-hidden"), t.onHide(t)) }

                    function g(t) { t.disabled || (t.calendarContainer.classList.remove("qs-hidden"), "overlay" === t.defaultView && y(!1, t), D(t), t.onShow(t)) }

                    function y(t, e) { var n = e.calendar,
                            i = n.querySelector(".qs-overlay"),
                            r = i.querySelector(".qs-overlay-year"),
                            o = n.querySelector(".qs-controls"),
                            a = n.querySelector(".qs-squares");
                        t ? (i.classList.add("qs-hidden"), o.classList.remove("qs-blur"), a.classList.remove("qs-blur"), r.value = "") : (i.classList.remove("qs-hidden"), o.classList.add("qs-blur"), a.classList.add("qs-blur"), r.focus()) }

                    function w(t, e, n, i) { var r = isNaN(+(new Date).setFullYear(e.value || void 0)),
                            o = r ? null : e.value; if (13 === t.which || 13 === t.keyCode || "click" === t.type) i ? p(null, n, o, i) : r || e.classList.contains("qs-disabled") || p(null, n, o);
                        else if (n.calendar.contains(e)) n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled") }

                    function b(t) { return {}.toString.call(t) }

                    function C(t) { P.forEach((function(e) { e !== t && q(e) })) }

                    function x(t) { if (!t.__qs_shadow_dom) { var e = t.which || t.keyCode,
                                n = t.type,
                                r = t.target,
                                i = r.classList,
                                o = P.filter((function(t) { return t.calendar.contains(r) || t.el === r }))[0],
                                s = o && o.calendar.contains(r); if (!(o && o.isMobile && o.disableMobile))
                                if ("click" === n) { if (!o) return P.forEach(q); if (o.disabled) return; var d = o.calendar,
                                        u = o.calendarContainer,
                                        l = o.disableYearOverlay,
                                        c = o.nonInput,
                                        h = d.querySelector(".qs-overlay-year"),
                                        m = !!d.querySelector(".qs-hidden"),
                                        v = d.querySelector(".qs-month-year").contains(r),
                                        D = r.dataset.monthNum; if (o.noPosition && !s)(u.classList.contains("qs-hidden") ? g : q)(o);
                                    else if (i.contains("qs-arrow")) p(i, o);
                                    else if (v || i.contains("qs-close")) l || y(!m, o);
                                    else if (D) w(t, h, o, D);
                                    else { if (i.contains("qs-disabled")) return; if (i.contains("qs-num")) { var b = r.textContent,
                                                x = +r.dataset.direction,
                                                S = new Date(o.currentYear, o.currentMonth + x, b); if (x) { o.currentYear = S.getFullYear(), o.currentMonth = S.getMonth(), o.currentMonthName = F[o.currentMonth], a(o); for (var A, _ = o.calendar.querySelectorAll('[data-direction="0"]'), T = 0; !A;) { var I = _[T];
                                                    I.textContent === b && (A = I), T++ }
                                                r = A } return void(+S == +o.dateSelected ? f(r, o, !0) : r.classList.contains("qs-disabled") || f(r, o)) }
                                        i.contains("qs-submit") ? w(t, h, o) : c && r === o.el && (g(o), C(o)) } } else if ("focusin" === n && o) g(o), C(o);
                            else if ("keydown" === n && 9 === e && o) q(o);
                            else if ("keydown" === n && o && !o.disabled) { var E = !o.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                                13 === e && E && s ? w(t, r, o) : 27 === e && E && s && y(!0, o) } else if ("input" === n) { if (!o || !o.calendar.contains(r)) return; var k = o.calendar.querySelector(".qs-submit"),
                                    M = r.value.split("").reduce((function(t, e) { return t || "0" !== e ? t + (e.match(/[0-9]/) ? e : "") : "" }), "").slice(0, 4);
                                r.value = M, k.classList[4 === M.length ? "remove" : "add"]("qs-disabled") } } }

                    function S(t) { x(t), t.__qs_shadow_dom = !0 }

                    function A(t, e) { z.forEach((function(n) { t.removeEventListener(n, e) })) }

                    function _() { g(this) }

                    function T() { q(this) }

                    function I(t, e) { var n = v(t),
                            i = this.currentYear,
                            r = this.currentMonth,
                            o = this.sibling; if (null == t) return this.dateSelected = void 0, h(this.el, this, !0), o && (c({ instance: this, deselect: !0 }), a(o)), a(this), this; if (!m(t)) throw new Error("`setDate` needs a JavaScript Date object."); if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                        this.dateSelected = n, e && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), this.currentMonthName = this.months[n.getMonth()]), h(this.el, this), o && (c({ instance: this }), a(o)); var s = i === n.getFullYear() && r === n.getMonth(); return s || e ? a(this, n) : s || a(this, new Date(i, r, 1)), this }

                    function E(t) { return M(this, t, !0) }

                    function k(t) { return M(this, t) }

                    function M(t, e, n) {
                        function i() { return "original" + d + "Date" }

                        function o() { return d.toLowerCase() + "Date" }

                        function s() { return "set" + d }

                        function u() { throw new Error("Out-of-range date passed to " + s()) } var l = t.dateSelected,
                            r = t.first,
                            f = t.sibling,
                            c = t.minDate,
                            h = t.maxDate,
                            p = v(e),
                            d = n ? "Min" : "Max"; if (null == e) t[i()] = void 0, f ? (f[i()] = void 0, n ? (r && !l || !r && !f.dateSelected) && (t.minDate = void 0, f.minDate = void 0) : (r && !f.dateSelected || !r && !l) && (t.maxDate = void 0, f.maxDate = void 0)) : t[o()] = void 0;
                        else { if (!m(e)) throw new Error("Invalid date passed to " + s());
                            f ? ((r && n && p > (l || h) || r && !n && p < (f.dateSelected || c) || !r && n && p > (f.dateSelected || h) || !r && !n && p < (l || c)) && u(), t[i()] = p, f[i()] = p, (n && (r && !l || !r && !f.dateSelected) || !n && (r && !f.dateSelected || !r && !l)) && (t[o()] = p, f[o()] = p)) : ((n && p > (l || h) || !n && p < (l || c)) && u(), t[o()] = p) } return f && a(f), a(t), t }

                    function L() { var t = this.first ? this : this.sibling,
                            e = t.sibling; return { start: t.dateSelected, end: e.dateSelected } }

                    function R() { var t = this.shadowDom,
                            e = this.positionedEl,
                            n = this.calendarContainer,
                            r = this.sibling,
                            i = this;
                        this.inlinePosition && (P.some((function(t) { return t !== i && t.positionedEl === e })) || e.style.setProperty("position", null)), n.remove(), P = P.filter((function(t) { return t !== i })), r && delete r.sibling, P.length || A(document, x); var o = P.some((function(e) { return e.shadowDom === t })); for (var a in t && !o && A(t, S), this) delete this[a];
                        P.length || z.forEach((function(t) { document.removeEventListener(t, x) })) }

                    function B(t, e) { var n = new Date(t); if (!m(n)) throw new Error("Invalid date passed to `navigate`");
                        this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), a(this), e && this.onMonthChange(this) }

                    function O() { var t = !this.calendarContainer.classList.contains("qs-hidden"),
                            e = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
                        t && y(e, this) }
                    n.r(e); var P = [],
                        r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        F = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        N = { t: "top", r: "right", b: "bottom", l: "left", c: "centered" },
                        z = ["click", "focusin", "keydown", "input"];
                    e.default = function(t, e) { var n = function(t, e) { var n, a, d = function(t) {
                                    function e(t) { throw new Error('"dateSelected" in options is ' + (t ? "less" : "greater") + ' than "' + (t || "max") + 'Date".') } var n = o(t);
                                    n.events && (n.events = n.events.reduce((function(t, e) { if (!m(e)) throw new Error('"options.events" must only contain valid JavaScript Date objects.'); return t[+v(e)] = !0, t }), {})), ["startDate", "dateSelected", "minDate", "maxDate"].forEach((function(t) { var e = n[t]; if (e && !m(e)) throw new Error('"options.' + t + '" needs to be a valid JavaScript Date object.');
                                        n[t] = v(e) })); var a = n.position,
                                        s = n.maxDate,
                                        u = n.minDate,
                                        d = n.dateSelected,
                                        l = n.overlayPlaceholder,
                                        f = n.overlayButton,
                                        c = n.startDay,
                                        h = n.id; if (n.startDate = v(n.startDate || d || new Date), n.disabledDates = (n.disabledDates || []).reduce((function(t, e) { var n = +v(e); if (!m(e)) throw new Error('You supplied an invalid date to "options.disabledDates".'); if (n === +v(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".'); return t[n] = 1, t }), {}), n.hasOwnProperty("id") && null == h) throw new Error("`id` cannot be `null` or `undefined`"); if (null != h) { var p = P.filter((function(t) { return t.id === h })); if (p.length > 1) throw new Error("Only two datepickers can share an id.");
                                        p.length ? (n.second = !0, n.sibling = p[0]) : n.first = !0 } var g = ["tr", "tl", "br", "bl", "c"].some((function(t) { return a === t })); if (a && !g) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.'); if (n.position = function(t) { var e = t[0],
                                                n = t[1],
                                                i = {}; return i[N[e]] = 1, n && (i[N[n]] = 1), i }(a || "bl"), s < u) throw new Error('"maxDate" in options is less than "minDate".'); if (d && (u > d && e("min"), s < d && e()), ["onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler"].forEach((function(t) { "function" != typeof n[t] && (n[t] = i) })), ["customDays", "customMonths", "customOverlayMonths"].forEach((function(t, e) { var i = n[t],
                                                r = e ? 12 : 7; if (i) { if (!Array.isArray(i) || i.length !== r || i.some((function(t) { return "string" != typeof t }))) throw new Error('"' + t + '" must be an array with ' + r + " strings.");
                                                n[e ? e < 2 ? "months" : "overlayMonths" : "days"] = i } })), c && c > 0 && c < 7) { var y = (n.customDays || r).slice(),
                                            D = y.splice(0, c);
                                        n.customDays = y.concat(D), n.startDay = +c, n.weekendIndices = [y.length - 1, y.length] } else n.startDay = 0, n.weekendIndices = [6, 0]; "string" != typeof l && delete n.overlayPlaceholder, "string" != typeof f && delete n.overlayButton; var q = n.defaultView; if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".'); return n.defaultView = q || "calendar", n }(e || { startDate: v(new Date), position: "bl", defaultView: "calendar" }),
                                s = t; if ("string" == typeof s) s = "#" === s[0] ? document.getElementById(s.slice(1)) : document.querySelector(s);
                            else { if ("[object ShadowRoot]" === b(s)) throw new Error("Using a shadow DOM as your selector is not supported."); for (var u, l = s.parentNode; !u;) { var f = b(l); "[object HTMLDocument]" === f ? u = !0 : "[object ShadowRoot]" === f ? (u = !0, n = l, a = l.host) : l = l.parentNode } } if (!s) throw new Error("No selector / element found."); if (P.some((function(t) { return t.el === s }))) throw new Error("A datepicker already exists on that element."); var c = s === document.body,
                                p = n ? s.parentElement || n : c ? document.body : s.parentElement,
                                y = n ? s.parentElement || a : p,
                                D = document.createElement("div"),
                                q = document.createElement("div");
                            D.className = "qs-datepicker-container qs-hidden", q.className = "qs-datepicker"; var w = { shadowDom: n, customElement: a, positionedEl: y, el: s, parent: p, nonInput: "INPUT" !== s.nodeName, noPosition: c, position: !c && d.position, startDate: d.startDate, dateSelected: d.dateSelected, disabledDates: d.disabledDates, minDate: d.minDate, maxDate: d.maxDate, noWeekends: !!d.noWeekends, weekendIndices: d.weekendIndices, calendarContainer: D, calendar: q, currentMonth: (d.startDate || d.dateSelected).getMonth(), currentMonthName: (d.months || F)[(d.startDate || d.dateSelected).getMonth()], currentYear: (d.startDate || d.dateSelected).getFullYear(), events: d.events || {}, defaultView: d.defaultView, setDate: I, remove: R, setMin: E, setMax: k, show: _, hide: T, navigate: B, toggleOverlay: O, onSelect: d.onSelect, onShow: d.onShow, onHide: d.onHide, onMonthChange: d.onMonthChange, formatter: d.formatter, disabler: d.disabler, months: d.months || F, days: d.customDays || r, startDay: d.startDay, overlayMonths: d.overlayMonths || (d.months || F).map((function(t) { return t.slice(0, 3) })), overlayPlaceholder: d.overlayPlaceholder || "4-digit year", overlayButton: d.overlayButton || "Submit", disableYearOverlay: !!d.disableYearOverlay, disableMobile: !!d.disableMobile, isMobile: "ontouchstart" in window, alwaysShow: !!d.alwaysShow, id: d.id, showAllDates: !!d.showAllDates, respectDisabledReadOnly: !!d.respectDisabledReadOnly, first: d.first, second: d.second }; if (d.sibling) { var C = d.sibling,
                                    x = w,
                                    S = C.minDate || x.minDate,
                                    A = C.maxDate || x.maxDate;
                                x.sibling = C, C.sibling = x, C.minDate = S, C.maxDate = A, x.minDate = S, x.maxDate = A, C.originalMinDate = S, C.originalMaxDate = A, x.originalMinDate = S, x.originalMaxDate = A, C.getRange = L, x.getRange = L }
                            d.dateSelected && h(s, w); var M = getComputedStyle(y).position;
                            c || M && "static" !== M || (w.inlinePosition = !0, y.style.setProperty("position", "relative")); var z = P.filter((function(t) { return t.positionedEl === w.positionedEl })); return z.some((function(t) { return t.inlinePosition })) && (w.inlinePosition = !0, z.forEach((function(t) { t.inlinePosition = !0 }))), D.appendChild(q), p.appendChild(D), w.alwaysShow && g(w), w }(t, e); if (P.length || d(document), n.shadowDom && (P.some((function(t) { return t.shadowDom === n.shadowDom })) || d(n.shadowDom)), P.push(n), n.second) { var s = n.sibling;
                            c({ instance: n, deselect: !n.dateSelected }), c({ instance: s, deselect: !s.dateSelected }), a(s) } return a(n, n.startDate || n.dateSelected), n.alwaysShow && D(n), n } }]).default }, !void(true ? t.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof e ? e.datepicker = o() : i.datepicker = o()) },
        2826: function(t, e, n) { "use strict";

            function i(t) { if ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator) i = function t(e) { return typeof e };
                else i = function t(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }; return i(t) } var o; "use strict",
            function(a) { var s = arguments,
                    u = (l = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g, f = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, c = /[^-+\dA-Z]/g, function(t, e, n, i) { if (1 === s.length && "string" === g(t) && !/\d/.test(t)) e = t, t = void 0; if (!((t = t || 0 === t ? t : new Date) instanceof Date)) t = new Date(t); if (isNaN(t)) throw TypeError("Invalid date"); var o = (e = String(u.masks[e] || e || u.masks["default"])).slice(0, 4); if ("UTC:" === o || "GMT:" === o)
                            if (e = e.slice(4), n = true, "GMT:" === o) i = true;
                        var a = function t() { return n ? "getUTC" : "get" },
                            y = function d() { return t[a() + "Date"]() },
                            D = function D() { return t[a() + "Day"]() },
                            w = function e() { return t[a() + "Month"]() },
                            b = function e() { return t[a() + "FullYear"]() },
                            C = function e() { return t[a() + "Hours"]() },
                            x = function e() { return t[a() + "Minutes"]() },
                            S = function e() { return t[a() + "Seconds"]() },
                            A = function e() { return t[a() + "Milliseconds"]() },
                            _ = function e() { return n ? 0 : t.getTimezoneOffset() },
                            T = function e() { return m(t) },
                            I = function e() { return v(t) },
                            E = { d: function d() { return y() }, dd: function t() { return h(y()) }, ddd: function t() { return u.i18n.dayNames[D()] }, DDD: function t() { return p({ y: b(), m: w(), d: y(), _: a(), dayName: u.i18n.dayNames[D()], short: true }) }, dddd: function t() { return u.i18n.dayNames[D() + 7] }, DDDD: function t() { return p({ y: b(), m: w(), d: y(), _: a(), dayName: u.i18n.dayNames[D() + 7] }) }, m: function t() { return w() + 1 }, mm: function t() { return h(w() + 1) }, mmm: function t() { return u.i18n.monthNames[w()] }, mmmm: function t() { return u.i18n.monthNames[w() + 12] }, yy: function t() { return String(b()).slice(2) }, yyyy: function t() { return h(b(), 4) }, h: function t() { return C() % 12 || 12 }, hh: function t() { return h(C() % 12 || 12) }, H: function t() { return C() }, HH: function t() { return h(C()) }, M: function t() { return x() }, MM: function t() { return h(x()) }, s: function t() { return S() }, ss: function t() { return h(S()) }, l: function t() { return h(A(), 3) }, L: function t() { return h(Math.floor(A() / 10)) }, t: function t() { return C() < 12 ? u.i18n.timeNames[0] : u.i18n.timeNames[1] }, tt: function t() { return C() < 12 ? u.i18n.timeNames[2] : u.i18n.timeNames[3] }, T: function t() { return C() < 12 ? u.i18n.timeNames[4] : u.i18n.timeNames[5] }, TT: function t() { return C() < 12 ? u.i18n.timeNames[6] : u.i18n.timeNames[7] }, Z: function e() { return i ? "GMT" : n ? "UTC" : (String(t).match(f) || [""]).pop().replace(c, "").replace(/GMT\+0000/g, "UTC") }, o: function t() { return (_() > 0 ? "-" : "+") + h(100 * Math.floor(Math.abs(_()) / 60) + Math.abs(_()) % 60, 4) }, p: function t() { return (_() > 0 ? "-" : "+") + h(Math.floor(Math.abs(_()) / 60), 2) + ":" + h(Math.floor(Math.abs(_()) % 60), 2) }, S: function t() { return ["th", "st", "nd", "rd"][y() % 10 > 3 ? 0 : (y() % 100 - y() % 10 != 10) * y() % 10] }, W: function t() { return T() }, WW: function t() { return h(T()) }, N: function t() { return I() } }; return e.replace(l, (function(t) { if (t in E) return E[t]();
                            else return t.slice(1, t.length - 1) })) }),
                    l, f, c;
                u.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", paddedShortDate: "mm/dd/yyyy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, u.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"] }; var h = function t(e, n) { for (e = String(e), n = n || 2; e.length < n;) e = "0" + e; return e },
                    p = function t(e) { var n = e.y,
                            i = e.m,
                            d = e.d,
                            o = e._,
                            a = e.dayName,
                            s = e["short"],
                            u = void 0 === s ? false : s,
                            l = new Date,
                            f = new Date;
                        f.setDate(f[o + "Date"]() - 1); var c = new Date;
                        c.setDate(c[o + "Date"]() + 1); var h = function t() { return l[o + "Date"]() },
                            p = function t() { return l[o + "Month"]() },
                            m, v = function t() { return f[o + "Date"]() },
                            g = function t() { return f[o + "Month"]() },
                            y = function t() { return f[o + "FullYear"]() },
                            w = function t() { return c[o + "Date"]() },
                            b = function t() { return c[o + "Month"]() },
                            C = function t() { return c[o + "FullYear"]() }; if (function t() { return l[o + "FullYear"]() }() === n && p() === i && h() === d) return u ? "Tdy" : "Today";
                        else if (y() === n && g() === i && v() === d) return u ? "Ysd" : "Yesterday";
                        else if (C() === n && b() === i && w() === d) return u ? "Tmw" : "Tomorrow"; return a },
                    m = function t(e) { var n = new Date(e.getFullYear(), e.getMonth(), e.getDate());
                        n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3); var i = new Date(n.getFullYear(), 0, 4);
                        i.setDate(i.getDate() - (i.getDay() + 6) % 7 + 3); var o = n.getTimezoneOffset() - i.getTimezoneOffset();
                        n.setHours(n.getHours() - o); var a = (n - i) / (864e5 * 7); return 1 + Math.floor(a) },
                    v = function t(e) { var n = e.getDay(); if (0 === n) n = 7; return n },
                    g = function t(e) { if (null === e) return "null"; if (void 0 === e) return "undefined"; if ("object" !== i(e)) return i(e); if (Array.isArray(e)) return "array";
                        else return {}.toString.call(e).slice(8, -1).toLowerCase() }; if (true) !(void 0 !== (o = function() { return u }.call(e, n, e, t)) && (t.exports = o));
                else if ("object" === (void 0 === e ? "undefined" : i(e))) t.exports = u;
                else a.dateFormat = u }(void 0) },
        2827: function(t, e, n) { "use strict"; var i = n(9);
            i((function() { var selector;
                i("form input[type=time]").each((function() { var t = i(this),
                        e = t.attr("data-time-value") || ""; if ("--:--" !== e) { if (!e) { var n = new Date;
                            e = ("0" + n.getHours()).slice(-2) + ":" + ("0" + n.getMinutes()).slice(-2) }
                        t.val(e) } })) })) },
        2828: function(t, e, n) { "use strict";

            function i(t) { return new Promise((function(e) { var n = document.createElement("script");
                    n.async = "", n.onload = e, n.src = t, document.head.appendChild(n) })) }

            function o(t) { return new Promise((function(e) { var link = document.createElement("link");
                    link.rel = "stylesheet", link.type = "text/css", link.onload = e, link.href = t, document.head.appendChild(link) })) }

            function a(t, e) { var n = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
                e.each((function() { var container = s(this),
                        e = container.find("input[type=tel]");
                    container.replaceWith(e), e.each((function() { var input = s(this)[0];
                        input.removeAttribute("pattern"); var e = intlTelInput(input, { autoPlaceholder: "aggressive", utilsScript: t + "utils.js" });
                        input.addEventListener("blur", (function() { if (u(s(input)), input.value.trim())
                                if (!e.isValidNumber()) { var t = e.getValidationError();
                                    l(s(input), n[t] || "Invalid number") } })) })) })) } var s = n(9),
                u = function(input) { input.parent(".iti").parent().find("#error-msg").remove() },
                l = function(input, t) { var e = s("<span id='error-msg' style='color:#F95D51'>" + t + "</span>");
                    input.parent(".iti").after(e) };
            s((function() { var t = "https://capp." + "n" + "i" + "c" + "e" + "p" + "a" + "g" + "e" + ".com/assets/",
                    e = s("meta[data-intl-tel-input-cdn-path]"); if (e.length) t = e.attr("data-intl-tel-input-cdn-path"); var n = s("form .iti"); if (n.length) Promise.all([i(t + "intlTelInput.min.js"), o(t + "intlTelInput.css")]).then((function() { a(t, n) })) })) },
        2829: function(t, e, n) { "use strict"; var i = n(2830),
                o = n(9);
            o((function() { o("form .u-form-country select").each((function() { var select = o(this),
                        data = i.getData();
                    data.unshift({ name: "", code: "" }), data.forEach((function(t) { var e = o("<option></option>");
                        e.prop({ value: t.name, text: t.name }), select.append(e) })) })) })) },
        2830: function(t, e, n) { "use strict";

            function i(t) { o[t.name.toLowerCase()] = t.code, a[t.code.toLowerCase()] = t.name } var data = n(2831),
                o = {},
                a = {};
            data.forEach(i); var s = { overwrite: function t(e) { if (e && e.length) e.forEach((function(t) { var e = data.findIndex((function(e) { return e.code === t.code }));
                        data[e] = t, i(t) })) }, getCode: function t(e) { return o[e.toLowerCase()] }, getName: function t(e) { return a[e.toLowerCase()] }, getNames: function t() { return data.map((function(t) { return t.name })) }, getCodes: function t() { return data.map((function(t) { return t.code })) }, getCodeList: function t() { return a }, getNameList: function t() { return o }, getData: function t() { return data } };
            t.exports = s, window.CountryList = s },
        2831: function(t, e) { t.exports = [{ code: "US", name: "United States" }, { code: "GB", name: "United Kingdom" }, { code: "AF", name: "Afghanistan" }, { code: "AX", name: "Ã…land Islands" }, { code: "AL", name: "Albania" }, { code: "DZ", name: "Algeria" }, { code: "AS", name: "American Samoa" }, { code: "AD", name: "Andorra" }, { code: "AO", name: "Angola" }, { code: "AI", name: "Anguilla" }, { code: "AQ", name: "Antarctica" }, { code: "AG", name: "Antigua and Barbuda" }, { code: "AR", name: "Argentina" }, { code: "AM", name: "Armenia" }, { code: "AW", name: "Aruba" }, { code: "AU", name: "Australia" }, { code: "AT", name: "Austria" }, { code: "AZ", name: "Azerbaijan" }, { code: "BS", name: "Bahamas" }, { code: "BH", name: "Bahrain" }, { code: "BD", name: "Bangladesh" }, { code: "BB", name: "Barbados" }, { code: "BY", name: "Belarus" }, { code: "BE", name: "Belgium" }, { code: "BZ", name: "Belize" }, { code: "BJ", name: "Benin" }, { code: "BM", name: "Bermuda" }, { code: "BT", name: "Bhutan" }, { code: "BO", name: "Bolivia, Plurinational State of" }, { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" }, { code: "BA", name: "Bosnia and Herzegovina" }, { code: "BW", name: "Botswana" }, { code: "BV", name: "Bouvet Island" }, { code: "BR", name: "Brazil" }, { code: "IO", name: "British Indian Ocean Territory" }, { code: "BN", name: "Brunei Darussalam" }, { code: "BG", name: "Bulgaria" }, { code: "BF", name: "Burkina Faso" }, { code: "BI", name: "Burundi" }, { code: "KH", name: "Cambodia" }, { code: "CM", name: "Cameroon" }, { code: "CA", name: "Canada" }, { code: "CV", name: "Cape Verde" }, { code: "KY", name: "Cayman Islands" }, { code: "CF", name: "Central African Republic" }, { code: "TD", name: "Chad" }, { code: "CL", name: "Chile" }, { code: "CN", name: "China" }, { code: "CX", name: "Christmas Island" }, { code: "CC", name: "Cocos (Keeling) Islands" }, { code: "CO", name: "Colombia" }, { code: "KM", name: "Comoros" }, { code: "CG", name: "Congo" }, { code: "CD", name: "Congo, the Democratic Republic of the" }, { code: "CK", name: "Cook Islands" }, { code: "CR", name: "Costa Rica" }, { code: "CI", name: "CÃ´te d'Ivoire" }, { code: "HR", name: "Croatia" }, { code: "CU", name: "Cuba" }, { code: "CW", name: "CuraÃ§ao" }, { code: "CY", name: "Cyprus" }, { code: "CZ", name: "Czech Republic" }, { code: "DK", name: "Denmark" }, { code: "DJ", name: "Djibouti" }, { code: "DM", name: "Dominica" }, { code: "DO", name: "Dominican Republic" }, { code: "EC", name: "Ecuador" }, { code: "EG", name: "Egypt" }, { code: "SV", name: "El Salvador" }, { code: "GQ", name: "Equatorial Guinea" }, { code: "ER", name: "Eritrea" }, { code: "EE", name: "Estonia" }, { code: "ET", name: "Ethiopia" }, { code: "FK", name: "Falkland Islands (Malvinas)" }, { code: "FO", name: "Faroe Islands" }, { code: "FJ", name: "Fiji" }, { code: "FI", name: "Finland" }, { code: "FR", name: "France" }, { code: "GF", name: "French Guiana" }, { code: "PF", name: "French Polynesia" }, { code: "TF", name: "French Southern Territories" }, { code: "GA", name: "Gabon" }, { code: "GM", name: "Gambia" }, { code: "GE", name: "Georgia" }, { code: "DE", name: "Germany" }, { code: "GH", name: "Ghana" }, { code: "GI", name: "Gibraltar" }, { code: "GR", name: "Greece" }, { code: "GL", name: "Greenland" }, { code: "GD", name: "Grenada" }, { code: "GP", name: "Guadeloupe" }, { code: "GU", name: "Guam" }, { code: "GT", name: "Guatemala" }, { code: "GG", name: "Guernsey" }, { code: "GN", name: "Guinea" }, { code: "GW", name: "Guinea-Bissau" }, { code: "GY", name: "Guyana" }, { code: "HT", name: "Haiti" }, { code: "HM", name: "Heard Island and McDonald Islands" }, { code: "VA", name: "Holy See (Vatican City State)" }, { code: "HN", name: "Honduras" }, { code: "HK", name: "Hong Kong" }, { code: "HU", name: "Hungary" }, { code: "IS", name: "Iceland" }, { code: "IN", name: "India" }, { code: "ID", name: "Indonesia" }, { code: "IR", name: "Iran, Islamic Republic of" }, { code: "IQ", name: "Iraq" }, { code: "IE", name: "Ireland" }, { code: "IM", name: "Isle of Man" }, { code: "IL", name: "Israel" }, { code: "IT", name: "Italy" }, { code: "JM", name: "Jamaica" }, { code: "JP", name: "Japan" }, { code: "JE", name: "Jersey" }, { code: "JO", name: "Jordan" }, { code: "KZ", name: "Kazakhstan" }, { code: "KE", name: "Kenya" }, { code: "KI", name: "Kiribati" }, { code: "KP", name: "Korea, Democratic People's Republic of" }, { code: "KR", name: "Korea, Republic of" }, { code: "KW", name: "Kuwait" }, { code: "KG", name: "Kyrgyzstan" }, { code: "LA", name: "Lao People's Democratic Republic" }, { code: "LV", name: "Latvia" }, { code: "LB", name: "Lebanon" }, { code: "LS", name: "Lesotho" }, { code: "LR", name: "Liberia" }, { code: "LY", name: "Libya" }, { code: "LI", name: "Liechtenstein" }, { code: "LT", name: "Lithuania" }, { code: "LU", name: "Luxembourg" }, { code: "MO", name: "Macao" }, { code: "MK", name: "Macedonia, the former Yugoslav Republic of" }, { code: "MG", name: "Madagascar" }, { code: "MW", name: "Malawi" }, { code: "MY", name: "Malaysia" }, { code: "MV", name: "Maldives" }, { code: "ML", name: "Mali" }, { code: "MT", name: "Malta" }, { code: "MH", name: "Marshall Islands" }, { code: "MQ", name: "Martinique" }, { code: "MR", name: "Mauritania" }, { code: "MU", name: "Mauritius" }, { code: "YT", name: "Mayotte" }, { code: "MX", name: "Mexico" }, { code: "FM", name: "Micronesia, Federated States of" }, { code: "MD", name: "Moldova, Republic of" }, { code: "MC", name: "Monaco" }, { code: "MN", name: "Mongolia" }, { code: "ME", name: "Montenegro" }, { code: "MS", name: "Montserrat" }, { code: "MA", name: "Morocco" }, { code: "MZ", name: "Mozambique" }, { code: "MM", name: "Myanmar" }, { code: "NA", name: "Namibia" }, { code: "NR", name: "Nauru" }, { code: "NP", name: "Nepal" }, { code: "NL", name: "Netherlands" }, { code: "NC", name: "New Caledonia" }, { code: "NZ", name: "New Zealand" }, { code: "NI", name: "Nicaragua" }, { code: "NE", name: "Niger" }, { code: "NG", name: "Nigeria" }, { code: "NU", name: "Niue" }, { code: "NF", name: "Norfolk Island" }, { code: "MP", name: "Northern Mariana Islands" }, { code: "NO", name: "Norway" }, { code: "OM", name: "Oman" }, { code: "PK", name: "Pakistan" }, { code: "PW", name: "Palau" }, { code: "PS", name: "Palestinian Territory, Occupied" }, { code: "PA", name: "Panama" }, { code: "PG", name: "Papua New Guinea" }, { code: "PY", name: "Paraguay" }, { code: "PE", name: "Peru" }, { code: "PH", name: "Philippines" }, { code: "PN", name: "Pitcairn" }, { code: "PL", name: "Poland" }, { code: "PT", name: "Portugal" }, { code: "PR", name: "Puerto Rico" }, { code: "QA", name: "Qatar" }, { code: "RE", name: "RÃ©union" }, { code: "RO", name: "Romania" }, { code: "RU", name: "Russian Federation" }, { code: "RW", name: "Rwanda" }, { code: "BL", name: "Saint BarthÃ©lemy" }, { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" }, { code: "KN", name: "Saint Kitts and Nevis" }, { code: "LC", name: "Saint Lucia" }, { code: "MF", name: "Saint Martin (French part)" }, { code: "PM", name: "Saint Pierre and Miquelon" }, { code: "VC", name: "Saint Vincent and the Grenadines" }, { code: "WS", name: "Samoa" }, { code: "SM", name: "San Marino" }, { code: "ST", name: "Sao Tome and Principe" }, { code: "SA", name: "Saudi Arabia" }, { code: "SN", name: "Senegal" }, { code: "RS", name: "Serbia" }, { code: "SC", name: "Seychelles" }, { code: "SL", name: "Sierra Leone" }, { code: "SG", name: "Singapore" }, { code: "SX", name: "Sint Maarten (Dutch part)" }, { code: "SK", name: "Slovakia" }, { code: "SI", name: "Slovenia" }, { code: "SB", name: "Solomon Islands" }, { code: "SO", name: "Somalia" }, { code: "ZA", name: "South Africa" }, { code: "GS", name: "South Georgia and the South Sandwich Islands" }, { code: "SS", name: "South Sudan" }, { code: "ES", name: "Spain" }, { code: "LK", name: "Sri Lanka" }, { code: "SD", name: "Sudan" }, { code: "SR", name: "Suriname" }, { code: "SJ", name: "Svalbard and Jan Mayen" }, { code: "SZ", name: "Swaziland" }, { code: "SE", name: "Sweden" }, { code: "CH", name: "Switzerland" }, { code: "SY", name: "Syrian Arab Republic" }, { code: "TW", name: "Taiwan" }, { code: "TJ", name: "Tajikistan" }, { code: "TZ", name: "Tanzania, United Republic of" }, { code: "TH", name: "Thailand" }, { code: "TL", name: "Timor-Leste" }, { code: "TG", name: "Togo" }, { code: "TK", name: "Tokelau" }, { code: "TO", name: "Tonga" }, { code: "TT", name: "Trinidad and Tobago" }, { code: "TN", name: "Tunisia" }, { code: "TR", name: "Turkey" }, { code: "TM", name: "Turkmenistan" }, { code: "TC", name: "Turks and Caicos Islands" }, { code: "TV", name: "Tuvalu" }, { code: "UG", name: "Uganda" }, { code: "UA", name: "Ukraine" }, { code: "AE", name: "United Arab Emirates" }, { code: "GB", name: "United Kingdom" }, { code: "US", name: "United States" }, { code: "UM", name: "United States Minor Outlying Islands" }, { code: "UY", name: "Uruguay" }, { code: "UZ", name: "Uzbekistan" }, { code: "VU", name: "Vanuatu" }, { code: "VE", name: "Venezuela, Bolivarian Republic of" }, { code: "VN", name: "Viet Nam" }, { code: "VG", name: "Virgin Islands, British" }, { code: "VI", name: "Virgin Islands, U.S." }, { code: "WF", name: "Wallis and Futuna" }, { code: "EH", name: "Western Sahara" }, { code: "YE", name: "Yemen" }, { code: "ZM", name: "Zambia" }, { code: "ZW", name: "Zimbabwe" }] },
        2832: function(t, e, n) { "use strict"; var i = n(9),
                o = n(2833);
            i((function() { i("form canvas").each((function() { var t;
                    new o(this).start() })) })) },
        2833: function(t, e, n) { "use strict";

            function i(t) { this.canvas = t, this.drawData = { drawing: false, mousePos: { x: 0, y: 0 }, lastPos: { x: 0, y: 0 } }, this.addMouseEvents(), this.addTouchEvents(), window.onresize = this.resize.bind(this), window.orientationchange = this.resize.bind(this), this.resize(), this.initClearButton() }

            function o(t, e) { var rect = t.getBoundingClientRect(); return { x: e.clientX - rect.left, y: e.clientY - rect.top } }

            function a(t, e) { var rect = t.getBoundingClientRect(); return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top } } var s = n(9);
            i.prototype.initClearButton = function t() { var e;
                this.canvas.parentNode.querySelector(".u-clear-button").addEventListener("click", function(t) { t.preventDefault(), t.stopPropagation(), this.reset() }.bind(this), false) }, i.prototype.resize = function t() { var e = Math.max(window.devicePixelRatio || 1, 1);
                this.canvas.width = this.canvas.offsetWidth * e, this.canvas.height = this.canvas.offsetHeight * e, this.canvas.getContext("2d").scale(e, e), this.reset() }, i.prototype.reset = function t() { var e = this.canvas.parentNode,
                    n = s(e),
                    i = n.is(":visible"),
                    o = {},
                    a, u; if (!i) { if (u = "u-active", !(a = n.parents(".u-carousel-item")).length) a = n.parents(".u-dialog-block"), u = "u-dialog-open"; if (!a.length) a = n.parent();
                    o = a.css(["position", "left"]), a.css({ position: "absolute", left: "-10000px" }), a.addClass(u) } var l = window.getComputedStyle(e, null),
                    f = e.clientWidth - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
                    c = 200,
                    h = f / 100 * 20,
                    p = c / 100 * 20; if (!i) a.removeClass(u), a.css(o); var m = { width: f, height: c, lineWidth: 2, strokeStyle: l.getPropertyValue("color") || "#000000", fillStyle: l.getPropertyValue("background-color") || "#ffffff", signatureLine: { startX: h, startY: c - p, endX: f - h, endY: c - p } },
                    v = this.canvas.getContext("2d");
                v.canvas.width = m.width, v.canvas.height = m.height, v.clearRect(0, 0, m.width, m.height), v.lineWidth = m.lineWidth, v.strokeStyle = m.strokeStyle, v.fillStyle = m.fillStyle, v.fillRect(0, 0, m.width, m.height), v.beginPath(), v.moveTo(m.signatureLine.startX, m.signatureLine.startY), v.lineTo(m.signatureLine.endX, m.signatureLine.endY), v.stroke(), this.canvas.setAttribute("data-canvas-default-options", JSON.stringify(m)) }, i.prototype.addTouchEvents = function t() { this.canvas.addEventListener("touchmove", function(t) { var e = t.touches[0],
                        me = new MouseEvent("mousemove", { clientX: e.clientX, clientY: e.clientY });
                    this.canvas.dispatchEvent(me) }.bind(this), false), this.canvas.addEventListener("touchstart", function(t) { this.drawData.mousePos = a(this.canvas, t); var e = t.touches[0],
                        me = new MouseEvent("mousedown", { clientX: e.clientX, clientY: e.clientY });
                    this.canvas.dispatchEvent(me) }.bind(this), false), this.canvas.addEventListener("touchend", function() { var me = new MouseEvent("mouseup", {});
                    this.canvas.dispatchEvent(me) }.bind(this), false), document.body.addEventListener("touchstart", function(t) { if (t.target === this.canvas) t.preventDefault() }.bind(this), { passive: false }), document.body.addEventListener("touchend", function(t) { if (t.target === this.canvas) t.preventDefault() }.bind(this), { passive: false }), document.body.addEventListener("touchmove", function(t) { if (t.target === this.canvas) t.preventDefault() }.bind(this), { passive: false }) }, i.prototype.addMouseEvents = function t() { this.canvas.addEventListener("mousedown", function(t) { this.drawData.drawing = true, this.drawData.lastPos = o(this.canvas, t) }.bind(this), false), this.canvas.addEventListener("mouseup", function() { this.drawData.drawing = false }.bind(this), false), this.canvas.addEventListener("mousemove", function(t) { this.drawData.mousePos = o(this.canvas, t) }.bind(this), false) }, i.prototype.renderCanvas = function t() { if (this.drawData.drawing) { var e = this.canvas.getContext("2d");
                    e.moveTo(this.drawData.lastPos.x, this.drawData.lastPos.y), e.lineTo(this.drawData.mousePos.x, this.drawData.mousePos.y), e.stroke(), this.drawData.lastPos = this.drawData.mousePos } }, i.prototype.start = function t() { var e;
                (function t() { window.signRequestAnimFrame(t.bind(this)), this.renderCanvas() }).bind(this)() }, window.signRequestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimaitonFrame || function(t) { window.setTimeout(t, 1e3 / 60) }, t.exports = i },
        2834: function(t, e, n) { "use strict"; var i = n(9);
            i((function() { i(".u-blog .u-pagination a[href^='#']").click((function(t) { t.preventDefault(); var link = i(this),
                        e = (link.attr("href") || "").slice(1),
                        blog = link.parents(".u-blog"),
                        n = blog.find(".u-repeater-item.u-page-posts-" + e),
                        o = blog.find(".u-repeater-item:not(.u-page-posts-" + e + ")"),
                        a = blog.find(".u-pagination.u-page-posts-pagination-" + e),
                        s = blog.find(".u-pagination:not(.u-page-posts-pagination-" + e + ")");
                    o.addClass("u-hidden"), s.addClass("u-hidden"), n.removeClass("u-hidden"), a.removeClass("u-hidden") })) })) },
        2835: function(t, e, n) { "use strict";

            function i() { if (this.defaultMode = "XL", this.modes = ["XS", "SM", "MD", "LG", "XL"], this.borders = { XL: { CLASS: "u-xl", MAX: 1e6 }, LG: { CLASS: "u-lg", MAX: 1199 }, MD: { CLASS: "u-md", MAX: 991 }, SM: { CLASS: "u-sm", MAX: 767 }, XS: { CLASS: "u-xs", MAX: 575 } }, document.body.classList.contains("u-mode-xxl")) this.defaultMode = "XXL", this.borders.XL.MAX = 1399, this.borders.XXL = { CLASS: "u-xxl", MAX: 1e6 }, this.modes.push("XXL") }
            i.prototype.getResponsiveMode = function t(e) { for (var n = 0; n < this.modes.length; n++) { var i = this.modes[n]; if (e <= this.borders[i].MAX) return i } return this.defaultMode }, i.prototype.setResponsive = function t(e) { var n = $(".u-body"),
                    i; for (i = 0; i < this.modes.length; i++) n.removeClass(this.borders[this.modes[i]].CLASS); for (i = this.modes.length - 1; i >= 0 && (n.addClass(this.borders[this.modes[i]].CLASS), this.modes[i] !== e); i--); }, i.prototype.recalcClasses = function t() { var e = i.contentDom; if (e) { var n = e.width(); if (!(n < 1)) { var o = this.getResponsiveMode(n); if (o !== i.prevMode) i.prevMode = o, this.setResponsive(o) } } }, $((function() { var t = new i;
                t.recalcClasses(), $(window).resize(t.recalcClasses.bind(t)) })), window.ResponsiveCms = i },
        2836: function(t, e, n) { "use strict"; var i = n(9);
            i((function() { i(".hidden-image, .hidden-image-container").each((function() {
                    function replacer(cell) { var t = cell.siblings().eq(0),
                            e = /u-size-([\d]+)/;
                        cell.addClass("u-hidden"), t.attr("class", t.attr("class").replace(e, (function(el, size) { var t = parseInt(cell.attr("class").match(e)[1], 10) + parseInt(size, 10); return el.replace(size, t) }))) } var t = i(this),
                        e, n = "hidden-image" === t.attr("class") ? i(this).closest(".u-layout-cell") : t,
                        o = n.siblings(); if (!t.siblings(".u-blog-control").length && 0 !== n.length)
                        if (!o.length) { var a = n.closest(".u-layout-row").parent(),
                                s; if (-1 !== a.attr("class").indexOf("u-size")) { var u; if (!a.siblings().length) a.closest(".u-layout-row").parent().addClass("u-hidden");
                                else replacer(a) } } else replacer(n) })), [".u-blog-control[data-post-url]", ".u-product-control[data-product-control]"].forEach((function(selector) { i(selector).on("click", (function() { var t = selector.split("[")[1].split("]")[0]; if ("" !== i(this).attr(t)) window.location.assign(i(this).attr(t)) })) })), i(".none-post-image").each((function() { var t = i(this).next(); if (t.length) { var e; if (t.css("margin-top").startsWith("-")) t.css("margin-top", "0px") } })), i(".u-blog-post, .u-products-item").removeClass("u-invisible") })) },
        2837: function(t, e, n) { "use strict"; var i = n(9);
            i((function() { i("section").each((function() { var section = i(this),
                        t; if (1 === section.children().length) { var e = section.find(">.u-sheet:eq(0)"); if (!e.length || 1 === e.children().length) { var n; if ((!e.length ? section.find(">.u-layout-wrap:eq(0)") : e.find(">.u-layout-wrap:eq(0)")).length) { var o = i(".u-layout-cell .u-container-layout", section),
                                    a = true; if (o.length)
                                    if (o.each((function() { var t = i(this).children('*:not(".hidden-position")'),
                                                e = i(this).find(".hidden-position"); if (t.length > 0 || !e.length) return a = false, false })), a) section.hide() } } } })) })) },
        2838: function(t, e, n) { "use strict"; var i = n(9);
            i((function() { i("a[data-link-anchor]").each((function() { var link = i(this),
                        t = link.attr("href") || ""; if (t) { var e = link.attr("data-link-anchor") || ""; if (e) link.attr("href", t + e), link.removeAttr("data-link-anchor") } })) })), i((function() { i("a.u-nav-link").each((function() { var link = i(this),
                        t = link.attr("href") || ""; if (t) { if (0 === t.indexOf("#") && t.length > 1) { var section = i(t); if (!section || !section.length || !section.is(".u-dialog-block")) return;
                            link.addClass("u-dialog-link") } if (-1 !== t.indexOf("/uploads/") || -1 !== t.indexOf("/images/")) link.addClass("u-file-link") } })) })) },
        2839: function(t, e) {},
        31: function(t, e, n) { "use strict";

            function CountdownCommon(t) { this.$dom = t }
            t.exports = CountdownCommon; var CountdownAnimate = n(260);
            CountdownCommon.prototype.getDate = function() { var t = this.$dom.attr("data-target-date"); if (t) return new Date(t);
                else return new Date }, CountdownCommon.prototype.getDirection = function() { return this.$dom.attr("data-direction") || "down" }, CountdownCommon.prototype.getTimeLeft = function() { return this.$dom.attr("data-time-left") || "750m" }, CountdownCommon.prototype.getNumber = function() { var t = this.$dom.attr("data-target-number") || "100"; return parseInt(t, 10) }, CountdownCommon.prototype.getStartTime = function() { var t = this.$dom.attr("data-start-time"); if (t) return new Date(t);
                else return new Date }, CountdownCommon.prototype.getFrequency = function() { return this.$dom.attr("data-frequency") || "1s" }, CountdownCommon.prototype.getTimerId = function() { return this.$dom.attr("data-timer-id") }, CountdownCommon.prototype.getTimerKey = function() { return "timer-" + this.getTimerId() }, CountdownCommon.prototype.getFor = function() { return this.$dom.attr("data-for") || "everyone" }, CountdownCommon.prototype.getType = function() { return this.$dom.attr("data-type") || "to-date" }, CountdownCommon.prototype.setValue = function(t, e, n, props) { var i = this.$dom.find(".u-countdown-" + t),
                    o = e.toString(),
                    a = o.length; if ("to-number" === this.getType()) { for (; i.find(".u-countdown-number").length < a + 1;) { var itemDom = i.find(".u-countdown-number:eq(0)"); if (!itemDom.length) break;
                        itemDom.clone().insertAfter(itemDom).text("0") } for (; i.find(".u-countdown-number").length > a + 1;) i.find(".u-countdown-number:eq(0)").remove() } var s = i.find(".u-countdown-number"); if ("hours" === t || "minutes" === t || "seconds" === t || "numbers" === t)
                    for (; o.length < s.length;) o = "0" + o; if (!(a > s.length))
                    for (var u = 0; u < s.length; u++) { var l = $(s[u]); if (this.doSetVal(l, o[u], props), n && ("years" === t || "days" === t)) l.toggleClass("u-hidden", u >= a) } }, CountdownCommon.prototype.doSetVal = function(t, e, props) { if ((props = props || {}).animation && "none" !== props.animation) { var n = new CountdownAnimate(t); if (n.getOldVal() !== e) n.rollNumber(e, props) } else if (t.text() !== e) t.text(e) }, CountdownCommon.prototype.showLabel = function(t, e) { var n = this.$dom.find(".u-countdown-" + t);
                n.toggleClass("u-hidden", !e), n.parent().children(".u-countdown-separator").each((function(t, el) { var e = $(el),
                        n = e.prev(".u-countdown-item"),
                        i = e.nextAll(".u-countdown-item:not(.u-hidden)");
                    e.toggleClass("u-hidden", !(n.is(":not(.u-hidden)") && i.is(":not(.u-hidden)"))) })) }, CountdownCommon.prototype.setAfterCountFinished = function() { this.$dom.attr("data-after-count-finished", true) }, CountdownCommon.prototype.getAfterCountFinished = function() { var t = this.$dom.attr("data-after-count-finished") || "false"; return t && "true" === t || false }, CountdownCommon.prototype.getAfterCount = function() { return this.$dom.attr("data-after-count") || "none" }, CountdownCommon.prototype.getRedirectUrl = function() { return this.$dom.attr("data-redirect-url") || "https://" }, CountdownCommon.prototype.getCountAnimation = function() { return this.$dom.attr("data-count-animation") || "none" }, CountdownCommon.prototype.timeDiff = function(t) { var e = new Date,
                    n; if ("down" === this.getDirection()) return CountdownCommon.calcTimeDiff(t, e);
                else return CountdownCommon.calcTimeDiff(e, t) }, CountdownCommon.prototype.calcNumber = function(t, e, n) { var i = CountdownCommon.timeStringToMilliseconds(n); if (!i) return 0; var o = new Date,
                    a = "up" === this.getDirection() ? 1 : -1,
                    s = t + Math.floor((o - e) / i) * a; if (s < 0) return 0;
                else return s }, CountdownCommon.prototype.parseTime = function(t, e) { var n = CountdownCommon.timeStringToMilliseconds(t),
                    i = "down" === this.getDirection() ? 1 : -1; return new Date(e.getTime() + n * i) }, CountdownCommon.calcTimeDiff = function(t, e) { if (t <= e) return CountdownCommon.emptyDiff(); var n = Math.abs(t - e) / 1e3,
                    i = Math.floor(n / 31536e3);
                n -= 31536e3 * i; var o = Math.floor(n / 86400);
                n -= 86400 * o; var a = Math.floor(n / 3600) % 24;
                n -= 3600 * a; var s = Math.floor(n / 60) % 60,
                    u; return n -= 60 * s, { years: i, days: o, hours: a, minutes: s, seconds: Math.floor(n) } }, CountdownCommon.emptyDiff = function() { return { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 } }, CountdownCommon.isEmptyDiff = function(diff) { if ("number" == typeof diff) return 0 === diff;
                else return 0 === diff.years && 0 === diff.days && 0 === diff.hours && 0 === diff.minutes && 0 === diff.seconds }, CountdownCommon.timeStringToMilliseconds = function(t) { var data = t.match(/(\d+)(ms|s|m|h|d|)/); if (data && 3 === data.length) { var e = parseInt(data[1], 10); switch (data[2]) {
                        case "ms":
                            return e;
                        case "s":
                            return 1e3 * e;
                        case "m":
                            return 60 * e * 1e3;
                        case "h":
                            return 3600 * e * 1e3;
                        case "d":
                            return 86400 * e * 1e3;
                        default:
                            return 0 } } return 0 } },
        395: function(t, e) {
            var e = void 0,
                t = void 0;
            (function() {
                /*!
                 * https://github.com/gilmoreorless/css-background-parser
                 * Copyright Â© 2015 Gilmore Davidson under the MIT license: http://gilmoreorless.mit-license.org/
                 */
                ! function(t) {
                    function e(t) { if (!(this instanceof e)) return new e;
                        this.backgrounds = t || [] }

                    function Background(props) {
                        function t(t, n) { e[t] = t in props ? props[t] : n } if (!(this instanceof Background)) return new Background(props);
                        props = props || {}; var e = this;
                        t("color", ""), t("image", ""), t("attachment", ""), t("clip", ""), t("origin", ""), t("position", ""), t("repeat", ""), t("size", "") }

                    function n(t) { var e = [],
                            n = /[,\(\)]/,
                            i = 0,
                            o = ""; if (null == t) return e; for (; t.length;) { var a = n.exec(t); if (!a) break; var s, u = false; switch (a[0]) {
                                case ",":
                                    if (!i) e.push(o.trim()), o = "", u = true; break;
                                case "(":
                                    i++; break;
                                case ")":
                                    i--; break } var index = a.index + 1;
                            o += t.slice(0, u ? index - 1 : index), t = t.slice(index) } if (o.length || t.length) e.push((o + t).trim()); return e.filter((function(t) { return "none" !== t })) }

                    function i(t) { return t.trim() }

                    function o(t) { return (t || "").split(",").map(i) }
                    e.prototype.toString = function t(props) { return this.backgrounds.map((function(t) { return t.toString(props) })).filter((function(t) { return t })).join(", ") }, Background.prototype.toString = function t(props) { props = props || ["image", "repeat", "attachment", "position", "size", "origin", "clip"]; var size = (props = Array.isArray(props) ? props : [props]).includes("size") && this.size ? " / " + this.size : "",
                            list = [props.includes("image") ? this.image : "", props.includes("repeat") ? this.repeat : "", props.includes("attachment") ? this.attachment : "", props.includes("position") ? this.position + size : "", props.includes("origin") ? this.origin : "", props.includes("clip") ? this.clip : ""]; if (this.color) list.unshift(this.color); return list.filter((function(t) { return t })).join(" ") }, t.BackgroundList = e, t.Background = Background, t.parseElementStyle = function(t) { var list = new e; if (null == t) return list; for (var i = n(t.backgroundImage), a = t.backgroundColor, s = o(t.backgroundAttachment), u = o(t.backgroundClip), l = o(t.backgroundOrigin), f = o(t.backgroundPosition), c = o(t.backgroundRepeat), h = o(t.backgroundSize), background, p = 0, m = i.length; p < m; p++) { if (background = new Background({ image: i[p], attachment: s[p % s.length], clip: u[p % u.length], origin: l[p % l.length], position: f[p % f.length], repeat: c[p % c.length], size: h[p % h.length] }), p === m - 1) background.color = a;
                            list.backgrounds.push(background) } return list } }(function(e) { if (void 0 !== t && void 0 !== t.exports) return t.exports;
                    else return e.cssBgParser = {} }(this))
            }).call(window)
        },
        396: function(t, e, n) { "use strict";

            function ResponsiveMenu(t, e) { this.responsive = t, this.root = e || i("body"), this.init() }
            t.exports = ResponsiveMenu; var i = window.jQuery;
            ResponsiveMenu.prototype.init = function init() { if (this.root.is("body")) this.subscribe();
                this.initStyles() }, ResponsiveMenu.prototype.subscribe = function t() { this.root.on("click", ".u-menu .menu-collapse", function(t) { t.preventDefault(); var e = i(t.currentTarget).closest(".u-menu"); if (ResponsiveMenu.isActive(e)) this.close(e);
                    else this.open(e) }.bind(this)), this.root.on("click", ".u-menu .u-menu-close", function(t) { t.preventDefault(); var e = i(t.currentTarget).closest(".u-menu");
                    this.close(e) }.bind(this)), this.root.on("click", ".u-menu .u-menu-overlay", function(t) { var e = i(t.currentTarget).closest(".u-menu.open");
                    this.close(e) }.bind(this)), this.root.find(".u-menu").on("click", ".u-nav-container-collapse .u-nav-link", function(t) { var e = i(t.currentTarget),
                        n; if (!e.siblings(".u-nav-popup").length) { var o = e.attr("href"); if (o && -1 !== o.indexOf("#")) { var a = i(t.currentTarget).closest(".u-menu");
                            this.close(a) } } }.bind(this)), this.root.find(".u-menu:not(.u-menu-one-level)").on("click", ".u-nav-container-collapse .u-nav-link", (function(t) { var e = i(t.currentTarget).siblings(".u-nav-popup"),
                        nav, n = e.closest(".u-menu").attr("data-submenu-level") || "on-click"; if (e.length && "on-click" === n) { t.preventDefault(), t.stopPropagation(), t.returnValue = false, e.one("transitionend webkitTransitionEnd oTransitionEnd", (function(t) { t.stopPropagation(), e.removeClass("animating"), e.toggleClass("open"), e.css({ "max-height": e.is(".open") ? "none" : "", visibility: "" }), e.find(".open").removeClass("open").css("max-height", "") })), e.css({ "max-height": "none", visibility: "visible" }); var o = e.outerHeight();
                        e.css("max-height", e.is(".open") ? o : 0), e.addClass("animating"), e[0].offsetHeight, e.css("max-height", e.is(".open") ? 0 : o) } })), i(window).on("resize", function() { if (this.screenWidth !== window.innerWidth) i(".u-menu.open").each(function(t, el) { this.close(i(el)) }.bind(this)) }.bind(this)), i(document).keyup(function(t) { if (27 === t.keyCode) i(".u-menu.open").each(function(t, el) { this.close(i(el)) }.bind(this)) }.bind(this)), i(this.root).on("mouseenter touchstart", ".u-nav-container ul > li", function(t) { ResponsiveMenu.fixDirection(this.root, i(t.currentTarget)) }.bind(this)) }, ResponsiveMenu.prototype.initStyles = function t() { this.root.find(".u-menu").each((function() { var menu = i(this),
                        style = menu.find(".offcanvas-style"),
                        t = menu.find(".u-nav-container-collapse .u-sidenav").attr("data-offcanvas-width") || 250; if (!style.length) style = i('<style class="offcanvas-style"></style>'), menu.append(style);
                    style.html("            .u-offcanvas .u-sidenav { flex-basis: {width} !important; }            .u-offcanvas:not(.u-menu-open-right) .u-sidenav { margin-left: -{width}; }            .u-offcanvas.u-menu-open-right .u-sidenav { margin-right: -{width}; }            @keyframes menu-shift-left    { from { left: 0;        } to { left: {width};  } }            @keyframes menu-unshift-left  { from { left: {width};  } to { left: 0;        } }            @keyframes menu-shift-right   { from { right: 0;       } to { right: {width}; } }            @keyframes menu-unshift-right { from { right: {width}; } to { right: 0;       } }            ".replace(/\{width\}/g, t + "px")) })) }, ResponsiveMenu.prototype.onResponsiveResize = function t() { i(".u-menu").each(function(t, el) { var e = i(el).attr("data-responsive-from") || "MD",
                        n = this.responsive.modes.indexOf(e),
                        o = this.responsive.modes.slice(n);
                    ResponsiveMenu.toggleResponsive(el, -1 !== o.indexOf(this.responsive.mode)), this.megaResize(el, 1) }.bind(this)) }, ResponsiveMenu.toggleResponsive = function t(e, n) { i(e).toggleClass("u-enable-responsive", n) }, ResponsiveMenu.prototype.close = function close(menu, t) { if (!window.app || !window.app.modes) { if (ResponsiveMenu.isActive(menu)) this.closeMenu(menu, t) } else if (this.closeMenu(menu, t), this.setOverlayOpacity(menu), ResponsiveMenu.isOffcanvasMode(menu)) app.modes().resetOffCanvas() }, ResponsiveMenu.prototype.closeMenu = function t(menu, e) { if (this.enableScroll(), ResponsiveMenu.isOffcanvasMode(menu)) this.offcanvasMenuClose(menu);
                else this.overlayMenuClose(menu);
                this.root.removeClass("menu-overlay"), this.hideOverlay(menu, e) }, ResponsiveMenu.prototype.open = function open(menu) { if (this.root.addClass("menu-overlay"), !window.app || !window.app.modes) { if (!ResponsiveMenu.isActive(menu)) this.openMenu(menu) } else if (this.setOverlayOpacity(menu), this.openMenu(menu), ResponsiveMenu.isOffcanvasMode(menu)) app.modes().setOffCanvas() }, ResponsiveMenu.prototype.setOverlayOpacity = function t(menu) { menu.find(".u-menu-overlay").css("opacity", "") }, ResponsiveMenu.prototype.openMenu = function open(menu) { if (this.screenWidth = window.innerWidth, this.disableScroll(), ResponsiveMenu.isOffcanvasMode(menu)) this.offcanvasMenuOpen(menu);
                else this.overlayMenuOpen(menu);
                this.showOverlay(menu) }, ResponsiveMenu.prototype.offcanvasMenuOpen = function t(menu) { var e = this.root; if (menu.addClass("open"), e.addClass("u-offcanvas-opened"), menu.is(".u-offcanvas-shift")) e.addClass("u-offcanvas-shifted-" + (menu.hasClass("u-menu-open-right") ? "right" : "left")) }, ResponsiveMenu.prototype.offcanvasMenuClose = function t(menu) { if (menu.removeClass("open"), this.root.removeClass("u-offcanvas-opened u-offcanvas-shifted-left u-offcanvas-shifted-right"), menu.is(".u-offcanvas-shift")) this.root.addClass("u-offcanvas-unshifted-" + (menu.hasClass("u-menu-open-right") ? "right" : "left")) }, ResponsiveMenu.prototype.megaResize = function t(menu, e) { if (menu = i(menu), e = e || 1, menu.hasClass("u-menu-mega")) menu.outerHeight(), menu.each((function() { var menu = i(this);
                    menu.find(".u-mega-popup").each((function() { var t = i(this),
                            n = t.attr("data-mega-width") || "content"; if ("custom" !== n && "content" !== n) { var o = "sheet" === n ? menu.closest(".u-sheet, .u-body") : menu.closest("body, .u-body"),
                                a = o.offset(),
                                s = o.outerWidth(); if (t.css({ left: "", width: "" }), t.removeClass("u-popup-left u-popup-right"), t.addClass("u-hidden"), menu.outerHeight(), t.removeClass("u-hidden"), menu.outerHeight(), "content" === n) return t.css("width", "auto"), void 0; var u = t.offset(),
                                l = (a.left - u.left) / e,
                                f = parseFloat(t.css("left") || 0);
                            t.css({ left: f + Math.round(l) + "px", width: s + "px" }) } })) })) }, ResponsiveMenu.prototype.hideOverlay = function t(menu, e) { var overlay = menu.find(".u-menu-overlay"),
                    n = function() { if (!ResponsiveMenu.isActive(menu)) menu.find(".u-nav-container-collapse").css("width", ""), this.root.filter("body").find("header.u-sticky").css("top", "") }.bind(this); if (e) n();
                else overlay.fadeOut(500, n) }, ResponsiveMenu.prototype.showOverlay = function t(menu) { var overlay = menu.find(".u-menu-overlay");
                menu.find(".u-nav-container-collapse").css("width", "100%"), overlay.fadeIn(500) }, ResponsiveMenu.prototype.disableScroll = function t() { if (this.root.is("body")) document.documentElement.style.overflow = "hidden" }, ResponsiveMenu.prototype.enableScroll = function t() { if (this.root.is("body")) document.documentElement.style.overflow = "" }, ResponsiveMenu.prototype.overlayMenuOpen = function t(menu) { menu.addClass("open") }, ResponsiveMenu.prototype.overlayMenuClose = function t(menu) { menu.removeClass("open") }, ResponsiveMenu.isOffcanvasMode = function(menu) { return menu.is(".u-offcanvas") }, ResponsiveMenu.isActive = function(menu) { return menu.hasClass("open") }, ResponsiveMenu.fixDirection = function t(e, el) { if (el && el.length) { e = i(e); var n = "u-popup-left",
                        o = "u-popup-right",
                        a;
                    i(el).children(".u-nav-popup").each((function() { var t = i(this);
                        t.removeClass(n + " " + o); var a = t.parent().closest(".u-nav-popup"),
                            s = t.attr("data-mega-width") || "content",
                            u = Boolean(a.length); if ("content" === s) { var l = ""; if (t.parents("." + n).length) l = n;
                            else if (t.parents("." + o).length) l = o; if (l) t.addClass(l);
                            else { var f = t[0].getBoundingClientRect(),
                                    c = e[0].getBoundingClientRect(),
                                    h = "undefined" == typeof app ? 1 : app.editor.preview.scale,
                                    p = f.right - c.right,
                                    m = c.left - f.left; if (p > 1) t.css("left", u ? "" : (c.right - f.right) / h + "px"), t.css("right", u ? "" : "auto"), t.addClass(n);
                                else if (m > 1) t.css("left", u ? "" : "0px"), t.css("right", u ? "" : "auto"), t.addClass(o) } } })) } }, window.ResponsiveMenu = ResponsiveMenu },
        397: function(t, e, n) { "use strict";

            function i(t, e) { if ("string" != typeof t) return 0; var n = (new u).replace(t, e).expr; if ("" === n.trim()) return 0;
                o(n); try { var i, l; return s(new Function('"use strict";return (' + n + ");")(), 4) } catch (e) { return a(e, t) } }

            function o(t) { var e = /[^-()\d\s/*+.]+|\/\/|\/\*/g.exec(t),
                    n = 20,
                    i; if (e) { var o = { messageKey: "#FormCalc_UnexpectedToken", expression: i = e[0].substring(0, n), position: e.index }; throw Object.assign(new Error("Unexpected token '" + i + "'", { cause: o }), { args: o }) } }

            function a(t, e) { var n = { messageKey: "#FormCalc_EvaluationFailed", expression: e }; throw Object.assign(new Error("Evaluation failed", { cause: n }), { args: n }) }

            function s(t, e) { if (t = Number(t), e = Number(e), isNaN(t) || !isFinite(t)) return t; var n = t.toString().split("e"),
                    i = n[0],
                    o = n[1] || 0,
                    a, s, u = Math.round(Number(i + "e" + (+o + e))).toString().split("e")[0],
                    l = n[1] || 0; return Number(u + "e" + (+l - e)) } var u = n(255);
            t.exports.evaluate = i },
        398: function(t, e, n) { "use strict";

            function i(el) { var t = el.getAttribute("name"),
                    type; if (!t) return t; if (t = t.trim(), "SELECT" === el.tagName) return o(t); if ("checkbox" === el.getAttribute("type")) return o(t);
                else return t }

            function o(t) { if (!t) return t; var e = t.lastIndexOf("[][]"); if (e > 0 && e + 4 === t.length) return t.substring(0, t.length - 4); if ((e = t.lastIndexOf("[]")) > 0 && e + 2 === t.length) return t.substring(0, t.length - 2);
                else return t }

            function a(el) { if ("OPTION" === el.tagName) return el.getAttribute("data-calc"); var type = el.getAttribute("type"); if ("number" === type || "range" === type) return el.value; if ("radio" === type) return el.getAttribute("data-calc"); if ("checkbox" === type && null !== el.getAttribute("data-calc")) return el.getAttribute("data-calc"); if ("checkbox" === type) return el.value;
                else return }

            function s(el) { return Number(a(el)) }

            function u(el) { if ("OPTION" === el.tagName) return el.selected; var type = el.getAttribute("type"); if ("radio" === type || "checkbox" === type) return el.checked;
                else return true }

            function l(el, t) { if (t = t || 0, u(el)) return s(el);
                else return t } var f = t.exports = function t(form) { this.fields = [], this.collectInputs(form.querySelectorAll("[type=number], [type=range]")), this.collectInputs(form.querySelectorAll("[type=radio]")), this.collectInputs(form.querySelectorAll('[type="checkbox"]')), this.collectSelects(form.querySelectorAll("select")) };
            f.prototype.getScope = function t() { return this.fields.reduce((function(t, e) { if (!e || !e.name) return t; if (!t[e.name]) t[e.name] = 0; return t[e.name] += e.value, t }), {}) }, f.prototype.addField = function t(field) { return this.fields.push(field), field }, f.prototype.collectInputs = function(t) { for (var e = 0; e < t.length; e++) this.addField({ name: i(t[e]), value: l(t[e], 0), rawValue: a(t[e]) }) }, f.prototype.collectSelects = function(t) { for (var e = 0; e < t.length; e++) this.collectOptions(i(t[e]), t[e].querySelectorAll("option")) }, f.prototype.collectOptions = function(t, e) { for (var n = 0; n < e.length; n++) this.addField({ name: t, value: l(e[n], 0), rawValue: a(e[n]) }) } },
        399: function(t, e, n) { "use strict"; var FormFileType = n(88),
                FormFileAccept = t.exports = {};
            FormFileAccept[FormFileType.IMAGES] = ".bmp,.dng,.eps,.gif,.jpg,.jpeg,.png,.ps,.raw,.svg,.tga,.tif,.tiff", FormFileAccept[FormFileType.DOCUMENTS] = ".ai,.cdr,.csv,.doc,.docb,.docx,.dot,.dotx,.dwg,.eps,.epub,.fla,.gpx,.ical,.icalendar,.ics,.ifb,.indd,.ipynb,.key,.kml,.kmz,.mobi,.mtf,.mtx,.numbers,.odg,.odp,.ods,.odt,.otp,.ots,.ott,.oxps,.pages,.pdf,.pdn,.pkg,.pot,.potx,.pps,.ppsx,.ppt,.pptx,.psd,.pub,.rtf,.sldx,.txt,.vcf,.xcf,.xls,.xlsx,.xlt,.xltx,.xlw,.xps,.zip", FormFileAccept[FormFileType.VIDEO] = ".3gp,.avi,.divx,.flv,.m1v,.m2ts,.m4v,.mkv,.mov,.mp4,.mpe,.mpeg,.mpg,.mxf,.ogv,.vob.webm,.wmv,.xvid", FormFileAccept[FormFileType.AUDIO] = ".aac,.aif,.aiff,.flac,.m4a,.mp3,.wav,.wma" },
        400: function(t, e, n) { "use strict"; var i = n(401),
                bootstrap = {};
            bootstrap.Util = function(t) {
                function e(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } }

                function n() { if (window.QUnit) return false; var el = document.createElement("bootstrap"); for (var t in h)
                        if (void 0 !== el.style[t]) return h[t];
                    return false }

                function i(t) { if (null == t) return "" + t;
                    else return {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase() }

                function o() { return { bindType: l, delegateType: l, handle: function t(e) { if (u["default"](e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } } }

                function a(t) { var e = this,
                        n = false; return u["default"](this).one(Util.TRANSITION_END, (function() { n = true })), setTimeout((function() { if (!n) Util.triggerTransitionEnd(e) }), t), this }

                function s() { l = n(), u["default"].fn.emulateTransitionEnd = a, u["default"].event.special[Util.TRANSITION_END] = o() } var u = e(t),
                    l = false,
                    f = 1e6,
                    c = 1e3,
                    h = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
                    Util = { TRANSITION_END: "bsTransitionEnd", getUID: function t(e) { do { e += ~~(Math.random() * f) } while (document.getElementById(e)); return e }, getSelectorFromElement: function t(e) { var selector = e.getAttribute("data-u-target"); if (!selector || "#" === selector) { var n = e.getAttribute("href");
                                selector = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(selector) ? selector : null } catch (t) { return null } }, getTransitionDurationFromElement: function t(e) { if (!e) return 0; var n = u["default"](e).css("transition-duration"),
                                i = u["default"](e).css("transition-delay"),
                                o = parseFloat(n),
                                a = parseFloat(i); if (!o && !a) return 0;
                            else return n = n.split(",")[0], i = i.split(",")[0], (parseFloat(n) + parseFloat(i)) * c }, reflow: function t(e) { return e.offsetHeight }, triggerTransitionEnd: function t(e) { u["default"](e).trigger(l) }, supportsTransitionEnd: function t() { return Boolean(l) }, isElement: function t(e) { return (e[0] || e).nodeType }, typeCheckConfig: function t(e, n, o) { for (var a in o)
                                if (Object.prototype.hasOwnProperty.call(o, a)) { var s = o[a],
                                        u = n[a],
                                        l = u && Util.isElement(u) ? "element" : i(u); if (!new RegExp(s).test(l)) throw new Error(e.toUpperCase() + ": " + 'Option "' + a + '" provided type "' + l + '" ' + 'but expected type "' + s + '".') } }, findShadowRoot: function t(e) { if (!document.documentElement.attachShadow) return null; if ("function" == typeof e.getRootNode) { var n = e.getRootNode(); return n instanceof ShadowRoot ? n : null } if (e instanceof ShadowRoot) return e; if (!e.parentNode) return null;
                            else return Util.findShadowRoot(e.parentNode) } }; return s(), Util }($), bootstrap.Carousel = function(t, Util) {
                function e(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } }

                function n(t, props) { for (var e = 0; e < props.length; e++) { var n = props[e]; if (n.enumerable = n.enumerable || false, n.configurable = true, "value" in n) n.writable = true;
                        Object.defineProperty(t, n.key, n) } }

                function o(t, e, i) { if (e) n(t.prototype, e); if (i) n(t, i); return t }

                function a() { return a = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n)
                                if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i] } return t }, a.apply(this, arguments) } var s = e(t),
                    u = e(Util),
                    l = "u-carousel",
                    f = "4.6.0",
                    c = "bs.u-carousel",
                    h = "bs.u-carousel.swipe",
                    p = "." + c,
                    m = ".data-u-api",
                    v = s["default"].fn[l],
                    g = 37,
                    y = 39,
                    w = 500,
                    b = 40,
                    Default = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: false, swipe: true },
                    C = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean", swipe: "boolean" },
                    x = "next",
                    S = "prev",
                    A = "left",
                    _ = "right",
                    T = "u-slide" + p,
                    I = "slid" + p,
                    E = "keydown" + p,
                    k = "mouseenter" + p,
                    M = "mouseleave" + p,
                    L = "touchstart" + p,
                    B = "touchmove" + p,
                    O = "touchend" + p,
                    P = "pointerdown" + p,
                    F = "pointerup" + p,
                    N = "dragstart" + p,
                    z = "load" + p + m,
                    U = "click" + p + m,
                    H = "u-carousel",
                    $ = "u-active",
                    V = "u-slide",
                    Y = "u-carousel-item-right",
                    W = "u-carousel-item-left",
                    j = "u-carousel-item-next",
                    G = "u-carousel-item-prev",
                    X = "pointer-event",
                    Z = ".u-active",
                    K = ".u-active.u-carousel-item",
                    J = ".u-carousel-item",
                    tt = ".u-carousel-item img",
                    nt = ".u-carousel-item-next, .u-carousel-item-prev",
                    rt = ".u-carousel-indicators, .u-carousel-thumbnails",
                    ot = "[data-u-slide], [data-u-slide-to]",
                    at = '[data-u-ride="carousel"]',
                    st = { TOUCH: "touch", PEN: "pen" },
                    Carousel = function() {
                        function Carousel(t, e) { var n = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
                            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(rt), this._touchSupported = !this._element.matches(".u-form") && n, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var e = Carousel.prototype; return e.next = function t() { if (!this._isSliding) this._slide(x) }, e.nextWhenVisible = function t() { var e = s["default"](this._element); if (!document.hidden && e.is(":visible") && "hidden" !== e.css("visibility")) this.next() }, e.prev = function t() { if (!this._isSliding) this._slide(S) }, e.pause = function t(e) { if (!e) this._isPaused = true; if (this._element.querySelector(nt)) u["default"].triggerTransitionEnd(this._element), this.cycle(true);
                            clearInterval(this._interval), this._interval = null }, e.cycle = function t(e) { if (!e) this._isPaused = false; if (this._interval) clearInterval(this._interval), this._interval = null; if (this._config.interval && !this._isPaused) this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval) }, e.to = function t(index) { var e = this;
                            this._activeElement = this._element.querySelector(K); var n = this._getItemIndex(this._activeElement); if (!(index > this._items.length - 1 || index < 0)) { if (this._isSliding) return s["default"](this._element).one(I, (function() { return e.to(index) })), void 0; if (n === index) return this.pause(), this.cycle(), void 0; var i = index > n ? x : S;
                                this._slide(i, this._items[index]) } }, e.dispose = function t() { if (s["default"](this._element).off(p), s["default"].removeData(this._element, c), s["default"].removeData(this._element, h), this._items = null, this._config = null, this._element = null, this._interval) clearInterval(this._interval);
                            this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function t(e) { return e = a({}, Default, e), u["default"].typeCheckConfig(l, e, C), e }, e._handleSwipe = function t() { var e = Math.abs(this.touchDeltaX); if (!(e <= b)) { var n = e / this.touchDeltaX; if (this.touchDeltaX = 0, n > 0) this.prev(); if (n < 0) this.next() } }, e._addEventListeners = function t() { var e = this; if (this._config.keyboard) s["default"](this._element).on(E, (function(t) { return e._keydown(t) })); if ("hover" === this._config.pause) s["default"](this._element).on(k, (function(t) { return e.pause(t) })).on(M, (function(t) { return e.cycle(t) })); if (this._config.touch) this._addTouchEventListeners() }, e._addTouchEventListeners = function t() { var e = this; if (this._touchSupported) { var n = function t(n) { if (e._pointerEvent && st[n.originalEvent.pointerType.toUpperCase()]) e.touchStartX = n.originalEvent.clientX;
                                        else if (!e._pointerEvent) e.touchStartX = n.originalEvent.touches[0].clientX },
                                    move = function move(t) { if (t.originalEvent.touches && t.originalEvent.touches.length > 1) e.touchDeltaX = 0;
                                        else e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX },
                                    i = function t(n) { if (e._pointerEvent && st[n.originalEvent.pointerType.toUpperCase()]) e.touchDeltaX = n.originalEvent.clientX - e.touchStartX; if (e._handleSwipe(), "hover" === e._config.pause) { if (e.pause(), e.touchTimeout) clearTimeout(e.touchTimeout);
                                            e.touchTimeout = setTimeout((function(t) { return e.cycle(t) }), w + e._config.interval) } }; if (s["default"](this._element.querySelectorAll(tt)).on(N, (function(t) { return t.preventDefault() })), this._pointerEvent) s["default"](this._element).on(P, (function(t) { return n(t) })), s["default"](this._element).on(F, (function(t) { return i(t) })), this._element.classList.add(X);
                                else s["default"](this._element).on(L, (function(t) { return n(t) })), s["default"](this._element).on(B, (function(t) { return move(t) })), s["default"](this._element).on(O, (function(t) { return i(t) })) } }, e._keydown = function t(e) { if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                case g:
                                    e.preventDefault(), this.prev(); break;
                                case y:
                                    e.preventDefault(), this.next(); break } }, e._getItemIndex = function t(e) { return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(J)) : [], this._items.indexOf(e) }, e._getItemByDirection = function t(e, n) { var i = e === x,
                                o = e === S,
                                a = this._getItemIndex(n),
                                s = this._items.length - 1,
                                u; if ((o && 0 === a || i && a === s) && !this._config.wrap) return n; var l, f = (a + (e === S ? -1 : 1)) % this._items.length; return -1 === f ? this._items[this._items.length - 1] : this._items[f] }, e._triggerSlideEvent = function t(e, n) { var i = this._getItemIndex(e),
                                o = this._getItemIndex(this._element.querySelector(K)),
                                a = s["default"].Event(T, { relatedTarget: e, direction: n, from: o, to: i }); return s["default"](this._element).trigger(a), a }, e._setActiveIndicatorElement = function t(e) { if (this._indicatorsElement) { var n = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                                s["default"](n).removeClass($); var i = this._indicatorsElement.children[this._getItemIndex(e)]; if (i) s["default"](i).addClass($) } }, e._updateInterval = function t() { var e = this._activeElement || this._element.querySelector(K); if (e) { var n = parseInt(e.getAttribute("data-interval"), 10); if (n) this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = n;
                                else this._config.interval = this._config.defaultInterval || this._config.interval } }, e._slide = function e(n, i) { var o = this,
                                a = this._element.querySelector(K),
                                l = this._getItemIndex(a),
                                f = i || a && this._getItemByDirection(n, a),
                                c = this._getItemIndex(f),
                                h = Boolean(this._interval),
                                p, m, v, g; if (n === x) p = W, m = j, v = A;
                            else p = Y, m = G, v = _; if (f && s["default"](f).hasClass($)) return this._isSliding = false, void 0; if (!this._triggerSlideEvent(f, v).isDefaultPrevented())
                                if (a && f) { if (this._isSliding = true, h) this.pause();
                                    this._setActiveIndicatorElement(f), this._activeElement = f; var y = s["default"].Event(I, { relatedTarget: f, direction: v, from: l, to: c }),
                                        w = null; if (s["default"](this._element).hasClass(H)) { s["default"](f).addClass(m), u["default"].reflow(f), s["default"](a).addClass(p), s["default"](f).addClass(p); var b = u["default"].getTransitionDurationFromElement(a),
                                            C = this._element.className,
                                            S = /u-carousel-duration-(\d+)/.exec(C); if (S && 2 === S.length) b = parseFloat(S[1]) || 0; if (h) { var T = parseFloat(t(this._element).attr("data-interval")) + b; if (Number.isFinite(T) && T > 0) w = this._config.interval, this._config.interval = T }
                                        s["default"](a).one(u["default"].TRANSITION_END, (function() { s["default"](f).removeClass(p + " " + m).addClass($), s["default"](a).removeClass($ + " " + m + " " + p), o._isSliding = false, setTimeout((function() { return s["default"](o._element).trigger(y) }), 0) })).emulateTransitionEnd(b) } else s["default"](a).removeClass($), s["default"](f).addClass($), this._isSliding = false, s["default"](this._element).trigger(y); if (h) this.cycle(); if (w) this._config.interval = w } }, Carousel._jQueryInterface = function t(e) { return this.each((function() { var data = s["default"](this).data(c),
                                    t = a({}, Default, s["default"](this).data()); if ("object" == typeof e) t = a({}, t, e); var n = "string" == typeof e ? e : t.uSlide; if (!data) { var o; if (data = new Carousel(this, t), s["default"](this).data(c, data), !s["default"](this).data(h)) s["default"](this).data(h, new i(this, t)) } if ("number" == typeof e) data.to(e);
                                else if ("string" == typeof n) { if (void 0 === data[n]) throw new TypeError('No method named "' + n + '"');
                                    data[n]() } else if (t.interval && t.uRide) data.pause(), data.cycle() })) }, Carousel._dataApiClickHandler = function t(e) { var selector = u["default"].getSelectorFromElement(this); if (selector) { var n = s["default"](selector)[0]; if (n && s["default"](n).hasClass(H)) { var i = a({}, s["default"](n).data(), s["default"](this).data()),
                                        o = this.getAttribute("data-u-slide-to"); if (o) i.interval = false; if (Carousel._jQueryInterface.call(s["default"](n), i), o) s["default"](n).data(c).to(o);
                                    e.preventDefault() } } }, o(Carousel, null, [{ key: "VERSION", get: function t() { return f } }, { key: "Default", get: function t() { return Default } }]), Carousel }(); return s["default"](document).on(U, ot, Carousel._dataApiClickHandler), s["default"](window).on(z, (function() { for (var t = [].slice.call(document.querySelectorAll(at)), e = 0, n = t.length; e < n; e++) { var i = s["default"](t[e]);
                        Carousel._jQueryInterface.call(i, i.data()) } })), s["default"].fn[l] = Carousel._jQueryInterface, s["default"].fn[l].Constructor = Carousel, s["default"].fn[l].noConflict = function() { return s["default"].fn[l] = v, Carousel._jQueryInterface }, Carousel }($, bootstrap.Util), window.bootstrap = bootstrap },
        401: function(t, e, n) { "use strict";

            function i(t) { if (this.$element = o(t), this.carousel = this.$element.data("bs.u-carousel"), this.options = o.extend({}, i.DEFAULTS, this.carousel._config), this.startX = null, this.startY = null, this.startTime = null, this.cycling = null, this.$active = null, this.$items = null, this.$next = null, this.$prev = null, this.dx = null, this.sliding = false, !this.$element.hasClass("u-form")) this.$element.on("touchstart.bs.u-carousel", this.touchstart.bind(this)).on("touchmove.bs.u-carousel", this.touchmove.bind(this)).on("touchend.bs.u-carousel", this.touchend.bind(this)).on("u-slide.bs.u-carousel", this.startSliding.bind(this)).on("slid.bs.u-carousel", this.stopSliding.bind(this)) }
            t.exports = i; var o = n(9);
            i.DEFAULTS = { swipe: 50 }, i.prototype.startSliding = function() { this.sliding = true }, i.prototype.stopSliding = function() { this.sliding = false }, i.prototype.touchstart = function(t) { if (!this.sliding && this.options.swipe) { var e = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
                    this.dx = 0, this.startX = e.pageX, this.startY = e.pageY, this.cycling = null, this.width = this.$element.width(), this.startTime = t.timeStamp } }, i.prototype.touchmove = function(t) { if (!this.sliding && this.options.swipe && this.startTime) { var e = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                        n = e.pageX - this.startX,
                        i = e.pageY - this.startY; if (!(Math.abs(n) < Math.abs(i))) { if (null === this.cycling)
                            if (this.cycling = !!this.carousel.interval, this.cycling) this.carousel.pause();
                        t.preventDefault(), this.dx = n / (this.width || 1) * 100, this.swipe(this.dx) } } }, i.prototype.touchend = function(t) { if (!this.sliding && this.options.swipe && this.startTime)
                    if (this.$active) { var all = o().add(this.$active).add(this.$prev).add(this.$next).carousel_transition(true),
                            e = (t.timeStamp - this.startTime) / 1e3,
                            n = Math.abs(this.dx / e); if (this.dx > 40 || this.dx > 0 && n > this.options.swipe) this.carousel.prev();
                        else if (this.dx < -40 || this.dx < 0 && n > this.options.swipe) this.carousel.next();
                        else this.$active.one(o.support.transition.end, (function() { all.removeClass("u-carousel-item-prev u-carousel-item-next") })).emulateTransitionEnd(1e3 * this.$active.css("transition-duration").slice(0, -1)); if (all.css("transform", ""), this.cycling) this.carousel.cycle();
                        this.$active = null, this.startTime = null } }, i.prototype.swipe = function(t) { var e = this.$active || this.getActive(); if (t < 0) { if (this.$prev.css("transform", "translate3d(0,0,0)").removeClass("u-carousel-item-prev").carousel_transition(true), !this.$next.length || this.$next.hasClass("u-active")) return;
                    this.$next.carousel_transition(false).addClass("u-carousel-item-next").css("transform", "translate3d(" + (t + 100) + "%,0,0)") } else { if (this.$next.css("transform", "").removeClass("u-carousel-item-next").carousel_transition(true), !this.$prev.length || this.$prev.hasClass("u-active")) return;
                    this.$prev.carousel_transition(false).addClass("u-carousel-item-prev").css("transform", "translate3d(" + (t - 100) + "%,0,0)") }
                e.carousel_transition(false).css("transform", "translate3d(" + t + "%, 0, 0)") }, i.prototype.getActive = function() { if (this.$active = this.$element.find(".u-carousel-item.u-active"), this.$items = this.$active.parent().children(), this.$next = this.$active.next(), !this.$next.length && this.options.wrap) this.$next = this.$items.first(); if (this.$prev = this.$active.prev(), !this.$prev.length && this.options.wrap) this.$prev = this.$items.last(); return this.$active }, o.fn.carousel_transition = function(t) { return t = t ? "" : "none", this.each((function() { o(this).css("transition", t) })) } },
        402: function(t, e, n) { "use strict";

            function i(t) { var data = t.attr("data-map"); if (data) { data = Utility.decodeJsonAttribute(data); var e = t.contents()[0],
                        n = e.createElement("script");
                    n.type = "text/javascript", n.innerHTML = "var data = " + JSON.stringify(data) + ";\n;" + "var mapIframeApiReady = function () {\n" + '   parent.mapIframeApiReady(google, document.getElementById("map"), data);\n' + "}"; var i = e.createElement("script"); if (i.type = "text/javascript", i.src = "//maps.google.com/maps/api/js?key=" + data.apiKey + "&callback=mapIframeApiReady", data.lang) i.src += "&language=" + data.lang;
                    e.head.appendChild(n), e.head.appendChild(i), $(e.body).append("<style>" + "   #map { width: 100%; height: 100%; }" + "   body { margin: 0; }" + "   .marker-internal { width: 180px; font-weight: normal; }" + "   .marker-internal a { text-decoration: none; color:#427fed; }" + "   .marker-internal strong { font-weight: 500; font-size: 14px; }" + "</style>" + '<div id="map"></div>') } }

            function o(t) { var e = ""; if (t.title) e += "<strong>" + t.title + "</strong>"; if (t.description) e += "<div>" + t.description.replace(/\n/g, "<br>") + "</div>"; if (t.linkUrl) { var url, n;
                    e += '<a href="' + t.linkUrl + '" target="_blank"><span>' + (t.linkCaption || t.linkUrl) + "</span></a>" } if (e) e = '<div class="marker-internal">' + e + "</div>"; return e } var MapsLoader = {};
            window.loadMapsContent = function() { $("iframe.map-content").each((function() { var t = $(this); if (0 === t.contents().find("#map").length) i(t) })) }, window.mapIframeApiReady = function(google, t, data) { data.markers = data.markers || []; var e = data.zoom; if (!e && 1 === data.markers.length) e = data.markers[0].zoom; if (!e) e = 14; if (e = parseInt(e, 10), data.map = data.map || {}, data.map.zoom = e, data.map.mapTypeId = "satellite" === data.typeId ? google.maps.MapTypeId.HYBRID : google.maps.MapTypeId.ROADMAP, data.markers.length) data.map.center = data.markers[0].position; var map = new google.maps.Map(t, data.map || {}),
                    n = new google.maps.LatLngBounds; if (data.markers.forEach((function(t) { t.map = map; var e = new google.maps.Marker(t);
                        n.extend(new google.maps.LatLng(t.position.lat, t.position.lng)); var i = o(t); if (i) { var a = new google.maps.InfoWindow({ content: $("<textarea/>").html(i).text() });
                            e.addListener("click", (function() { a.open(e.get("map"), e) })) } })), data.markers.length > 1 && e && !isNaN(e)) { map.fitBounds(n); var i = google.maps.event.addListener(map, "zoom_changed", (function() { if (google.maps.event.removeListener(i), map.getZoom() > e || 0 === map.getZoom()) map.setZoom(e) })) } }, window.MapsLoader = MapsLoader },
        403: function(t, e, n) { "use strict"; var i = n(187).instance();
            i.registerAnimation(n(404)), i.registerAnimation(n(407)), i.registerAnimation(n(188)) },
        404: function(t, e, n) { "use strict";

            function i(t, e) { this.info = t, this.hint = e, this.timeoutId = null } var o = n(405);
            t.exports = i, i.isMatch = function(t) { return t && "counter" === t.name }, i.create = function(t, e) { return new i(t, e) }, i.prototype.init = function init() { var t = this.info.element; if (!this.countUp && t) { var e = /(\D*)(\d+(?:([.,])(\d+))?)(.*)/.exec(t.innerText),
                        n = 1,
                        i = 2,
                        a = 3,
                        s = 4,
                        u = 5; if (null !== e && e[i] && !(e[i].length > 15)) { var l = e[i]; if ("," === e[a]) l = l.replace(",", "."); if ((l = Number(l)) && !isNaN(l) && isFinite(l)) { if (this.hint) this.hint.hintBrowser(this.info); var f = 0; if (e[s]) f = e[s].length; var c = { element: t, prefix: e[n], decimal: e[a], decimals: f, suffix: e[u], startVal: 0, endVal: l, duration: this.info.durationRaw, cycle: this.info.animationCycle, separator: "" };
                            this.countUp = new o(c) } } } }, i.prototype.start = function t() { if (this.countUp) { if (this.countUp.reset(), this._timeoutId) clearTimeout(this._timeoutId); var e = function() { this._timeoutId = null, this.countUp.start() }.bind(this),
                        n = this.info.delay; if (isNaN(n)) n = 0; if (!n) return e(), void 0;
                    this._timeoutId = setTimeout(e, n) } }, i.prototype.startOut = function t() { if (this._timeoutId) clearTimeout(this._timeoutId), this._timeoutId = null }, i.prototype.reset = function t() { if (this.countUp) this.countUp.reset() }, i.prototype.isInOutAnimation = function t() { return true }, i.prototype.needOutAnimation = function t() { return false }, i.prototype.clear = function t() { if (this.hint) this.hint.removeHint(this.info) }, i.prototype.getTime = function t() { if (!this.info) return 0; var e = this.info.duration,
                    n = this.info.delay; if (isNaN(n)) n = 0; return n + e }, i.prototype.getOutTime = function t() { return 0 } },
        405: function(t, e, n) { "use strict";

            function i(t) { this.initialize(t) }

            function o(countUp, t, e) { if (countUp) { if (t = Number(t), isNaN(t) || !isFinite(t) || 0 === t) t = 1; var n = 0,
                        i = function() { if (++n < t) countUp.reset(), countUp.start(i);
                            else if ("function" == typeof e) e() };
                    countUp.start(i) } }
            n(406), i.prototype.initialize = function t(e) { if (!this.countUp && e.element) { var n = e.startVal,
                        i = e.endVal,
                        o = e.decimals,
                        a = e.duration; if ((n || 0 == +n) && (i || 0 == +i)) { if (a)
                            if (a = Number(a) / 1e3, isNaN(a)) a = void 0;
                        this.cycle = e.cycle, this.countUp = new CountUp(e.element, n, i, o, a, e), this.started = false } } }, i.prototype.reset = function t() { if (this.started = false, this.countUp) this.countUp.reset() }, i.prototype.start = function t() { if (this.countUp && !this.started) this.started = true, o(this.countUp, this.cycle) }, t.exports = i },
        406: function(t, e) { var e = void 0,
                t = void 0;
            (function() {! function(n, factory) { if ("function" == typeof define && define.amd) define(factory);
                    else if ("object" == typeof e) t.exports = factory(require, e, t);
                    else n.CountUp = factory() }(this, (function(t, e, n) { var CountUp; return function(t, e, n, i, o, a) {
                        function s(t) { var e, n, i, o, a, s; if (t = t.toFixed(f.decimals), n = (e = (t += "").split("."))[0], i = e.length > 1 ? f.options.decimal + e[1] : "", f.options.useGrouping) { for (o = "", a = 0, s = n.length; a < s; ++a) { if (0 !== a && a % 3 == 0) o = f.options.separator + o;
                                    o = n[s - a - 1] + o }
                                n = o } if (f.options.numerals.length) n = n.replace(/[0-9]/g, (function(t) { return f.options.numerals[+t] })), i = i.replace(/[0-9]/g, (function(t) { return f.options.numerals[+t] })); return f.options.prefix + n + i + f.options.suffix }

                        function u(t, e, n, d) { return n * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + e }

                        function l(t) { return "number" == typeof t && !isNaN(t) } var f = this; if (f.version = function() { return "1.9.2" }, f.options = { useEasing: true, useGrouping: true, separator: ",", decimal: ".", easingFn: u, formattingFn: s, prefix: "", suffix: "", numerals: [] }, a && "object" == typeof a)
                            for (var c in f.options)
                                if (a.hasOwnProperty(c) && null !== a[c]) f.options[c] = a[c];
                        if ("" === f.options.separator) f.options.useGrouping = false;
                        else f.options.separator = "" + f.options.separator; for (var h = 0, p = ["webkit", "moz", "ms", "o"], m = 0; m < p.length && !window.requestAnimationFrame; ++m) window.requestAnimationFrame = window[p[m] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[p[m] + "CancelAnimationFrame"] || window[p[m] + "CancelRequestAnimationFrame"]; if (!window.requestAnimationFrame) window.requestAnimationFrame = function(t, e) { var n = (new Date).getTime(),
                                i = Math.max(0, 16 - (n - h)),
                                id = window.setTimeout((function() { t(n + i) }), i); return h = n + i, id }; if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) { clearTimeout(id) }; if (f.initialize = function() { if (f.initialized) return true; if (f.error = "", f.d = "string" == typeof t ? document.getElementById(t) : t, !f.d) return f.error = "[CountUp] target is null or undefined", false; if (f.startVal = Number(e), f.endVal = Number(n), l(f.startVal) && l(f.endVal)) return f.decimals = Math.max(0, i || 0), f.dec = Math.pow(10, f.decimals), f.duration = 1e3 * Number(o) || 2e3, f.countDown = f.startVal > f.endVal, f.frameVal = f.startVal, f.initialized = true, true;
                                else return f.error = "[CountUp] startVal (" + e + ") or endVal (" + n + ") is not a number", false }, f.printValue = function(t) { var e = f.options.formattingFn(t); if ("INPUT" === f.d.tagName) this.d.value = e;
                                else if ("text" === f.d.tagName || "tspan" === f.d.tagName) this.d.textContent = e;
                                else this.d.innerHTML = e }, f.count = function(t) { if (!f.startTime) f.startTime = t;
                                f.timestamp = t; var e = t - f.startTime; if (f.remaining = f.duration - e, f.options.useEasing)
                                    if (f.countDown) f.frameVal = f.startVal - f.options.easingFn(e, 0, f.startVal - f.endVal, f.duration);
                                    else f.frameVal = f.options.easingFn(e, f.startVal, f.endVal - f.startVal, f.duration);
                                else if (f.countDown) f.frameVal = f.startVal - (f.startVal - f.endVal) * (e / f.duration);
                                else f.frameVal = f.startVal + (f.endVal - f.startVal) * (e / f.duration); if (f.countDown) f.frameVal = f.frameVal < f.endVal ? f.endVal : f.frameVal;
                                else f.frameVal = f.frameVal > f.endVal ? f.endVal : f.frameVal; if (f.frameVal = Math.round(f.frameVal * f.dec) / f.dec, f.printValue(f.frameVal), e < f.duration) f.rAF = requestAnimationFrame(f.count);
                                else if (f.callback) f.callback() }, f.start = function(t) { if (f.initialize()) f.callback = t, f.rAF = requestAnimationFrame(f.count) }, f.pauseResume = function() { if (!f.paused) f.paused = true, cancelAnimationFrame(f.rAF);
                                else f.paused = false, delete f.startTime, f.duration = f.remaining, f.startVal = f.frameVal, requestAnimationFrame(f.count) }, f.reset = function() { if (f.paused = false, delete f.startTime, f.initialized = false, f.initialize()) cancelAnimationFrame(f.rAF), f.printValue(f.startVal) }, f.update = function(t) { if (f.initialize()) { if (!l(t = Number(t))) return f.error = "[CountUp] update() - new endVal is not a number: " + t, void 0; if (f.error = "", t !== f.frameVal) cancelAnimationFrame(f.rAF), f.paused = false, delete f.startTime, f.startVal = f.frameVal, f.endVal = t, f.countDown = f.startVal > f.endVal, f.rAF = requestAnimationFrame(f.count) } }, f.initialize()) f.printValue(f.startVal) } })) }).call(window) },
        407: function(t, e, n) { "use strict";

            function i() { o.apply(this, arguments), this.backstageClass = ["backstage", "u-backstage-hidden"] } var o = n(188);
            Object.assign(i.prototype, o.prototype), t.exports = i, i.isMatch = function(t) { var e = (t && t.name || "").toLowerCase(); return ["fadein", "flipin", "bouncein", "jackinthebox", "lightspeedin", "customanimationin"].indexOf(e) > -1 }, i.create = function(t, e) { return new i(t, e) } },
        408: function(t, e, n) { "use strict";
            (function(t, e) {! function(t, n) {
                    function i(t) { if ("function" != typeof t) t = new Function("" + t); for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1]; var i = { callback: t, args: e }; return v[m] = i, w(m), m++ }

                    function o(t) { delete v[t] }

                    function a(t) { var e = t.callback,
                            i = t.args; switch (i.length) {
                            case 0:
                                e(); break;
                            case 1:
                                e(i[0]); break;
                            case 2:
                                e(i[0], i[1]); break;
                            case 3:
                                e(i[0], i[1], i[2]); break;
                            default:
                                e.apply(n, i); break } }

                    function s(t) { if (g) setTimeout(s, 0, t);
                        else { var e = v[t]; if (e) { g = true; try { a(e) } finally { o(t), g = false } } } }

                    function u() { w = function(t) { e.nextTick((function() { s(t) })) } }

                    function l() { if (t.postMessage && !t.importScripts) { var e = true,
                                n = t.onmessage; return t.onmessage = function() { e = false }, t.postMessage("", "*"), t.onmessage = n, e } }

                    function f() { var e = "setImmediate$" + Math.random() + "$",
                            n = function(n) { if (n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e)) s(+n.data.slice(e.length)) }; if (t.addEventListener) t.addEventListener("message", n, false);
                        else t.attachEvent("onmessage", n);
                        w = function(n) { t.postMessage(e + n, "*") } }

                    function c() { var t = new MessageChannel;
                        t.port1.onmessage = function(t) { var e;
                            s(t.data) }, w = function(e) { t.port2.postMessage(e) } }

                    function h() { var t = y.documentElement;
                        w = function(e) { var n = y.createElement("script");
                            n.onreadystatechange = function() { s(e), n.onreadystatechange = null, t.removeChild(n), n = null }, t.appendChild(n) } }

                    function p() { w = function(t) { setTimeout(s, 0, t) } } if (!t.setImmediate) { var m = 1,
                            v = {},
                            g = false,
                            y = t.document,
                            w, b = Object.getPrototypeOf && Object.getPrototypeOf(t); if (b = b && b.setTimeout ? b : t, "[object process]" === {}.toString.call(t.process)) u();
                        else if (l()) f();
                        else if (t.MessageChannel) c();
                        else if (y && "onreadystatechange" in y.createElement("script")) h();
                        else p();
                        b.setImmediate = i, b.clearImmediate = o } }("undefined" == typeof self ? void 0 === t ? this : t : self) }).call(e, n(45), n(89)) },
        409: function(t, e, n) { "use strict";

            function i(t) { var e = t.length; if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var n = t.indexOf("="),
                    i; if (-1 === n) n = e; return [n, n === e ? 0 : 4 - n % 4] }

            function o(t) { var e = i(t),
                    n = e[0],
                    o = e[1]; return 3 * (n + o) / 4 - o }

            function a(t, e, n) { return 3 * (e + n) / 4 - n }

            function s(t) { var e, n = i(t),
                    o = n[0],
                    s = n[1],
                    u = new p(a(t, o, s)),
                    l = 0,
                    f = s > 0 ? o - 4 : o,
                    c; for (c = 0; c < f; c += 4) e = h[t.charCodeAt(c)] << 18 | h[t.charCodeAt(c + 1)] << 12 | h[t.charCodeAt(c + 2)] << 6 | h[t.charCodeAt(c + 3)], u[l++] = e >> 16 & 255, u[l++] = e >> 8 & 255, u[l++] = 255 & e; if (2 === s) e = h[t.charCodeAt(c)] << 2 | h[t.charCodeAt(c + 1)] >> 4, u[l++] = 255 & e; if (1 === s) e = h[t.charCodeAt(c)] << 10 | h[t.charCodeAt(c + 1)] << 4 | h[t.charCodeAt(c + 2)] >> 2, u[l++] = e >> 8 & 255, u[l++] = 255 & e; return u }

            function u(t) { return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t] }

            function l(t, e, n) { for (var i, o = [], a = e; a < n; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), o.push(u(i)); return o.join("") }

            function f(t) { for (var e, n = t.length, i = n % 3, o = [], a = 16383, s = 0, u = n - i; s < u; s += a) o.push(l(t, s, s + a > u ? u : s + a)); if (1 === i) e = t[n - 1], o.push(c[e >> 2] + c[e << 4 & 63] + "==");
                else if (2 === i) e = (t[n - 2] << 8) + t[n - 1], o.push(c[e >> 10] + c[e >> 4 & 63] + c[e << 2 & 63] + "="); return o.join("") }
            e.byteLength = o, e.toByteArray = s, e.fromByteArray = f; for (var c = [], h = [], p = "undefined" != typeof Uint8Array ? Uint8Array : Array, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", v = 0, g = m.length; v < g; ++v) c[v] = m[v], h[m.charCodeAt(v)] = v;
            h["-".charCodeAt(0)] = 62, h["_".charCodeAt(0)] = 63 },
        410: function(t, e, n) { "use strict";
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            e.read = function(t, e, n, i, o) { var a, s, u = 8 * o - i - 1,
                    l = (1 << u) - 1,
                    f = l >> 1,
                    c = -7,
                    h = n ? o - 1 : 0,
                    d = n ? -1 : 1,
                    p = t[e + h]; for (h += d, a = p & (1 << -c) - 1, p >>= -c, c += u; c > 0; a = 256 * a + t[e + h], h += d, c -= 8); for (s = a & (1 << -c) - 1, a >>= -c, c += i; c > 0; s = 256 * s + t[e + h], h += d, c -= 8); if (0 === a) a = 1 - f;
                else if (a === l) return s ? NaN : (p ? -1 : 1) * (1 / 0);
                else s += Math.pow(2, i), a -= f; return (p ? -1 : 1) * s * Math.pow(2, a - i) }, e.write = function(t, e, n, i, o, a) { var s, u, l, f = 8 * a - o - 1,
                    c = (1 << f) - 1,
                    h = c >> 1,
                    p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    m = i ? 0 : a - 1,
                    d = i ? 1 : -1,
                    v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0; if (e = Math.abs(e), isNaN(e) || e === 1 / 0) u = isNaN(e) ? 1 : 0, s = c;
                else { if (s = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -s)) < 1) s--, l *= 2; if (s + h >= 1) e += p / l;
                    else e += p * Math.pow(2, 1 - h); if (e * l >= 2) s++, l /= 2; if (s + h >= c) u = 0, s = c;
                    else if (s + h >= 1) u = (e * l - 1) * Math.pow(2, o), s += h;
                    else u = e * Math.pow(2, h - 1) * Math.pow(2, o), s = 0 } for (; o >= 8; t[n + m] = 255 & u, m += d, u /= 256, o -= 8); for (s = s << o | u, f += o; f > 0; t[n + m] = 255 & s, m += d, s /= 256, f -= 8);
                t[n + m - d] |= 128 * v } },
        411: function(t, e, n) { "use strict"; var i = {}.toString;
            t.exports = Array.isArray || function(t) { return "[object Array]" == i.call(t) } },
        412: function(t, e, n) { "use strict";
            (function(e) {
                function n(input, t) { var e = 0,
                        base = t.length,
                        n = t.charAt(0),
                        i = [0]; for (e = 0; e < input.length(); ++e) { for (var o = 0, a = input.at(e); o < i.length; ++o) a += i[o] << 8, i[o] = a % base, a = a / base | 0; for (; a > 0;) i.push(a % base), a = a / base | 0 } var s = ""; for (e = 0; 0 === input.at(e) && e < input.length() - 1; ++e) s += n; for (e = i.length - 1; e >= 0; --e) s += t[i[e]]; return s } var i = {};
                t.exports = i; var o = {};
                i.encode = function(input, t, e) { if ("string" != typeof t) throw new TypeError('"alphabet" must be a string.'); if (void 0 !== e && "number" != typeof e) throw new TypeError('"maxline" must be a number.'); var i = ""; if (!(input instanceof Uint8Array)) i = n(input, t);
                    else { var o = 0,
                            base = t.length,
                            a = t.charAt(0),
                            s = [0]; for (o = 0; o < input.length; ++o) { for (var u = 0, l = input[o]; u < s.length; ++u) l += s[u] << 8, s[u] = l % base, l = l / base | 0; for (; l > 0;) s.push(l % base), l = l / base | 0 } for (o = 0; 0 === input[o] && o < input.length - 1; ++o) i += a; for (o = s.length - 1; o >= 0; --o) i += t[s[o]] } if (e) { var f = new RegExp(".{1," + e + "}", "g");
                        i = i.match(f).join("\r\n") } return i }, i.decode = function(input, t) { if ("string" != typeof input) throw new TypeError('"input" must be a string.'); if ("string" != typeof t) throw new TypeError('"alphabet" must be a string.'); var table = o[t]; if (!table) { table = o[t] = []; for (var n = 0; n < t.length; ++n) table[t.charCodeAt(n)] = n }
                    input = input.replace(/\s/g, ""); for (var base = t.length, i = t.charAt(0), a = [0], n = 0; n < input.length; n++) { var s = table[input.charCodeAt(n)]; if (void 0 === s) return; for (var u = 0, l = s; u < a.length; ++u) l += a[u] * base, a[u] = 255 & l, l >>= 8; for (; l > 0;) a.push(255 & l), l >>= 8 } for (var f = 0; input[f] === i && f < input.length - 1; ++f) a.push(0); if (void 0 !== e) return e.from(a.reverse());
                    else return new Uint8Array(a.reverse()) } }).call(e, n(46).Buffer) },
        413: function(t, e, n) { "use strict";

            function i(t, e, n) { var i = t.find(".u-form-progress-step");
                i.removeClass("active done"), o(i.find(".u-form-progress-icon"), "default"), o(i.find(".u-form-progress-icon"), "step"); var a = t.find(".u-form-progress-step").eq(n);
                a.addClass("active"); var s = a.prevAll(".u-form-progress-step");
                s.addClass("done"), o(s.find(".u-form-progress-icon"), "done") }

            function o(icon, type) { type = type || "default", icon.each((function() { var t = $(this),
                        e = t.attr("data-step-icon-" + type); if (e) t.html(e) })) }

            function a(t, e, n) { var i = t.find(".u-form-progress-bar"),
                    o = "calc((100% - var(--step-icon-size)) / " + (e.length - 1) + " * " + n + ")";
                i.css("width", o) } var FormProgress;
            t.exports.update = function(form, t) { if (form.length) { var e = form.find(".u-form-progress"),
                        n = form.find(".u-carousel-inner").children(); if (void 0 === t) t = n.filter(".u-active, .active").index();
                    a(e, n, t), i(e, n, t) } } },
        414: function(t, e, n) { "use strict"; var i;
            t.exports.update = function(form, t) { var e = form.find(".u-slide"); if (void 0 === t) t = e.filter(".u-active, .active").index(); var n = form.find(".u-btn-submit, .u-btn-step"),
                    i = n.filter(".u-btn-submit"),
                    o = n.filter(".u-btn-step-next"),
                    a = n.filter(".u-btn-step-prev"); if (n.show(), 0 === t) a.hide(); if (t === e.length - 1) o.hide(), i.show(); if (t < e.length - 1) o.show(), i.hide() } },
        45: function(t, e, n) { "use strict"; var i;
            i = function() { return this }(); try { i = i || Function("return this")() || (1, eval)("this") } catch (t) { if ("object" == typeof window) i = window }
            t.exports = i },
        46: function(t, e, n) { "use strict";
            (function(t) {
                function i() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (t) { return false } }

                function o() { return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

                function a(t, length) { if (o() < length) throw new RangeError("Invalid typed array length"); if (s.TYPED_ARRAY_SUPPORT)(t = new Uint8Array(length)).__proto__ = s.prototype;
                    else { if (null === t) t = new s(length);
                        t.length = length } return t }

                function s(t, e, length) { if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(t, e, length); if ("number" == typeof t) { if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string"); return c(this, t) } return u(this, t, e, length) }

                function u(t, e, n, length) { if ("number" == typeof e) throw new TypeError('"value" argument must not be a number'); if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return m(t, e, n, length); if ("string" == typeof e) return h(t, e, n);
                    else return v(t, e) }

                function l(size) { if ("number" != typeof size) throw new TypeError('"size" argument must be a number');
                    else if (size < 0) throw new RangeError('"size" argument must not be negative') }

                function f(t, size, e, n) { if (l(size), size <= 0) return a(t, size); if (void 0 !== e) return "string" == typeof n ? a(t, size).fill(e, n) : a(t, size).fill(e);
                    else return a(t, size) }

                function c(t, size) { if (l(size), t = a(t, size < 0 ? 0 : 0 | g(size)), !s.TYPED_ARRAY_SUPPORT)
                        for (var e = 0; e < size; ++e) t[e] = 0; return t }

                function h(t, e, n) { if ("string" != typeof n || "" === n) n = "utf8"; if (!s.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding'); var length = 0 | w(e, n),
                        i = (t = a(t, length)).write(e, n); if (i !== length) t = t.slice(0, i); return t }

                function p(t, e) { var length = e.length < 0 ? 0 : 0 | g(e.length);
                    t = a(t, length); for (var n = 0; n < length; n += 1) t[n] = 255 & e[n]; return t }

                function m(t, e, n, length) { if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (e.byteLength < n + (length || 0)) throw new RangeError("'length' is out of bounds"); if (void 0 === n && void 0 === length) e = new Uint8Array(e);
                    else if (void 0 === length) e = new Uint8Array(e, n);
                    else e = new Uint8Array(e, n, length); if (s.TYPED_ARRAY_SUPPORT)(t = e).__proto__ = s.prototype;
                    else t = p(t, e); return t }

                function v(t, e) { if (s.isBuffer(e)) { var n = 0 | g(e.length); if (0 === (t = a(t, n)).length) return t;
                        else return e.copy(t, 0, 0, n), t } if (e) { if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e)
                            if ("number" != typeof e.length || rt(e.length)) return a(t, 0);
                            else return p(t, e);
                        if ("Buffer" === e.type && st(e.data)) return p(t, e.data) } throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }

                function g(length) { if (length >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o().toString(16) + " bytes"); return 0 | length }

                function y(length) { if (+length != length) length = 0; return s.alloc(+length) }

                function w(t, e) { if (s.isBuffer(t)) return t.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength; if ("string" != typeof t) t = "" + t; var n = t.length; if (0 === n) return 0; for (var i = false;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return Z(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return tt(t).length;
                        default:
                            if (i) return Z(t).length;
                            e = ("" + e).toLowerCase(), i = true } }

                function b(t, e, n) { var i = false; if (void 0 === e || e < 0) e = 0; if (e > this.length) return ""; if (void 0 === n || n > this.length) n = this.length; if (n <= 0) return ""; if ((n >>>= 0) <= (e >>>= 0)) return ""; if (!t) t = "utf8"; for (; true;) switch (t) {
                        case "hex":
                            return F(this, e, n);
                        case "utf8":
                        case "utf-8":
                            return L(this, e, n);
                        case "ascii":
                            return O(this, e, n);
                        case "latin1":
                        case "binary":
                            return P(this, e, n);
                        case "base64":
                            return M(this, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return N(this, e, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), i = true } }

                function C(t, e, n) { var i = t[e];
                    t[e] = t[n], t[n] = i }

                function x(t, e, n, i, o) { if (0 === t.length) return -1; if ("string" == typeof n) i = n, n = 0;
                    else if (n > 2147483647) n = 2147483647;
                    else if (n < -2147483648) n = -2147483648; if (n = +n, isNaN(n)) n = o ? 0 : t.length - 1; if (n < 0) n = t.length + n; if (n >= t.length)
                        if (o) return -1;
                        else n = t.length - 1;
                    else if (n < 0)
                        if (o) n = 0;
                        else return -1;
                    if ("string" == typeof e) e = s.from(e, i); if (s.isBuffer(e))
                        if (0 === e.length) return -1;
                        else return S(t, e, n, i, o);
                    else if ("number" == typeof e) { if (e &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf)
                            if (o) return Uint8Array.prototype.indexOf.call(t, e, n);
                            else return Uint8Array.prototype.lastIndexOf.call(t, e, n);
                        return S(t, [e], n, i, o) } throw new TypeError("val must be string, number or Buffer") }

                function S(t, e, n, i, o) {
                    function a(t, e) { if (1 === s) return t[e];
                        else return t.readUInt16BE(e * s) } var s = 1,
                        u = t.length,
                        l = e.length,
                        f; if (void 0 !== i)
                        if ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i) { if (t.length < 2 || e.length < 2) return -1;
                            s = 2, u /= 2, l /= 2, n /= 2 }
                    if (o) { var c = -1; for (f = n; f < u; f++)
                            if (a(t, f) === a(e, -1 === c ? 0 : f - c)) { if (-1 === c) c = f; if (f - c + 1 === l) return c * s } else { if (-1 !== c) f -= f - c;
                                c = -1 } } else { if (n + l > u) n = u - l; for (f = n; f >= 0; f--) { for (var h = true, p = 0; p < l; p++)
                                if (a(t, f + p) !== a(e, p)) { h = false; break }
                            if (h) return f } } return -1 }

                function A(t, e, n, length) { n = Number(n) || 0; var i = t.length - n; if (!length) length = i;
                    else if ((length = Number(length)) > i) length = i; var o = e.length; if (o % 2 != 0) throw new TypeError("Invalid hex string"); if (length > o / 2) length = o / 2; for (var a = 0; a < length; ++a) { var s = parseInt(e.substr(2 * a, 2), 16); if (isNaN(s)) return a;
                        t[n + a] = s } return a }

                function _(t, e, n, length) { return nt(Z(e, t.length - n), t, n, length) }

                function T(t, e, n, length) { return nt(K(e), t, n, length) }

                function I(t, e, n, length) { return T(t, e, n, length) }

                function E(t, e, n, length) { return nt(tt(e), t, n, length) }

                function k(t, e, n, length) { return nt(J(e, t.length - n), t, n, length) }

                function M(t, e, n) { if (0 === e && n === t.length) return ot.fromByteArray(t);
                    else return ot.fromByteArray(t.slice(e, n)) }

                function L(t, e, n) { n = Math.min(t.length, n); for (var i = [], o = e; o < n;) { var a = t[o],
                            s = null,
                            u = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1; if (o + u <= n) { var l, f, c, h; switch (u) {
                                case 1:
                                    if (a < 128) s = a; break;
                                case 2:
                                    if (128 == (192 & (l = t[o + 1])))
                                        if ((h = (31 & a) << 6 | 63 & l) > 127) s = h;
                                    break;
                                case 3:
                                    if (l = t[o + 1], f = t[o + 2], 128 == (192 & l) && 128 == (192 & f))
                                        if ((h = (15 & a) << 12 | (63 & l) << 6 | 63 & f) > 2047 && (h < 55296 || h > 57343)) s = h;
                                    break;
                                case 4:
                                    if (l = t[o + 1], f = t[o + 2], c = t[o + 3], 128 == (192 & l) && 128 == (192 & f) && 128 == (192 & c))
                                        if ((h = (15 & a) << 18 | (63 & l) << 12 | (63 & f) << 6 | 63 & c) > 65535 && h < 1114112) s = h } } if (null === s) s = 65533, u = 1;
                        else if (s > 65535) s -= 65536, i.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s;
                        i.push(s), o += u } return B(i) }

                function B(t) { var e = t.length; if (e <= ut) return String.fromCharCode.apply(String, t); for (var n = "", i = 0; i < e;) n += String.fromCharCode.apply(String, t.slice(i, i += ut)); return n }

                function O(t, e, n) { var i = "";
                    n = Math.min(t.length, n); for (var o = e; o < n; ++o) i += String.fromCharCode(127 & t[o]); return i }

                function P(t, e, n) { var i = "";
                    n = Math.min(t.length, n); for (var o = e; o < n; ++o) i += String.fromCharCode(t[o]); return i }

                function F(t, e, n) { var i = t.length; if (!e || e < 0) e = 0; if (!n || n < 0 || n > i) n = i; for (var o = "", a = e; a < n; ++a) o += X(t[a]); return o }

                function N(t, e, n) { for (var i = t.slice(e, n), o = "", a = 0; a < i.length; a += 2) o += String.fromCharCode(i[a] + 256 * i[a + 1]); return o }

                function z(t, e, length) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + e > length) throw new RangeError("Trying to access beyond buffer length") }

                function U(t, e, n, i, o, a) { if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > o || e < a) throw new RangeError('"value" argument is out of bounds'); if (n + i > t.length) throw new RangeError("Index out of range") }

                function H(t, e, n, i) { if (e < 0) e = 65535 + e + 1; for (var o = 0, a = Math.min(t.length - n, 2); o < a; ++o) t[n + o] = (e & 255 << 8 * (i ? o : 1 - o)) >>> 8 * (i ? o : 1 - o) }

                function $(t, e, n, i) { if (e < 0) e = 4294967295 + e + 1; for (var o = 0, a = Math.min(t.length - n, 4); o < a; ++o) t[n + o] = e >>> 8 * (i ? o : 3 - o) & 255 }

                function V(t, e, n, i, o, a) { if (n + i > t.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

                function Y(t, e, n, i, o) { if (!o) V(t, e, n, 4, 34028234663852886e22, -34028234663852886e22); return at.write(t, e, n, i, 23, 4), n + 4 }

                function W(t, e, n, i, o) { if (!o) V(t, e, n, 8, 17976931348623157e292, -17976931348623157e292); return at.write(t, e, n, i, 52, 8), n + 8 }

                function j(t) { if ((t = G(t).replace(lt, "")).length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }

                function G(t) { if (t.trim) return t.trim();
                    else return t.replace(/^\s+|\s+$/g, "") }

                function X(t) { if (t < 16) return "0" + t.toString(16);
                    else return t.toString(16) }

                function Z(t, e) { var n;
                    e = e || 1 / 0; for (var length = t.length, i = null, o = [], a = 0; a < length; ++a) { if ((n = t.charCodeAt(a)) > 55295 && n < 57344) { if (!i) { if (n > 56319) { if ((e -= 3) > -1) o.push(239, 191, 189); continue } else if (a + 1 === length) { if ((e -= 3) > -1) o.push(239, 191, 189); continue }
                                i = n; continue } if (n < 56320) { if ((e -= 3) > -1) o.push(239, 191, 189);
                                i = n; continue }
                            n = (i - 55296 << 10 | n - 56320) + 65536 } else if (i)
                            if ((e -= 3) > -1) o.push(239, 191, 189);
                        if (i = null, n < 128) { if ((e -= 1) < 0) break;
                            o.push(n) } else if (n < 2048) { if ((e -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((e -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else if (n < 1114112) { if ((e -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } else throw new Error("Invalid code point") } return o }

                function K(t) { for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n)); return e }

                function J(t, e) { for (var n, i, o, a = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) i = (n = t.charCodeAt(s)) >> 8, o = n % 256, a.push(o), a.push(i); return a }

                function tt(t) { return ot.toByteArray(j(t)) }

                function nt(t, e, n, length) { for (var i = 0; i < length && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i]; return i }

                function rt(t) { return t != t } var ot = n(409),
                    at = n(410),
                    st = n(411); if (e.Buffer = s, e.SlowBuffer = y, e.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : i(), e.kMaxLength = o(), s.poolSize = 8192, s._augment = function(t) { return t.__proto__ = s.prototype, t }, s.from = function(t, e, length) { return u(null, t, e, length) }, s.TYPED_ARRAY_SUPPORT)
                    if (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s) Object.defineProperty(s, Symbol.species, { value: null, configurable: true });
                s.alloc = function(size, t, e) { return f(null, size, t, e) }, s.allocUnsafe = function(size) { return c(null, size) }, s.allocUnsafeSlow = function(size) { return c(null, size) }, s.isBuffer = function t(e) { return !!(null != e && e._isBuffer) }, s.compare = function compare(t, e) { if (!s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError("Arguments must be Buffers"); if (t === e) return 0; for (var n = t.length, i = e.length, o = 0, a = Math.min(n, i); o < a; ++o)
                        if (t[o] !== e[o]) { n = t[o], i = e[o]; break }
                    if (n < i) return -1; if (i < n) return 1;
                    else return 0 }, s.isEncoding = function t(e) { switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return true;
                        default:
                            return false } }, s.concat = function t(list, length) { if (!st(list)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === list.length) return s.alloc(0); var e; if (void 0 === length)
                        for (length = 0, e = 0; e < list.length; ++e) length += list[e].length; var n = s.allocUnsafe(length),
                        i = 0; for (e = 0; e < list.length; ++e) { var o = list[e]; if (!s.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                        o.copy(n, i), i += o.length } return n }, s.byteLength = w, s.prototype._isBuffer = true, s.prototype.swap16 = function t() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var n = 0; n < e; n += 2) C(this, n, n + 1); return this }, s.prototype.swap32 = function t() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var n = 0; n < e; n += 4) C(this, n, n + 3), C(this, n + 1, n + 2); return this }, s.prototype.swap64 = function t() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var n = 0; n < e; n += 8) C(this, n, n + 7), C(this, n + 1, n + 6), C(this, n + 2, n + 5), C(this, n + 3, n + 4); return this }, s.prototype.toString = function t() { var length = 0 | this.length; if (0 === length) return ""; if (0 === arguments.length) return L(this, 0, length);
                    else return b.apply(this, arguments) }, s.prototype.equals = function t(e) { if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); if (this === e) return true;
                    else return 0 === s.compare(this, e) }, s.prototype.inspect = function t() { var n = "",
                        i = e.INSPECT_MAX_BYTES; if (this.length > 0)
                        if (n = this.toString("hex", 0, i).match(/.{2}/g).join(" "), this.length > i) n += " ... ";
                    return "<Buffer " + n + ">" }, s.prototype.compare = function compare(t, e, n, i, o) { if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); if (void 0 === e) e = 0; if (void 0 === n) n = t ? t.length : 0; if (void 0 === i) i = 0; if (void 0 === o) o = this.length; if (e < 0 || n > t.length || i < 0 || o > this.length) throw new RangeError("out of range index"); if (i >= o && e >= n) return 0; if (i >= o) return -1; if (e >= n) return 1; if (this === t) return 0; for (var a = (o >>>= 0) - (i >>>= 0), u = (n >>>= 0) - (e >>>= 0), l = Math.min(a, u), f = this.slice(i, o), c = t.slice(e, n), h = 0; h < l; ++h)
                        if (f[h] !== c[h]) { a = f[h], u = c[h]; break }
                    if (a < u) return -1; if (u < a) return 1;
                    else return 0 }, s.prototype.includes = function t(e, n, i) { return -1 !== this.indexOf(e, n, i) }, s.prototype.indexOf = function t(e, n, i) { return x(this, e, n, i, true) }, s.prototype.lastIndexOf = function t(e, n, i) { return x(this, e, n, i, false) }, s.prototype.write = function t(e, n, length, i) { if (void 0 === n) i = "utf8", length = this.length, n = 0;
                    else if (void 0 === length && "string" == typeof n) i = n, length = this.length, n = 0;
                    else if (isFinite(n))
                        if (n |= 0, isFinite(length)) { if (length |= 0, void 0 === i) i = "utf8" } else i = length, length = void 0;
                    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported"); var o = this.length - n; if (void 0 === length || length > o) length = o; if (e.length > 0 && (length < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds"); if (!i) i = "utf8"; for (var a = false;;) switch (i) {
                        case "hex":
                            return A(this, e, n, length);
                        case "utf8":
                        case "utf-8":
                            return _(this, e, n, length);
                        case "ascii":
                            return T(this, e, n, length);
                        case "latin1":
                        case "binary":
                            return I(this, e, n, length);
                        case "base64":
                            return E(this, e, n, length);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return k(this, e, n, length);
                        default:
                            if (a) throw new TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), a = true } }, s.prototype.toJSON = function t() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; var ut = 4096;
                s.prototype.slice = function t(e, n) { var i = this.length,
                        o; if ((e = ~~e) < 0) { if ((e += i) < 0) e = 0 } else if (e > i) e = i; if ((n = void 0 === n ? i : ~~n) < 0) { if ((n += i) < 0) n = 0 } else if (n > i) n = i; if (n < e) n = e; if (s.TYPED_ARRAY_SUPPORT)(o = this.subarray(e, n)).__proto__ = s.prototype;
                    else { var a = n - e;
                        o = new s(a, void 0); for (var u = 0; u < a; ++u) o[u] = this[u + e] } return o }, s.prototype.readUIntLE = function t(e, n, i) { if (e |= 0, n |= 0, !i) z(e, n, this.length); for (var o = this[e], a = 1, s = 0; ++s < n && (a *= 256);) o += this[e + s] * a; return o }, s.prototype.readUIntBE = function t(e, n, i) { if (e |= 0, n |= 0, !i) z(e, n, this.length); for (var o = this[e + --n], a = 1; n > 0 && (a *= 256);) o += this[e + --n] * a; return o }, s.prototype.readUInt8 = function t(e, n) { if (!n) z(e, 1, this.length); return this[e] }, s.prototype.readUInt16LE = function t(e, n) { if (!n) z(e, 2, this.length); return this[e] | this[e + 1] << 8 }, s.prototype.readUInt16BE = function t(e, n) { if (!n) z(e, 2, this.length); return this[e] << 8 | this[e + 1] }, s.prototype.readUInt32LE = function t(e, n) { if (!n) z(e, 4, this.length); return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, s.prototype.readUInt32BE = function t(e, n) { if (!n) z(e, 4, this.length); return 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, s.prototype.readIntLE = function t(e, n, i) { if (e |= 0, n |= 0, !i) z(e, n, this.length); for (var o = this[e], a = 1, s = 0; ++s < n && (a *= 256);) o += this[e + s] * a; if (o >= (a *= 128)) o -= Math.pow(2, 8 * n); return o }, s.prototype.readIntBE = function t(e, n, i) { if (e |= 0, n |= 0, !i) z(e, n, this.length); for (var o = n, a = 1, s = this[e + --o]; o > 0 && (a *= 256);) s += this[e + --o] * a; if (s >= (a *= 128)) s -= Math.pow(2, 8 * n); return s }, s.prototype.readInt8 = function t(e, n) { if (!n) z(e, 1, this.length); if (!(128 & this[e])) return this[e];
                    else return -1 * (255 - this[e] + 1) }, s.prototype.readInt16LE = function t(e, n) { if (!n) z(e, 2, this.length); var i = this[e] | this[e + 1] << 8; return 32768 & i ? 4294901760 | i : i }, s.prototype.readInt16BE = function t(e, n) { if (!n) z(e, 2, this.length); var i = this[e + 1] | this[e] << 8; return 32768 & i ? 4294901760 | i : i }, s.prototype.readInt32LE = function t(e, n) { if (!n) z(e, 4, this.length); return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, s.prototype.readInt32BE = function t(e, n) { if (!n) z(e, 4, this.length); return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, s.prototype.readFloatLE = function t(e, n) { if (!n) z(e, 4, this.length); return at.read(this, e, true, 23, 4) }, s.prototype.readFloatBE = function t(e, n) { if (!n) z(e, 4, this.length); return at.read(this, e, false, 23, 4) }, s.prototype.readDoubleLE = function t(e, n) { if (!n) z(e, 8, this.length); return at.read(this, e, true, 52, 8) }, s.prototype.readDoubleBE = function t(e, n) { if (!n) z(e, 8, this.length); return at.read(this, e, false, 52, 8) }, s.prototype.writeUIntLE = function t(e, n, i, o) { if (e = +e, n |= 0, i |= 0, !o) { var a;
                        U(this, e, n, i, Math.pow(2, 8 * i) - 1, 0) } var s = 1,
                        u = 0; for (this[n] = 255 & e; ++u < i && (s *= 256);) this[n + u] = e / s & 255; return n + i }, s.prototype.writeUIntBE = function t(e, n, i, o) { if (e = +e, n |= 0, i |= 0, !o) { var a;
                        U(this, e, n, i, Math.pow(2, 8 * i) - 1, 0) } var s = i - 1,
                        u = 1; for (this[n + s] = 255 & e; --s >= 0 && (u *= 256);) this[n + s] = e / u & 255; return n + i }, s.prototype.writeUInt8 = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 1, 255, 0); if (!s.TYPED_ARRAY_SUPPORT) e = Math.floor(e); return this[n] = 255 & e, n + 1 }, s.prototype.writeUInt16LE = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 2, 65535, 0); if (s.TYPED_ARRAY_SUPPORT) this[n] = 255 & e, this[n + 1] = e >>> 8;
                    else H(this, e, n, true); return n + 2 }, s.prototype.writeUInt16BE = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 2, 65535, 0); if (s.TYPED_ARRAY_SUPPORT) this[n] = e >>> 8, this[n + 1] = 255 & e;
                    else H(this, e, n, false); return n + 2 }, s.prototype.writeUInt32LE = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 4, 4294967295, 0); if (s.TYPED_ARRAY_SUPPORT) this[n + 3] = e >>> 24, this[n + 2] = e >>> 16, this[n + 1] = e >>> 8, this[n] = 255 & e;
                    else $(this, e, n, true); return n + 4 }, s.prototype.writeUInt32BE = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 4, 4294967295, 0); if (s.TYPED_ARRAY_SUPPORT) this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e;
                    else $(this, e, n, false); return n + 4 }, s.prototype.writeIntLE = function t(e, n, i, o) { if (e = +e, n |= 0, !o) { var a = Math.pow(2, 8 * i - 1);
                        U(this, e, n, i, a - 1, -a) } var s = 0,
                        u = 1,
                        l = 0; for (this[n] = 255 & e; ++s < i && (u *= 256);) { if (e < 0 && 0 === l && 0 !== this[n + s - 1]) l = 1;
                        this[n + s] = (e / u >> 0) - l & 255 } return n + i }, s.prototype.writeIntBE = function t(e, n, i, o) { if (e = +e, n |= 0, !o) { var a = Math.pow(2, 8 * i - 1);
                        U(this, e, n, i, a - 1, -a) } var s = i - 1,
                        u = 1,
                        l = 0; for (this[n + s] = 255 & e; --s >= 0 && (u *= 256);) { if (e < 0 && 0 === l && 0 !== this[n + s + 1]) l = 1;
                        this[n + s] = (e / u >> 0) - l & 255 } return n + i }, s.prototype.writeInt8 = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 1, 127, -128); if (!s.TYPED_ARRAY_SUPPORT) e = Math.floor(e); if (e < 0) e = 255 + e + 1; return this[n] = 255 & e, n + 1 }, s.prototype.writeInt16LE = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 2, 32767, -32768); if (s.TYPED_ARRAY_SUPPORT) this[n] = 255 & e, this[n + 1] = e >>> 8;
                    else H(this, e, n, true); return n + 2 }, s.prototype.writeInt16BE = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 2, 32767, -32768); if (s.TYPED_ARRAY_SUPPORT) this[n] = e >>> 8, this[n + 1] = 255 & e;
                    else H(this, e, n, false); return n + 2 }, s.prototype.writeInt32LE = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 4, 2147483647, -2147483648); if (s.TYPED_ARRAY_SUPPORT) this[n] = 255 & e, this[n + 1] = e >>> 8, this[n + 2] = e >>> 16, this[n + 3] = e >>> 24;
                    else $(this, e, n, true); return n + 4 }, s.prototype.writeInt32BE = function t(e, n, i) { if (e = +e, n |= 0, !i) U(this, e, n, 4, 2147483647, -2147483648); if (e < 0) e = 4294967295 + e + 1; if (s.TYPED_ARRAY_SUPPORT) this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e;
                    else $(this, e, n, false); return n + 4 }, s.prototype.writeFloatLE = function t(e, n, i) { return Y(this, e, n, true, i) }, s.prototype.writeFloatBE = function t(e, n, i) { return Y(this, e, n, false, i) }, s.prototype.writeDoubleLE = function t(e, n, i) { return W(this, e, n, true, i) }, s.prototype.writeDoubleBE = function t(e, n, i) { return W(this, e, n, false, i) }, s.prototype.copy = function copy(t, e, n, i) { if (!n) n = 0; if (!i && 0 !== i) i = this.length; if (e >= t.length) e = t.length; if (!e) e = 0; if (i > 0 && i < n) i = n; if (i === n) return 0; if (0 === t.length || 0 === this.length) return 0; if (e < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds"); if (i < 0) throw new RangeError("sourceEnd out of bounds"); if (i > this.length) i = this.length; if (t.length - e < i - n) i = t.length - e + n; var o = i - n,
                        a; if (this === t && n < e && e < i)
                        for (a = o - 1; a >= 0; --a) t[a + e] = this[a + n];
                    else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT)
                        for (a = 0; a < o; ++a) t[a + e] = this[a + n];
                    else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e); return o }, s.prototype.fill = function t(e, n, i, o) { if ("string" == typeof e) { if ("string" == typeof n) o = n, n = 0, i = this.length;
                        else if ("string" == typeof i) o = i, i = this.length; if (1 === e.length) { var a = e.charCodeAt(0); if (a < 256) e = a } if (void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string"); if ("string" == typeof o && !s.isEncoding(o)) throw new TypeError("Unknown encoding: " + o) } else if ("number" == typeof e) e &= 255; if (n < 0 || this.length < n || this.length < i) throw new RangeError("Out of range index"); if (i <= n) return this; if (n >>>= 0, i = void 0 === i ? this.length : i >>> 0, !e) e = 0; var u; if ("number" == typeof e)
                        for (u = n; u < i; ++u) this[u] = e;
                    else { var l = s.isBuffer(e) ? e : Z(new s(e, o).toString()),
                            f = l.length; for (u = 0; u < i - n; ++u) this[u + n] = l[u % f] } return this }; var lt = /[^+\/0-9A-Za-z-_]/g }).call(e, n(45)) },
        57: function(t, e, n) { "use strict"; var i = n(10);
            t.exports = i.md = i.md || {}, i.md.algorithms = i.md.algorithms || {} },
        782: function(t, e, n) {
            "use strict";
            var FormMessage = t.exports = {},
                i = n(9);
            FormMessage.showSuccess = function t(form) {
                form.trigger("reset");
                var e = form.find(".u-form-send-success"),
                    n = e.find(".u-form-send-message-close");
                if (!n.length) n = i('<a href="#" class="u-form-send-message-close">x</a>'), e.append(n);
                if (typeof _paq != "undefined") {
                    _paq.push(['trackEvent', 'form', 'success_form', 'form']);
                };
                e.show(), n.one("click", (function(t) { t.preventDefault(), e.hide() })), form.find('input[type="submit"]').prop("disabled", false)
            }, FormMessage.showError = function t(form, e, n, o) { var a = e ? form.find(".u-form-send-error").clone() : form.find(".u-form-send-error"); if (e) { if (n)
                        if (560 === n && o) e = "Unable to submit the Contact Form, as the submission email is not verified.\n" + "</br></br>" + "If you are a site administrator, please open your inbox and confirm the " + o + " email in the message. Make sure also to check your spam folder.";
                    a.html(e), form.find(".u-form-send-error").parent().append(a) } var s = a.find(".u-form-send-message-close"); if (!s.length) s = i('<a href="#" class="u-form-send-message-close">x</a>'), a.append(s);
                s.one("click", (function(t) { if (t.preventDefault(), a.hide(), e) a.remove() })), a.show(), form.find('input[type="submit"]').prop("disabled", false) }
        },
        88: function(t, e, n) { "use strict";
            t.exports = { IMAGES: "IMAGES", DOCUMENTS: "DOCUMENTS", VIDEO: "VIDEO", AUDIO: "AUDIO", CUSTOM: "CUSTOM" } },
        89: function(t, e, n) { "use strict";

            function i() { throw new Error("setTimeout has not been defined") }

            function o() { throw new Error("clearTimeout has not been defined") }

            function a(t) { if (p === setTimeout) return setTimeout(t, 0); if ((p === i || !p) && setTimeout) return p = setTimeout, setTimeout(t, 0); try { return p(t, 0) } catch (e) { try { return p.call(null, t, 0) } catch (e) { return p.call(this, t, 0) } } }

            function s(t) { if (m === clearTimeout) return clearTimeout(t); if ((m === o || !m) && clearTimeout) return m = clearTimeout, clearTimeout(t); try { return m(t) } catch (e) { try { return m.call(null, t) } catch (e) { return m.call(this, t) } } }

            function u() { if (g && y) { if (g = false, y.length) v = y.concat(v);
                    else w = -1; if (v.length) l() } }

            function l() { if (!g) { var t = a(u);
                    g = true; for (var e = v.length; e;) { for (y = v, v = []; ++w < e;)
                            if (y) y[w].run();
                        w = -1, e = v.length }
                    y = null, g = false, s(t) } }

            function f(t, e) { this.fun = t, this.array = e }

            function c() {} var h = t.exports = {},
                p, m;! function() { try { if ("function" == typeof setTimeout) p = setTimeout;
                    else p = i } catch (t) { p = i } try { if ("function" == typeof clearTimeout) m = clearTimeout;
                    else m = o } catch (t) { m = o } }(); var v = [],
                g = false,
                y, w = -1;
            h.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; if (v.push(new f(t, e)), 1 === v.length && !g) a(l) }, f.prototype.run = function() { this.fun.apply(null, this.array) }, h.title = "browser", h.browser = true, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.prependListener = c, h.prependOnceListener = c, h.listeners = function(t) { return [] }, h.binding = function(t) { throw new Error("process.binding is not supported") }, h.cwd = function() { return "/" }, h.chdir = function(t) { throw new Error("process.chdir is not supported") }, h.umask = function() { return 0 } },
        9: function(t, e) { t.exports = jQuery }
    });
    jQuery(function($) {
        if ($("nav.u-menu>div>.u-nav>li>a.active").length > 1 && $("nav.u-menu>div>.u-nav>li>a.active").length == $("nav.u-menu>div>.u-nav>li>a").length) {
            $("nav.u-menu .u-nav>.current-menu-item >a.active").removeClass("active");
        }
    })

})(u$, u$);;

/* qfe_composer_front_js: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-content/plugins/qfy_editor/assets/js/qfy_editor_front.js) */
document.documentElement.className += ' js_active ';
document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';
(function() {
    var prefix = ['-webkit-', '-o-', '-moz-', '-ms-', ""];
    for (var i in prefix) { if (prefix[i] + 'transform' in document.documentElement.style) document.documentElement.className += " vc_transform "; }
})();


function image_lazy_event() {
    if (jQuery("[data-delay-image='1']").length > 0) {
        jQuery("[data-delay-image='1']").lazy({
            effect: 'fadeIn',
            effectTime: 400,
            threshold: 800,
        });
    }
}

function hexToRgb(hex) {
    if (hex == "transparent") return "transparent";
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function vc_js_init() {
    //bind slidercontent
    if (!is_edit_model) {
        if (jQuery(".qfy-element.qfy-slidercontent").length > 0 && jQuery("a[href^='qfylinked_']").length > 0) {
            jQuery("a[href^='qfylinked_']:not(.loaded)").each(function() {
                jQuery(this).addClass("loaded");
                var url = jQuery(this).attr("href");
                url = url.replace("%5E", "^").replace("%5E", "^");

                if (url.indexOf("^") > -1) {
                    url = url.substr(10);
                    var url_tmp = url.split("^");
                    var uuid = url_tmp[0];
                    var type = url_tmp[1];
                    var to = url_tmp[2];

                    if (uuid) {
                        var obj = jQuery("[qfyuuid='" + uuid + "']>.royalSlider_gallery_new");
                        if (obj.length > 0) {
                            if (type == "1") {
                                jQuery(this).click(function(e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }).mouseenter(function(e) {
                                    var slider = obj.data('royalSlider');
                                    slider.goTo(to - 1);
                                });
                            } else {
                                jQuery(this).click(function(e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    var slider = obj.data('royalSlider');
                                    slider.goTo(to - 1);
                                });
                            }
                        }
                    }
                }
            });

        }
        //
        if (jQuery(".qfy-element.qfe_gallery").length > 0 && jQuery("a[href^='qfyrelaed_']").length > 0) {
            jQuery("a[href^='qfyrelaed_']:not(.loaded)").each(function() {
                jQuery(this).addClass("loaded");
                var url = jQuery(this).attr("href");
                url = url.replace("%5E", "^").replace("%5E", "^");
                if (url.indexOf("^") > -1) {
                    url = url.substr(10);
                    var url_tmp = url.split("^");
                    var uuid = url_tmp[0];
                    var type = url_tmp[1];
                    var to = url_tmp[2];

                    if (uuid) {

                        if (type == "1") {

                            jQuery(this).click(function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                            }).mouseenter(function(e) {
                                var obj = jQuery("[qfyuuid='" + uuid + "'] .royalSlider_gallery");
                                if (obj.length > 0) {
                                    var slider = obj.data('royalSlider');
                                    slider.goTo(to - 1);
                                } else if (jQuery("[qfyuuid='" + uuid + "'] .qfe_flexslider").length > 0) {
                                    jQuery("[qfyuuid='" + uuid + "'] .qfe_flexslider").flexslider(to - 1);
                                } else if (jQuery("[qfyuuid='" + uuid + "'] .swiper-container").length > 0) {
                                    jQuery("[qfyuuid='" + uuid + "'] .swiper-container").data('swiper').slideTo(to);
                                }
                            });
                        } else {
                            jQuery(this).click(function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                var obj = jQuery("[qfyuuid='" + uuid + "'] .royalSlider_gallery");
                                if (obj.length > 0) {
                                    var slider = obj.data('royalSlider');
                                    slider.goTo(to - 1);
                                } else if (jQuery("[qfyuuid='" + uuid + "'] .qfe_flexslider").length > 0) {
                                    jQuery("[qfyuuid='" + uuid + "'] .qfe_flexslider").flexslider(to - 1);
                                } else if (jQuery("[qfyuuid='" + uuid + "'] .swiper-container").length > 0) {

                                    jQuery("[qfyuuid='" + uuid + "'] .swiper-container").data('swiper').slideTo(to);
                                }
                            });
                        }
                    }
                }
            });

        }
    }

    // BEGIN
    if (jQuery(".swiper-container:not(.loaded)").length > 0) {
        if (typeof jQuery.fn.Swiper == "undefined") {
            jQuery.onDemandScript("/FeiEditor/bitSite/js/swiper/swiper-4.1.0.min.js", function() {
                jQuery('head').append('<link href="/FeiEditor/bitSite/js/swiper/swiper-4.1.0.min.css" rel="stylesheet" type="text/css" />');
                swiper_event();
            })
        } else {
            swiper_event();
        }
    }
    image_lazy_event();

    vc_3d_photo();
    lottieReady(jQuery);
    shape_ready();

    jQuery("#shopping-cart-bitcommerce .carsize:not(.pulse1)").addClass("pulse1");

    jQuery(".srollupdown:not(.load)").each(function() {
        jQuery(this).addClass("load");
        var all = jQuery(this).attr("data-scroll-all");
        var num = jQuery(this).attr("data-scroll-num");
        var speed = jQuery(this).attr("data-scroll-speed");
        var delay = jQuery(this).attr("data-scroll-delay");
        var slideBox = jQuery(this).find("ul:first");

        var allheight = slideBox.css("height").replace("px", "") * 1;

        var delay = delay || 1000,
            speed = speed || 20;
        var tid = null,
            pause = false;
        var s = function() { slideBox.attr("style", "overflow:hidden !important;height:" + allheight + "px;");
            slideBox.find("li").removeClass("displaynone");
            tid = setInterval(slide_scroll, speed); }
        var slide_scroll = function() {
            if (pause) return;
            slideBox.scrollTop(slideBox.scrollTop() + 2);
            var scrolltop = slideBox.scrollTop();
            if (num > 1) {
                var first_height = 0;
                var marginbottom = 0;
                slideBox.find("li").each(function(i) {
                    if (i < num) {
                        first_height = first_height * 1 + jQuery(this).css("height").replace("px", "") * 1;
                        marginbottom = marginbottom * 1 + jQuery(this).css("margin-bottom").replace("px", "") * 1;
                    }
                })
            } else {
                var first_height = slideBox.find("li:eq(0)").css("height").replace("px", "");
                var marginbottom = slideBox.find("li:eq(0)").css("margin-bottom").replace("px", "");
            }
            if (scrolltop >= first_height * 1 + marginbottom * 1) {
                clearInterval(tid);
                if (num > 1) {
                    slideBox.find("li").each(function(i) {
                        if (i < num) {
                            slideBox.append(slideBox.find("li")[0]);
                        }
                    })
                } else {
                    slideBox.append(slideBox.find("li")[0]);
                }
                slideBox.scrollTop(0);
                setTimeout(s, delay);
            }
        }
        slideBox[0].onmouseover = function() { pause = true; }
        slideBox[0].onmouseout = function() { pause = false; }
        setTimeout(s, delay);
    });
    jQuery('.qfy_datatable_event:not(.loaded)').each(function() {
        $this = jQuery(this);
        if (typeof jQuery.fn.DataTable == "undefined") {
            jQuery.onDemandScript("/FeiEditor/bitSite/js/dataTables/jquery.dataTables.js", function() {
                qfy_dataTable_event($this);
            })
        } else {
            qfy_dataTable_event($this);
        }
    })
    jQuery(".opentip:not(.played)").each(function() {
        var $this = jQuery(this);
        var imageurl = jQuery(this).attr("op-image");
        if (imageurl && imageurl.indexOf("http://") > -1) {
            imageurl = imageurl.replace("http://", "//");
        }
        var title = jQuery(this).attr("op-title");
        var data_pop = jQuery(this).attr("op-style");
        var titlealign = jQuery(this).attr("op-titlealign");
        var stylealign = jQuery(this).attr("op-stylealign");
        var tiptitle = "";
        var download = false;
        if (imageurl) {

            tiptitle += "<img style='max-width:100%;' src='" + imageurl + "'  />";
        }
        if (title) {
            tiptitle += "<div style='margin-top:5px;text-align:" + titlealign + "'>" + title + "</div>";
        }
        if (stylealign) {
            var data = { tipJoint: stylealign, fixed: true, style: data_pop };
        } else {
            var data = { style: data_pop };
        }
        if (imageurl) {
            jQuery("<img />").attr("src", imageurl).load(function() {
                setTimeout(function() { new Opentip($this, tiptitle, data); }, 1500);
            })
            $this.addClass("played");

        } else {
            new Opentip($this, tiptitle, data);
            $this.addClass("played");
        }
    })


    if (jQuery('.qfy-jiathis').length > 0) {
        if (typeof jQuery.fn.share != "function") {
            jQuery.onDemandScript("/FeiEditor/bitSite/js/share/jquery.share.min.js", function() {
                jQuery('head').append('<link href="/FeiEditor/bitSite/js/share/css/share.min.css" rel="stylesheet" type="text/css" />');
                jQuery('.qfy-jiathis .share').share();
            })
        } else {
            jQuery('.qfy-jiathis .share').share();
        }
    }

    var video_len = jQuery('.video.preload:not(.played)').length;
    if (video_len > 0) {
        jQuery('.video.preload:not(.played)').each(function() {
            if (jQuery("body").width() < 760 && video_len == 1) {
                jQuery(this).addClass("played").attr("src", jQuery(this).attr("data-src"));
            } else {
                jQuery(this).waypoint({
                    handler: function(direction) {
                        jQuery(this).addClass("played").attr("src", jQuery(this).attr("data-src"));
                    },
                    triggerOnce: true,
                    offset: "95%",
                })
            }
        })
    }



    vc_royalSlider_gallery_init();

    if (!is_edit_model) {
        accordioncontent();
    }
    if (jQuery('.qfy-accordioncontent').length > 0) {
        if (typeof accordioncontent_init != "function") {
            jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-accord.js", function() {
                accordioncontent_init();
            });
        } else {
            accordioncontent_init();
        }
    }


    jQuery(".dl-qfymobile-menu:not(.loaded)").each(function() {
        var backCap = jQuery(this).find(".menu-back").html();
        jQuery(this).find(".children.dl-submenu").prepend("<li class='menu-item dl-back'><a href='#'><span>" + backCap + "</a></li>");
        jQuery(this).addClass("loaded").dlmenu();
    })

    if (!is_edit_model) {
        jQuery(".background-media.mediagallery:not(.loaded)").each(function() {
            var $this = jQuery(this);
            jQuery(this).addClass("loaded On");
            var imagebgs = jQuery(this).attr("data-imagebgs");

            var imagebgs_arr = imagebgs.split("|^|");
            var imagebgs_count = imagebgs_arr.length;
            var imagebgs_current = 0;
            var time = jQuery(this).attr("data-time") ? jQuery(this).attr("data-time") : 3;
            var thishtml = $this.prop("outerHTML");
            var tmp = "";
            for (var i = 0; i < imagebgs_count - 1; i++) {
                $this.before(thishtml);
                $this.prev().css({ 'opacity': '0', 'background-image': 'url(' + imagebgs_arr[i] + ')' }).removeAttr("data-imagebgs").removeClass("On");
            }
            var p = jQuery(this).parent();
            setInterval(function() {
                if (p.attr("id")) {
                    imagebgs_current = p.find(".background-media.On").index('#' + p.attr("id") + '>.background-media');
                } else {
                    var p_class = p.attr("class");
                    var tmpclass = p_class.split(" ");
                    var currclass = "";
                    for (var i = 0; i < tmpclass.length; i++) {
                        if (tmpclass[i].indexOf("qfy-row") > -1) {
                            currclass = tmpclass[i];
                        }
                    }
                    if (currclass) {
                        imagebgs_current = p.find(".background-media.On").index('.' + currclass + ' .background-media');
                    } else {
                        imagebgs_current = p.find(".background-media.On").index('.background-media');
                    }
                }
                p.find(".background-media.On").removeClass("On").css({ 'opacity': '0' })
                if (imagebgs_current == imagebgs_count - 1) {
                    p.find(".background-media:eq(0)").addClass("On").css({ 'opacity': '1' });
                } else {
                    p.find(".background-media:eq(" + (imagebgs_current + 1) + ")").addClass("On").css({ 'opacity': '1' });
                }
            }, time * 1000);

        })

        if (jQuery(".qfy-comments .commentlist:hidden").length > 0) {
            jQuery(".qfy-comments").each(function() {

                var p = jQuery(this);
                if (p.find(".commentlist:visible").length > 0) return;
                var loadhtml = "<div class='commentlist_loading' style='text-align:center;height:30px;margin:15px auto;' ><img src='/qfy-content/plugins/qfbook/templates/default/images/loader.gif' /></div>";
                p.find(".commentlist").after(loadhtml);

                var form = p.find("form#commentform");
                var comment_post_ID = form.find("#comment_post_ID").val();
                var url = form.attr("action");

                jQuery.post(url, { action: "search", comment_post_ID: comment_post_ID, short_atts: p.attr("data-atts") }, function(data) {
                    if (data.indexOf("success") > -1) {

                        var tmp = data.split('|<result>|');
                        var commentlist = $(tmp).find(".commentlist");
                        p.find(".commentlist").html(commentlist.html());
                    }
                    p.find(".commentlist").show();
                    p.find(".commentlist_loading").remove();
                })

            })
        }
    }
    if (typeof qfy_canvas_animale_run == "function") {
        qfy_canvas_animale_run();
    }
    var objs = jQuery(".qfy-icons_list .qfy-icon");
    objs.each(function() {
        var obj = jQuery(this);
        var name = obj.attr("data-desc");
        var bg = obj.attr("data-bg");
        var bgstyle = "";
        if (bg) {
            bgstyle = "background:" + bg + ";margin:-20px;padding:20px;";
        }
        var image = obj.attr("data-image");
        var tj = obj.attr("data-tj") == "0" ? "top" : "bottom";
        var ta = obj.attr("data-ta");
        var width = obj.attr("data-width");
        var align = "left";
        if (ta == "1") align = "right";
        else if (ta == "2") align = "center";
        obj.attr("title", '');
        var text = "";
        if (name) {
            text = "<div style='text-align:" + align + ";'>" + base64_decode(name) + "</div>";
        }
        if (image) {
            if (width) {
                var title = "<div style='width:" + width + "px;text-align:center;" + bgstyle + "'><img src='" + image + "' style='max-width:100%;' /><div style='word-break: break-all;'>" + text + "</div></div>";
            } else {
                var title = "<div style='text-align:center; " + bgstyle + " '><img src='" + image + "' width='160' style='max-width:100%;' /><div style='word-break: break-all;'>" + text + "</div></div>";
            }
            var img = new Image();
            img.onload = img.onerror = function() {
                var data = { tipJoint: tj, style: "dark" };
                setTimeout(function() {
                    new Opentip(obj, title, data);

                }, 300);


            };
            img.src = image;

        } else if (text) {
            if (width) {
                var last = "<div style='width:" + width + "px;word-break: break-all;" + bgstyle + "'>" + text + "</div>";
            } else {
                var last = "<div style='word-break: break-all;" + bgstyle + "'>" + text + "</div>";
            }

            var data = { tipJoint: tj, style: "dark" };
            new Opentip(obj, last, data);

        }


    })
    jQuery(".qfyvideo").unbind().mouseenter(function() {
        if (!jQuery(this).parent().hasClass("list_popup")) {
            jQuery(this).get(0).play();
        }
    }).mouseleave(function() {
        if (!jQuery(this).parent().hasClass("list_popup")) {
            if (jQuery(this).get(0).currentTime > 0) {
                jQuery(this).get(0).load();
            }
        }
    })


    jQuery('[data-ride="vc-carousel"]').each(function() {
        qfy_carousel_fun(jQuery(this))
    })
    jQuery(".qfy_scroll_box:not(.load)").each(function() {
        jQuery(this).addClass("load");
        var box = jQuery(this).attr("id");
        var delay = jQuery(this).attr("data-delay");
        var speed = jQuery(this).attr("data-speed");
        var h = jQuery(this).attr("data-h");
        slideLine(box, "div", delay, speed, h);
    });
    if (!is_edit_model) {
        jQuery("a[href^='qfy_notice']").each(function() {
            var id = jQuery(this).attr("href");
            jQuery(this).attr("data-href", id);
            jQuery(this).removeAttr("href");
            jQuery(this).unbind().click(function(e) {
                e.preventDefault();
                e.stopPropagation();

                if (jQuery("#" + id).length > 0) {
                    notice_pre_event("#" + id + " .notice_warp", "preview");
                }
            })
        });
    } else {
        jQuery("a[href^='qfy_notice']").unbind().click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var id = jQuery(this).attr("href");
            if (jQuery("#" + id).length > 0) {
                notice_pre_event("#" + id + " .notice_warp", "preview");
            }
        })
    }

    jQuery(".qfyanimate:not(.qfyanimated)").each(function() {
        var animaleinbegin = jQuery(this).attr("data-animaleinbegin");
        if (!animaleinbegin) animaleinbegin = "bottom-in-view";
        jQuery(this).waypoint({
            handler: function(direction) {
                var delay = jQuery(this).attr("data-delay");
                var duration = jQuery(this).attr("data-duration");
                if (delay === "") {
                    // åˆ—ä½¿ç”¨
                    if (jQuery(this).hasClass("qfy-column-inner")) {
                        delay = jQuery(this).index() * 0.1 / 2;
                    }
                }
                var animalename = jQuery(this).attr("data-animalename");
                if (duration) {
                    jQuery(this).css("animation-duration", duration + "s");
                }
                jQuery(this).css("animation-delay", delay + "s").css("animation-name", animalename).css("visibility", "visible");
                jQuery(this).addClass("qfyanimated");
            },
            triggerOnce: true,
            offset: animaleinbegin,
        })
    })
    jQuery(".clippathanimate:not(.clippathanimated)").each(function() {

        jQuery(this).waypoint({
            handler: function(direction) {
                jQuery(this).addClass("clippathanimated");
            },
            offset: "bottom-in-view",
        })
    });

    if (jQuery(".auto_tab_menu").length > 0) {
        jQuery(".auto_tab_menu").each(function() {
            auto_tab_menu(jQuery(this));
        });
    }

    typed_event();

    prenext_event();
    // END
}

function vc_js_init2() {
    // console.trace();
    init_usermange_detail();
    vc_slidersBehaviour();
    vc_waypoints();
    vc_teaserGrid();
    vc_carouselBehaviour();
    vc_plugin_flexslider();
    resizefullpageheader();
    bitLibLayout();
    bit_circliful();
    bit_counter();
    bit_counterdown();
    bit_newgallery();
    qfy_jplayer_init();
    bit_myaccountLayout();
    bit_qfbook();
    bit_qfbookform();
    setTimeout(function() { bit_reloadiframevideo(); }, 1000);
}
var is_edit_model = false;
try {
    if (parent.jQuery("#vc-inline-frame").length == 1) {
        is_edit_model = true;
    }
} catch (e) {}
jQuery(document).ready(function($) {

    if (!is_edit_model) {
        vc_js_init();
        vc_js_init2();
    }
    jQuery(document).click(function(e) {
        if (jQuery("body.clicktoaddmodel").length > 0) {
            var target = jQuery(e.target);
            if (target.closest(".vc-element.vc-vc_row").length == 0) {
                jAlert("äº²ï¼Œæ‚¨ç‚¹åœ¨äº†ä¸èƒ½æ’å…¥åŒºå—çš„åœ°æ–¹ã€‚è¯·é€‰æ‹©å†…å®¹åŒºåŸŸçš„ä¸€ä¸ªåŒºå—ã€‚");
                return false;
            }
        }
    });

}); // END jQuery(document).ready
jQuery(window).resize(function() {
    // æ‰‹æœºä¸Šæ»šåŠ¨ä¼šè§¦å‘è¿™ä¸ªresize
    var body_width = jQuery("body").width();
    if (body_width > 768) {
        bitLibLayout();
    }
    var maxwidth = 0;
    jQuery(".qfe_gallery .qfe_gallery_slides").find('img').each(function() {
        if (jQuery(this).width() > maxwidth) {
            maxwidth = jQuery(this).width();
        }
    })
    if (maxwidth > body_width) {
        vc_plugin_flexslider();
    }
});
jQuery(window).on("debouncedresize", function() {
    jQuery(".ts-circliful-counter").each(function() {
        if ("true" == jQuery(this).attr("data-responsive")) {
            var t = jQuery(this),
                e = parseInt(jQuery(this).parent().width()),
                a = parseInt(jQuery(this).attr("data-size"));
            e != a && (t.empty(), t.circliful())
        }
    })
});

function resizefullpageheader() {
    if (jQuery(".bit-html .fullscreenpage.fullpage_layout2").length > 0 || jQuery(".bit-html .fullscreenpage.fullpage_layout3").length > 0 || jQuery(".bit-html .fullscreenpage.fullpage_layout4").length > 0) {
        jQuery(".bit-html .fullscreenpage #fullscreenheader").css("margin-top", "-" + (jQuery(".bit-html .fullscreenpage #fullscreenheader").height() / 2) + "px");
    }
}

function typed_event() {
    if (jQuery(".qfy-simple_header:not(.loaded)").length == 0) return;
    if (typeof Typed != "function") {
        jQuery.onDemandScript("/FeiEditor/bitSite/js/typed.min.js", function() {
            _typed_event();
        })
    } else {
        _typed_event();
    }
}

function prenext_event() {
    var lrmiddlelayout = jQuery(".lrmiddlelayout:first:not(.loaded)");
    var body_width = jQuery("body").width();

    if (lrmiddlelayout.length > 0) {

        lrmiddlelayout.addClass("loaded");
        jQuery(".lrmiddlelayout.wrap").remove();
        var pre_html = '<div class="lrmiddlelayout wrap" style="position: fixed;top:35%;left:0px;z-index:4;display:table;"><div class="prenext_inner" style="width:auto;">';
        pre_html += lrmiddlelayout.find(".pre_inner").prop("outerHTML");
        pre_html += '</div></div>';
        var next_html = '<div class="lrmiddlelayout wrap" style="position: fixed;top:35%;right:0px;z-index:4;display:table;"><div class="prenext_inner" style="width:auto;">';
        next_html += lrmiddlelayout.find(".next_inner.first").prop("outerHTML");
        next_html += '</div></div>';
        if (lrmiddlelayout.hasClass("mobileHidden") && body_width < 768) {

        } else if (lrmiddlelayout.hasClass("desktopHidden") && body_width > 768) {

        } else {
            jQuery("body").append(pre_html + next_html);
        }
    }
    if (jQuery(".lrmiddlelayout").length == 0) {
        jQuery(".lrmiddlelayout.wrap").remove();
    }
}

function bit_circliful(obj) {

    if ("undefined" != typeof obj) {
        obj = obj.find(".ts-circliful-counter:not(.loaded)");
    } else {
        obj = jQuery(".ts-circliful-counter:not(.loaded)");
    }
    if (obj.length == 0) return;
    if (typeof jQuery.fn.circliful == "undefined") {
        jQuery.onDemandScript("/qfy-content/plugins/qfy_editor/js/jquery.circliful.min.js", function() {
            _bit_circliful(obj);
        })
    } else {
        _bit_circliful(obj);
    }

}

function _bit_circliful(obj) {
    "undefined" != typeof jQuery.fn.waypoint && "undefined" != typeof jQuery.fn.circliful && obj.each(function() {
        jQuery(this).bind("inview", function(t, e, a, i) {
            if (e) {
                var r = jQuery(this);
                "top" == i || "bottom" == i || r.addClass("ts-circliful-visible")
            } else {
                var r = jQuery(this);
                r.removeClass("ts-circliful-visible")
            }
        })

        jQuery(this).addClass("loaded").circliful();

    });
}

function formatNumber(s, o) {
    s = s + "";
    if (/[^0-9\.]/.test(s)) return false;
    s = s.replace(/^(\d*)$/, "$1.");
    s = s.replace(".", o);
    var re = /(\d)(\d{3},)/;
    while (re.test(s))
        s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    s = s.substring(0, s.length - 1);
    return s;
}

function bit_counter(obj) {
    if ("undefined" != typeof obj) {
        obj = obj.find(".ts-icon-counter");
        if (obj.length == 0) return false;
    } else {
        obj = jQuery(".ts-icon-counter");
    }
    if (obj.length == 0) return;
    if (typeof jQuery.fn.countTo == "undefined") {
        jQuery.onDemandScript("/qfy-content/plugins/qfy_editor/js/jquery.countto.min.js", function() {
            _bit_counter(obj);
        })
    } else {
        _bit_counter(obj);
    }
}

function bit_newgallery(obj) {
    if ("undefined" != typeof obj) {
        obj = obj.find(".royalSlider_gallery");
        if (obj.length == 0) return false;
    } else {
        obj = jQuery(".royalSlider_gallery");
    }
    if (obj.length == 0) return;
    if (typeof jQuery.fn.royalSlider == "undefined") {
        jQuery.onDemandScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js", function() {
            _bit_newgallery(obj);
        })
    } else {
        _bit_newgallery(obj);
    }
}

function fullscreenclick(obj) {
    jQuery(obj).closest(".royalSlider_gallery").find(".rsFullscreenIcn").click();
}

function bit_myaccountLayout() {
    var defaultindex = getCookie("qfy_order_index");

    if (jQuery(".qfy_account.tablayout").length > 0 && jQuery(".qfy_account.tablayout.ontab").length == 0) {
        jQuery(".qfy_account > .bitcommerce").append('<div class="bitcommerce-tabs tabbed-content bitcommerce-tabs-info" style="min-height:500px;"><ul class="tabs"></ul></div>	');

        jQuery(".qfy_account .my_account_orders_h2").each(function(i) {
            var name = jQuery(this);
            var content = jQuery(this).next();
            if (content.hasClass("my_account_orders_h2") || content.hasClass("bitcommerce-tabs-info") || content.length == 0) {
                content_html = '<div style="min-height:400px;"></div>';
            } else {
                content_html = content.prop('outerHTML');
                content.remove();
            }
            jQuery('.bitcommerce-tabs-info ul.tabs').append('<li class="description_tab active"><a href="#tab-info-' + i + '" class="no-opennew">' + name.text() + '</a></li>');
            jQuery('.bitcommerce-tabs-info ul.tabs').after('<div style="word-break: break-all; display: block;" id="tab-info-' + i + '" class="panel entry-content">' + content_html + '</div>');
            name.remove();

        });
        jQuery(".qfy_account.tablayout").addClass("ontab");
        var titlesize = jQuery(".qfy_account.tablayout").attr("data-size");
        if (titlesize) {
            jQuery('.bitcommerce-tabs-info ul.tabs li a').css("font-size", titlesize + "px");
        }
        jQuery('.bitcommerce_account_subscriptions').hide();
        jQuery('.bitcommerce-tabs-info .panel').hide();
        jQuery('.bitcommerce-tabs-info ul.tabs li a').click(function() {

            var $tab = jQuery(this),
                $tabs_wrapper = $tab.closest('.bitcommerce-tabs-info');

            jQuery('ul.tabs li', $tabs_wrapper).removeClass('active');
            jQuery('div.panel', $tabs_wrapper).hide();
            jQuery('div' + $tab.attr('href'), $tabs_wrapper).show();
            $tab.parent().addClass('active');
            var index = $tab.parent().index();
            qfy_setCookie("qfy_order_index", index);
            return false;
        });
        if (defaultindex > 0) {
            jQuery('.bitcommerce-tabs-info ul.tabs li:eq(' + defaultindex + ') a').click();
        } else {
            jQuery('.bitcommerce-tabs-info ul.tabs li:first a').click();
        }
    }

}

function bit_qfbook() {
    setTimeout(function() {
        jQuery(".QFBOOKCalendar-text-message").each(function() {
            var $this = jQuery(this);
            var id = $this.attr("id");
            var val = $this.val();
            jQuery("#QFBOOKCalendar" + id).QFBOOKCalendar(jQuery.parseJSON(val));

        })
        jQuery(".QFBOOKCalendar-search-message").each(function() {
            var $this = jQuery(this);
            var id = $this.attr("id");
            var val = $this.val();
            jQuery(".QFBOOKSearch-wrapper" + id).QFBOOKSearch(jQuery.parseJSON(val));

        })
    }, 500)
}

function bit_qfbookform() {
    if (jQuery('#QFBOOKSearch-check-in-input').length > 0) {
        jQuery('#QFBOOKSearch-check-in-input').datepicker({
            minDate: new Date(),
            onSelect: function(dateText, inst) {
                jQuery("#QFBOOKSearch-check-out-input").datepicker("option", "minDate", dateText);
            }
        });
    }
    if (jQuery('#QFBOOKSearch-check-out-input').length > 0) {
        jQuery('#QFBOOKSearch-check-out-input').datepicker({
            minDate: new Date(),
            onSelect: function(dateText, inst) {
                jQuery("#QFBOOKSearch-check-in-input").datepicker("option", "maxDate", dateText);
            }
        });
    }
}

function bit_reloadiframevideo(time) {
    if (jQuery("div.ts_html5_video_frame_insert").length > 0) {
        jQuery("div.ts_html5_video_frame_insert").each(function() {
            var $this = jQuery(this);
            var auto_play = $this.attr("data-auto-play");
            if (auto_play == "true") {
                $this = $this.changeTag("iframe");
            } else if (auto_play == "2") {
                $this.parent().mouseenter(function() {
                    $this.changeTag("iframe").attr("data-auto-play", "true");
                });
            } else if (auto_play == "3") {
                $this.waypoint(function() {
                    $this.changeTag("iframe").attr("data-auto-play", "true");
                }, { offset: '85%' });
            } else {
                $this.unbind().click(function() {
                    $this.changeTag("iframe").attr("data-auto-play", "true");
                })
            }
        })
    }
    if (jQuery(".ts_html5_video_frame .video-box video.visible_play").length > 0) {
        jQuery(".ts_html5_video_frame .video-box video.visible_play").each(function() {
            var video = jQuery(this).get(0);
            jQuery(this).waypoint(function() {
                if (video.paused === false) {
                    video.pause();
                } else {
                    video.play();
                }
            }, { offset: '85%' });
        });
    }
}

function qfy_jplayer_init() {
    if (jQuery(".vc_jplayer_container:not(.played)").length == 0) return;
    if (typeof jQuery.fn.videoPlayer == "undefined") {
        jQuery.when(
            jQuery.getScript("/FeiEditor/bitSite/js/jsplayer/jplayer/jquery.jplayer.min.js"),
            jQuery.getScript("/FeiEditor/bitSite/js/jsplayer/jplayer/jplayer.cleanskin.js"),
            jQuery.Deferred(function(deferred) {
                jQuery(deferred.resolve);
            })
        ).done(function() {
            _qfy_jplayer_init();
        });

    } else {
        _qfy_jplayer_init();
    }

}

function _qfy_jplayer_init() {
    // éŸ³é¢‘
    jQuery(".vc_jplayer_container:not(.played)").each(function() {
        var title = jQuery.trim(jQuery(this).find(">.audio-info").html());
        var mp3 = jQuery(this).find(">.audio-info").attr("data-mp3");
        var autoplay = jQuery(this).find(">.audio-info").attr("data-auto");
        if (autoplay != 1) autoplay = null;
        var loop = jQuery(this).find(">.audio-info").attr("data-loop");
        if (loop == 1) { loop = true; } else { loop = false; };
        jQuery(this).find('>.webPlayer').videoPlayer({
            "name": title,
            "autoplay": autoplay,
            "keyEnabled": false,
            "loop": loop,
            "swfPath": "/FeiEditor/bitSite/js/jsplayer/jplayer",
            "size": { "width": "100%", },
            "media": { "mp3": mp3 }
        });
        jQuery(this).addClass("played");
    })
}

function bit_counterdown() {
    if (jQuery(".ts-countdown-parent").length == 0) return;
    if (typeof jQuery.fn.countEverest == "undefined") {
        jQuery.onDemandScript("/FeiEditor/bitSite/js/jquery.vcsc.counteverest.min.js", function() {
            jQuery('head').append('<link href="/FeiEditor/bitSite/css/jquery.vcsc.counteverest.min.css" rel="stylesheet" type="text/css" />');
            _bit_counterdown();
        })
    } else {
        _bit_counterdown();
    }
}

function bitLibLayout(obj) {
    jQuery(".old-ie [backgroundSize='true']").css({ backgroundSize: "cover" });

    if (typeof obj === 'undefined') {
        obj = jQuery(".qfe_images_lib_isotope")
    }

    obj.each(function() {
        var current_obj = jQuery(this);
        var curr_action = current_obj.attr("data-liblayout");
        var filter = jQuery(this).parent().find(".isotope_image");
        filter.each(function() {
            jQuery(this).unbind("click").bind("click", function() {
                var f = jQuery(this).attr("data-filter");
                var c = jQuery(this).closest(".vcgroup").attr("data-color");
                var hc = jQuery(this).closest(".vcgroup").attr("data-hovercolor");
                filter.removeClass("on");
                filter.css("color", c);
                jQuery(this).addClass("on");
                jQuery(this).css("color", hc);
                if (curr_action == "" || curr_action == "undefined") {
                    current_obj.find(">.vc-item").hide();
                    current_obj.find(f).show();
                } else {

                    current_obj.isotope({
                        filter: f
                    });
                }
            }).bind("mouseover", function() {
                var hc = jQuery(this).closest(".vcgroup").attr("data-hovercolor");
                if (!jQuery(this).hasClass("on")) {
                    jQuery(this).css("color", hc);
                }

            }).bind("mouseout", function() {
                var c = jQuery(this).closest(".vcgroup").attr("data-color");
                if (!jQuery(this).hasClass("on")) {
                    jQuery(this).css("color", c);
                }

            })
        });
    });

    if (typeof jQuery.fn.isotope != "undefined") {
        var action = obj.attr("data-liblayout");
        var columnWidth = obj.attr("data-width");

        if (obj.length == 0 || action == "" || action == "undefined") {
            return false;
        }
        obj.isotope({
            itemSelector: '.vc-item',
            layoutMode: action,
            filter: ".images,.templates"

        });

        var all_load = true;

        obj.find('img').each(function() {
            if (!jQuery(this).prop('complete')) {
                all_load = false;
            }
        });

        if (!all_load) {
            window.setTimeout(function() {
                bitLibLayout(obj);
            }, 500);
            return;
        }
        obj.isotope("reLayout");
    }
}


if (typeof window['vc_plugin_flexslider'] !== 'function') {
    function vc_plugin_flexslider() {
        if (jQuery('.qfe_flexslider').length == 0) return;
        if (typeof jQuery.fn.flexslider == "undefined") {
            jQuery.onDemandScript("/qfy-content/plugins/qfy_editor/assets/lib/flexslider/jquery.flexslider-min.js", function() {
                jQuery('head').append('<link href="/qfy-content/plugins/qfy_editor/assets/lib/flexslider/flexslider.css" rel="stylesheet" type="text/css" />');
                _vc_plugin_flexslider();
            })
        } else {
            _vc_plugin_flexslider();
        }
    }
}

function qfy_carousel_fun($carousel) {

    var is_carousel_ok = true;
    $carousel.find('img').each(function() {
        if (!jQuery(this).prop('complete')) {
            is_carousel_ok = false;
        }

    })
    if (!is_carousel_ok) {
        window.setTimeout(function() {
            qfy_carousel_fun($carousel);
        }, 500);
        return;
    }

    $carousel.carousel($carousel.data());
}


/*
 * Waypoints magic ----------------------------------------------------------
 */
if (typeof window['vc_waypoints'] !== 'function') {
    function qfe_animate_fun($this) {

        var p = jQuery($this).closest(".qfy-element");
        var delay = p.attr("css_animation_delay");
        var anitime = p.attr("data-anitime");
        var anilength = p.attr("data-anilength");
        var iteration_count = p.attr("data-ani_iteration_count");
        if (anitime && anitime > 0) {
            jQuery($this).css("animation-duration", anitime + "s");
            jQuery($this).css("-webkit-animation-duration", anitime + "s");
        }
        jQuery($this).removeClass("anlength1 anlength2");
        if (anilength && anilength != 0) {
            jQuery($this).addClass(anilength);
        }
        if (iteration_count == "-1") {
            jQuery($this).css("animation-iteration-count", "infinite");
        } else if (iteration_count > 0) {
            jQuery($this).css("animation-iteration-count", iteration_count);
        }
        if (delay) {
            //å‡ºçŽ°è¿™é‡Œéœ€è¦
            setTimeout(function() {
                jQuery($this).addClass('qsa');
            }, delay * 1000);
        } else {
            if (jQuery($this).hasClass("delay1")) {
                setTimeout(function() {
                    jQuery($this).addClass('qsa');
                }, 1000);
            } else if (jQuery($this).hasClass("delay0.5")) {
                setTimeout(function() {
                    jQuery($this).addClass('qsa');
                }, 500);
            } else if (jQuery($this).hasClass("delay1.5")) {
                setTimeout(function() {
                    jQuery($this).addClass('qsa');
                }, 1500);
            } else if (jQuery($this).hasClass("delay2")) {
                setTimeout(function() {
                    jQuery($this).addClass('qsa');
                }, 2000);
            } else if (jQuery($this).hasClass("delay3")) {
                setTimeout(function() {
                    jQuery($this).addClass('qsa');
                }, 3000);
            } else if (jQuery($this).hasClass("delay4")) {
                setTimeout(function() {
                    jQuery($this).addClass('qsa');
                }, 4000);
            } else if (jQuery($this).hasClass("delay5")) {
                setTimeout(function() {
                    jQuery($this).addClass('qsa');
                }, 5000);
            } else if (jQuery($this).hasClass("delay6")) {
                setTimeout(function() {
                    jQuery($this).addClass('qsa');
                }, 6000);
            } else {
                jQuery($this).addClass('qsa');
            }
        }

    }

    function qfe_animate_fun_new($this, type) {

        var p = jQuery($this).closest(".qfy-element");
        var delay = p.attr("data-anidelay_" + type);
        var anitime = p.attr("data-anitime_" + type);
        var anilength = p.attr("data-anilength_" + type);
        var iteration_count = p.attr("data-ani_iteration_count_" + type);

        if (anitime && anitime > 0) {
            jQuery($this).css("animation-duration", anitime + "s");
            jQuery($this).css("-webkit-animation-duration", anitime + "s");
        }
        jQuery($this).removeClass("anlength1 anlength2");
        if (anilength && anilength != 0) {
            jQuery($this).addClass(anilength);
        }

        if (delay) {
            jQuery($this).css("animation-delay", delay + "s");
            jQuery($this).css("-webkit-animation-delay", delay + "s");
        }
        if (iteration_count == "-1") {
            jQuery($this).css("animation-iteration-count", "infinite");
        } else if (iteration_count > 0) {
            jQuery($this).css("animation-iteration-count", iteration_count);
        }

    }

    var qfy_animateEvent_start = function() {
        var el = document.createElement('div');
        var map = {
            animation: 'animationstart',
            MozAnimation: 'animationstart',
            WebkitAnimation: 'webkitAnimationStart'
        };

        for (var name in map) {
            if (el.style[name] !== undefined) {
                return map[name];
            }
        }
    }();
    var qfy_animateEvent_end = function() {
        var el = document.createElement('div');
        var map = {
            animation: 'animationend',
            MozAnimation: 'animationend',
            WebkitAnimation: 'webkitAnimationEnd'
        };

        for (var name in map) {
            if (el.style[name] !== undefined) {
                return map[name];
            }
        }
    }();

    function qfy_animate_out($this) {
        var outs = new Array("qfe_ttbout", "qfe_ttbout-1", "qfe_ttbout-2", "qfe_bttout", "qfe_bttout-1", "qfe_bttout-2", "qfe_ltrout", "qfe_ltrout-1", "qfe_ltrout-2", "qfe_rtlout", "qfe_rtlout-1", "qfe_rtlout-2", "SlideOutDown", "SlideOutLeft", "SlideOutRight", "popOut", "popOutUp", "popOutDown", "popOutLeft", "popOutRight", "fadeOut", "fadeOutUp", "fadeOutDown", "fadeOutLeft", "fadeOutRight", "zoomOut", "zoomOutUp", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "flipOutX", "flipOutY", "hinge", "rotateOut");
        jQuery($this)[0].addEventListener(qfy_animateEvent_end, function(e) {
            if (jQuery.inArray(e.animationName, outs) > -1) {
                jQuery($this).addClass("anihide");
            }
        }, false);
    }

    function vc_waypoints() {

        if (typeof resetSectionHeight !== 'undefined') resetSectionHeight();
        if (typeof jQuery.fn.waypoint !== 'undefined') {
            jQuery('.qfe_animate_when_almost_visible:not(.qsa)').waypoint(function() {
                if (jQuery(this).hasClass("qfe_tohide")) {
                    if (!is_edit_model) {
                        jQuery(this).closest(".qfy-element").addClass("anihide");
                    }
                    jQuery(this).addClass('qsa');

                } else {
                    qfe_animate_fun(this);
                    if (!is_edit_model) {
                        qfy_animate_out(this);
                    }
                }
            }, { offset: '85%' });

        }
        jQuery("[data-ani_c]").each(function() {

            var to = jQuery(this).attr("data-ani_c_element");
            var c_fun = function($this) {
                if (jQuery($this).attr("data-ani_c") == "tohide") {
                    if (!is_edit_model) {
                        jQuery($this).addClass("anihide");
                    }
                    return;
                }
                jQuery($this).addClass("qfe_" + jQuery($this).attr("data-ani_c") + "_c");
                qfe_animate_fun_new($this, "c");
                jQuery($this).removeClass('qsa qsa_c qsa_h qsa_l');
                setTimeout(function() {
                    jQuery($this).addClass("qsa_c").removeClass("anihide");
                }, 30);
            };
            var $this = this;
            if (to) {
                if (jQuery($this).parent().hasClass("bitWidgetFrame")) {
                    jQuery('#' + to).click(function() {
                        c_fun($this);

                    });
                } else {
                    jQuery('[qfyuuid="' + to + '"]').click(function() {
                        c_fun($this);

                    });
                }

            } else {
                jQuery(this).click(function() {
                    c_fun($this);

                });
            }
            if (!is_edit_model) {
                qfy_animate_out($this);
            }
        });
        jQuery("[data-ani_h]").each(function() {
            var to = jQuery(this).attr("data-ani_h_element");
            var h_fun = function($this) {
                if (jQuery($this).attr("data-ani_h") == "tohide") {
                    if (!is_edit_model) {
                        jQuery($this).addClass("anihide");
                    }
                    return;
                }
                jQuery($this).addClass("qfe_" + jQuery($this).attr("data-ani_h") + "_h");
                qfe_animate_fun_new($this, "h");
                jQuery($this).removeClass('qsa qsa_c qsa_h qsa_l');
                setTimeout(function() {
                    jQuery($this).addClass("qsa_h").removeClass("anihide");
                }, 30);
            };
            var $this = this;
            if (to) {
                if (jQuery($this).parent().hasClass("bitWidgetFrame")) {
                    jQuery('#' + to).mouseenter(function() {
                        h_fun($this);

                    });
                } else {
                    jQuery('[qfyuuid="' + to + '"]').mouseenter(function() {
                        h_fun($this);

                    });
                }
            } else {
                jQuery(this).mouseenter(function() {
                    h_fun($this);

                });
            }
            if (!is_edit_model) {
                qfy_animate_out($this);
            }
        });

        jQuery("[data-ani_l]").each(function() {
            var to = jQuery(this).attr("data-ani_l_element");
            var h_fun = function($this) {
                if (jQuery($this).attr("data-ani_l") == "tohide") {
                    if (!is_edit_model) {
                        jQuery($this).addClass("anihide");
                    }
                    return;
                }
                jQuery($this).addClass("qfe_" + jQuery($this).attr("data-ani_l") + "_l");
                qfe_animate_fun_new($this, "l");
                jQuery($this).removeClass('qsa qsa_c qsa_h qsa_l');
                setTimeout(function() {
                    jQuery($this).addClass("qsa_l").removeClass("anihide");
                }, 30);
            };
            var $this = this;
            if (to) {
                if (jQuery($this).parent().hasClass("bitWidgetFrame")) {
                    jQuery('#' + to).mouseleave(function() {
                        h_fun($this);

                    });
                } else {
                    jQuery('[qfyuuid="' + to + '"]').mouseleave(function(e) {
                        h_fun($this);
                    });
                }
            } else {
                jQuery(this).mouseleave(function(e) {
                    h_fun($this);
                });
            }
            if (!is_edit_model) {
                qfy_animate_out($this);
            }
        });


    }
}

/*
 * Teaser grid: isotope
 * ----------------------------------------------------------
 */
if (typeof window['vc_teaserGrid'] !== 'function') {

    function vc_teaserGrid() {

        var layout_modes = {
            fitrows: 'fitRows',
            masonry: 'masonry'
        }
        if (jQuery(".list-style9").length > 0) {
            jQuery(".list-style9").each(function() {
                vc_isotope_init_load(jQuery(this).find(".vc-carousel-slideline-inner"));
            })

        }
        if (jQuery("body.compose-mode").length == 1) {
            jQuery(".vc-element .vc_ca_post_id a:not(.cate)").each(function() {
                if (!jQuery(this).hasClass("thickbox")) {
                    var href = jQuery(this).attr("href");
                    jQuery(this).removeAttr("href");
                    var p = jQuery(this).closest(".vc_ca_post_id");
                    jQuery(this).unbind("click").bind("click", function() {
                        top.menuRedirect(href, p);
                        return false;
                    })
                }
            })

            if (top.jQuery && !top.jQuery("body").hasClass("caterole")) {
                jQuery(".content-wrapper .vc-element .vc_ca_post_id").mouseenter(function() {

                    jQuery(this).css("outline", "2px dotted #5E87B0");
                    if (jQuery(this).find(".vc_list_edit_button").length == 0) {
                        if (jQuery(this).find(".blog-media .toEditor,#item_block .toEditor").length == 0) {
                            jQuery(this).find(".blog-media,#item_block").append("<span class='toEditor' ><span class='edit e_copy' style='display:inline' onclick='toCopy(this)'>å¤åˆ¶</span><span class='edit e_edit' style='display:inline' onclick='toVisit(this)'>æ‰“å¼€</span><!--<span class='edit e_delete' style='display:inline' onclick='toDelete(this)'>åˆ é™¤</span>--></span>");
                        }
                        if (jQuery(this).closest(".vc-element").attr("data-model-id")) {
                            var editname = "æ›´æ¢å›¾ç‰‡";
                            if (jQuery(this).closest(".qfy-element").attr("data-post") == "attachment") {
                                editname = "ç¼–è¾‘";
                            }
                            jQuery(this).find(".blog-media").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>" + editname + "</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_scrolllist_image_element\")' title='ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼'>è®¾ç½®</span>");
                            jQuery(this).find(".item_img").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>" + editname + "</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_advanced_image_element\")' title='ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼'>è®¾ç½®</span>");
                            var p = jQuery(this);
                            if (p.find(".post-title").length > 0 && p.find(".post-title .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_title_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                var title = p.find(".post-title");

                                if (p.find(".post-title >a").length > 0) {
                                    var title = jQuery(this).find(".post-title >a");
                                    if (title.html() && title.html().length > 15) {
                                        var newtitle = title.html().substr(0, title.html().length - 6);
                                        title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")
                                    }
                                    p.find(".post-title >a:first").append(actionstr);
                                } else {
                                    var title = jQuery(this).find(".post-title >span:first");
                                    if (title.html() && title.html().length > 15) {
                                        var newtitle = title.html().substr(0, title.html().length - 6);
                                        title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")
                                    }
                                    p.find(".post-title >span:first").append(actionstr);
                                }
                            }
                            if (p.find(".post_excerpt").length > 0 && p.find(".post_excerpt .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_text_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                if (p.find(".post_excerpt >p").length > 0) {
                                    p.find(".post_excerpt >p").append(actionstr);
                                } else {
                                    p.find(".post_excerpt").append(actionstr);
                                }

                            }

                            if (jQuery(this).find(".title").length > 0 && jQuery(this).find(".title .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_title_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".title").append(actionstr);

                            }
                            if (jQuery(this).find(".details").length > 0 && jQuery(this).find(".details .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_details_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".details").append(actionstr);

                            }
                            if (jQuery(this).find(".subtitle").length > 0 && jQuery(this).find(".subtitle .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_subtitle_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".subtitle").append(actionstr);

                            }

                            if (jQuery(this).find(".post_date").length > 0 && jQuery(this).find(".post_date .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_postdate_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".post_date").append(actionstr);

                            }

                            if (jQuery(this).find(".price_warp").length > 0 && jQuery(this).find(".price_warp .vc_list_edit_action").length == 0) {
                                var current_pid = jQuery(this).attr("data-postid");
                                var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.bitSettingsEdit(' + current_pid + ',\'è®¾ç½®å•†å“\', \'product\');" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_price_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".price_warp").append(actionstr);

                            }
                        }
                    }
                }).mouseleave(function() {
                    jQuery(this).css("outline", "0").find(".vc_list_edit_action").remove();
                    jQuery(this).find(".blog-media,#item_block").find(".toEditor").remove();
                    jQuery(this).find(".edittitle").remove();
                    jQuery(this).find(".hidetitle").each(function() {
                        var t = jQuery(this).html();
                        jQuery(this).parent().html(t);
                    })
                });

                if (jQuery(".product-content.single-product").length == 0) {
                    jQuery(".bitcommerce-main-image,.wd_product_wrapper .product_a").mouseenter(function() {
                        jQuery(this).removeAttr("href").append("<span class='toEditor' style='right:0;width:100px;'><span class='edit' style='display:inline' onclick='toEditProduct(this)'><i class='glyphicon glyphicon-edit'></i>æ•°æ®</span><span style='display:inline' class='delete' onclick='toRedirectProduct(this)'><i class='glyphicon glyphicon-forward'></i>é¡µé¢</span></span>");
                    }).mouseleave(function() {
                        jQuery(this).find(".toEditor").remove();
                    });
                }
            }
            jQuery('.content-wrapper .qfy-listcatecontrols li').each(function() {
                var $li = jQuery(this);
                $li.mouseenter(function() {
                    jQuery(this).css("outline", "1px dotted #5E87B0");
                    if (jQuery(this).find(".toEditor").length == 0) {
                        jQuery(this).append("<span class='toEditor' style='border:0;padding:0;'><span  style='display:inline;border:0;padding:0;background:transparent;' onclick='toDeleteCate(this)'><img src='//f.goodq.top/FeiEditor/bitSite/images/close_hover.png' /></span>");
                    }
                }).mouseleave(function() {
                    jQuery(this).css("outline", "0");
                    jQuery(this).find(".toEditor").remove();
                });

            });
        }


        jQuery('.qfe_grid .teaser_grid_container:not(.qfe_carousel), .qfe_filtered_grid .teaser_grid_container:not(.qfe_carousel)').each(function() {
            var $container = jQuery(this);

            var $thumbs = $container.find('.qfe_thumbnails');
            var layout_mode = $thumbs.attr('data-layout-mode');

            // ..
            if (jQuery("body.compose-mode").length == 1) {
                var p = $container.closest(".qfy-element");
                var iscontent = $container.closest(".content-wrapper");
                // && $thumbs.closest(".vc-element").length>0
                if (self != top && typeof top.jQuery == "function" && !top.jQuery("body").hasClass("caterole")) {
                    $thumbs.find(".isotope-item").mouseenter(function() {
                        if (iscontent.length == 0) return;
                        jQuery(this).css("outline", "2px dotted #5E87B0");
                        if (jQuery(this).find(".vc_list_edit_button").length == 0) {
                            var editor_html = "<span class='toEditor' ><span class='edit e_set' style='display:inline' onclick='parent.toeditlistmore(this,event,\"vc_list_element_ui\");'>è®¾ç½®</span><span class='edit e_copy' style='display:inline' onclick='toCopy(this)'>å¤åˆ¶</span><span class='edit e_edit' style='display:inline' onclick='toVisit(this)'>æ‰“å¼€</span><!--<span class='edit e_delete' style='display:inline' onclick='toDelete(this)'>åˆ é™¤</span>--></span>"

                            jQuery(this).append(editor_html);
                            // <span class='edit' style='display:inline'
                            // onclick='toEditor(this)'><i class='glyphicon
                            // glyphicon-edit'></i>ç¼–è¾‘</span>
                            if ($container.closest(".vc-element").attr("data-model-id")) {
                                jQuery(this).find(".post-thumb").css("position", "relative");
                                var editname = "æ›´æ¢å›¾ç‰‡";
                                if (jQuery(this).closest(".qfy-element").attr("data-post") == "attachment") {
                                    editname = "ç¼–è¾‘";
                                }
                                jQuery(this).find(".post-thumb").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>" + editname + "</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_list_image_element\")' title='ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼'>è®¾ç½®</span>");
                                if (jQuery(this).find(".post-title").length > 0 && jQuery(this).find(".post-title .vc_list_edit_action").length == 0) {
                                    var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;" onclick="parent.toeditlistmore(this,event,\'vc_list_title_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                    if (jQuery(this).find(".post-title >a").length > 0) {
                                        var title = jQuery(this).find(".post-title >a");
                                        if (title.html() && title.html().length > 15) {
                                            var newtitle = title.html().substr(0, title.html().length - 6);
                                            title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")
                                        }
                                        jQuery(this).find(".post-title >a:first").append(actionstr);
                                    } else {
                                        var title = jQuery(this).find(".post-title >span:first");
                                        if (title.html() && title.html().length > 15) {
                                            var newtitle = title.html().substr(0, title.html().length - 6);
                                            title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")
                                        }
                                        jQuery(this).find(".post-title >span:first").append(actionstr);

                                    }
                                    if (jQuery(this).find(".post-title i.glyphicon").length > 0) {
                                        jQuery(this).find(".post-title i.glyphicon").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_icon_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>');
                                    }
                                }


                                if (jQuery(this).find(".post_excerpt").length > 0) {
                                    var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;" onclick="toEditor(this,event)" title="ç¼–è¾‘å†…å®¹"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_text_element\')" title="ä¿®æ”¹å†…å®¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                    if (jQuery(this).find(".post_excerpt >p").length > 0 && jQuery(this).find(".post_excerpt .vc_list_edit_action").length == 0) {
                                        jQuery(this).find(".post_excerpt >p").append(actionstr);
                                    } else {
                                        jQuery(this).find(".post_excerpt").append(actionstr);
                                    }
                                }
                                if (jQuery(this).find(".subtitle").length > 0 && jQuery(this).find(".subtitle .vc_list_edit_action").length == 0) {
                                    var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;" onclick="toEditor(this,event)" title="ç¼–è¾‘å†…å®¹"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_list_subtitle_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                    jQuery(this).find(".subtitle").append(actionstr);

                                }
                                if (jQuery(this).find(".price_warp").length > 0 && jQuery(this).find(".price_warp .vc_list_edit_action").length == 0) {
                                    var current_pid = jQuery(this).attr("data-postid");
                                    var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.bitSettingsEdit(' + current_pid + ',\'è®¾ç½®å•†å“\', \'product\');" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_list_price_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                    jQuery(this).find(".price_warp").append(actionstr);

                                }
                                if (jQuery(this).find(".post-comment").length > 0 && jQuery(this).find(".post-comment .vc_list_edit_action").length == 0) {
                                    jQuery(this).find(".post-comment").append('<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_comment_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>');
                                }
                                if (jQuery(this).find(".vc_read_more").length > 0 && jQuery(this).find(".vc_read_more .vc_list_edit_action").length == 0) {
                                    jQuery(this).find(".vc_read_more").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_readmore_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>');
                                }
                            }

                        }
                    }).mouseleave(function() {
                        jQuery(this).css("outline", "0");
                        jQuery(this).find(".toEditor,.vc_list_edit_action").remove();
                        jQuery(this).find(".edittitle").remove();
                        jQuery(this).find(".hidetitle").each(function() {
                            var t = jQuery(this).html();
                            jQuery(this).parent().html(t);
                        })

                    });


                    if (p.find(".mypages").length > 0) {
                        p.find(".mypages").mouseenter(function() {
                            if (p.find(".mypages .vc_list_edit_action").length == 0) {
                                p.find(".mypages").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_pagenav_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>');
                            }
                        }).mouseleave(function() {
                            p.find(".vc_list_edit_action").remove();
                        });

                    }

                }
                $thumbs.find("a:not(.cate)").each(function() {
                    if (!jQuery(this).hasClass("thickbox")) {
                        var href = jQuery(this).attr("href");
                        jQuery(this).removeAttr("href");
                        var p = jQuery(this).closest(".isotope-item");
                        jQuery(this).unbind("click").bind("click", function() {
                            top.menuRedirect(href, p);
                            return false;
                        })
                    }
                })
            }

            $container.find('.categories_filter a:not(.link)').data('isotope', $thumbs).click(function(e) {
                e.preventDefault();
                var $thumbs = jQuery(this).data('isotope');
                jQuery(this).parent().parent().find('.active').removeClass('active');
                jQuery(this).parent().addClass('active');
                if (!$container.hasClass("noanimale")) {
                    $thumbs.isotope({
                        filter: jQuery(this).attr('data-filter'),
                        itemSelector: '.isotope-item',
                        layoutMode: 'fitRows'
                    });
                } else {
                    var filter = jQuery(this).data('filter');
                    if (filter == "*") {
                        $thumbs.find(">li").show();
                    } else {
                        $thumbs.find(">li").hide();
                        $thumbs.find(filter).show();
                    }
                }

            });
            if (!jQuery(this).hasClass("noanimale")) {
                vc_isotope_init_load($thumbs);
            }

        });
    }


}

function vc_isotope_init_load(obj) {

    if (obj.find('.post-thumb img,.item_img img').length == 0) {
        obj.isotope({
            filter: '*',
            itemSelector: '.isotope-item',
            layoutMode: obj.attr("data-layout-mode") ? obj.attr("data-layout-mode") : 'fitRows'
        });
        obj.parent().find(".isotope_loading").remove();
        return;
    }
    var all_load = true;

    obj.find('.post-thumb img,.post-thumb video,.item_img img').each(function() {
        if (!jQuery(this).prop('complete')) {
            all_load = false;
        }
    });

    if (!all_load) {
        window.setTimeout(function() {
            vc_isotope_init_load(obj);
        }, 500);
        return;
    }
    obj.isotope({
        filter: '*',
        itemSelector: '.isotope-item',
        layoutMode: obj.attr("data-layout-mode") ? obj.attr("data-layout-mode") : 'fitRows'
    }, function() {
        obj.parent().find(".isotope_loading").remove();
    });

}

if (typeof window['vc_carouselBehaviour'] !== 'function') {
    function vc_carouselBehaviour() {
        jQuery(".qfe_carousel").each(function() {
            var $this = jQuery(this);
            if ($this.data('carousel_enabled') !== true && $this.is(':visible')) {
                $this.data('carousel_enabled', true);
                var carousel_width = jQuery(this).width(),
                    visible_count = getColumnsCount(jQuery(this)),
                    carousel_speed = 500;
                if (jQuery(this).hasClass('columns_count_1')) {
                    carousel_speed = 900;
                }
                var carousele_li = jQuery(this).find('.qfe_thumbnails-fluid li');
                carousele_li.css({ "margin-right": carousele_li.css("margin-left"), "margin-left": 0 });

                jQuery(this).find('.qfe_wrapper:eq(0)').jCarouselLite({
                        btnNext: jQuery(this).find('.next'),
                        btnPrev: jQuery(this).find('.prev'),
                        visible: visible_count,
                        speed: carousel_speed
                    })
                    .width('100%'); // carousel_width

                var fluid_ul = jQuery(this).find('ul.qfe_thumbnails-fluid');
                fluid_ul.width(fluid_ul.width() + 300);

                jQuery(window).resize(function() {
                    var before_resize = screen_size;
                    screen_size = getSizeName();
                    if (before_resize != screen_size) {
                        window.setTimeout('location.reload()', 20);
                    }
                });
            }

        });
    }
}

if (typeof window['vc_slidersBehaviour'] !== 'function') {
    function vc_slidersBehaviour() {
        // var sliders_count = 0;
        jQuery('.qfe_gallery_slides').each(function(index) {
            var this_element = jQuery(this);
            var ss_count = 0;
            if (this_element.hasClass('qfe_slider_nivo')) {
                var sliderSpeed = 800,
                    sliderTimeout = this_element.attr('data-interval') * 1000;

                if (sliderTimeout == 0) sliderTimeout = 9999999999;
                this_element.find('.nivoSlider').nivoSlider({
                    effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify
                    // sets
                    // like:
                    // 'fold,fade,sliceDown'
                    slices: 15, // For slice animations
                    boxCols: 8, // For box animations
                    boxRows: 4, // For box animations
                    animSpeed: sliderSpeed, // Slide transition speed
                    pauseTime: sliderTimeout, // How long each slide will show
                    startSlide: 0, // Set starting Slide (0 index)
                    directionNav: true, // Next & Prev navigation
                    directionNavHide: true, // Only show on hover
                    controlNav: true, // 1,2,3... navigation
                    keyboardNav: false, // Use left & right arrows
                    pauseOnHover: true, // Stop animation while hovering
                    manualAdvance: false, // Force manual transitions
                    prevText: 'Prev', // Prev directionNav text
                    nextText: 'Next' // Next directionNav text
                });
            } else if (this_element.hasClass('qfe_image_grid')) {
                var isotope = this_element.find('.qfe_image_grid_ul');
                isotope.isotope({
                    // options
                    itemSelector: '.isotope-item',
                    layoutMode: 'fitRows'
                });
                jQuery(window).load(function() {
                    isotope.isotope("reLayout");
                });
            }
        });
    }
}

function getColumnsCount(el) {
    var find = false,
        i = 1;

    while (find == false) {
        if (el.hasClass('columns_count_' + i)) {
            find = true;
            return i;
        }
        i++;
    }
}

var screen_size = getSizeName();

function getSizeName() {
    var screen_size = '',
        screen_w = jQuery(window).width();

    if (screen_w > 1170) {
        screen_size = "desktop_wide";
    } else if (screen_w > 960 && screen_w < 1169) {
        screen_size = "desktop";
    } else if (screen_w > 768 && screen_w < 959) {
        screen_size = "tablet";
    } else if (screen_w > 300 && screen_w < 767) {
        screen_size = "mobile";
    } else if (screen_w < 300) {
        screen_size = "mobile_portrait";
    }
    return screen_size;
}

function loadScript(url, $obj, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) { // IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {}

    script.src = url;
    $obj.get(0).appendChild(script);
}

function qfe_prepare_tab_content(event, ui) {
    var panel = ui.panel || ui.newPanel;
    vc_carouselBehaviour();
    var $ui_panel = jQuery(panel).find('.isotope'),
        $google_maps = jQuery(panel).find('.qfe_gmaps_widget');
    if ($ui_panel.length > 0) {
        $ui_panel.isotope("reLayout");
    }

    if ($google_maps.length && !$google_maps.is('.map_ready')) {
        var $frame = $google_maps.find('iframe');
        $frame.attr('src', $frame.attr('src'));
        $google_maps.addClass('map_ready');
    }
}

jQuery(window).resize(function() {
    bitResizeImageTextInit();
});
jQuery(window).ready(function() {
    setTimeout(function() {
        bitResizeImageTextInit();
    }, 300);
});

function bitResizeImageTextInit() {

    jQuery(".bitImageControlDiv .bit-tp-caption.wf-mobile-hidden").each(function() {

        var dataorgipara = jQuery(this).attr("dataorgipara");
        if (dataorgipara) {
            var $this = this;
            var p = jQuery(this).parent().parent();
            var img = p.find(".bitImageParentDiv img");
            if (img.length > 0) {
                var imgW = img.width();
                var imgH = img.height();
            } else {
                var imgW = p.find(".bitImageParentDiv .banner-img").width();
                var imgH = p.find(".bitImageParentDiv .banner-img").height();
            }
            var download = new Image();
            download.src = img.attr("src");
            if (imgW > 760) {
                initTextposition(dataorgipara, imgW, imgH, this);
            } else {
                /*
                 * download.onload = function () {
                 * initTextposition(dataorgipara,imgW,imgH,$this); }
                 * download.onerror = function (err, msg) {
                 * initTextposition(dataorgipara,imgW,imgH,$this); }
                 */
            }
        }
    })
}

function initTextposition(dataorgipara, imgW, imgH, obj) {
    dataorgipara = dataorgipara.split("\|");
    var textOrgLeft = dataorgipara[0];
    var textOrgTop = dataorgipara[1];
    var width = dataorgipara[2];
    var s = dataorgipara[3];
    var textOrgRight = dataorgipara[4];
    var textOrgBottom = dataorgipara[5];
    if (imgW != width && imgW > 0) {

        var n = (width / imgW).toFixed(4);

        // if(s/n<10){n=s/10;}
        jQuery(obj).css("font-size", s / n).css("line-height", "auto").css("min-height", "0").css("min-width", "0");
        jQuery(obj).find("slideText").css("line-height", "auto");
        var textW = jQuery(obj).width();
        var textH = jQuery(obj).height();
        var paddingLeft = jQuery(obj).css("padding-left");
        if (paddingLeft && paddingLeft.indexOf("px")) {
            paddingLeft = paddingLeft.replace("px", "")
        };
        var paddingTop = jQuery(obj).css("padding-top");
        if (paddingTop && paddingTop.indexOf("px")) {
            paddingTop = paddingTop.replace("px", "")
        };
        var s = jQuery(obj).css("left");
        if (textOrgLeft != 0) {
            if (s.indexOf("px") > -1) {
                s = s.replace("px", "");
                jQuery(obj).css("left", textOrgLeft * imgW - textW / 2 - paddingLeft);
            }
        }
        if (textOrgRight == 1) {
            jQuery(obj).css("right", "0").css("left", "auto");
        }
        var s = jQuery(obj).css("top");

        if (textOrgTop != 0) {
            if (s.indexOf("px") > -1) {
                s = s.replace("px", "");
                jQuery(obj).css("top", textOrgTop * imgH - textH / 2 - paddingTop);
            }
        }
        if (textOrgBottom == 1) {
            jQuery(obj).css("bottom", "0").css("top", "auto");
        }

    } else {

        var css = jQuery(obj).attr("style");
        if (css) {
            css = css.replace(/font-size[^p]*px;/, "");
            css = css.replace(/right: 0px/, "");
            css = css.replace(/bottom: 0px/, "");
            css = css.replace(/line-height[^;]*;/, "");
            jQuery(obj).attr("style", css);
            var left = jQuery(obj).attr("dataleft");
            jQuery(obj).css("left", left + "px");
            var top = jQuery(obj).attr("datatop");
            jQuery(obj).css("top", top + "px");
        }
    }
    jQuery(obj).addClass("on").show();

}


;

/* vc_transition_bootstrap_js: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/vc_carousel/js/transition.js) */
+

function($) {
    "use strict";

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd otransitionend',
            'transition': 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return { end: transEndEventNames[name] }
            }
        }
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false,
            $el = this
        $(this).one($.support.transition.end, function() { called = true })
        var callback = function() { if (!called) $($el).trigger($.support.transition.end) }
        setTimeout(callback, duration)
        return this
    }

    $(function() {
        $.support.transition = transitionEnd()
    })

}(window.jQuery);;

/* vc_carousel_js: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/vc_carousel/js/vc_carousel.js) */
/* ========================================================================
 * VC: carousel.js v0.4.5
 * Fork Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


;
(function($) {
    "use strict";

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = function(element, options) {
        if ($(window).width() < 768 && $(element).hasClass("vc-carousel vc-slide")) {
            options.interval = 0;

        }
        if (!options.viewnum) options.viewnum = 0;
        this.$element = $(element)
        this.$indicators = this.$element.find('.vc-carousel-indicators')
        this.options = options
        this.paused =
            this.sliding =
            this.interval =
            this.$active =
            this.$items = null
        this.options.pause == 'hover' && this.$element
            .on('mouseenter', $.proxy(this.pause, this))
            .on('mouseleave', $.proxy(this.cycle, this))
        this._build() // new
    }

    Carousel.DEFAULTS = {
        mode: 'horizontal',
        partial: false,
        interval: 5000,
        pause: 'hover',
        wrap: false,
        autoHeight: true,
        perView: 1,
        hideOnEnd: false
    }
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false)

        this.interval && clearInterval(this.interval)

        this.options && this.options.interval &&
            !this.paused &&
            (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
        this.touch_start_position = 0;
        return this
    }
    Carousel.prototype.getActiveIndex = function() {
        this.$active = this.$element.find('.vc-item.vc-active')
        if (!this.$active.length) this.$active = this.$element.find('.vc-item:first').addClass('vc-active')
        this.$items = this.$active.parent().children()
        return this.$items.index(this.$active)
    }
    Carousel.prototype.showHideControl = function(index) {
        if (typeof index === 'undefined') var index = this.getActiveIndex()
            //this.$left_control[index===0 ? 'hide' : 'show']()
            //this.$right_control[index===this.items_count-1 ? 'hide' : 'show']()
    }
    Carousel.prototype.to = function(pos) {
        var that = this
        var activeIndex = this.getActiveIndex()

        if (pos > (this.$items.length - 1) || pos < 0) return

        if (this.sliding) return this.$element.one('slid', function() { that.to(pos) })
        if (activeIndex == pos) return this.pause().cycle()

        return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

    Carousel.prototype.pause = function(e) {
        e || (this.paused = true)

        if (this.$element && this.$element.find('.vc-next, .vc-prev').length && $.support.transition.end) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }

        this.interval = clearInterval(this.interval)

        return this
    }

    Carousel.prototype.next = function() {
        if (this.sliding) return
        return this.slide('next')
    }

    Carousel.prototype.prev = function() {
        if (this.sliding) return
        return this.slide('prev')
    }

    Carousel.prototype.slide = function(type, next) {

        var $active = this.$element.find('.vc-item.vc-active')
        var $next = next || $active[type]();

        if (type == "prev" && $next.index() == -1 && this.options.viewnum > 0) {
            $next = this.$element.find('.vc-item:eq("' + (this.items_count - this.options.viewnum * 1) + '")');
        }
        var isCycling = this.interval
        var direction = type == 'next' ? 'vc-left' : 'vc-right'
        var fallback = type == 'next' ? 'first' : 'last'
        var that = this
        if (!$next.length) {
            if (!this.options.wrap) {
                this.returnSwipedSlide()
                return
            }
            $next = this.$element.find('.vc-item')[fallback]()
        }

        this.sliding = true
            //mobile don't move
        if ($(window).width() < 768 && this.$element.hasClass("vc-carousel vc-slide")) {
            return;
        }

        isCycling && this.pause()

        var e = $.Event('slide.vc.carousel', { relatedTarget: $next[0], direction: direction })

        if ($next.hasClass('vc-active')) return

        if (this.$indicators.length) {
            this.$indicators.find('.vc-active').removeClass('vc-active')
            this.$indicators.find('.vc-partial').removeClass('vc-partial')
            this.$element.one('slid', function() {
                var index = that.getActiveIndex(),
                    $nextIndicator = $(that.$indicators.children().slice(index, that.getActiveIndex() + that.options.perView))
                $nextIndicator && $nextIndicator.addClass('vc-active')
                that.options.partial && $nextIndicator && (index + 1 < that.items_count ? $nextIndicator.last().next().addClass('vc-partial') : $nextIndicator.first().prev().addClass('vc-partial'))
                if (that.options.hideOnEnd) that.showHideControl(index)
            })
        }
        this.current_index = $next.index()
        if (this.current_index > this.items_count - this.options.viewnum * 1) {
            this.current_index = 0;


        } else if (this.current_index < 0) {
            this.current_index = this.items_count - 1
        }
        if (this.options.autoHeight) {
            this.current_pos_value = -1 * this._step * this.current_index
        } else {
            this.current_pos_value = -1 * $next.position()[this.animation_position]
        }
        if (this.options.partial && this.current_index >= this.items_count - 1) {
            this.current_pos_value += this._step * (1 - this.partial_part)
        }
        if ($.support.transition && this.$element.hasClass('vc-slide')) {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return

            this.$slideline_inner
                .addClass('vc-transition')
                .css(this.animation_position, this.current_pos_value + that.pos_units)
            if (!this.options.autoHeight) this.recalculateSlidelineHeight($next.height(), true)
            this.$slideline_inner.one($.support.transition.end, function() {
                $next.addClass('vc-active')
                $active.removeClass('vc-active')
                that.$slideline_inner.removeClass([type, 'vc-transition'].join(' '))
                that.sliding = false
                that.removeSwipeAnimationSpeed()
                setTimeout(function() { that.$element.trigger('slid') }, 0)
            }).emulateTransitionEnd(this.transition_speed)
        } else {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return
            $active.removeClass('vc-active')
            $next.addClass('vc-active')
            this.sliding = false
            this.$slideline_inner.css(this.animation_position, this.current_pos_value + that.pos_units)
        }
        isCycling && this.cycle()
        if (this.current_index == 0 && this.options.viewnum > 0) {
            $next.removeClass('vc-active');
            if (type == "next") {
                this.$element.find('.vc-item:first').addClass("vc-active");
            }
        }
        return this
    }
    Carousel.prototype.setSwipeAnimationSpeed = function() {
        this.$slideline_inner.addClass('vc-swipe-transition')
    }
    Carousel.prototype.removeSwipeAnimationSpeed = function() {
            this.$slideline_inner.removeClass('vc-swipe-transition')

        }
        /**
         * Velocity
         * @param   {Number}    delta_time
         * @param   {Number}    delta_x
         * @param   {Number}    delta_y
         * @returns {Object}    velocity
         */
    Carousel.prototype.velocity = function(time, x) {
        return {
            x: Math.abs(x / time) || 0
        }
    }
    Carousel.prototype.recalculateSlidelineHeight = function(height, animate) {
            if (animate === true) {
                this.$slideline.animate({ height: height })
            } else {
                this.$slideline.height(height)
            }
        }
        /**
         * Change layout size after resizing of window.
         */
    Carousel.prototype.resizeAction = function() {
        var max_height = 0,
            new_slideline_height = 0
        if (this.options.mode === 'horizontal') {
            this.el_effect_size = this.$element.width() * (this.options.partial ? this.partial_part : 1)
            this.$slideline.width(this.items_count * this.el_effect_size)

        }

        if (this.options.autoHeight) {
            this.$items.height('auto')
            this.$items.each(function() {
                var item_height = $(this).height()
                if (item_height > max_height) max_height = item_height
            })
            this.$items.height(max_height)
        } else {
            this.recalculateSlidelineHeight(this.$active.height())
        }
        if (this.options.mode === 'vertical') {
            this._step = this.$active.height()
            new_slideline_height = this.$active.height() * this.options.perView * (this.options.partial ? (1 + 1 - this.partial_part) : 1)
            this.recalculateSlidelineHeight(new_slideline_height, false)
            this.$slideline_inner.css({ top: -1 * this.$active.position().top })
            this.el_effect_size = this._step
        }
    }
    Carousel.prototype.returnSwipedSlide = function() {
        var params = {}
        params[this.animation_position] = this.current_pos_value + this.pos_units
        this.$slideline_inner.animate(params)
    }
    Carousel.prototype._build = function() {
            //mobile don't build
            if ($(window).width() < 768 && this.$element.hasClass("vc-carousel vc-slide")) {
                return;
            }
            var el = this.$element.get(0),
                _touch_start_position = false,
                _touch_start_time = 0,
                _pos_before_touch = 0,
                _diff = 0,
                _moved = false,
                that = this,
                mode = this.options.mode
            this.getActiveIndex()

            this.el_width = 0
            this.items_count = this.$items.length

            this.$slideline = this.$element.find('.vc-carousel-slideline')
            this.slideline = this.$slideline.get(0)
            this.$slideline_inner = this.$slideline.find('> div')
            this.slideline_inner = this.$slideline_inner.get(0)

            this.partial_part = 0.8
            this._slide_width = 0
            this.swipe_velocity = 0.7
            this.current_pos_value = 0
            this.current_index = 0 // TODO: default start position by options
            this.el_effect_size = 0
            this.transition_speed = 600

            this.$left_control = this.$element.find('.vc-left.vc-carousel-control')
            this.$right_control = this.$element.find('.vc-right.vc-carousel-control')

            // Enable autoHeight if partial
            if (this.options.partial) this.options.autoHeight = true
                // Add Css classes for perView > 1
            if (this.options.perView > 1) this.$element.addClass('vc-per-view-more vc-per-view-' + this.options.perView)

            if (mode === 'horizontal') {
                this.pos_units = '%'
                this._step = 100.00 / this.items_count / this.options.perView
                this.animation_position = 'left'
                this.$items.width(this._step + this.pos_units)
                this.touch_direction = 'pageX'
            } else {
                this.pos_units = 'px'
                this.animation_position = 'top'
                this.touch_direction = 'pageY'
            }
            // Hide first control if this.current_index === 0
            if (this.options.hideOnEnd) this.showHideControl()
                // Add partial css class if partial
            if (this.options.partial) this.$element.addClass('vc_partial')
                // Set indicator
            if (this.$indicators.length) {
                var $active_indecators = that.$indicators.children()
                    .slice(this.current_index, this.current_index + this.options.perView)
                    .addClass('vc-active')
                this.options.partial && $active_indecators.last().next().addClass('vc_partial')
            }
            $(window).resize(this.resizeAction.bind(this));
            this.resizeAction()
            if (el.addEventListener) {

                //IE 8 or lower
                el.addEventListener("touchstart", function(e) {
                    _touch_start_position = parseFloat(e[that.touch_direction])
                    _touch_start_time = e.timeStamp
                    _pos_before_touch = that.$slideline_inner.position()[that.animation_position]
                }.bind(this), false)
                el.addEventListener('touchmove', function(e) {
                    _diff = parseFloat(e[that.touch_direction]) - _touch_start_position
                    _moved = Math.abs(_diff) > 0
                    if (!_moved) return true
                    e.preventDefault()
                    that.slideline_inner.style[that.animation_position] = (_pos_before_touch + _diff) + 'px'
                }, false)
                el.addEventListener('touchend', function(e) {
                    var time, part, velocity
                    if (_moved) {
                        time = (e.timeStamp - _touch_start_time) / 1000
                        part = _diff / that.el_effect_size
                        velocity = that.velocity(time, part)
                        if ((velocity.x > that.swipe_velocity && part < 0) || part <= -0.7) {
                            that.setSwipeAnimationSpeed()
                            that.next()
                        } else if (velocity.x > that.swipe_velocity || part >= 0.7) {
                            that.setSwipeAnimationSpeed()
                            that.prev()
                        } else {
                            that.returnSwipedSlide()
                        }
                        _moved = false
                    }
                }, false)
            }
            this.$element.addClass('vc-build')

            return this
        }
        // CAROUSEL PLUGIN DEFINITION
        // ==========================

    var old = $.fn.carousel

    $.fn.carousel = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('vc.carousel')
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide

            if (!data) $this.data('vc.carousel', (data = new Carousel(this, options)))
            if (typeof option == 'number') data.to(option)
            else if (action) data[action]()
            else if (options.interval) data.pause().cycle()
        })
    }

    $.fn.carousel.Constructor = Carousel


    // CAROUSEL NO CONFLICT
    // ====================

    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old
        return this
    }


    // CAROUSEL DATA-API
    // =================

    $(document).off('click.vc.carousel.data-api').on('click.vc.carousel.data-api', '[data-slide], [data-slide-to]', function(e) {
        var $this = $(this),
            href
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if (slideIndex) options.interval = false
        $target.carousel(options)

        if (slideIndex = $this.attr('data-slide-to')) {
            $target.data('vc.carousel').to(slideIndex)
        }

        e.preventDefault()
    })

    $(window).on('load', function() {
        $('[data-ride="vc-carousel"]').each(function() {
            var $carousel = $(this)
            $carousel.carousel($carousel.data())
        })
    })

})(window.jQuery);;

/* waypoints: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/jquery-waypoints/waypoints.min.js) */
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() { var t = [].indexOf || function(t) { for (var e = 0, n = this.length; e < n; e++) { if (e in this && this[e] === t) return e } return -1 },
        e = [].slice;
    (function(t, e) { if (typeof define === "function" && define.amd) { return define("waypoints", ["jquery"], function(n) { return e(n, t) }) } else { return e(t.jQuery, t) } })(this, function(n, r) { var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = { horizontal: {}, vertical: {} };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) { var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
                this.waypoints = { horizontal: {}, vertical: {} };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() { var t; if (!(e.didScroll || c)) { e.didScroll = true;
                        t = function() { e.doScroll(); return e.didScroll = false }; return r.setTimeout(t, n[m].settings.scrollThrottle) } });
                t.bind(p, function() { var t; if (!e.didResize) { e.didResize = true;
                        t = function() { n[m]("refresh"); return e.didResize = false }; return r.setTimeout(t, n[m].settings.resizeThrottle) } }) }
            t.prototype.doScroll = function() { var t, e = this;
                t = { horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }; if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) { n[m]("refresh") }
                n.each(t, function(t, r) { var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) { var n, i; if (r.oldScroll < (n = e.offset) && n <= r.newScroll) { return l.push(e) } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) { return l.push(e) } });
                    l.sort(function(t, e) { return t.offset - e.offset }); if (!o) { l.reverse() } return n.each(l, function(t, e) { if (e.options.continuous || t === l.length - 1) { return e.trigger([i]) } }) }); return this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll } };
            t.prototype.refresh = function() { var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = { horizontal: { contextOffset: r ? 0 : e.left, contextScroll: r ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: r ? 0 : e.top, contextScroll: r ? 0 : this.oldScroll.y, contextDimension: r ? n[m]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }; return n.each(t, function(t, e) { return n.each(i.waypoints[t], function(t, r) { var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp]; if (n.isFunction(i)) { i = i.apply(r.element) } else if (typeof i === "string") { i = parseFloat(i); if (r.options.offset.indexOf("%") > -1) { i = Math.ceil(e.contextDimension * i / 100) } }
                        r.offset = o - e.contextOffset + e.contextScroll - i; if (r.options.onlyOnScroll && l != null || !r.enabled) { return } if (l !== null && l < (s = e.oldScroll) && s <= r.offset) { return r.trigger([e.backward]) } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) { return r.trigger([e.forward]) } else if (l === null && e.oldScroll >= r.offset) { return r.trigger([e.forward]) } }) }) };
            t.prototype.checkEmpty = function() { if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) { this.$element.unbind([p, y].join(" ")); return delete a[this.id] } }; return t }();
        l = function() {
            function t(t, e, r) { var i, o;
                r = n.extend({}, n.fn[g].defaults, r); if (r.offset === "bottom-in-view") { r.offset = function() { var t;
                        t = n[m]("viewportHeight"); if (!n.isWindow(e.element)) { t = e.$element.height() } return t - n(this).outerHeight() } }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i) }
            t.prototype.trigger = function(t) { if (!this.enabled) { return } if (this.callback != null) { this.callback.apply(this.element, t) } if (this.options.triggerOnce) { return this.destroy() } };
            t.prototype.disable = function() { return this.enabled = false };
            t.prototype.enable = function() { this.context.refresh(); return this.enabled = true };
            t.prototype.destroy = function() { delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id]; return this.context.checkEmpty() };
            t.getWaypointsByElement = function(t) { var e, r;
                r = n(t).data(w); if (!r) { return [] }
                e = n.extend({}, s.horizontal, s.vertical); return n.map(r, function(t) { return e[t] }) }; return t }();
        d = { init: function(t, e) { var r; if (e == null) { e = {} } if ((r = e.handler) == null) { e.handler = t }
                this.each(function() { var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context; if (!n.isWindow(i)) { i = t.closest(i) }
                    i = n(i);
                    r = a[i.data(u)]; if (!r) { r = new o(i) } return new l(t, r, e) });
                n[m]("refresh"); return this }, disable: function() { return d._invoke(this, "disable") }, enable: function() { return d._invoke(this, "enable") }, destroy: function() { return d._invoke(this, "destroy") }, prev: function(t, e) { return d._traverse.call(this, t, e, function(t, e, n) { if (e > 0) { return t.push(n[e - 1]) } }) }, next: function(t, e) { return d._traverse.call(this, t, e, function(t, e, n) { if (e < n.length - 1) { return t.push(n[e + 1]) } }) }, _traverse: function(t, e, i) { var o, l; if (t == null) { t = "vertical" } if (e == null) { e = r }
                l = h.aggregate(e);
                o = [];
                this.each(function() { var e;
                    e = n.inArray(this, l[t]); return i(o, e, l[t]) }); return this.pushStack(o) }, _invoke: function(t, e) { t.each(function() { var t;
                    t = l.getWaypointsByElement(this); return n.each(t, function(t, n) { n[e](); return true }) }); return this } };
        n.fn[g] = function() { var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : []; if (d[r]) { return d[r].apply(this, t) } else if (n.isFunction(r)) { return d.init.apply(this, arguments) } else if (n.isPlainObject(r)) { return d.init.apply(this, [null, r]) } else if (!r) { return n.error("jQuery Waypoints needs a callback function or handler option.") } else { return n.error("The " + r + " method does not exist in jQuery Waypoints.") } };
        n.fn[g].defaults = { context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false };
        h = { refresh: function() { return n.each(a, function(t, e) { return e.refresh() }) }, viewportHeight: function() { var t; return (t = r.innerHeight) != null ? t : i.height() }, aggregate: function(t) { var e, r, i;
                e = s; if (t) { e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0 } if (!e) { return [] }
                r = { horizontal: [], vertical: [] };
                n.each(r, function(t, i) { n.each(e[t], function(t, e) { return i.push(e) });
                    i.sort(function(t, e) { return t.offset - e.offset });
                    r[t] = n.map(i, function(t) { return t.element }); return r[t] = n.unique(r[t]) }); return r }, above: function(t) { if (t == null) { t = r } return h._filter(t, "vertical", function(t, e) { return e.offset <= t.oldScroll.y }) }, below: function(t) { if (t == null) { t = r } return h._filter(t, "vertical", function(t, e) { return e.offset > t.oldScroll.y }) }, left: function(t) { if (t == null) { t = r } return h._filter(t, "horizontal", function(t, e) { return e.offset <= t.oldScroll.x }) }, right: function(t) { if (t == null) { t = r } return h._filter(t, "horizontal", function(t, e) { return e.offset > t.oldScroll.x }) }, enable: function() { return h._invoke("enable") }, disable: function() { return h._invoke("disable") }, destroy: function() { return h._invoke("destroy") }, extendFn: function(t, e) { return d[t] = e }, _invoke: function(t) { var e;
                e = n.extend({}, s.vertical, s.horizontal); return n.each(e, function(e, n) { n[t](); return true }) }, _filter: function(t, e, r) { var i, o;
                i = a[n(t).data(u)]; if (!i) { return [] }
                o = [];
                n.each(i.waypoints[e], function(t, e) { if (r(i, e)) { return o.push(e) } });
                o.sort(function(t, e) { return t.offset - e.offset }); return n.map(o, function(t) { return t.element }) } };
        n[m] = function() { var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : []; if (h[n]) { return h[n].apply(null, t) } else { return h.aggregate.call(null, n) } };
        n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 }; return i.load(function() { return n[m]("refresh") }) }) }).call(this);;

/* jquery-blockui: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-content/plugins/bitcommerce/assets/js/jquery-blockui/jquery.blockUI.min.js) */
/*!
 * jQuery blockUI plugin
 * Version 2.66.0-2013.10.09
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
(function() { "use strict";

    function e(e) {
        function a(i, a) { var l, h, m = i == window,
                g = a && a.message !== undefined ? a.message : undefined;
            a = e.extend({}, e.blockUI.defaults, a || {}); if (a.ignoreIfBlocked && e(i).data("blockUI.isBlocked")) return;
            a.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, a.overlayCSS || {});
            l = e.extend({}, e.blockUI.defaults.css, a.css || {});
            a.onOverlayClick && (a.overlayCSS.cursor = "pointer");
            h = e.extend({}, e.blockUI.defaults.themedCSS, a.themedCSS || {});
            g = g === undefined ? a.message : g;
            m && o && f(window, { fadeOut: 0 }); if (g && typeof g != "string" && (g.parentNode || g.jquery)) { var y = g.jquery ? g[0] : g,
                    b = {};
                e(i).data("blockUI.history", b);
                b.el = y;
                b.parent = y.parentNode;
                b.display = y.style.display;
                b.position = y.style.position;
                b.parent && b.parent.removeChild(y) }
            e(i).data("blockUI.onUnblock", a.onUnblock); var w = a.baseZ,
                E, S, x, T;
            n || a.forceIframe ? E = e('<iframe class="blockUI" style="z-index:' + w++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + a.iframeSrc + '"></iframe>') : E = e('<div class="blockUI" style="display:none"></div>');
            a.theme ? S = e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + w++ + ';display:none"></div>') : S = e('<div class="blockUI blockOverlay" style="z-index:' + w++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'); if (a.theme && m) { T = '<div class="blockUI ' + a.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (w + 10) + ';display:none;position:fixed">';
                a.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>");
                T += '<div class="ui-widget-content ui-dialog-content"></div>';
                T += "</div>" } else if (a.theme) { T = '<div class="blockUI ' + a.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (w + 10) + ';display:none;position:absolute">';
                a.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>");
                T += '<div class="ui-widget-content ui-dialog-content"></div>';
                T += "</div>" } else m ? T = '<div class="blockUI ' + a.blockMsgClass + ' blockPage" style="z-index:' + (w + 10) + ';display:none;position:fixed"></div>' : T = '<div class="blockUI ' + a.blockMsgClass + ' blockElement" style="z-index:' + (w + 10) + ';display:none;position:absolute"></div>';
            x = e(T); if (g)
                if (a.theme) { x.css(h);
                    x.addClass("ui-widget-content") } else x.css(l);
            a.theme || S.css(a.overlayCSS);
            S.css("position", m ? "fixed" : "absolute");
            (n || a.forceIframe) && E.css("opacity", 0); var N = [E, S, x],
                C = m ? e("body") : e(i);
            e.each(N, function() { this.appendTo(C) });
            a.theme && a.draggable && e.fn.draggable && x.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" }); var k = s && (!e.support.boxModel || e("object,embed", m ? null : i).length > 0); if (r || k) { m && a.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"); if ((r || !e.support.boxModel) && !m) var L = v(i, "borderTopWidth"),
                    A = v(i, "borderLeftWidth"),
                    O = L ? "(0 - " + L + ")" : 0,
                    M = A ? "(0 - " + A + ")" : 0;
                e.each(N, function(e, t) { var n = t[0].style;
                    n.position = "absolute"; if (e < 2) { m ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + a.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"');
                        m ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"');
                        M && n.setExpression("left", M);
                        O && n.setExpression("top", O) } else if (a.centerY) { m && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
                        n.marginTop = 0 } else if (!a.centerY && m) { var r = a.css && a.css.top ? parseInt(a.css.top, 10) : 0,
                            i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + r + ') + "px"';
                        n.setExpression("top", i) } }) } if (g) { a.theme ? x.find(".ui-widget-content").append(g) : x.append(g);
                (g.jquery || g.nodeType) && e(g).show() }(n || a.forceIframe) && a.showOverlay && E.show(); if (a.fadeIn) { var _ = a.onBlock ? a.onBlock : t,
                    D = a.showOverlay && !g ? _ : t,
                    P = g ? _ : t;
                a.showOverlay && S._fadeIn(a.fadeIn, D);
                g && x._fadeIn(a.fadeIn, P) } else { a.showOverlay && S.show();
                g && x.show();
                a.onBlock && a.onBlock() }
            c(1, i, a); if (m) { o = x[0];
                u = e(a.focusableElements, o);
                a.focusInput && setTimeout(p, 20) } else d(x[0], a.centerX, a.centerY); if (a.timeout) { var H = setTimeout(function() { m ? e.unblockUI(a) : e(i).unblock(a) }, a.timeout);
                e(i).data("blockUI.timeout", H) } }

        function f(t, n) { var r, i = t == window,
                s = e(t),
                a = s.data("blockUI.history"),
                f = s.data("blockUI.timeout"); if (f) { clearTimeout(f);
                s.removeData("blockUI.timeout") }
            n = e.extend({}, e.blockUI.defaults, n || {});
            c(0, t, n); if (n.onUnblock === null) { n.onUnblock = s.data("blockUI.onUnblock");
                s.removeData("blockUI.onUnblock") } var h;
            i ? h = e("body").children().filter(".blockUI").add("body > .blockUI") : h = s.find(">.blockUI"); if (n.cursorReset) { h.length > 1 && (h[1].style.cursor = n.cursorReset);
                h.length > 2 && (h[2].style.cursor = n.cursorReset) }
            i && (o = u = null); if (n.fadeOut) { r = h.length;
                h.stop().fadeOut(n.fadeOut, function() {--r === 0 && l(h, a, n, t) }) } else l(h, a, n, t) }

        function l(t, n, r, i) { var s = e(i); if (s.data("blockUI.isBlocked")) return;
            t.each(function(e, t) { this.parentNode && this.parentNode.removeChild(this) }); if (n && n.el) { n.el.style.display = n.display;
                n.el.style.position = n.position;
                n.parent && n.parent.appendChild(n.el);
                s.removeData("blockUI.history") }
            s.data("blockUI.static") && s.css("position", "static");
            typeof r.onUnblock == "function" && r.onUnblock(i, r); var o = e(document.body),
                u = o.width(),
                a = o[0].style.width;
            o.width(u - 1).width(u);
            o[0].style.width = a }

        function c(t, n, r) { var i = n == window,
                s = e(n); if (!t && (i && !o || !i && !s.data("blockUI.isBlocked"))) return;
            s.data("blockUI.isBlocked", t); if (!i || !r.bindEvents || t && !r.showOverlay) return; var u = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
            t ? e(document).bind(u, r, h) : e(document).unbind(u, h) }

        function h(t) { if (t.type === "keydown" && t.keyCode && t.keyCode == 9 && o && t.data.constrainTabKey) { var n = u,
                    r = !t.shiftKey && t.target === n[n.length - 1],
                    i = t.shiftKey && t.target === n[0]; if (r || i) { setTimeout(function() { p(i) }, 10); return !1 } } var s = t.data,
                a = e(t.target);
            a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t); return a.parents("div." + s.blockMsgClass).length > 0 ? !0 : a.parents().children().filter("div.blockUI").length === 0 }

        function p(e) { if (!u) return; var t = u[e === !0 ? u.length - 1 : 0];
            t && t.focus() }

        function d(e, t, n) { var r = e.parentNode,
                i = e.style,
                s = (r.offsetWidth - e.offsetWidth) / 2 - v(r, "borderLeftWidth"),
                o = (r.offsetHeight - e.offsetHeight) / 2 - v(r, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0");
            n && (i.top = o > 0 ? o + "px" : "0") }

        function v(t, n) { return parseInt(e.css(t, n), 10) || 0 }
        e.fn._fadeIn = e.fn.fadeIn; var t = e.noop || function() {},
            n = /MSIE/.test(navigator.userAgent),
            r = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            i = document.documentMode || 0,
            s = e.isFunction(document.createElement("div").style.setExpression);
        e.blockUI = function(e) { a(window, e) };
        e.unblockUI = function(e) { f(window, e) };
        e.growlUI = function(t, n, r, i) { var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>");
            n && s.append("<h2>" + n + "</h2>");
            r === undefined && (r = 3e3); var o = function(t) { t = t || {};
                e.blockUI({ message: s, fadeIn: typeof t.fadeIn != "undefined" ? t.fadeIn : 700, fadeOut: typeof t.fadeOut != "undefined" ? t.fadeOut : 1e3, timeout: typeof t.timeout != "undefined" ? t.timeout : r, centerY: !1, showOverlay: !1, onUnblock: i, css: e.blockUI.defaults.growlCSS }) };
            o(); var u = s.css("opacity");
            s.mouseover(function() { o({ fadeIn: 0, timeout: 3e4 }); var t = e(".blockMsg");
                t.stop();
                t.fadeTo(300, 1) }).mouseout(function() { e(".blockMsg").fadeOut(1e3) }) };
        e.fn.block = function(t) { if (this[0] === window) { e.blockUI(t); return this } var n = e.extend({}, e.blockUI.defaults, t || {});
            this.each(function() { var t = e(this); if (n.ignoreIfBlocked && t.data("blockUI.isBlocked")) return;
                t.unblock({ fadeOut: 0 }) }); return this.each(function() { if (e.css(this, "position") == "static") { this.style.position = "relative";
                    e(this).data("blockUI.static", !0) }
                this.style.zoom = 1;
                a(this, t) }) };
        e.fn.unblock = function(t) { if (this[0] === window) { e.unblockUI(t); return this } return this.each(function() { f(this, t) }) };
        e.blockUI.version = 2.66;
        e.blockUI.defaults = { message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" }, themedCSS: { width: "30%", top: "40%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: .6, cursor: "wait" }, cursorReset: "default", growlCSS: { width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1e3, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 }; var o = null,
            u = [] }
    typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery) })();;

/* dt-plugins: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-content/themes/qfy-01/js/plugins.js) */
/*jquery-parallax*/
/*scroll ç”¨åˆ°*/
if (typeof jQuery.easing["jswing"] == "undefined") { jQuery.easing["jswing"] = jQuery.easing["swing"];
    jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(e, t, n, r, i) { return jQuery.easing[jQuery.easing.def](e, t, n, r, i) }, easeInQuad: function(e, t, n, r, i) { return r * (t /= i) * t + n }, easeOutQuad: function(e, t, n, r, i) { return -r * (t /= i) * (t - 2) + n }, easeInOutQuad: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t + n; return -r / 2 * (--t * (t - 2) - 1) + n }, easeInCubic: function(e, t, n, r, i) { return r * (t /= i) * t * t + n }, easeOutCubic: function(e, t, n, r, i) { return r * ((t = t / i - 1) * t * t + 1) + n }, easeInOutCubic: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t + n; return r / 2 * ((t -= 2) * t * t + 2) + n }, easeInQuart: function(e, t, n, r, i) { return r * (t /= i) * t * t * t + n }, easeOutQuart: function(e, t, n, r, i) { return -r * ((t = t / i - 1) * t * t * t - 1) + n }, easeInOutQuart: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n; return -r / 2 * ((t -= 2) * t * t * t - 2) + n }, easeInQuint: function(e, t, n, r, i) { return r * (t /= i) * t * t * t * t + n }, easeOutQuint: function(e, t, n, r, i) { return r * ((t = t / i - 1) * t * t * t * t + 1) + n }, easeInOutQuint: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n; return r / 2 * ((t -= 2) * t * t * t * t + 2) + n }, easeInSine: function(e, t, n, r, i) { return -r * Math.cos(t / i * (Math.PI / 2)) + r + n }, easeOutSine: function(e, t, n, r, i) { return r * Math.sin(t / i * (Math.PI / 2)) + n }, easeInOutSine: function(e, t, n, r, i) { return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n }, easeInExpo: function(e, t, n, r, i) { return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n }, easeOutExpo: function(e, t, n, r, i) { return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n }, easeInOutExpo: function(e, t, n, r, i) { if (t == 0) return n; if (t == i) return n + r; if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n; return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n }, easeInCirc: function(e, t, n, r, i) { return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n }, easeOutCirc: function(e, t, n, r, i) { return r * Math.sqrt(1 - (t = t / i - 1) * t) + n }, easeInOutCirc: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n; return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n }, easeInElastic: function(e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i) == 1) return n + r; if (!o) o = i * .3; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n }, easeOutElastic: function(e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i) == 1) return n + r; if (!o) o = i * .3; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n }, easeInOutElastic: function(e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i / 2) == 2) return n + r; if (!o) o = i * .3 * 1.5; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n; return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n }, easeInBack: function(e, t, n, r, i, s) { if (s == undefined) s = 1.70158; return r * (t /= i) * t * ((s + 1) * t - s) + n }, easeOutBack: function(e, t, n, r, i, s) { if (s == undefined) s = 1.70158; return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n }, easeInOutBack: function(e, t, n, r, i, s) { if (s == undefined) s = 1.70158; if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n; return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n }, easeInBounce: function(e, t, n, r, i) { return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n }, easeOutBounce: function(e, t, n, r, i) { if ((t /= i) < 1 / 2.75) { return r * 7.5625 * t * t + n } else if (t < 2 / 2.75) { return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n } else if (t < 2.5 / 2.75) { return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n } else { return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n } }, easeInOutBounce: function(e, t, n, r, i) { if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n; return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n } }) }

/**
 * jquery.dlmenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;
(function($, window, undefined) {

    // global
    var Modernizr = window.Modernizr,
        $body = $('body');

    $.DLMenu = function(options, element) {
        this.$el = $(element);
        this._init(options);
    };

    // the options
    $.DLMenu.defaults = {
        // classes for the animation effects
        animationClasses: { animIn: 'dl-animate-in-2', animOut: 'dl-animate-out-2' }
    };

    $.DLMenu.prototype = {
        _init: function(options) {

            // options
            this.options = $.extend(true, {}, $.DLMenu.defaults, options);
            // cache some elements and initialize some variables
            this._config();

            var animEndEventNames = {
                    'WebkitAnimation': 'webkitAnimationEnd',
                    'OAnimation': 'oAnimationEnd',
                    'msAnimation': 'MSAnimationEnd',
                    'animation': 'animationend'
                },
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                };
            // animation end event name
            this.animEndEventName = animEndEventNames['animation'] + '.dlmenu';
            // transition end event name
            this.transEndEventName = transEndEventNames['transition'] + '.dlmenu',
                // support for css animations and css transitions
                this.supportAnimations = true,
                this.supportTransitions = true;

            this._initEvents();

        },
        _config: function() {
            this.open = false;
            this.$trigger = this.$el.find('#mobile-menu');
            /* ! !changed */
            this.openCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden phone-text">' + this.$el.find('.menu-open').html() + "</span><span class='mobile_icon glyphicon glyphicon-icon-angle-down' ></span>";
            this.closeCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden  phone-text">' + this.$el.find('.menu-close').html() + "</span><span class='mobile_icon  glyphicon glyphicon-icon-angle-down' ></span>";
            /* !changed: end */

            if ($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length > 0 && this.$trigger.closest(".qfy-listcatecontrols").length == 0) {
                this.$menu = jQuery('.floatwarpper ul.dl-menu');
            } else {
                this.$menu = this.$el.find('ul.dl-menu');
            }
            this.$menuitems = this.$menu.find('li:not(.dl-back)');



            this.$back = this.$menu.find('li.dl-back');
            this.$menuitems.each(function() {
                var $item_new = $(this),
                    $submenu_new = $item_new.children('ul.dl-submenu');
                $item_new.siblings(".new-column").find("> a").remove();
                var new_col_sub = $item_new.siblings(".new-column").find("> ul.dl-submenu").unwrap();
                new_col_sub.find("> a, > .dl-back").remove();
                new_col_sub.children().unwrap().appendTo($submenu_new);
                $item_new.siblings(".new-column").remove();
                if ($item_new.find("> a").attr("href") == "#") {
                    $item_new.find("> a").removeAttr("href");
                }
            });
        },
        _initEvents: function() {

            var self = this;
            self.not_close_menu = false;
            if (self.$trigger.parent().hasClass("notcloseparent")) {
                self.not_close_menu = true;
                self.$trigger.parent().find(".menu-item.dl-back").remove();
            }
            this.$trigger.unbind().on('click.dlmenu', function(event) {

                if (self.open) {
                    if (self.not_close_menu) {
                        if ($(event.currentTarget).hasClass("dropCenterStyle")) {
                            self._closeMenu();
                        }
                    } else {
                        self._closeMenu();
                    }
                } else {
                    self._openMenu();
                    // clicking somewhere else makes the menu close

                    if (self.$trigger.hasClass("leftbtnmenu")) {
                        if (jQuery("body >.dl-menu-film").length == 0) {
                            jQuery("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
                        }
                        jQuery("body >.dl-menu-film").off('click').on('click.dlmenu', function() {
                            self._closeMenu();
                        });
                    } else if (self.not_close_menu) {
                        //...
                    } else {
                        $body.off('click').on('click.dlmenu', function() {
                            self._closeMenu();
                        });
                    }

                }
                return false;

            });

            this.$menuitems.on('click.dlmenu', function(event) {
                if ($(this).closest(".dl-menuwrapper").css("visibility") == "hidden") {
                    return;
                }
                event.stopPropagation();

                var $item = $(this),
                    $submenu = $item.children('ul.dl-submenu');


                if ($submenu.length > 0) {
                    var xx = event.pageX;
                    var width = $submenu.width();

                    var isclick = width - xx > 35;

                    if ($item.closest("#dl-menu").find(">#mobile-menu").hasClass("firstopensub") || jQuery("#dl-menu >#mobile-menu").hasClass("firstopensub")) {
                        var textw = $item.find(">a>span").width() * 1 + $item.find(">a>span").offset().left * 1;
                        isclick = xx < textw;
                    }
                    if (!$item.find(">a").attr("href")) {
                        //æ— é“¾æŽ¥
                        isclick = false;
                    }
                    if (isclick) {
                        if ($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#") > -1) {
                            //self._closeMenu();
                        }
                    } else {
                        //...

                        if ($(this).closest(".dl-menuwrapper").hasClass("leftbtnmenu") || self.not_close_menu) {
                            if ($submenu.css("display") != "block") {
                                var h = $submenu.height();
                                $submenu.show().css("height", 0).animate({ height: h }, 150, function() {
                                    $submenu.attr("style", "display:block;");
                                });
                                $item.addClass('dl-subviewopen');
                            } else {
                                $submenu.animate({ height: 0 }, 150, function() {
                                    $submenu.hide();
                                });

                                $item.removeClass('dl-subviewopen')
                            }
                        } else {
                            $("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);

                            var $flyin = $submenu.clone().insertAfter(self.$menu).addClass(self.options.animationClasses.animIn),
                                onAnimationEndFn = function() {
                                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.animOut).addClass('dl-subview');
                                    $item.addClass('dl-subviewopen').parents('.dl-subviewopen:first').removeClass('dl-subviewopen').addClass('dl-subview');
                                    $item.addClass('qfy-subviewopen');
                                    $flyin.remove();
                                };

                            self.$menu.addClass(self.options.animationClasses.animOut);


                            if (self.supportAnimations) {
                                self.$menu.on(self.animEndEventName, onAnimationEndFn);
                            } else {
                                onAnimationEndFn.call();
                            }


                        }



                        return false;
                    }

                } else {

                    if ($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#") > -1 && !self.not_close_menu) {
                        self._closeMenu();
                    }

                }
            });

            this.$back.on('click.dlmenu', function(event) {

                $("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);

                var $this = $(this),
                    $submenu = $this.parents('ul.dl-submenu:first'),
                    $item = $submenu.parent(),


                    $flyin = $submenu.clone().insertAfter(self.$menu).addClass(self.options.animationClasses.animOut);

                var onAnimationEndFn = function() {
                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.animIn);
                    $flyin.remove();
                };

                self.$menu.addClass(self.options.animationClasses.animIn);

                if (self.supportAnimations) {
                    self.$menu.on(self.animEndEventName, onAnimationEndFn);
                } else {
                    onAnimationEndFn.call();
                }

                $item.removeClass('dl-subviewopen').removeClass("qfy-subviewopen");

                var $subview = $this.parents('.dl-subview:first');
                if ($subview.is('li')) {
                    $subview.addClass('dl-subviewopen').addClass("qfy-subviewopen");
                }
                $subview.removeClass('dl-subview');

                return false;

            });

        },
        _closeMenu: function() {
            var self = this,
                onTransitionEndFn = function() {
                    self.$menu.off(self.transEndEventName);
                    self._resetMenu();
                };

            this.$menu.removeClass('dl-menuopen');
            this.$menu.parent().removeClass("dl-menuopen-parent");
            if ($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length > 0 && this.$trigger.closest(".qfy-listcatecontrols").length == 0) {
                $(".mobilefloatmenu.dl-menu-open #page").removeAttr("style");
                $(".dl-menu-open .floatwarpper").removeAttr("style");
                $(".floatwarpper .dl-container").removeAttr("style");
                $("#page #dl-menu").removeAttr("style");
                $("body > #dl-menu").remove();
                var element_right = $("#mobile-menu").attr("data-right");
                if (element_right) {
                    $("#dl-menu").css("right", element_right + "px");
                }
                var element_top = $("#mobile-menu").attr("data-top");
                if (element_top) {
                    $("#dl-menu").css("top", element_top + "px");
                }
            }
            $("body").removeClass("dl-menu-open");
            this.$menu.addClass('dl-menu-toggle');
            if (this.$menu.closest("section.section").length > 0) {
                var style = this.$menu.closest("section.section").attr("style");
                style = style.replace(/min-height:\s*\d+px;*/g, "");
                this.$menu.closest("section.section").attr("style", style);
            }
            this.$trigger.removeClass('dl-active').html(this.openCap);

            if (this.supportTransitions) {
                this.$menu.on(this.transEndEventName, onTransitionEndFn);
            } else {
                onTransitionEndFn.call();
            }

            this.open = false;

            /*
            			this.$el.css({
            				position : "fixed",
            				top : ""
            			});
            */
        },
        _openMenu: function() {

            this.$menu.parent().addClass("dl-menuopen-parent");
            this.$menu.addClass('dl-menuopen dl-menu-toggle').on(this.transEndEventName, function() {
                $(this).removeClass('dl-menu-toggle');
            });
            if ($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length > 0 && this.$menu.closest(".qfy-listcatecontrols").length == 0) {

                var $this = this;
                $("body").addClass("dl-menu-open");
                var width = $('html').width();
                if ($("#mobile-menu").hasClass("fullfloatmenu")) {
                    var w = width;
                } else {
                    var w = width - 60;
                }

                if (!$(".floatwarpper").hasClass("leftbtnmenu")) {
                    $(".mobilefloatmenu.dl-menu-open #page").css('transform', 'translate3d(-' + w + 'px, 0px, 0px)').css('-webkit-transform', 'translate3d(-' + w + 'px,0,0)');
                    $(".dl-menu-open .floatwarpper").css('transform', 'translate3d(-' + w + 'px, 0px, 0px)').css('-webkit-transform', 'translate3d(-' + w + 'px,0,0)');
                    $(".floatwarpper").width(w).css("right", "-" + w + "px");
                }
                $(".floatwarpper .dl-container").css("max-width", "100%");
                var element_top = $("#mobile-menu").attr("data-top");
                var element_right = $("#mobile-menu").attr("data-right");
                if (element_top) {
                    $("#page #dl-menu").css("top", element_top + "px");
                    $("body > #dl-menu").css("top", element_top + "px");
                }
                setTimeout(function() {
                    if (!$(".floatwarpper").hasClass("leftbtnmenu")) {
                        $("#page #dl-menu").removeClass("dl-menu-hidden");
                        var menu_html = $("#page #dl-menu").prop("outerHTML");
                        $("body").prepend(menu_html);
                        if (element_top) {
                            $("body > #dl-menu").css("top", element_top + "px");
                        }
                        $("#page #dl-menu").addClass("dl-menu-hidden");

                        if ($("#mobile-menu").hasClass("fullfloatmenu")) {
                            $("body > #dl-menu").css("right", element_right + "px");
                        } else {
                            $("body > #dl-menu").css("right", (1 * w + 8) + "px");
                        }
                    }
                    $("body > #dl-menu").unbind().bind("click", function(e) {
                        e.stopPropagation();
                        $this.$trigger.click();
                        return false;
                    });

                }, 200)

            }
            this.$trigger.addClass('dl-active').html(this.closeCap);
            this.open = true;
            if (this.$menu.closest("section.section").length > 0) {
                var minheight = this.$menu.height();
                this.$menu.closest("section.section").css("min-height", minheight + "px");
            }
            if (!$(".floatwarpper").hasClass("leftbtnmenu")) {
                $("html, body").animate({ scrollTop: this.$el.offset().top - 20 }, 150);
            }
        },
        // resets the menu to its original state (first level of options)
        _resetMenu: function() {
            if (!this.$menu.closest(".dl-menuwrapper").hasClass("leftbtnmenu") && !this.not_close_menu) {
                this.$menu.removeClass('dl-subview');
                this.$menuitems.removeClass('dl-subview dl-subviewopen');
            }
        }
    };

    var logError = function(message) {
        if (window.console) {
            window.console.error(message);
        }
    };

    $.fn.dlmenu = function(options) {
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var instance = $.data(this, 'dlmenu');
                if (!instance) {
                    logError("cannot call methods on dlmenu prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for dlmenu instance");
                    return;
                }
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function() {
                var instance = $.data(this, 'dlmenu');
                if (instance) {
                    instance._init();
                } else {
                    instance = $.data(this, 'dlmenu', new $.DLMenu(options, this));
                }
            });
        }
        return this;
    };

})(jQuery, window);
/****************************************************************************************************************************/
/* !- Tooltip*/
function simple_tooltip(e, t) { jQuery(e).each(function(e) { jQuery("body").append("<div class='" + t + "' id='" + t + e + "'>" + jQuery(this).find("span.tooltip-c").html() + "</div>"); var n = jQuery("#" + t + e);
        jQuery(this).removeAttr("title").mouseover(function() { n.css({ opacity: 1, display: "none" }).fadeIn(400) }).mousemove(function(e) { var t = jQuery(window).scrollTop(); var r = jQuery(window).width(); var i; var s; var o = 15; if (r - o * 2 >= n.width() + e.pageX) { i = e.pageX + o } else { i = r - n.width() - o } if (t + o * 2 >= e.pageY - n.height()) { s = t + o } else { s = e.pageY - n.height() - 2.2 * o }
            n.css({ left: i, top: s }) }).mouseout(function() { n.css({ left: "-9999px" }) }) }) }

/* !Sandbox */

/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */
jQuery(document).ready(function(a) { a.fn.extend({ customSelect: function(c) { if (typeof document.body.style.maxHeight === "undefined") { return this } var e = { customClass: "customSelect", mapClass: true, mapStyle: true },
                c = a.extend(e, c),
                d = c.customClass,
                f = function(h, k) { var g = h.find(":selected"),
                        j = k.children(":first"),
                        i = g.html() || "&nbsp;";
                    j.html(i); if (g.attr("disabled")) { k.addClass(b("DisabledOption")) } else { k.removeClass(b("DisabledOption")) }
                    setTimeout(function() { k.removeClass(b("Open"));
                        a(document).off("mouseup." + b("Open")) }, 60) },
                b = function(g) { return d + g }; return this.each(function() { var g = a(this),
                    i = a("<span />").addClass(b("Inner")),
                    h = a("<span />");
                g.after(h.append(i));
                h.addClass(d); if (c.mapClass) { h.addClass(g.attr("class")) } if (c.mapStyle) { h.attr("style", g.attr("style")) }
                g.addClass("hasCustomSelect").on("update", function() { f(g, h); var k = parseInt(g.outerWidth(), 10) - (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10));
                    h.css({ display: "inline-block" }); var j = h.outerHeight(); if (g.attr("disabled")) { h.addClass(b("Disabled")) } else { h.removeClass(b("Disabled")) }
                    i.css({ width: k, display: "inline-block" });
                    g.css({ "-webkit-appearance": "menulist-button", width: h.outerWidth(), position: "absolute", opacity: 0, height: j, fontSize: h.css("font-size") }) }).on("change", function() { h.addClass(b("Changed"));
                    f(g, h) }).on("keyup", function(j) { if (!h.hasClass(b("Open"))) { g.blur();
                        g.focus() } else { if (j.which == 13 || j.which == 27) { f(g, h) } } }).on("mousedown", function(j) { h.removeClass(b("Changed")) }).on("mouseup", function(j) { if (!h.hasClass(b("Open"))) { if (a("." + b("Open")).not(h).length > 0 && typeof InstallTrigger !== "undefined") { g.focus() } else { h.addClass(b("Open"));
                            j.stopPropagation();
                            a(document).one("mouseup." + b("Open"), function(k) { if (k.target != g.get(0) && a.inArray(k.target, g.find("*").get()) < 0) { g.blur() } else { f(g, h) } }) } } }).focus(function() { h.removeClass(b("Changed")).addClass(b("Focus")) }).blur(function() { h.removeClass(b("Focus") + " " + b("Open")) }).hover(function() { h.addClass(b("Hover")) }, function() { h.removeClass(b("Hover")) }).trigger("update") }) } }) });


/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;
(function($, window, undefined) {

    'use strict';

    $.HoverDir = function(options, element) {

        this.$el = $(element);
        this._init(options);

    };

    // the options
    $.HoverDir.defaults = {
        speed: 300,
        easing: 'ease',
        hoverDelay: 0,
        inverse: false
    };

    $.HoverDir.prototype = {

        _init: function(options) {

            // options
            this.options = $.extend(true, {}, $.HoverDir.defaults, options);
            // transition properties
            this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
            // support for CSS transitions
            this.support = Modernizr.csstransitions;
            // load the events
            this._loadEvents();

        },
        _loadEvents: function() {

            var self = this;

            this.$el.on('mouseenter.hoverdir, mouseleave.hoverdir', function(event) {

                var $el = $(this),
                    $hoverElem = $el.find('div.rollover-content, div.fs-entry-content'),
                    direction = self._getDir($el, { x: event.pageX, y: event.pageY }),
                    styleCSS = self._getStyle(direction);

                if (event.type === 'mouseenter') {

                    $hoverElem.hide().css(styleCSS.from);
                    clearTimeout(self.tmhover);

                    self.tmhover = setTimeout(function() {

                        $hoverElem.show(0, function() {

                            var $el = $(this);
                            if (self.support) {
                                $el.css('transition', self.transitionProp);
                            }
                            self._applyAnimation($el, styleCSS.to, self.options.speed);

                        });


                    }, self.options.hoverDelay);

                } else {

                    if (self.support) {
                        $hoverElem.css('transition', self.transitionProp);
                    }
                    clearTimeout(self.tmhover);
                    self._applyAnimation($hoverElem, styleCSS.from, self.options.speed);

                }

            });

        },
        // credits : http://stackoverflow.com/a/3647634
        _getDir: function($el, coordinates) {

            // the width and height of the current div
            var w = $el.width(),
                h = $el.height(),

                // calculate the x and y to get an angle to the center of the div from that x and y.
                // gets the x value relative to the center of the DIV and "normalize" it
                x = (coordinates.x - $el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
                y = (coordinates.y - $el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),

                // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
                // first calculate the angle of the point,
                // add 180 deg to get rid of the negative values
                // divide by 90 to get the quadrant
                // add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
                direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

            return direction;

        },
        _getStyle: function(direction) {

            var fromStyle, toStyle,
                slideFromTop = { left: '0px', top: '-100%' },
                slideFromBottom = { left: '0px', top: '100%' },
                slideFromLeft = { left: '-100%', top: '0px' },
                slideFromRight = { left: '100%', top: '0px' },
                slideTop = { top: '0px' },
                slideLeft = { left: '0px' };

            switch (direction) {
                case 0:
                    // from top
                    fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
                    toStyle = slideTop;
                    break;
                case 1:
                    // from right
                    fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
                    toStyle = slideLeft;
                    break;
                case 2:
                    // from bottom
                    fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
                    toStyle = slideTop;
                    break;
                case 3:
                    // from left
                    fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
                    toStyle = slideLeft;
                    break;
            };

            return { from: fromStyle, to: toStyle };

        },
        // apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
        _applyAnimation: function(el, styleCSS, speed) {

            $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
            el.stop().applyStyle(styleCSS, $.extend(true, [], { duration: speed + 'ms' }));

        },

    };

    var logError = function(message) {

        if (window.console) {

            window.console.error(message);

        }

    };

    $.fn.hoverdir = function(options) {

        var instance = $.data(this, 'hoverdir');

        if (typeof options === 'string') {

            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function() {

                if (!instance) {

                    logError("cannot call methods on hoverdir prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;

                }

                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {

                    logError("no such method '" + options + "' for hoverdir instance");
                    return;

                }

                instance[options].apply(instance, args);

            });

        } else {

            this.each(function() {

                if (instance) {

                    instance._init();

                } else {

                    instance = $.data(this, 'hoverdir', new $.HoverDir(options, this));

                }

            });

        }

        return instance;

    };

})(jQuery, window);

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) { if (typeof value != 'undefined') { options = options || {}; if (value === null) { value = '';
            options = $.extend({}, options);
            options.expires = -1; } var expires = ''; if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) { var date; if (typeof options.expires == 'number') { date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000)); } else { date = options.expires; }
            expires = '; expires=' + date.toUTCString(); } var path = options.path ? '; path=' + (options.path) : ''; var domain = options.domain ? '; domain=' + (options.domain) : ''; var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join(''); } else { var cookieValue = null; if (document.cookie && document.cookie != '') { var cookies = document.cookie.split(';'); for (var i = 0; i < cookies.length; i++) { var cookie = jQuery.trim(cookies[i]); if (cookie.substring(0, name.length + 1) == (name + '=')) { cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); break; } } } return cookieValue; } };

/* Sandbox: end */
;

/* dt-main-op-jquery: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/FeiEditor/bitSite/js/opentip-jquery.min.js) */
// Opentip v2.4.6
// Copyright (c) 2009-2012
// www.opentip.org
// MIT Licensed
var Opentip, firstAdapter, i, mouseMoved, mousePosition, mousePositionObservers, position, vendors, _i, _len, _ref, __slice = [].slice,
    __indexOf = [].indexOf || function(t) { for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
        return -1 },
    __hasProp = {}.hasOwnProperty;
for (Opentip = function() {
        function t(e, i, o, s) { var n, r, a, h, p, d, l, u, c, g, f, m, v, b, w = this; if (this.id = ++t.lastId, this.debug("Creating Opentip."), t.tips.push(this), this.adapter = t.adapter, n = this.adapter.data(e, "opentips") || [], n.push(this), this.adapter.data(e, "opentips", n), this.triggerElement = this.adapter.wrap(e), this.triggerElement.length > 1) throw Error("You can't call Opentip on multiple elements."); if (1 > this.triggerElement.length) throw Error("Invalid element.");
            this.loaded = !1, this.loading = !1, this.visible = !1, this.waitingToShow = !1, this.waitingToHide = !1, this.currentPosition = { left: 0, top: 0 }, this.dimensions = { width: 100, height: 50 }, this.content = "", this.redraw = !0, this.currentObservers = { showing: !1, visible: !1, hiding: !1, hidden: !1 }, s = this.adapter.clone(s), typeof i == "object" ? (s = i, i = o = void 0) : typeof o == "object" && (s = o, o = void 0), o != null && (s.title = o), i != null && this.setContent(i), s["extends"] == null && (s["extends"] = s.style != null ? s.style : t.defaultStyle), h = [s], b = s; while (b["extends"]) { if (d = b["extends"], b = t.styles[d], b == null) throw Error("Invalid style: " + d);
                h.unshift(b), b["extends"] == null && d !== "standard" && (b["extends"] = "standard") } for (s = (f = this.adapter).extend.apply(f, [{}].concat(__slice.call(h))), s.hideTriggers = function() { var t, e, i, o; for (i = s.hideTriggers, o = [], t = 0, e = i.length; e > t; t++) r = i[t], o.push(r); return o }(), s.hideTrigger && s.hideTriggers.length === 0 && s.hideTriggers.push(s.hideTrigger), m = ["tipJoint", "targetJoint", "stem"], l = 0, c = m.length; c > l; l++) p = m[l], s[p] && typeof s[p] == "string" && (s[p] = new t.Joint(s[p])); for (!s.ajax || s.ajax !== !0 && s.ajax || (s.ajax = this.adapter.tagName(this.triggerElement) === "A" ? this.adapter.attr(this.triggerElement, "href") : !1), s.showOn === "click" && this.adapter.tagName(this.triggerElement) === "A" && this.adapter.observe(this.triggerElement, "click", function(t) { return t.preventDefault(), t.stopPropagation(), t.stopped = !0 }), s.target && (s.fixed = !0), s.stem === !0 && (s.stem = new t.Joint(s.tipJoint)), s.target === !0 ? s.target = this.triggerElement : s.target && (s.target = this.adapter.wrap(s.target)), this.currentStem = s.stem, s.delay == null && (s.delay = s.showOn === "mouseover" ? .2 : 0), s.targetJoint == null && (s.targetJoint = new t.Joint(s.tipJoint).flip()), this.showTriggers = [], this.showTriggersWhenVisible = [], this.hideTriggers = [], s.showOn && s.showOn !== "creation" && this.showTriggers.push({ element: this.triggerElement, event: s.showOn }), s.ajaxCache != null && (s.cache = s.ajaxCache, delete s.ajaxCache), this.options = s, this.bound = {}, v = ["prepareToShow", "prepareToHide", "show", "hide", "reposition"], u = 0, g = v.length; g > u; u++) a = v[u], this.bound[a] = function(t) { return function() { return w[t].apply(w, arguments) } }(a);
            this.adapter.domReady(function() { return w.activate(), w.options.showOn === "creation" ? w.prepareToShow() : void 0 }) } return t.prototype.STICKS_OUT_TOP = 1, t.prototype.STICKS_OUT_BOTTOM = 2, t.prototype.STICKS_OUT_LEFT = 1, t.prototype.STICKS_OUT_RIGHT = 2, t.prototype["class"] = { container: "opentip-container", opentip: "opentip", header: "ot-header", content: "ot-content", loadingIndicator: "ot-loading-indicator", close: "ot-close", goingToHide: "ot-going-to-hide", hidden: "ot-hidden", hiding: "ot-hiding", goingToShow: "ot-going-to-show", showing: "ot-showing", visible: "ot-visible", loading: "ot-loading", ajaxError: "ot-ajax-error", fixed: "ot-fixed", showEffectPrefix: "ot-show-effect-", hideEffectPrefix: "ot-hide-effect-", stylePrefix: "style-" }, t.prototype._setup = function() { var t, e, i, o, s, n, r, a, h, p, d; for (this.debug("Setting up the tooltip."), this._buildContainer(), this.hideTriggers = [], h = this.options.hideTriggers, o = s = 0, r = h.length; r > s; o = ++s) { if (e = h[o], i = null, t = this.options.hideOn instanceof Array ? this.options.hideOn[o] : this.options.hideOn, typeof e == "string") switch (e) {
                    case "trigger":
                        t = t || "mouseout", i = this.triggerElement; break;
                    case "tip":
                        t = t || "mouseover", i = this.container; break;
                    case "target":
                        t = t || "mouseover", i = this.options.target; break;
                    case "closeButton":
                        break;
                    default:
                        throw Error("Unknown hide trigger: " + e + ".") } else t = t || "mouseover", i = this.adapter.wrap(e);
                i && this.hideTriggers.push({ element: i, event: t, original: e }) } for (p = this.hideTriggers, d = [], n = 0, a = p.length; a > n; n++) e = p[n], d.push(this.showTriggersWhenVisible.push({ element: e.element, event: "mouseover" })); return d }, t.prototype._buildContainer = function() { return this.container = this.adapter.create('<div id="opentip-' + this.id + '" class="' + this["class"].container + " " + this["class"].hidden + " " + this["class"].stylePrefix + this.options.className + '"></div>'), this.adapter.css(this.container, { position: "absolute" }), this.options.ajax && this.adapter.addClass(this.container, this["class"].loading), this.options.fixed && this.adapter.addClass(this.container, this["class"].fixed), this.options.showEffect && this.adapter.addClass(this.container, "" + this["class"].showEffectPrefix + this.options.showEffect), this.options.hideEffect ? this.adapter.addClass(this.container, "" + this["class"].hideEffectPrefix + this.options.hideEffect) : void 0 }, t.prototype._buildElements = function() { var t, e; return this.tooltipElement = this.adapter.create('<div class="' + this["class"].opentip + '"><div class="' + this["class"].header + '"></div><div class="' + this["class"].content + '"></div></div>'), this.backgroundCanvas = this.adapter.wrap(document.createElement("canvas")), this.adapter.css(this.backgroundCanvas, { position: "absolute" }), typeof G_vmlCanvasManager != "undefined" && G_vmlCanvasManager !== null && G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas)), t = this.adapter.find(this.tooltipElement, "." + this["class"].header), this.options.title && (e = this.adapter.create("<h1></h1>"), this.adapter.update(e, this.options.title, this.options.escapeTitle), this.adapter.append(t, e)), this.options.ajax && !this.loaded && this.adapter.append(this.tooltipElement, this.adapter.create('<div class="' + this["class"].loadingIndicator + '"><span>â†»</span></div>')), __indexOf.call(this.options.hideTriggers, "closeButton") >= 0 && (this.closeButtonElement = this.adapter.create('<a href="javascript:undefined;" class="' + this["class"].close + '"><span>Close</span></a>'), this.adapter.append(t, this.closeButtonElement)), this.adapter.append(this.container, this.backgroundCanvas), this.adapter.append(this.container, this.tooltipElement), this.adapter.append(document.body, this.container), this._newContent = !0, this.redraw = !0 }, t.prototype.setContent = function(t) { return this.content = t, this._newContent = !0, typeof this.content == "function" ? (this._contentFunction = this.content, this.content = "") : this._contentFunction = null, this.visible ? this._updateElementContent() : void 0 }, t.prototype._updateElementContent = function() { var t; return (this._newContent || !this.options.cache && this._contentFunction) && (t = this.adapter.find(this.container, "." + this["class"].content), t != null && (this._contentFunction && (this.debug("Executing content function."), this.content = this._contentFunction(this)), this.adapter.update(t, this.content, this.options.escapeContent)), this._newContent = !1), this._storeAndLockDimensions(), this.reposition() }, t.prototype._storeAndLockDimensions = function() { var t; if (this.container) return t = this.dimensions, this.adapter.css(this.container, { width: "auto", left: "0px", top: "0px" }), this.dimensions = this.adapter.dimensions(this.container), this.dimensions.width += 1, this.adapter.css(this.container, { width: "" + this.dimensions.width + "px", top: "" + this.currentPosition.top + "px", left: "" + this.currentPosition.left + "px" }), this._dimensionsEqual(this.dimensions, t) ? void 0 : (this.redraw = !0, this._draw()) }, t.prototype.activate = function() { return this._setupObservers("hidden", "hiding") }, t.prototype.deactivate = function() { return this.debug("Deactivating tooltip."), this.hide(), this._setupObservers("-showing", "-visible", "-hidden", "-hiding") }, t.prototype._setupObservers = function() { var t, e, i, o, s, n, r, a, h, p, d, l, u, c, g, f, m = this; for (o = arguments.length >= 1 ? __slice.call(arguments, 0) : [], n = 0, p = o.length; p > n; n++)
                if (i = o[n], e = !1, i.charAt(0) === "-" && (e = !0, i = i.substr(1)), this.currentObservers[i] !== !e) switch (this.currentObservers[i] = !e, t = function() { var t, i, o; return t = arguments.length >= 1 ? __slice.call(arguments, 0) : [], e ? (i = m.adapter).stopObserving.apply(i, t) : (o = m.adapter).observe.apply(o, t) }, i) {
                    case "showing":
                        for (c = this.hideTriggers, r = 0, d = c.length; d > r; r++) s = c[r], t(s.element, s.event, this.bound.prepareToHide);
                        t(document.onresize != null ? document : window, "resize", this.bound.reposition), t(window, "scroll", this.bound.reposition); break;
                    case "visible":
                        for (g = this.showTriggersWhenVisible, a = 0, l = g.length; l > a; a++) s = g[a], t(s.element, s.event, this.bound.prepareToShow); break;
                    case "hiding":
                        for (f = this.showTriggers, h = 0, u = f.length; u > h; h++) s = f[h], t(s.element, s.event, this.bound.prepareToShow); break;
                    case "hidden":
                        break;
                    default:
                        throw Error("Unknown state: " + i) }
                return null }, t.prototype.prepareToShow = function() { return this._abortHiding(), this._abortShowing(), this.visible ? void 0 : (this.debug("Showing in " + this.options.delay + "s."), this.container == null && this._setup(), this.options.group && t._abortShowingGroup(this.options.group, this), this.preparingToShow = !0, this._setupObservers("-hidden", "-hiding", "showing"), this._followMousePosition(), this.options.fixed && !this.options.target && (this.initialMousePosition = mousePosition), this.reposition(), this._showTimeoutId = this.setTimeout(this.bound.show, this.options.delay || 0)) }, t.prototype.show = function() { var e = this; return this._abortHiding(), this.visible ? void 0 : (this._clearTimeouts(), this._triggerElementExists() ? (this.debug("Showing now."), this.container == null && this._setup(), this.options.group && t._hideGroup(this.options.group, this), this.visible = !0, this.preparingToShow = !1, this.tooltipElement == null && this._buildElements(), this._updateElementContent(), !this.options.ajax || this.loaded && this.options.cache || this._loadAjax(), this._searchAndActivateCloseButtons(), this._startEnsureTriggerElement(), this.adapter.css(this.container, { zIndex: t.lastZIndex++ }), this._setupObservers("-hidden", "-hiding", "-showing", "-visible", "showing", "visible"), this.options.fixed && !this.options.target && (this.initialMousePosition = mousePosition), this.reposition(), this.adapter.removeClass(this.container, this["class"].hiding), this.adapter.removeClass(this.container, this["class"].hidden), this.adapter.addClass(this.container, this["class"].goingToShow), this.setCss3Style(this.container, { transitionDuration: "0s" }), this.defer(function() { var t; if (e.visible && !e.preparingToHide) return e.adapter.removeClass(e.container, e["class"].goingToShow), e.adapter.addClass(e.container, e["class"].showing), t = 0, e.options.showEffect && e.options.showEffectDuration && (t = e.options.showEffectDuration), e.setCss3Style(e.container, { transitionDuration: "" + t + "s" }), e._visibilityStateTimeoutId = e.setTimeout(function() { return e.adapter.removeClass(e.container, e["class"].showing), e.adapter.addClass(e.container, e["class"].visible) }, t), e._activateFirstInput() }), this._draw()) : this.deactivate()) }, t.prototype._abortShowing = function() { return this.preparingToShow ? (this.debug("Aborting showing."), this._clearTimeouts(), this._stopFollowingMousePosition(), this.preparingToShow = !1, this._setupObservers("-showing", "-visible", "hiding", "hidden")) : void 0 }, t.prototype.prepareToHide = function() { return this._abortShowing(), this._abortHiding(), this.visible ? (this.debug("Hiding in " + this.options.hideDelay + "s"), this.preparingToHide = !0, this._setupObservers("-showing", "visible", "-hidden", "hiding"), this._hideTimeoutId = this.setTimeout(this.bound.hide, this.options.hideDelay)) : void 0 }, t.prototype.hide = function() { var t = this; return this._abortShowing(), this.visible && (this._clearTimeouts(), this.debug("Hiding!"), this.visible = !1, this.preparingToHide = !1, this._stopEnsureTriggerElement(), this._setupObservers("-showing", "-visible", "-hiding", "-hidden", "hiding", "hidden"), this.options.fixed || this._stopFollowingMousePosition(), this.container) ? (this.adapter.removeClass(this.container, this["class"].visible), this.adapter.removeClass(this.container, this["class"].showing), this.adapter.addClass(this.container, this["class"].goingToHide), this.setCss3Style(this.container, { transitionDuration: "0s" }), this.defer(function() { var e; return t.adapter.removeClass(t.container, t["class"].goingToHide), t.adapter.addClass(t.container, t["class"].hiding), e = 0, t.options.hideEffect && t.options.hideEffectDuration && (e = t.options.hideEffectDuration), t.setCss3Style(t.container, { transitionDuration: "" + e + "s" }), t._visibilityStateTimeoutId = t.setTimeout(function() { return t.adapter.removeClass(t.container, t["class"].hiding), t.adapter.addClass(t.container, t["class"].hidden), t.setCss3Style(t.container, { transitionDuration: "0s" }), t.options.removeElementsOnHide ? (t.debug("Removing HTML elements."), t.adapter.remove(t.container), delete t.container, delete t.tooltipElement) : void 0 }, e) })) : void 0 }, t.prototype._abortHiding = function() { return this.preparingToHide ? (this.debug("Aborting hiding."), this._clearTimeouts(), this.preparingToHide = !1, this._setupObservers("-hiding", "showing", "visible")) : void 0 }, t.prototype.reposition = function() { var t, e, i, o = this; return t = this.getPosition(), t == null || (e = this.options.stem, this.options.containInViewport && (i = this._ensureViewportContainment(t), t = i.position, e = i.stem), this._positionsEqual(t, this.currentPosition)) ? void 0 : (this.options.stem && !e.eql(this.currentStem) && (this.redraw = !0), this.currentPosition = t, this.currentStem = e, this._draw(), this.adapter.css(this.container, { left: "" + t.left + "px", top: "" + t.top + "px" }), this.defer(function() { var t, e; return t = o.adapter.unwrap(o.container), t.style.visibility = "hidden", e = t.offsetHeight, t.style.visibility = "visible" })) }, t.prototype.getPosition = function(t, e, i) { var o, s, n, r, a, h, p, d, l; if (this.container) return t == null && (t = this.options.tipJoint), e == null && (e = this.options.targetJoint), r = {}, this.options.target ? (p = this.adapter.offset(this.options.target), h = this.adapter.dimensions(this.options.target), r = p, e.right ? (d = this.adapter.unwrap(this.options.target), d.getBoundingClientRect != null ? r.left = d.getBoundingClientRect().right + ((l = window.pageXOffset) != null ? l : document.body.scrollLeft) : r.left += h.width) : e.center && (r.left += Math.round(h.width / 2)), e.bottom ? r.top += h.height : e.middle && (r.top += Math.round(h.height / 2)), this.options.borderWidth && (this.options.tipJoint.left && (r.left += this.options.borderWidth), this.options.tipJoint.right && (r.left -= this.options.borderWidth), this.options.tipJoint.top ? r.top += this.options.borderWidth : this.options.tipJoint.bottom && (r.top -= this.options.borderWidth))) : r = this.initialMousePosition ? { top: this.initialMousePosition.y, left: this.initialMousePosition.x } : { top: mousePosition.y, left: mousePosition.x }, this.options.autoOffset && (a = this.options.stem ? this.options.stemLength : 0, n = a && this.options.fixed ? 2 : 10, o = t.middle && !this.options.fixed ? 15 : 0, s = t.center && !this.options.fixed ? 15 : 0, t.right ? r.left -= n + o : t.left && (r.left += n + o), t.bottom ? r.top -= n + s : t.top && (r.top += n + s), a && (i == null && (i = this.options.stem), i.right ? r.left -= a : i.left && (r.left += a), i.bottom ? r.top -= a : i.top && (r.top += a))), r.left += this.options.offset[0], r.top += this.options.offset[1], t.right ? r.left -= this.dimensions.width : t.center && (r.left -= Math.round(this.dimensions.width / 2)), t.bottom ? r.top -= this.dimensions.height : t.middle && (r.top -= Math.round(this.dimensions.height / 2)), r }, t.prototype._ensureViewportContainment = function(e) { var i, o, s, n, r, a, h, p, d, l, u, c; if (h = this.options.stem, s = { position: e, stem: h }, !this.visible || !e) return s; if (p = this._sticksOut(e), !p[0] && !p[1]) return s; if (l = new t.Joint(this.options.tipJoint), this.options.targetJoint && (d = new t.Joint(this.options.targetJoint)), a = this.adapter.scrollOffset(), u = this.adapter.viewportDimensions(), c = [e.left - a[0], e.top - a[1]], i = !1, u.width >= this.dimensions.width && p[0]) switch (i = !0, p[0]) {
                case this.STICKS_OUT_LEFT:
                    l.setHorizontal("left"), this.options.targetJoint && d.setHorizontal("right"); break;
                case this.STICKS_OUT_RIGHT:
                    l.setHorizontal("right"), this.options.targetJoint && d.setHorizontal("left") }
            if (u.height >= this.dimensions.height && p[1]) switch (i = !0, p[1]) {
                case this.STICKS_OUT_TOP:
                    l.setVertical("top"), this.options.targetJoint && d.setVertical("bottom"); break;
                case this.STICKS_OUT_BOTTOM:
                    l.setVertical("bottom"), this.options.targetJoint && d.setVertical("top") }
            return i ? (this.options.stem && (h = l), e = this.getPosition(l, d, h), o = this._sticksOut(e), n = !1, r = !1, o[0] && o[0] !== p[0] && (n = !0, l.setHorizontal(this.options.tipJoint.horizontal), this.options.targetJoint && d.setHorizontal(this.options.targetJoint.horizontal)), o[1] && o[1] !== p[1] && (r = !0, l.setVertical(this.options.tipJoint.vertical), this.options.targetJoint && d.setVertical(this.options.targetJoint.vertical)), n && r ? s : ((n || r) && (this.options.stem && (h = l), e = this.getPosition(l, d, h)), { position: e, stem: h })) : s }, t.prototype._sticksOut = function(t) { var e, i, o, s; return i = this.adapter.scrollOffset(), s = this.adapter.viewportDimensions(), e = [t.left - i[0], t.top - i[1]], o = [!1, !1], 0 > e[0] ? o[0] = this.STICKS_OUT_LEFT : e[0] + this.dimensions.width > s.width && (o[0] = this.STICKS_OUT_RIGHT), 0 > e[1] ? o[1] = this.STICKS_OUT_TOP : e[1] + this.dimensions.height > s.height && (o[1] = this.STICKS_OUT_BOTTOM), o }, t.prototype._draw = function() { var e, i, o, s, n, r, a, h, p, d, l, u, c, g, f, m, v, b, w, _ = this; if (this.backgroundCanvas && this.redraw) { if (this.debug("Drawing background."), this.redraw = !1, this.currentStem) { for (v = ["top", "right", "bottom", "left"], f = 0, m = v.length; m > f; f++) u = v[f], this.adapter.removeClass(this.container, "stem-" + u);
                    this.adapter.addClass(this.container, "stem-" + this.currentStem.horizontal), this.adapter.addClass(this.container, "stem-" + this.currentStem.vertical) } return r = [0, 0], a = [0, 0], __indexOf.call(this.options.hideTriggers, "closeButton") >= 0 && (n = new t.Joint(((b = this.currentStem) != null ? b + "" : void 0) === "top right" ? "top left" : "top right"), r = [this.options.closeButtonRadius + this.options.closeButtonOffset[0], this.options.closeButtonRadius + this.options.closeButtonOffset[1]], a = [this.options.closeButtonRadius - this.options.closeButtonOffset[0], this.options.closeButtonRadius - this.options.closeButtonOffset[1]]), o = this.adapter.clone(this.dimensions), s = [0, 0], this.options.borderWidth && (o.width += this.options.borderWidth * 2, o.height += this.options.borderWidth * 2, s[0] -= this.options.borderWidth, s[1] -= this.options.borderWidth), this.options.shadow && (o.width += this.options.shadowBlur * 2, o.width += Math.max(0, this.options.shadowOffset[0] - this.options.shadowBlur * 2), o.height += this.options.shadowBlur * 2, o.height += Math.max(0, this.options.shadowOffset[1] - this.options.shadowBlur * 2), s[0] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[0]), s[1] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[1])), i = { left: 0, right: 0, top: 0, bottom: 0 }, this.currentStem && (this.currentStem.left ? i.left = this.options.stemLength : this.currentStem.right && (i.right = this.options.stemLength), this.currentStem.top ? i.top = this.options.stemLength : this.currentStem.bottom && (i.bottom = this.options.stemLength)), n && (n.left ? i.left = Math.max(i.left, a[0]) : n.right && (i.right = Math.max(i.right, a[0])), n.top ? i.top = Math.max(i.top, a[1]) : n.bottom && (i.bottom = Math.max(i.bottom, a[1]))), o.width += i.left + i.right, o.height += i.top + i.bottom, s[0] -= i.left, s[1] -= i.top, this.currentStem && this.options.borderWidth && (w = this._getPathStemMeasures(this.options.stemBase, this.options.stemLength, this.options.borderWidth), g = w.stemLength, c = w.stemBase), e = this.adapter.unwrap(this.backgroundCanvas), e.width = o.width, e.height = o.height, this.adapter.css(this.backgroundCanvas, { width: "" + e.width + "px", height: "" + e.height + "px", left: "" + s[0] + "px", top: "" + s[1] + "px" }), h = e.getContext("2d"), h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, e.width, e.height), h.beginPath(), h.fillStyle = this._getColor(h, this.dimensions, this.options.background, this.options.backgroundGradientHorizontal), h.lineJoin = "miter", h.miterLimit = 500, l = this.options.borderWidth / 2, this.options.borderWidth ? (h.strokeStyle = this.options.borderColor, h.lineWidth = this.options.borderWidth) : (g = this.options.stemLength, c = this.options.stemBase), c == null && (c = 0), d = function(t, e, i) { return i && h.moveTo(Math.max(c, _.options.borderRadius, r[0]) + 1 - l, -l), e ? (h.lineTo(t / 2 - c / 2, -l), h.lineTo(t / 2, -g - l), h.lineTo(t / 2 + c / 2, -l)) : void 0 }, p = function(t, e, i) { var o, s, n, a; return t ? (h.lineTo(-c + l, 0 - l), h.lineTo(g + l, -g - l), h.lineTo(l, c - l)) : e ? (a = _.options.closeButtonOffset, n = r[0], i % 2 !== 0 && (a = [a[1], a[0]], n = r[1]), o = Math.acos(a[1] / _.options.closeButtonRadius), s = Math.acos(a[0] / _.options.closeButtonRadius), h.lineTo(-n + l, -l), h.arc(l - a[0], -l + a[1], _.options.closeButtonRadius, -(Math.PI / 2 + o), s, !1)) : (h.lineTo(-_.options.borderRadius + l, -l), h.quadraticCurveTo(l, -l, l, _.options.borderRadius - l)) }, h.translate(-s[0], -s[1]), h.save(),
                    function() { var e, i, o, s, r, a, l, u, c, g, f; for (f = [], i = c = 0, g = t.positions.length / 2; g >= 0 ? g > c : c > g; i = g >= 0 ? ++c : --c) r = i * 2, a = i === 0 || i === 3 ? 0 : _.dimensions.width, l = 2 > i ? 0 : _.dimensions.height, u = Math.PI / 2 * i, o = i % 2 === 0 ? _.dimensions.width : _.dimensions.height, s = new t.Joint(t.positions[r]), e = new t.Joint(t.positions[r + 1]), h.save(), h.translate(a, l), h.rotate(u), d(o, s.eql(_.currentStem), i === 0), h.translate(o, 0), p(e.eql(_.currentStem), e.eql(n), i), f.push(h.restore()); return f }(), h.closePath(), h.save(), this.options.shadow && (h.shadowColor = this.options.shadowColor, h.shadowBlur = this.options.shadowBlur, h.shadowOffsetX = this.options.shadowOffset[0], h.shadowOffsetY = this.options.shadowOffset[1]), h.fill(), h.restore(), this.options.borderWidth && h.stroke(), h.restore(), n ? function() { var t, e, i, o, s; return i = e = _.options.closeButtonRadius * 2, n + "" == "top right" ? (s = [_.dimensions.width - _.options.closeButtonOffset[0], _.options.closeButtonOffset[1]], t = [s[0] + l, s[1] - l]) : (s = [_.options.closeButtonOffset[0], _.options.closeButtonOffset[1]], t = [s[0] - l, s[1] - l]), h.translate(t[0], t[1]), o = _.options.closeButtonCrossSize / 2, h.save(), h.beginPath(), h.strokeStyle = _.options.closeButtonCrossColor, h.lineWidth = _.options.closeButtonCrossLineWidth, h.lineCap = "round", h.moveTo(-o, -o), h.lineTo(o, o), h.stroke(), h.beginPath(), h.moveTo(o, -o), h.lineTo(-o, o), h.stroke(), h.restore(), _.adapter.css(_.closeButtonElement, { left: "" + (s[0] - o - _.options.closeButtonLinkOverscan) + "px", top: "" + (s[1] - o - _.options.closeButtonLinkOverscan) + "px", width: "" + (_.options.closeButtonCrossSize + _.options.closeButtonLinkOverscan * 2) + "px", height: "" + (_.options.closeButtonCrossSize + _.options.closeButtonLinkOverscan * 2) + "px" }) }() : void 0 } }, t.prototype._getPathStemMeasures = function(t, e, i) { var o, s, n, r, a, h, p; if (r = i / 2, n = Math.atan(t / 2 / e), o = n * 2, a = r / Math.sin(o), s = 2 * a * Math.cos(n), p = r + e - s, 0 > p) throw Error("Sorry but your stemLength / stemBase ratio is strange."); return h = Math.tan(n) * p * 2, { stemLength: p, stemBase: h } }, t.prototype._getColor = function(t, e, i, o) { var s, n, r, a, h; if (o == null && (o = !1), typeof i == "string") return i; for (n = o ? t.createLinearGradient(0, 0, e.width, 0) : t.createLinearGradient(0, 0, 0, e.height), r = a = 0, h = i.length; h > a; r = ++a) s = i[r], n.addColorStop(s[0], s[1]); return n }, t.prototype._searchAndActivateCloseButtons = function() { var t, e, i, o; for (o = this.adapter.findAll(this.container, "." + this["class"].close), e = 0, i = o.length; i > e; e++) t = o[e], this.hideTriggers.push({ element: this.adapter.wrap(t), event: "click" }); return this.currentObservers.showing && this._setupObservers("-showing", "showing"), this.currentObservers.visible ? this._setupObservers("-visible", "visible") : void 0 }, t.prototype._activateFirstInput = function() { var t; return t = this.adapter.unwrap(this.adapter.find(this.container, "input, textarea")), t != null ? typeof t.focus == "function" ? t.focus() : void 0 : void 0 }, t.prototype._followMousePosition = function() { return this.options.fixed ? void 0 : t._observeMousePosition(this.bound.reposition) }, t.prototype._stopFollowingMousePosition = function() { return this.options.fixed ? void 0 : t._stopObservingMousePosition(this.bound.reposition) }, t.prototype._clearShowTimeout = function() { return clearTimeout(this._showTimeoutId) }, t.prototype._clearHideTimeout = function() { return clearTimeout(this._hideTimeoutId) }, t.prototype._clearTimeouts = function() { return clearTimeout(this._visibilityStateTimeoutId), this._clearShowTimeout(), this._clearHideTimeout() }, t.prototype._triggerElementExists = function() { var t;
            t = this.adapter.unwrap(this.triggerElement); while (t.parentNode) { if (t.parentNode.tagName === "BODY") return !0;
                t = t.parentNode } return !1 }, t.prototype._loadAjax = function() { var t = this; if (!this.loading) return this.loaded = !1, this.loading = !0, this.adapter.addClass(this.container, this["class"].loading), this.setContent(""), this.debug("Loading content from " + this.options.ajax), this.adapter.ajax({ url: this.options.ajax, method: this.options.ajaxMethod, onSuccess: function(e) { return t.debug("Loading successful."), t.adapter.removeClass(t.container, t["class"].loading), t.setContent(e) }, onError: function(e) { var i; return i = t.options.ajaxErrorMessage, t.debug(i, e), t.setContent(i), t.adapter.addClass(t.container, t["class"].ajaxError) }, onComplete: function() { return t.adapter.removeClass(t.container, t["class"].loading), t.loading = !1, t.loaded = !0, t._searchAndActivateCloseButtons(), t._activateFirstInput(), t.reposition() } }) }, t.prototype._ensureTriggerElement = function() { return this._triggerElementExists() ? void 0 : (this.deactivate(), this._stopEnsureTriggerElement()) }, t.prototype._ensureTriggerElementInterval = 1e3, t.prototype._startEnsureTriggerElement = function() { var t = this; return this._ensureTriggerElementTimeoutId = setInterval(function() { return t._ensureTriggerElement() }, this._ensureTriggerElementInterval) }, t.prototype._stopEnsureTriggerElement = function() { return clearInterval(this._ensureTriggerElementTimeoutId) }, t }(), vendors = ["khtml", "ms", "o", "moz", "webkit"], Opentip.prototype.setCss3Style = function(t, e) { var i, o, s, n, r;
        t = this.adapter.unwrap(t), r = []; for (i in e) __hasProp.call(e, i) && (o = e[i], t.style[i] != null ? r.push(t.style[i] = o) : r.push(function() { var e, r, a; for (a = [], e = 0, r = vendors.length; r > e; e++) s = vendors[e], n = "" + this.ucfirst(s) + this.ucfirst(i), t.style[n] != null ? a.push(t.style[n] = o) : a.push(void 0); return a }.call(this))); return r }, Opentip.prototype.defer = function(t) { return setTimeout(t, 0) }, Opentip.prototype.setTimeout = function(t, e) { return setTimeout(t, e ? e * 1e3 : 0) }, Opentip.prototype.ucfirst = function(t) { return t == null ? "" : t.charAt(0).toUpperCase() + t.slice(1) }, Opentip.prototype.dasherize = function(t) { return t.replace(/([A-Z])/g, function(t, e) { return "-" + e.toLowerCase() }) }, mousePositionObservers = [], mousePosition = { x: 0, y: 0 }, mouseMoved = function(t) { var e, i, o, s; for (mousePosition = Opentip.adapter.mousePosition(t), s = [], i = 0, o = mousePositionObservers.length; o > i; i++) e = mousePositionObservers[i], s.push(e()); return s }, Opentip.followMousePosition = function() { return Opentip.adapter.observe(document.body, "mousemove", mouseMoved) }, Opentip._observeMousePosition = function(t) { return mousePositionObservers.push(t) }, Opentip._stopObservingMousePosition = function(t) { var e; return mousePositionObservers = function() { var i, o, s; for (s = [], i = 0, o = mousePositionObservers.length; o > i; i++) e = mousePositionObservers[i], e !== t && s.push(e); return s }() }, Opentip.Joint = function() {
        function t(t) { t != null && (t instanceof Opentip.Joint && (t += ""), this.set(t)) } return t.prototype.set = function(t) { return t = t.toLowerCase(), this.setHorizontal(t), this.setVertical(t), this }, t.prototype.setHorizontal = function(t) { var e, i, o, s, n, r, a; for (i = ["left", "center", "right"], o = 0, n = i.length; n > o; o++) e = i[o], ~t.indexOf(e) && (this.horizontal = e.toLowerCase()); for (this.horizontal == null && (this.horizontal = "center"), a = [], s = 0, r = i.length; r > s; s++) e = i[s], a.push(this[e] = this.horizontal === e ? e : void 0); return a }, t.prototype.setVertical = function(t) { var e, i, o, s, n, r, a; for (i = ["top", "middle", "bottom"], o = 0, n = i.length; n > o; o++) e = i[o], ~t.indexOf(e) && (this.vertical = e.toLowerCase()); for (this.vertical == null && (this.vertical = "middle"), a = [], s = 0, r = i.length; r > s; s++) e = i[s], a.push(this[e] = this.vertical === e ? e : void 0); return a }, t.prototype.eql = function(t) { return t != null && this.horizontal === t.horizontal && this.vertical === t.vertical }, t.prototype.flip = function() { var t, e; return e = Opentip.position[this.toString(!0)], t = (e + 4) % 8, this.set(Opentip.positions[t]), this }, t.prototype.toString = function(t) { var e, i; return t == null && (t = !1), i = this.vertical === "middle" ? "" : this.vertical, e = this.horizontal === "center" ? "" : this.horizontal, i && e && (e = t ? Opentip.prototype.ucfirst(e) : " " + e), "" + i + e }, t }(), Opentip.prototype._positionsEqual = function(t, e) { return t != null && e != null && t.left === e.left && t.top === e.top }, Opentip.prototype._dimensionsEqual = function(t, e) { return t != null && e != null && t.width === e.width && t.height === e.height }, Opentip.prototype.debug = function() { var t; return t = arguments.length >= 1 ? __slice.call(arguments, 0) : [], Opentip.debug && (typeof console != "undefined" && console !== null ? console.debug : void 0) != null ? (t.unshift("#" + this.id + " |"), console.debug.apply(console, t)) : void 0 }, Opentip.findElements = function() { var t, e, i, o, s, n, r, a, h, p; for (t = Opentip.adapter, h = t.findAll(document.body, "[data-ot]"), p = [], r = 0, a = h.length; a > r; r++) { i = h[r], n = {}, e = t.data(i, "ot"), (e === "" || e === "true" || e === "yes") && (e = t.attr(i, "title"), t.attr(i, "title", "")), e = e || ""; for (o in Opentip.styles.standard) s = t.data(i, "ot" + Opentip.prototype.ucfirst(o)), s != null && (s === "yes" || s === "true" || s === "on" ? s = !0 : (s === "no" || s === "false" || s === "off") && (s = !1), n[o] = s);
            p.push(new Opentip(i, e, n)) } return p }, Opentip.version = "2.4.6", Opentip.debug = !1, Opentip.lastId = 0, Opentip.lastZIndex = 100, Opentip.tips = [], Opentip._abortShowingGroup = function(t, e) { var i, o, s, n, r; for (n = Opentip.tips, r = [], o = 0, s = n.length; s > o; o++) i = n[o], i !== e && i.options.group === t ? r.push(i._abortShowing()) : r.push(void 0); return r }, Opentip._hideGroup = function(t, e) { var i, o, s, n, r; for (n = Opentip.tips, r = [], o = 0, s = n.length; s > o; o++) i = n[o], i !== e && i.options.group === t ? r.push(i.hide()) : r.push(void 0); return r }, Opentip.adapters = {}, Opentip.adapter = null, firstAdapter = !0, Opentip.addAdapter = function(t) { return Opentip.adapters[t.name] = t, firstAdapter ? (Opentip.adapter = t, t.domReady(Opentip.findElements), t.domReady(Opentip.followMousePosition), firstAdapter = !1) : void 0 }, Opentip.positions = ["top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft"], Opentip.position = {}, _ref = Opentip.positions, i = _i = 0, _len = _ref.length; _len > _i; i = ++_i) position = _ref[i], Opentip.position[position] = i;
Opentip.styles = { standard: { "extends": null, title: void 0, escapeTitle: !0, escapeContent: !1, className: "standard", stem: !0, delay: null, hideDelay: .1, fixed: !1, showOn: "mouseover", hideTrigger: "trigger", hideTriggers: [], hideOn: null, removeElementsOnHide: !1, offset: [0, 0], containInViewport: !0, autoOffset: !0, showEffect: "appear", hideEffect: "fade", showEffectDuration: .3, hideEffectDuration: .2, stemLength: 5, stemBase: 8, tipJoint: "top left", target: null, targetJoint: null, cache: !0, ajax: !1, ajaxMethod: "GET", ajaxErrorMessage: "There was a problem downloading the content.", group: null, style: null, background: "#fff18f", backgroundGradientHorizontal: !1, closeButtonOffset: [5, 5], closeButtonRadius: 7, closeButtonCrossSize: 4, closeButtonCrossColor: "#d2c35b", closeButtonCrossLineWidth: 1.5, closeButtonLinkOverscan: 6, borderRadius: 5, borderWidth: 1, borderColor: "#f2e37b", shadow: !0, shadowBlur: 10, shadowOffset: [3, 3], shadowColor: "rgba(0, 0, 0, 0.1)" }, glass: { "extends": "standard", className: "glass", background: [
            [0, "rgba(252, 252, 252, 0.8)"],
            [.5, "rgba(255, 255, 255, 0.8)"],
            [.5, "rgba(250, 250, 250, 0.9)"],
            [1, "rgba(245, 245, 245, 0.9)"]
        ], borderColor: "#eee", closeButtonCrossColor: "rgba(0, 0, 0, 0.2)", borderRadius: 15, closeButtonRadius: 10, closeButtonOffset: [8, 8] }, dark: { "extends": "standard", className: "dark", borderRadius: 13, borderColor: "#444", closeButtonCrossColor: "rgba(240, 240, 240, 1)", shadowColor: "rgba(0, 0, 0, 0.3)", shadowOffset: [2, 2], background: [
            [0, "rgba(30, 30, 30, 0.7)"],
            [.5, "rgba(30, 30, 30, 0.8)"],
            [.5, "rgba(10, 10, 10, 0.8)"],
            [1, "rgba(10, 10, 10, 0.9)"]
        ] }, alert: { "extends": "standard", className: "alert", borderRadius: 1, borderColor: "#AE0D11", closeButtonCrossColor: "rgba(255, 255, 255, 1)", shadowColor: "rgba(0, 0, 0, 0.3)", shadowOffset: [2, 2], background: [
            [0, "rgba(203, 15, 19, 0.7)"],
            [.5, "rgba(203, 15, 19, 0.8)"],
            [.5, "rgba(189, 14, 18, 0.8)"],
            [1, "rgba(179, 14, 17, 0.9)"]
        ] } }, Opentip.defaultStyle = "standard", typeof module != "undefined" && module !== null ? module.exports = Opentip : window.Opentip = Opentip;
var __slice = [].slice;
(function(t) {
    var e;
    return t.fn.opentip = function(t, e, i) { return new Opentip(this, t, e, i) }, e = function() {
        function e() {}
        return e.prototype.name = "jquery", e.prototype.domReady = function(e) { return t(e) }, e.prototype.create = function(e) { return t(e) }, e.prototype.wrap = function(e) { if (e = t(e), e.length > 1) throw Error("Multiple elements provided."); return e }, e.prototype.unwrap = function(e) {
            return t(e)[0]
        }, e.prototype.tagName = function(t) { return this.unwrap(t).tagName }, e.prototype.attr = function() { var e, i, o; return i = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], (o = t(i)).attr.apply(o, e) }, e.prototype.data = function() { var e, i, o; return i = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], (o = t(i)).data.apply(o, e) }, e.prototype.find = function(e, i) { return t(e).find(i).get(0) }, e.prototype.findAll = function(e, i) { return t(e).find(i) }, e.prototype.update = function(e, i, o) { return e = t(e), o ? e.text(i) : e.html(i) }, e.prototype.append = function(e, i) { return t(e).append(i) }, e.prototype.remove = function(e) { return t(e).remove() }, e.prototype.addClass = function(e, i) { return t(e).addClass(i) }, e.prototype.removeClass = function(e, i) { return t(e).removeClass(i) }, e.prototype.css = function(e, i) { return t(e).css(i) }, e.prototype.dimensions = function(e) { return { width: t(e).outerWidth(), height: t(e).outerHeight() } }, e.prototype.scrollOffset = function() { return [window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop] }, e.prototype.viewportDimensions = function() { return { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight } }, e.prototype.mousePosition = function(t) { return t == null ? null : { x: t.pageX, y: t.pageY } }, e.prototype.offset = function(e) { var i; return i = t(e).offset(), { left: i.left, top: i.top } }, e.prototype.observe = function(e, i, o) { return t(e).bind(i, o) }, e.prototype.stopObserving = function(e, i, o) { return t(e).unbind(i, o) }, e.prototype.ajax = function(e) { var i, o; if (e.url == null) throw Error("No url provided"); return t.ajax({ url: e.url, type: (i = (o = e.method) != null ? o.toUpperCase() : void 0) != null ? i : "GET" }).done(function(t) { return typeof e.onSuccess == "function" ? e.onSuccess(t) : void 0 }).fail(function(t) { return typeof e.onError == "function" ? e.onError("Server responded with status " + t.status) : void 0 }).always(function() { return typeof e.onComplete == "function" ? e.onComplete() : void 0 }) }, e.prototype.clone = function(e) { return t.extend({}, e) }, e.prototype.extend = function() { var e, i; return i = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], t.extend.apply(t, [i].concat(__slice.call(e))) }, e
    }(), Opentip.addAdapter(new e)
})(jQuery);

/* dt-language: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-content/themes/qfy-01/js/language.js) */
jQuery(function() {
    if (jQuery.datepicker) {
        jQuery.datepicker.regional['zh-CN'] = {
            closeText: 'å…³é—­',
            prevText: '&#x3c;ä¸Šæœˆ',
            nextText: 'ä¸‹æœˆ&#x3e;',
            currentText: 'ä»Šå¤©',
            monthNames: ['ä¸€æœˆ', 'äºŒæœˆ', 'ä¸‰æœˆ', 'å››æœˆ', 'äº”æœˆ', 'å…­æœˆ',
                'ä¸ƒæœˆ', 'å…«æœˆ', 'ä¹æœˆ', 'åæœˆ', 'åä¸€æœˆ', 'åäºŒæœˆ'
            ],
            monthNamesShort: ['ä¸€æœˆ', 'äºŒæœˆ', 'ä¸‰æœˆ', 'å››æœˆ', 'äº”æœˆ', 'å…­æœˆ',
                'ä¸ƒæœˆ', 'å…«æœˆ', 'ä¹æœˆ', 'åæœˆ', 'åä¸€æœˆ', 'åäºŒæœˆ'
            ],
            dayNames: ['æ˜ŸæœŸæ—¥', 'æ˜ŸæœŸä¸€', 'æ˜ŸæœŸäºŒ', 'æ˜ŸæœŸä¸‰', 'æ˜ŸæœŸå››', 'æ˜ŸæœŸäº”', 'æ˜ŸæœŸå…­'],
            dayNamesShort: ['å‘¨æ—¥', 'å‘¨ä¸€', 'å‘¨äºŒ', 'å‘¨ä¸‰', 'å‘¨å››', 'å‘¨äº”', 'å‘¨å…­'],
            dayNamesMin: ['æ—¥', 'ä¸€', 'äºŒ', 'ä¸‰', 'å››', 'äº”', 'å…­'],
            weekHeader: 'å‘¨',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: true,
            yearSuffix: 'å¹´'
        };

        jQuery.datepicker.regional['zh-TW'] = {
            clearText: 'æ¸…é™¤',
            clearStatus: 'æ¸…é™¤å·²é¸æ—¥æœŸ',
            closeText: 'é—œé–‰',
            closeStatus: 'ä¸æ”¹è®Šç•¶å‰é¸æ“‡',
            prevText: '<ä¸Šæœˆ',
            prevStatus: 'é¡¯ç¤ºä¸Šæœˆ',
            prevBigText: '<<',
            prevBigStatus: 'é¡¯ç¤ºä¸Šå£¹å¹´',
            nextText: 'ä¸‹æœˆ>',
            nextStatus: 'é¡¯ç¤ºä¸‹æœˆ',
            nextBigText: '>>',
            nextBigStatus: 'é¡¯ç¤ºä¸‹å£¹å¹´',
            currentText: 'ä»Šå¤©',
            currentStatus: 'é¡¯ç¤ºæœ¬æœˆ',
            monthNames: ['å£¹æœˆ', 'äºŒæœˆ', 'ä¸‰æœˆ', 'å››æœˆ', 'äº”æœˆ', 'å…­æœˆ', 'ä¸ƒæœˆ', 'å…«æœˆ', 'ä¹æœˆ', 'åæœˆ', 'åå£¹æœˆ', 'åäºŒæœˆ'],
            monthNamesShort: ['å£¹', 'äºŒ', 'ä¸‰', 'å››', 'äº”', 'å…­', 'ä¸ƒ', 'å…«', 'ä¹', 'å', 'åå£¹', 'åäºŒ'],
            monthStatus: 'é¸æ“‡æœˆä»½',
            yearStatus: 'é¸æ“‡å¹´ä»½',
            weekHeader: 'å‘¨',
            weekStatus: 'å¹´å…§å‘¨æ¬¡',
            dayNames: ['æ˜ŸæœŸæ—¥', 'æ˜ŸæœŸå£¹', 'æ˜ŸæœŸäºŒ', 'æ˜ŸæœŸä¸‰', 'æ˜ŸæœŸå››', 'æ˜ŸæœŸäº”', 'æ˜ŸæœŸå…­'],
            dayNamesShort: ['å‘¨æ—¥', 'å‘¨å£¹', 'å‘¨äºŒ', 'å‘¨ä¸‰', 'å‘¨å››', 'å‘¨äº”', 'å‘¨å…­'],
            dayNamesMin: ['æ—¥', 'å£¹', 'äºŒ', 'ä¸‰', 'å››', 'äº”', 'å…­'],
            dayStatus: 'è¨­ç½® DD ç‚ºå£¹å‘¨èµ·å§‹',
            dateStatus: 'é¸æ“‡ mæœˆ dæ—¥, DD',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            initStatus: 'è«‹é¸æ“‡æ—¥æœŸ',
            isRTL: false
        };

        if (dtGlobals.language == "") {
            jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-CN']);
        } else if (dtGlobals.language == "2") {
            jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-TW']);
        }
    }
    if (jQuery.timepicker) {
        jQuery.timepicker.regional['zh-CN'] = {
            currentText: 'å½“å‰æ—¶é—´',
            closeText: 'ç¡®è®¤',
            timeOnlyTitle: 'é€‰æ‹©æ—¶é—´',
            timeText: 'æ—¶é—´',
            hourText: 'å°æ—¶',
            minuteText: 'åˆ†é’Ÿ',
            secondText: 'ç§’',
            millisecText: 'æ¯«ç§’',
            timezoneText: 'æ—¶åŒº',
            isRTL: false
        };
        jQuery.timepicker.regional['zh-TW'] = {
            currentText: 'ç•¶å‰æ™‚é–“',
            closeText: 'ç¢ºèª',
            timeOnlyTitle: 'é¸æ“‡æ™‚é–“',
            timeText: 'æ™‚é–“',
            hourText: 'å°æ™‚',
            minuteText: 'åˆ†é˜',
            secondText: 'ç§’',
            millisecText: 'æ¯«ç§’',
            timezoneText: 'æ™‚å€',
            isRTL: false
        };
        if (dtGlobals.language == "") {
            jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-CN']);
        } else if (dtGlobals.language == "2") {
            jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-TW']);
        }
    }

});

/* dt-main: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-content/themes/qfy-01/js/main.js) */
//æ‚¬æµ®æ•ˆæžœ
(function($) { $.fn.floatAd = function(l) { var m = { customhtml: "", close: 1, closeHTML: "", speed: 30, id_class: "", x: "0", y: "0" }; var n = false; var l = $.extend(m, l); var o = "<div id='qfy_float_ad' class='" + l.id_class + "' style='position:absolute;left:0px;top:0px;z-index:1000000;cleat:both;'>";
        o += l.customhtml; if (l.close == "1") { if (l.closeHTML == "") { o += "<div id='qfy_close_f_ad' class='" + l.id_class + "' style='position:absolute;width:30px;height:16px;top:-18px;right:0px;cursor:pointer;float:right;font-size:14px'>å…³é—­</div></div>" } else { o += "<div id='qfy_close_f_ad' class='" + l.id_class + "' >" + l.closeHTML + "</div></div>" } }
        $('body').append(o);

        function qfy_ad_init() { var x = l.x,
                y = l.y + $(window).scrollTop(); var g = true,
                yin = true; var h = 1; var i = 10; var j = $("#qfy_float_ad." + l.id_class); var k = function() { var L = 0,
                    T = $(window).scrollTop(); var a = j.width(); var b = j.height(); var c = $(window).width(); var d = $(window).height() + $(window).scrollTop();
                x = x + h * (g ? 1 : -1); if (x < L) { g = true;
                    x = L } if (x > c - a - 1) { g = false;
                    x = c - a - 1 }
                y = y + h * (yin ? 1 : -1); if (y > d - b - 10) { yin = false;
                    y = d - b - 10 } if (y < T) { yin = true;
                    y = T } var e = x; var f = y;
                j.css({ 'top': f, 'left': e }) };
            n = setInterval(k, l.speed);
            $('#qfy_float_ad.' + l.id_class).mouseover(function() { if (n) { clearInterval(n) } });
            $('#qfy_float_ad.' + l.id_class).mouseout(function() { n = setInterval(k, l.speed) }) }
        qfy_ad_init();
        $('#qfy_close_f_ad.' + l.id_class).click(function() { $('#qfy_float_ad.' + l.id_class + ',#QFY_overlay.' + l.id_class).remove();
            clearInterval(n) }) } })(jQuery);

function get_browser_name() { var e = window.navigator.userAgent; return -1 < e.indexOf("Opera") || -1 < e.indexOf("OPR/") ? "Opera" : -1 < e.indexOf("Edge") ? "Edge" : -1 < e.indexOf("Chrome") ? "Chrome" : -1 < e.indexOf("Safari") ? "Safari" : -1 < e.indexOf("Firefox") ? "Firefox" : -1 < e.indexOf("MSIE") || -1 < e.indexOf("Trident/7") ? "IE" : "Other" }

//èƒŒæ™¯å›¾ç‰‡è‡ªé€‚åº”
//https://css-tricks.com/almanac/properties/o/object-fit/
(function($) {
    function coverFillSwitch(container, img, invert) { if (!container || !img) { return false } var imgHeight = img.naturalHeight || img.videoHeight; var imgWidth = img.naturalWidth || img.videoWidth; var containerRatio = container.offsetWidth / container.offsetHeight; var imgRatio = imgWidth / imgHeight; var ratioComparison = false; if (imgRatio >= containerRatio) { ratioComparison = true } if (invert) { ratioComparison = !ratioComparison } if (ratioComparison) { img.style.height = "100%";
            img.style.width = "auto" } else { img.style.height = "auto";
            img.style.width = "100%" } }

    function objectFitResize() { var i, img, container; var imgsCover = document.getElementsByClassName("section-background-video"); for (i = 0; i < imgsCover.length; i++) { img = imgsCover[i];
            container = img.parentElement; if (container.classList.contains("background-media")) { coverFillSwitch(container, img) } } }

    function applyStandardProperties(container, img) { var containerStyle = window.getComputedStyle(container); if (containerStyle.overflow !== "hidden") { container.style.overflow = "hidden" } if (containerStyle.position !== "relative" && containerStyle.position !== "absolute" && containerStyle.position !== "fixed") { container.style.position = "relative" }
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%,-50%)" }

    function objectFitInt() { var imgs = document.getElementsByClassName("section-background-video"); for (var i = 0; i < imgs.length; i++) { var type = "cover"; var img = imgs[i]; var container = img.parentElement; switch (type) {
                case "container":
                    break;
                case "cover":
                    coverFillSwitch(container, img);
                    applyStandardProperties(container, img); break;
                case "contain":
                    coverFillSwitch(container, img, true);
                    applyStandardProperties(container, img); break;
                case "fill":
                    img.style.height = "100%";
                    img.style.width = "100%";
                    applyStandardProperties(container, img); break;
                case "none":
                    img.style.height = "auto";
                    img.style.width = "auto";
                    applyStandardProperties(container, img); break;
                case "scale-down":
                    img.style.maxHeight = "100%";
                    img.style.maxWidth = "100%";
                    img.style.height = "auto";
                    img.style.width = "auto";
                    applyStandardProperties(container, img); break;
                default:
                    break } } }
    var resizeTimeout;

    function resizeThrottler() { if (!resizeTimeout) { resizeTimeout = setTimeout(function() { resizeTimeout = null;
                objectFitResize() }, 66) } }
    var $ua = get_browser_name();
    if (($ua == "Edge" || $ua == "IE") && !is_edit_model) {
        resizeThrottler();
        window.addEventListener("resize", resizeThrottler, false);
    }
})(jQuery);
window.onload = function() {
    if (!document.hasOwnProperty("ontouchstart")) {
        jQuery("html").addClass("no-touch");
    }
};

function resetSectionHeight() {
    var h = jQuery(window).height();
    var body_w = jQuery("body").width();
    var na = ".section.minperheight";
    var tl = ":not(.fixheight)";
    var heights = [5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    if (body_w > 760) {
        for (var i = 0; i < heights.length; i++) {
            var L = heights[i];
            if (jQuery(na + L + tl).length > 0) {
                jQuery(na + L + tl).css("min-height", h * (L / 100) + "px");
            }
        }
        jQuery(".section.fixheight").each(function() {
            var fixheight = jQuery(this).attr("data-fixheight");
            var w = jQuery(this).width();
            if (w > 0) {
                var h = w * fixheight;
                jQuery(this).height(h);
                jQuery(this).css("min-height", h + "px");
            }
        });
        jQuery(".qfy-column-inner.fixheight").each(function() {
            var fixheight = jQuery(this).attr("data-fixheight");
            var w = jQuery(this).width();
            if (w > 0) {
                var h = w * fixheight;
                if (jQuery(this).closest(".section.fixheight").length > 0) {
                    h = jQuery(this).closest(".section.fixheight").height();
                }
                jQuery(this).height(h);
                jQuery(this).css("min-height", h + "px");
                jQuery(this).find(">.column_inner").css("min-height", h + "px");
            }
        })
    } else {
        for (var i = 0; i < heights.length; i++) {
            var L = heights[i];
            if (jQuery(na + L).length > 0) {
                jQuery(na + L).css("min-height", h / (L / 100) + "px");
            }
        }
    }
}

var last_size_mobile = false;
var size_mobile = false;

function resizeDefaultObjSize() {
    if (dtGlobals.isMobile == false) {
        if (jQuery("body").width() < 768) {
            size_mobile = "mobile";
            if (!last_size_mobile) last_size_mobile = "mobile";
        } else {
            size_mobile = "pc";
            if (!last_size_mobile) last_size_mobile = "pc";
        }
        if (size_mobile != last_size_mobile) {
            last_size_mobile = size_mobile;
            jQuery(".qfy-element").each(function() {
                var m_padding = jQuery(this).attr("m-padding");
                var p_padding = jQuery(this).attr("p-padding");
                if (size_mobile == "mobile") {
                    if (m_padding) {
                        jQuery(this).css("padding", m_padding);
                    }
                } else {
                    if (p_padding) {
                        jQuery(this).css("padding", p_padding);
                    }
                }

            });

        }
    }


    if (jQuery(".qfe_map_wraper iframe").length > 0) {
        jQuery(".qfe_map_wraper iframe").each(function() {
            var oh = jQuery(this).parent().attr("style");
            if (typeof(oh) == "undefined") {
                var width = jQuery(this).width();
                if (width > 0) {
                    jQuery(this).parent().height((width * 2 / 4) + "px");
                }
            }
        })
    }
    if (jQuery(".vc_bit_raw_video").length > 0) {
        jQuery(".vc_bit_raw_video").each(function() {
            var oh = jQuery(this).attr("style");
            if (typeof(oh) == "undefined") {
                var width = jQuery(this).width();
                if (width > 0) {
                    jQuery(this).height((width * 2 / 4) + "px");
                }
            }
        })
    }
    resetSectionHeight();
    column_init_align();
}

function resize_royalSlider_gallery_new(org_obj) {
    jQuery(".qfy-tabcontent .royalSlider_gallery_new").each(function() {
        var obj = jQuery(this);
        setTimeout(function() {
            var h1 = obj.find(".rsOverflow").height();
            var h2 = obj.find(".rsSlide.rsActiveSlide").height();
            if (h2 > 0 && h1 != h2) {
                obj.find(".rsOverflow").height(h2);
            }
        }, 200);
    })

}

function searchForm(obj) {
    if (typeof(obj) == "undefined") {
        obj = jQuery('.site_tooler .searchform .submit,.search_contain .searchform .submit');
    }

    /*--search*/
    obj.unbind().on('click', function(e) {
        e.preventDefault();
        jQuery(this).siblings('input.searchsubmit').click();
        return false;
    });

}

function qfy_setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = encodeURIComponent(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;

}

function mobile_menu_fix() {
    if (jQuery("#dl-menu").length == 0) {
        return;
    }
    var top_scrTop = 0,
        top_scrDir = 0,
        top_scrUp = false,
        top_scrDown = false,
        top_isMoved = false;
    var top_threshold = jQuery("#dl-menu").offset().top + jQuery("#dl-menu").height();

    jQuery(window).on("scroll", function() {
        var top_tempCSS = {},
            top_tempScrTop = jQuery(window).scrollTop();

        top_scrDir = top_tempScrTop - top_scrTop;

        if (top_tempScrTop > top_threshold && top_isMoved === false) {
            top_isMoved = true;
            jQuery("#dl-menu").addClass("positionFixed");
        } else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
            top_isMoved = false;
            jQuery("#dl-menu").removeClass("positionFixed");
        };
        top_scrTop = jQuery(window).scrollTop();

    });
}

function mobile_menu_fix_2() {
    var top_scrTop = 0,
        top_scrDir = 0,
        top_scrUp = false,
        top_scrDown = false,
        top_isMoved = false;
    var top_threshold = jQuery(".dl-menu-fixedheader").height();
    if (jQuery(".dl-menu-fixed-blank").length == 0 && jQuery("#page").css("position") != "absolute") {
        jQuery(".dl-menu-fixedheader").after("<div class='dl-menu-fixed-blank' style='display:none;height:" + top_threshold + "px;'></div>");
    }

    jQuery(window).on("scroll", function() {
        var top_tempCSS = {},
            top_tempScrTop = jQuery(window).scrollTop();

        top_scrDir = top_tempScrTop - top_scrTop;

        if (top_scrDir > 0) {
            jQuery("body").removeClass("scroll-uping").addClass("scroll-downing");
        } else if (top_scrDir < 0) {
            jQuery("body").addClass("scroll-uping").removeClass("scroll-downing");
        }
        if (top_tempScrTop > top_threshold && top_isMoved === false) {
            top_isMoved = true;
            jQuery(".dl-menu-fixedheader").css("position", "fixed");
            jQuery("body").addClass("fixedheadering");
            jQuery(".dl-menu-fixed-blank").show();
        } else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
            top_isMoved = false;
            jQuery(".dl-menu-fixedheader").css("position", "relative");
            jQuery("body").removeClass("fixedheadering");
            jQuery("body").removeClass("fixedheadering scroll-uping scroll-downing");
            jQuery(".dl-menu-fixed-blank").hide();
        };
        top_scrTop = jQuery(window).scrollTop();

    });
}

function _image_popup_flexslider(startAt) {
    jQuery(".image_popup .qfe_flexslider").flexslider({
        animation: "slide",
        slideshow: false,
        slideshowSpeed: 10000,
        sliderSpeed: 800,
        controlNav: 1,
        directionNav: 1,
        smoothHeight: true,
        startAt: startAt,
        start: function() {
            var localvideo = jQuery(".image_popup .flex-active-slide video.localvideo");
            if (localvideo.length > 0) {
                if (localvideo.get(0).currentTime == 0) {
                    jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
                }
            }
            var videoiframe = jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
            if (videoiframe.length > 0 && !videoiframe.attr("src")) {
                videoiframe.attr("src", videoiframe.attr("data-src"));
            }
        },
        before: function() {
            //var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
            //if(localvideo.length>0){
            //jQuery(".image_popup .flex-active-slide video.localvideo").get(0).stop();
            // }
        },
        after: function() {
            var localvideo = jQuery(".image_popup .flex-active-slide video.localvideo");
            if (localvideo.length > 0) {
                if (localvideo.get(0).currentTime == 0) {
                    jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
                }
            }
            var videoiframe = jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
            if (videoiframe.length > 0 && !videoiframe.attr("src")) {
                videoiframe.attr("src", videoiframe.attr("data-src"));
            }
        },
    });
}

function initmouseover() {

    jQuery(".mouseHover").live({
        mouseenter: function() {
            jQuery(this).addClass("hover");

        },
        mouseleave: function() {
            jQuery(this).removeClass("hover");
        }
    });
    jQuery("a.bitButton").live({
        mouseenter: function() {
            var delay = jQuery(this).attr("delay");
            var str = "";
            if (delay && delay != "0") {
                str = "all " + delay + " linear";
            }
            var texthovercolor = jQuery(this).attr("texthovercolor");
            if (texthovercolor) {
                jQuery(this).find(".iconText").css("color", texthovercolor);
                jQuery(this).find(".iconText").css("transition", str);
            }
            var iconhovercolor = jQuery(this).attr("iconhovercolor");
            if (iconhovercolor) {
                jQuery(this).find("i.glyphicon").css("color", iconhovercolor);
                jQuery(this).find("i.glyphicon").css("transition", str);
            }
            var backgroundhovercolor = jQuery(this).attr("backgroundhovercolor");
            if (backgroundhovercolor) {
                jQuery(this).css("background", backgroundhovercolor);
                jQuery(this).css("transition", str);
                jQuery(this).removeAttr('onmouseover');
                jQuery(this).removeAttr('onmouseout');
            }
            var borderhovercolor = jQuery(this).attr("borderhovercolor");
            if (borderhovercolor) {
                jQuery(this).css("border", "1px solid " + borderhovercolor);
                jQuery(this).css("transition", str);
            }
        },
        mouseleave: function() {
            jQuery(this).css("transition", "");
            var textcolor = jQuery(this).attr("textcolor");
            if (textcolor) {
                jQuery(this).find(".iconText").css("color", textcolor);
            }
            var iconcolor = jQuery(this).attr("iconcolor");
            if (iconcolor) {
                jQuery(this).find("i.glyphicon").css("color", iconcolor);
            }
            var backgroundcolor = jQuery(this).attr("backgroundcolor");
            if (backgroundcolor) {
                jQuery(this).css("background", backgroundcolor);
            }
            var bordercolor = jQuery(this).attr("bordercolor");
            if (bordercolor) {
                jQuery(this).css("border-color", bordercolor);
            }
        }
    });

    jQuery("a.bitIcon").live({
        mouseenter: function() {
            var delay = jQuery(this).attr("delay");
            var str = "";
            if (delay && delay != "0") {
                str = "all " + delay + " linear";
            }
            var texthovercolor = jQuery(this).attr("texthovercolor");
            if (texthovercolor) {
                jQuery(this).find(".iconText").css("color", texthovercolor);
                jQuery(this).find(".iconText").css("transition", str);
            }
            var iconhovercolor = jQuery(this).attr("iconhovercolor");
            if (iconhovercolor) {
                jQuery(this).find("i.glyphicon").css("color", iconhovercolor);
                jQuery(this).find("i.glyphicon").css("transition", str);
            }
            var backgroundhovercolor = jQuery(this).attr("backgroundhovercolor");
            if (backgroundhovercolor) {
                jQuery(this).find("b").css("background", backgroundhovercolor);
                jQuery(this).find("b").css("transition", str);
                jQuery(this).find("b").removeAttr('onmouseover');
                jQuery(this).find("b").removeAttr('onmouseout');
            }
            var borderhovercolor = jQuery(this).attr("borderhovercolor");
            if (borderhovercolor) {
                jQuery(this).find("b").css("border", "1px solid " + borderhovercolor);
                jQuery(this).find("b").css("transition", str);
            }
        },
        mouseleave: function() {
            jQuery(this).css("transition", "");
            var textcolor = jQuery(this).attr("textcolor");
            if (textcolor) {
                jQuery(this).find(".iconText").css("color", textcolor);
            }
            var iconcolor = jQuery(this).attr("iconcolor");
            if (iconcolor) {
                jQuery(this).find("i.glyphicon").css("color", iconcolor);
            }
            var backgroundcolor = jQuery(this).attr("backgroundcolor");
            if (backgroundcolor) {
                jQuery(this).find("b").css("background", backgroundcolor);
            }
            var bordercolor = jQuery(this).attr("bordercolor");
            if (bordercolor) {
                jQuery(this).find("b").css("border-color", bordercolor);
            }
        }
    });

    if (jQuery("a.list_popup").length > 0) {
        jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/list_popup.js", function() { initQfyPopup() });
    };

    //
    jQuery("a.qfy_thickbox").live({
        click: function(e) {
            e.preventDefault();
            if (top.jQuery(".qfy_gallerys").length > 0) {
                return false;
            }
            var default_img = jQuery(this).attr("href");
            var thumbPath = jQuery(this).attr("thumbPath");
            if (!thumbPath) thumbPath = default_img;
            var i = 0;
            var qfy_imglists = Array();
            jQuery("a.qfy_thickbox").each(function() {
                var href = jQuery(this).attr("href");
                var thumbPath = jQuery(this).attr("thumbPath");
                if (!thumbPath) thumbPath = href;

                if (href != default_img && href != undefined) {
                    qfy_imglists[i] = href + "|^|" + thumbPath;
                    i++;
                }
            })

            top.jQuery("body").append('<div class="qfy_gallerys" style="position:fixed;top:0;left:0;width:100%;height:0;z-index:20000;"><iframe src="/FeiEditor/bitSite/gallerys?bgcolor=' + encodeURIComponent(dtGlobals.gallery_bgcolor) + '&tfamily=' + encodeURIComponent(dtGlobals.gallery_tfamily) + '&dfamily=' + encodeURIComponent(dtGlobals.gallery_dfamily) + '&blankclose=' + encodeURIComponent(dtGlobals.gallery_blankclose) + "&arrowstyle=" + encodeURIComponent(dtGlobals.gallery_arrowstyle) + '&showthumbs=' + dtGlobals.gallery_showthumbs + '&style=' + dtGlobals.gallery_style + '&autoplay=' + dtGlobals.gallery_autoplay + '&playspeed=' + dtGlobals.gallery_playspeed + '&imagesize=' + dtGlobals.gallery_imagesize + '&imageheight=' + dtGlobals.gallery_imageheight + '&stopbutton=' + dtGlobals.gallery_stopbutton + '&thumbsposition=' + dtGlobals.gallery_thumbsposition + '&tsize=' + dtGlobals.gallery_tsize + '&tcolor=' + encodeURIComponent(dtGlobals.gallery_tcolor) + '&dsize=' + dtGlobals.gallery_dsize + '&dcolor=' + encodeURIComponent(dtGlobals.gallery_dcolor) + '&default_img=' + default_img + '&thumbPath=' + thumbPath + '&time=' + Math.random() + '" width="100%" height="100%" border=0 style="border:0;" /></div>')
            top.jQuery(".qfy_gallerys").animate({ height: "100%" });
            return false;
        }
    });


    qfy_a_video_event();
}

//å¯ä»¥å•ç‹¬åŠ è½½ï¼Œæœ‰è§†é¢‘çš„æ—¶å€™
function qfy_a_video_event() {


    if (!jQuery("body").hasClass("compose-mode") && !is_edit_model) {
        var $is_has_video = false;
        jQuery("a").each(function() {
            var href = jQuery(this).attr("href");
            if (href) href = href.toLowerCase();
            if (href && href.indexOf("/api/video-server/play.php") > -1) {
                $is_has_video = true;
            } else if (href && href.indexOf("iframe.php?video_mp4_local=") > -1 && href.indexOf("size=") > -1 && href.indexOf("&auto=") > -1) {
                $is_has_video = true;
            }
        })
        if ($is_has_video) {
            jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-video.js", function() {
                qfy_a_video_event_init();
            });
        }
    }


}

function qfy_custom_select() {
    jQuery(".qfy_custom_select").each(function() {
        var fun = jQuery(this).attr("data-fun");
        var ids = '[' + jQuery(this).attr("data-ids") + ']';
        var urls = jQuery(this).attr("data-urls");
        if (ids != "") {
            jQuery(this).cxSelect({
                selects: eval(ids),
                required: true,
                url: eval(urls),
            });
        }
    })
}

function thebackground(qfy_bg_images, time) {
    if (screen.width < 760) {
        return false;
    }
    var tmp_qfy_bg_images = qfy_bg_images.split("|^^|");
    var str = "";
    var bodyColor = jQuery("body").css("background-color");
    var bodyrepeat = jQuery("body").css("background-repeat");
    var bodyattachment = jQuery("body").css("background-attachment");
    var bodyposition = jQuery("body").css("background-position");
    var bodysize = jQuery("body").css("background-size");


    for (i = 0; i < tmp_qfy_bg_images.length; i++) {
        var img = tmp_qfy_bg_images[i];
        if (i == 0) {
            str += '<div style="position: absolute;opacity: 1;height:100%;width:100%;background:url(' + img + ')"  class="show"></div>';
        } else {
            str += '<div style="position: absolute;opacity: 0;height:100%;width:100%;background:url(' + img + ')"  ></div>';
        }
    }
    jQuery("body").prepend('<div class="qfy_body_background" style="width:100%;height:100%;left: 0;;position: fixed;top: 0;z-index: -1;"> ' + str + '</div>');
    jQuery("body .qfy_body_background > div").css("background-color", bodyColor).css("background-repeat", bodyrepeat).css("background-attachment", bodyattachment).css("background-position", bodyposition).css("background-size", bodysize);
    jQuery('div.qfy_body_background div').css({ opacity: 0.0 });
    jQuery('div.qfy_body_background div:first').css({ opacity: 1.0 });

    setInterval(function() {
        var current = (jQuery('div.qfy_body_background div.show') ? jQuery('div.qfy_body_background div.show') : jQuery('div.qfy_body_background div:first'));
        if (current.length == 0) current = jQuery('div.qfy_body_background div:first');
        var next = ((current.next().length) ? ((current.next().hasClass('show')) ? jQuery('div.qfy_body_background div:first') : current.next()) : jQuery('div.qfy_body_background div:first'));
        next.css({ opacity: 0.0 })
            .addClass('show')
            .animate({ opacity: 1.0 }, 1000);
        current.animate({ opacity: 0.0 }, 1000)
            .removeClass('show');
    }, time * 1000);


}

function vc_3d_photo() {
    if (jQuery(".qfy-360viewer").length > 0) {
        jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-3d-photo.js", function() {
            vc_3d_photo_init();
        });
    }
}

function vc_element_init() {
    if (dtGlobals.isMobile == false && jQuery("body").width() < 768) {
        jQuery(".qfy-element").each(function() {
            var m_padding = jQuery(this).attr("m-padding");
            if (m_padding) {
                jQuery(this).css("padding", m_padding);
            }
        });
    }
}

function right_nav_bar() {
    if (jQuery(".right_nav_bar").length > 0) {
        jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-right-navbar.js", function() {
            right_nav_bar_init();
        });
    }
}


function dropdownmenu_event(obj) {

    var $this = jQuery(obj);
    var p = $this.closest(".dropdown_container");
    if (p.find(".list-content").hasClass("active")) {
        p.find(".list-content").removeClass("active");
        p.closest("section").removeClass("overflowauto");
        p.closest(".qfy-column-inner").removeClass("overflowauto");
    } else {
        p.find(".list-content").addClass("active");
        p.closest("section").addClass("overflowauto");
        p.closest(".qfy-column-inner").addClass("overflowauto");
    }

}

function column_init_align() {

    var w = jQuery("body").width();
    jQuery('.qfy-column-inner.column_middle').each(function() {

        jQuery(this).css("margin-top", 0).css("margin-bottom", 0);
        var section = jQuery(this).closest("section.section");
        var heigth = jQuery(this).height();
        var t1 = section.css("padding-top").replace("px", "");
        var t2 = section.css("padding-bottom").replace("px", "");
        var pheight = section.height();
        var padding = 0;
        if (pheight < heigth) pheight = heigth;
        if (t1 > 0 || t2 > 0) {
            if ((pheight * 1 - heigth) < (t1 - t2)) {
                if (pheight * 1 == heigth) {
                    padding = (t2 * 1 - t1 * 1) / 2;
                } else {
                    padding = (t2 * 1 - t1 * 1 - heigth) / 2;
                }
            } else if ((pheight * 1 - heigth) < (t2 - t1)) {
                padding = t2 * 1 - t1 * 1 + (heigth - pheight) / 2;
            } else {
                padding = (t2 * 1 - t1 * 1) / 2;
            }
        }

        if (jQuery(this).siblings(".qfy-column-inner").length > 0) {
            if (w > 760) {
                jQuery(this).css("margin-top", ((pheight - heigth) / 2 + padding) + "px");
            }
        } else {
            jQuery(this).css("margin-top", ((pheight - heigth) / 2 + padding) + "px");
        }

    })
    jQuery('.qfy-column-inner.column_bottom').each(function() {
        var section = jQuery(this).closest("section.section");
        jQuery(this).css("margin-top", 0).css("margin-bottom", 0);
        var heigth = jQuery(this).height();
        var t1 = section.css("padding-top").replace("px", "");
        var t2 = section.css("padding-bottom").replace("px", "");

        var $this = this;
        if (is_edit_model) {
            setTimeout(function() {
                var pheight = section.height();
                if (pheight < heigth) pheight = heigth;
                if (section.find(".qfy-column-inner").length > 1) {
                    if (w > 760) {
                        jQuery($this).css("margin-top", (pheight - heigth) + "px");
                    }
                } else {
                    jQuery($this).css("margin-top", (pheight - heigth) + "px");
                }
            }, 80);
        } else {
            var pheight = section.height();
            if (pheight < heigth) pheight = heigth;
            if (section.find(".qfy-column-inner").length > 1) {
                if (w > 760) {
                    jQuery(this).css("margin-top", (pheight - heigth) + "px");
                }
            } else {
                jQuery(this).css("margin-top", (pheight - heigth) + "px");
            }
        }

    })

}

function vc_royalSlider_gallery_init() {
    if (jQuery('.royalSlider_gallery_new').length == 0) {
        return;
    }

    if (typeof jQuery.fn.royalSlider == "undefined") {
        jQuery.onDemandScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js", function() {
            _vc_royalSlider_gallery_init();
        })
    } else {
        _vc_royalSlider_gallery_init();
    }
}

function accordioncontent() {
    jQuery('.qfy-accordioncontent:not(.changed)').each(function() {
        jQuery(this).addClass("changed").find('.a_content').each(function() {
            var p = jQuery(this).parent();
            jQuery(this).find('> section').each(function(index) {
                var curr = p.find(".a_header h4:eq(" + index + ")");
                var text = curr.html();
                if (text) {
                    jQuery(this).before('<h4 class="panel-title" >' + text + '</h4>');
                    jQuery(this).prev().find(".line").remove();
                }

                if (curr.find(".line").length > 0) {
                    var line = "<h5 class='qfydownline' style='position:relative;z-index:5;margin:0;padding:0;opacity:1;'>" + curr.find(".line").clone().prop("outerHTML") + "</h5>";
                    jQuery(this).after(line);
                }
            })
        })
    })


}
jQuery(window).load(function() {
    if (!is_edit_model) {
        resizeDefaultObjSize();
    }
});
//å¤„ç†é”šç‚¹
var hash = window.location.hash;
_menu_link_event(hash);

function lottieReady($) {
    if ($(".animentor-lottie-widget").length == 0) {
        return;
    }
    if (typeof lottie == "undefined") {
        $.onDemandScript("/FeiEditor/bitSite/js/lottie.min.js", function() {
            _lottieReady($);
        })
    } else {
        _lottieReady($);
    }
}

function mousemove_animate_fun($) {

    $(document).bind('mousemove', function(e) {
        var document_width = $(window).width();
        var document_height = $(window).height();
        var scroll = $(document).scrollTop();
        var per_x = (e.pageX / document_width).toFixed(3);
        var per_y = ((e.pageY - scroll) / document_height).toFixed(3);
        $('[data-mouse-animate="move"]').each(function() {
            var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
            var y = $(this).attr("data-mouse-y") ? $(this).attr("data-mouse-y") : 0;
            var z = $(this).attr("data-mouse-z") ? $(this).attr("data-mouse-z") : 0;
            var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
            var y1 = $(this).attr("data-mouse-y1") ? $(this).attr("data-mouse-y1") : 0;
            var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
            var dw = $(this).attr("data-mouse-dw") == 1 ? "vw" : "px";
            if (type == 0) {
                var n_x = x * 1 + (x1 - x) * per_x;
                var n_y = y * 1 + (y1 - y) * per_y;
            } else {
                var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
                var n_y = y * 1 + (y1 - y) * (type == "1" ? per_x : per_y);
            }
            $(this).css("transform", "translate3d(" + n_x + dw + ", " + n_y + dw + ", 0)");
            //.....
            if ($(this).hasClass("qfy-element")) {
                $(this).parents(".section").addClass("overflowauto");
            }

        })
        $('[data-mouse-animate="scale"]').each(function() {
            var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
            var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
            var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
            if (type == 0) {
                var n_x = x * 1 + (x1 - x) * (per_x > per_y ? per_x : per_y);
            } else {
                var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
            }
            $(this).css("transform", "scale(" + n_x + ")");
            if ($(this).hasClass("qfy-element")) {
                $(this).parents(".section").addClass("overflowauto");
            }
        });
        $('[data-mouse-animate="rotate"]').each(function() {
            var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
            var y = $(this).attr("data-mouse-y") ? $(this).attr("data-mouse-y") : 0;
            var z = $(this).attr("data-mouse-z") ? $(this).attr("data-mouse-z") : 0;
            var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
            var y1 = $(this).attr("data-mouse-y1") ? $(this).attr("data-mouse-y1") : 0;
            var z1 = $(this).attr("data-mouse-z1") ? $(this).attr("data-mouse-z1") : 0;
            var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
            if (type == 0) {
                var n_x = x * 1 + (x1 - x) * per_x;
                var n_y = y * 1 + (y1 - y) * per_y;
                var n_z = z * 1 + (z1 - z) * per_x;
            } else {
                var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
                var n_y = y * 1 + (y1 - y) * (type == "1" ? per_x : per_y);
                var n_z = z * 1 + (z1 - z) * (type == "1" ? per_x : per_y);
            }
            $(this).css("transform", "rotateX(" + n_x + "deg) rotateY(" + n_z + "deg) rotateZ(" + n_y + "deg) ");
            if ($(this).hasClass("qfy-element")) {
                $(this).parents(".section").addClass("overflowauto");
            }
        });
        $('[data-mouse-animate="skew"]').each(function() {
            var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
            var y = $(this).attr("data-mouse-y") ? $(this).attr("data-mouse-y") : 0;
            var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
            var y1 = $(this).attr("data-mouse-y1") ? $(this).attr("data-mouse-y1") : 0;
            var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
            if (type == 0) {
                var n_x = x * 1 + (x1 - x) * per_x;
                var n_y = y * 1 + (y1 - y) * per_y;
            } else {
                var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
                var n_y = y * 1 + (y1 - y) * (type == "1" ? per_x : per_y);
            }
            $(this).css("transform", "skew(" + n_x + "deg, " + n_y + "deg)");
            if ($(this).hasClass("qfy-element")) {
                $(this).parents(".section").addClass("overflowauto");
            }
        });
    });
}

function scroll_animate_fun($) {
    var ismobile = /Mobile/.test(navigator.userAgent);
    $(document).bind('scroll', function(e) {
        var curr_p = $(this).scrollTop();
        var scollheight = $(document).height() - $(window).height();
        if ($(document).width() < 760) {
            ismobile = true;
        }
        var per_x = (curr_p / scollheight).toFixed(3);
        $('[data-scroll-animate="move"]').each(function() {
            var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
            var y = $(this).attr("data-scroll-y") ? $(this).attr("data-scroll-y") : 0;
            var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
            var y1 = $(this).attr("data-scroll-y1") ? $(this).attr("data-scroll-y1") : 0;
            var dw = $(this).attr("data-scroll-dw") == 1 ? "vw" : "px";
            var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
            var n_x = x * 1 + (x1 - x) * per_x;
            var n_y = y * 1 + (y1 - y) * per_x;
            if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
                $(this).css("transform", "translate3d(" + n_x + dw + ", " + n_y + dw + ", 0)");
                if ($(this).hasClass("qfy-element")) {
                    $(this).parents(".section").addClass("overflowauto");
                }
            }

        })
        $('[data-scroll-animate="scale"]').each(function() {
            var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
            var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
            var n_x = x * 1 + (x1 - x) * per_x;
            var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
            if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
                $(this).css("transform", "scale(" + n_x + ")");
                if ($(this).hasClass("qfy-element")) {
                    $(this).parents(".section").addClass("overflowauto");
                }
            }
        });
        $('[data-scroll-animate="rotate"]').each(function() {
            var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
            var y = $(this).attr("data-scroll-y") ? $(this).attr("data-scroll-y") : 0;
            var z = $(this).attr("data-scroll-z") ? $(this).attr("data-scroll-z") : 0;
            var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
            var y1 = $(this).attr("data-scroll-y1") ? $(this).attr("data-scroll-y1") : 0;
            var z1 = $(this).attr("data-scroll-z1") ? $(this).attr("data-scroll-z1") : 0;
            var n_x = x * 1 + (x1 - x) * per_x;
            var n_y = y * 1 + (y1 - y) * per_x;
            var n_z = z * 1 + (z1 - z) * per_x;
            var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
            if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
                $(this).css("transform", "rotateX(" + n_x + "deg) rotateY(" + n_z + "deg) rotateZ(" + n_y + "deg) ");
                if ($(this).hasClass("qfy-element")) {
                    $(this).parents(".section").addClass("overflowauto");
                }
            }
        });
        $('[data-scroll-animate="skew"]').each(function() {
            var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
            var y = $(this).attr("data-scroll-y") ? $(this).attr("data-scroll-y") : 0;
            var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
            var y1 = $(this).attr("data-scroll-y1") ? $(this).attr("data-scroll-y1") : 0;
            var type = $(this).attr("data-scroll-animate-type") ? $(this).attr("data-scroll-animate-type") : 0;
            var n_x = x * 1 + (x1 - x) * per_x;
            var n_y = y * 1 + (y1 - y) * per_x;
            var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
            if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
                $(this).css("transform", "skew(" + n_x + "deg, " + n_y + "deg)");
                if ($(this).hasClass("qfy-element")) {
                    $(this).parents(".section").addClass("overflowauto");
                }
            }
        });
    });
}

function shape_ready() {
    if (jQuery(".shape_image_svg").length == 0) {
        return;
    }
    if (typeof anime == "undefined") {
        jQuery.onDemandScript("/FeiEditor/bitSite/js/anime.min.js", function() {
            jQuery(".shape_image_svg:not(.loaded)").each(function() {
                var shapeEl = jQuery(this).find("path")[0];
                var pos = jQuery(this).attr("data-path");
                var duration = jQuery(this).attr("data-t");
                var begin = jQuery(this).attr("data-begin");
                var end = jQuery(this).attr("data-end");
                if (pos == 99) {
                    if (begin && end && begin.indexOf(",") > -1 && end.indexOf(",") > -1) {
                        shape_loop_init(shapeEl, pos, duration * 1, begin, end, jQuery(this).parent().hasClass("background-shapes"));
                    }
                } else {
                    shape_loop_init(shapeEl, pos - 1, duration * 1, "", "", jQuery(this).parent().hasClass("background-shapes"));
                }

                jQuery(this).addClass("loaded");
            })
        })
    } else {

        jQuery(".shape_image_svg:not(.loaded)").each(function() {
            var shapeEl = jQuery(this).find("path")[0];
            var pos = jQuery(this).attr("data-path");
            var duration = jQuery(this).attr("data-t");
            var begin = jQuery(this).attr("data-begin");
            var end = jQuery(this).attr("data-end");

            if (pos == 99) {
                if (begin && end && begin.indexOf(",") > -1 && end.indexOf(",") > -1) {
                    shape_loop_init(shapeEl, pos, duration * 1, begin, end, jQuery(this).parent().hasClass("background-shapes"));
                }
            } else {
                shape_loop_init(shapeEl, pos - 1, duration * 1, "", "", jQuery(this).parent().hasClass("background-shapes"));
            }
            jQuery(this).addClass("loaded");
        })
    }


}


jQuery(document).ready(function($) {

    if ($('[data-mouse-animate]').length > 0 || is_edit_model) {
        mousemove_animate_fun($);
    }
    if ($('[data-scroll-animate]').length > 0 || is_edit_model) {
        scroll_animate_fun($);
    }
    //æ»šåŠ¨...
    if ($("#phantom").css("display") == "block") {
        var floatMenuH = $("#phantom").height();
    } else {
        var floatMenuH = 0;
    }
    var urlHash = "#" + window.location.href.split("#")[1];
    if ($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
        if (urlHash != "#undefined") {
            $("html").animate({
                scrollTop: $(".one-page-row div[data-anchor='" + urlHash + "']").offset().top - floatMenuH + 1
            }, 600, function() {
                $("body").removeClass("is-scroll");
            });
        }
    } else {
        if (urlHash.indexOf("=") < 0 && $(urlHash).length > 0) {
            $("body").addClass("is-scroll");
            setTimeout(function() {
                $("html").animate({
                    scrollTop: $(urlHash).offset().top
                }, 600, function() {
                    jQuery("#parallax-nav a[href='" + urlHash + "']").closest("li").addClass("active");
                    $("body").removeClass("is-scroll");
                    parallax_scroll_fun();
                });
            }, 500);

        } else {
            parallax_scroll_fun();
        }
    }
    //æ»šåŠ¨...end
    //...check body
    vc_element_init();
    //ä¾§è¾¹æ 
    right_nav_bar();
    //åº•éƒ¨èœå•
    jQuery(".footerbar-menu .menu-item-has-children>a").click(function(e) {
            e.stopPropagation();
            e.preventDefault();
            var submenu = jQuery(this).next(".sub-menu");
            if (submenu.css("display") == "none") {
                submenu.css("display", "block");
            } else {
                submenu.css("display", "none");
            }
        })
        //èƒŒæ™¯å¤šä¸ªå›¾ç‰‡åˆ‡æ¢
    if (typeof(qfy_bg_images) != "undefined") {
        thebackground(qfy_bg_images, qfy_bg_images_int);
    }
    //å›¾ç‰‡åŠ è½½å®Œå†æ‰§è¡Œä¸€ä¸‹resize
    if (jQuery(".preloadimg:not('.loaded')").length > 0) {
        setTimeout(function() {
            jQuery(".preloadimg:not('.loaded')").each(function() {
                var newurl = jQuery(this).attr("org-src");
                jQuery(this).attr("src", newurl).addClass("loaded").load(function() {
                    var newscrset = jQuery(this).attr("org-srcset");
                    if (newscrset) {
                        jQuery(this).attr("srcset", newscrset);
                    }
                    resizeDefaultObjSize();
                });
            });
        }, 300);
    }

    //å¤šçº§é€‰æ‹©
    qfy_custom_select();


    if (!is_edit_model) {
        $(".qfy-text a[url-flagtarget='_blank']").attr("target", "_blank");
        $(".qfy-text a[url-flagtarget='']").removeAttr("target");
    }
    if (top != self) {
        function closeOpenPanel() {
            if (top.jQuery(".boxy-wrapper:visible").length > 0) {
                top.jQuery(".boxy-wrapper:visible .buttonClass1").click();
            }
            if (parent.jQuery("#qfbody-content>.panel:visible").length > 0) {
                parent.jQuery("#qfbody-content>.panel:visible .vc-close").click();
            }
            if (top.jQuery(".bitPopIframe:visible").length > 0) {
                top.jQuery(".bitPopIframe:visible .btn-default").click();
            }
        }
        var ctrlDown = false;
        var escDown = false;
        var ctrlKey = 17,
            vKey = 86,
            cKey = 67,
            escKey = 27,
            zkey = 90,
            ykey = 89;
        $(document).keydown(function(e) {
            if (e.keyCode == escKey) {
                closeOpenPanel();
                top.jQuery.unblockUI();
            }
            if (e.ctrlKey && (e.keyCode == zkey || e.keyCode == ykey)) {
                top.restorePage();
            }
        })
        try {
            $(top.document).keydown(function(e) {
                if (e.keyCode == escKey) {
                    closeOpenPanel();
                }
                if (e.ctrlKey && (e.keyCode == zkey || e.keyCode == ykey)) {
                    top.restorePage();
                }
            })
            $(parent.document).keydown(function(e) {
                if (e.keyCode == escKey) {
                    closeOpenPanel();
                }
            })
        } catch (e) {}
    } else {
        $(document).keydown(function(e) {
            if (e.keyCode == "27") {
                jQuery.unblockUI();
            }
        })


    }
    $(".dropdown-toggle").unbind("click").bind("click", function() {
        var obj = jQuery(this).parent().find(".dropdown-menu");
        if (obj.css("display") == "none") {
            obj.show();
            if (obj.closest(".vc_user_lp").length > 0) {
                obj.closest("section").addClass("overflowauto");
            }
        } else {
            obj.hide();
        }
    })
    initmouseover();
    resizeDefaultObjSize();
    toolTip();
    weiBoAndWeiXinToolTip();

    /*--Set variable for floating menu*/



    /*--Detect iphone phone*/
    if (dtGlobals.isiPhone) {
        $("body").addClass("is-iphone");
    };
    if (!is_edit_model) {
        if ($(".bitMainTopSider .vc-no-content-helper").length == 0 && $(".bitMainTopSider").length > 0 && $(".bitMainTopSider").height() == 0) {
            $(".bitMainTopSider").parent().parent().remove();
            //$(".bitMainTopSider-wrapper").css("padding-top",0);
        }
    }
    $.fn.exists = function() {
        if ($(this).length > 0) {
            return true;
        } else {
            return false;
        }
    }
    $.fn.loaded = function(callback, jointCallback, ensureCallback) {
        var len = this.length;
        if (len > 0) {
            return this.each(function() {
                var el = this,
                    $el = $(el),
                    blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

                $el.on("load.dt", function(event) {
                    $(this).off("load.dt");
                    if (typeof callback == "function") {
                        callback.call(this);
                    }
                    if (--len <= 0 && (typeof jointCallback == "function")) {
                        jointCallback.call(this);
                    }
                });

                if (!el.complete || el.complete === undefined) {
                    el.src = el.src;
                } else {
                    $el.trigger("load.dt")
                }
            });
        } else if (ensureCallback) {
            if (typeof jointCallback == "function") {
                jointCallback.call(this);
            }
            return this;
        }
    };
    $.fn.animateSkills = function() {
        $(".skill-value", this).each(function() {
            var $this = $(this),
                $this_data = $this.data("width");

            $this.css({
                width: $this_data + '%'
            });
        });
    };

    if (dtGlobals.isWindowsPhone) {
        $("body").addClass("windows-phone");
    }

    $(".mini-nav select").change(function() {
        window.location.href = $(this).val();
    });


    dtGlobals.isHovering = false;

    mainmenu_event();
    searchForm();
    /* !-Navigation widget */
    var customTimeoutShow
    $(".custom-nav > li > a").click(function(e) {
        $menuItem = $(this).parent();
        if ($menuItem.hasClass("has-children")) e.preventDefault();
        if ($(this).attr("class") != "active") {
            $(".custom-nav > li > ul").stop(true, true).slideUp(400);
            $(this).next().stop(true, true).slideDown(500);
            $(".custom-nav > li > a").removeClass("active");
            $(this).addClass('active');
        } else {
            $(this).next().stop(true, true).slideUp(500);
            $(this).removeClass("active");
        }

        $menuItem.siblings().removeClass("act");
        $menuItem.addClass("act");
    });
    $(".custom-nav > li > ul").each(function() {
        clearTimeout(customTimeoutShow);
        $this = $(this);
        $thisChildren = $this.find("li");
        if ($thisChildren.hasClass("act")) {
            $this.prev().addClass("active");
            $this.parent().siblings().removeClass("act");
            $this.parent().addClass("act");
            $(this).slideDown(500);
        }
    });

    var mtResizeTimeout;

    $(window).on("resize", function() {
        resizeDefaultObjSize();
        clearTimeout(mtResizeTimeout);
        mtResizeTimeout = setTimeout(function() {
            $(window).trigger("metroresize");
        }, 200);
        try {
            if (parent.jQuery("#mobile_iframe_preivew").length == 1) {
                parent.setMobileDocumentInit();
            }
        } catch (e) {}
        if (jQuery("#header.logo-left-right #navigation ul.ab-center").length > 0) {
            var v1 = jQuery("#header #branding").width();
            var v2 = jQuery("#header .assistive-info").width();
            jQuery("#header #navigation #main-nav").css("text-align", "center").css("left", (v2 - v1) / 2 + "px");

        }

    });
    try {
        if (parent.jQuery("#mobile_iframe_preivew").length == 1) {
            setTimeout(function() {
                parent.setMobileDocumentInit();
            }, 1000);
        }
    } catch (e) {}
    if (jQuery(".zh_tw_lang").length > 0) {
        StranBody(jQuery(".zh_tw_lang")[0]);
        var href = jQuery(".selected_template_a").attr("href");
        var nhref = Traditionalized(href);
        jQuery(".selected_template_a").attr("href", nhref);
    }
    //ç¿»è¯‘ç®€ç¹ä½“
    tranlanguage(jQuery("html"));
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.scroll-top').removeClass('off').addClass('on');
        } else {
            $('.scroll-top').removeClass('on').addClass('off');
        }
    });
    $(".scroll-top").click(function(e) {
        e.preventDefault();
        $("html").animate({ scrollTop: 0 }, "slow");
        return false;
    });



    // !- Animation "onScroll" loop
    function doAnimation() {

        if (dtGlobals.isMobile) {
            $(".skills").animateSkills();
        }
        if ($("html").hasClass("old-ie")) {
            $(".skills").animateSkills();
        };
    };
    // !- Fire animation
    doAnimation();
    /* Skills:end */
    // Create the dropdown base 12.02.14
    $("<select />").prependTo(".mini-nav .menu-select");

    // Create default option "Select"
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "â€”â€”â€”"
    }).appendTo(".mini-nav .menu-select select");

    // Populate dropdown with menu items
    $('.bitcommerce-ordering-div select').each(function() {
        $(this).customSelect();
    });
    jQuery(window).load(function() {
        if (jQuery('#load').length) {
            jQuery('#load').fadeOut().remove();
        }
    });

    $("#main-nav .menu-item a,.dl-menu li a").not(".dl-menu li.dl-back a[href^='#']").each(function() {
        var $_this = $(this),
            selector = $_this.attr("href");

        if (selector && selector.indexOf("#") > -1 && selector.indexOf("/") < 0 && selector != "#") {
            //if(selector.indexOf("#")!=0){
            selector = jQuery.trim(selector);
            var tmpselecter = selector.split("#");
            selector = "#" + tmpselecter[tmpselecter.length - 1];
            //}

            if (selector != "#" && selector.indexOf("=") < 0 && $(selector).length > 0) {
                $(this).on('click', function(e) {
                    var $_this = $(this),
                        selector = $_this.attr("href");

                    //æ‰‹æœºä¸‹èœå•æ˜¯#ï¼Œå­èœå•æ— æ³•ç‚¹å‡»
                    var mobilemenu = $_this.closest("#dl-menu").find("#mobile-menu").length;
                    if (mobilemenu > 0 && $_this.parent().hasClass("has-children")) {
                        var $submenu = $_this.parent().find('ul.dl-submenu:first');
                        if ($submenu.length > 0) {
                            var xx = event.pageX;
                            var width = $submenu.width();
                            var isclick = width - xx > 35;
                            if (!isclick) return;
                        }
                    }

                    if ($("body >.dl-menuwrapper.floatmenu").length > 0) {
                        $("#dl-menu #mobile-menu .phone-text").click();
                    }

                    $("body").addClass("is-scroll");


                    if ($("#phantom").css("display") == "block") {
                        var floatMenuH = $("#phantom").height();
                    } else {
                        var floatMenuH = 0;
                    }

                    //if(selector.indexOf("#")!=0){
                    var tmpselecter = selector.split("#");
                    selector = "#" + tmpselecter[tmpselecter.length - 1];
                    //}
                    $_this.closest("#dl-menu").find(".wf-phone-hidden.phone-text").click();
                    var base_speed = 600,
                        speed = base_speed;
                    if (selector.indexOf("=") < 0 && $(selector).length > 0) {
                        var this_offset = $_this.offset(),
                            that_offset = $(selector).offset(),
                            offset_diff = Math.abs(that_offset.top - this_offset.top),
                            speed = (offset_diff * base_speed) / 1000;
                    }

                    $(".one-page-row .menu-item a").parent("li").removeClass("act");
                    if ($(".one-page-row").length > 0) {
                        $_this.parent("li").addClass("act");
                    }
                    if (selector == "#" && ($(".one-page-row").length > 0)) {
                        $("html").animate({
                            scrollTop: 0
                        }, speed, function() {
                            $("body").removeClass("is-scroll");
                            $_this.parent().siblings(".onepage").removeClass("act onepage");
                        });
                    } else {
                        if ($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                            $("html").animate({
                                scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                            }, speed, function() {
                                $("body").removeClass("is-scroll");
                            });
                        } else {
                            if (selector.indexOf("=") < 0 && $(selector).length > 0) {
                                $("html").animate({
                                    scrollTop: $(selector).offset().top - floatMenuH + 1
                                }, speed, function() {
                                    $("body").removeClass("is-scroll");

                                    $_this.parent().siblings(".onepage").removeClass("act onepage");
                                    $_this.parent().addClass("act onepage");
                                    _menu_link_event(selector);

                                });
                            }
                        }
                    }
                    return false;
                });

            }

        }

    });
    $("ul.menu a,.tabcontent-inner>ul a").each(function() {
        var $_this = $(this),
            selector = $_this.attr("href");
        if (selector && selector.indexOf("#") > -1 && selector.indexOf("/") < 0 && selector != "#") {

            selector = jQuery.trim(selector);
            var tmpselecter = selector.split("#");
            selector = "#" + tmpselecter[tmpselecter.length - 1];
            if (selector != "#" && selector.indexOf("=") < 0 && $(selector).length > 0) {
                $(this).on('click', function(e) {
                    $("body").addClass("is-scroll");
                    if ($("#phantom").css("display") == "block") {
                        var floatMenuH = $("#phantom").height();
                    } else {
                        var floatMenuH = 0;
                    }
                    var base_speed = 600,
                        speed = base_speed;
                    var this_offset = $_this.offset(),
                        that_offset = $(selector).offset(),
                        offset_diff = Math.abs(that_offset.top - this_offset.top),
                        speed = (offset_diff * base_speed) / 1000;

                    $("html").animate({
                        scrollTop: $(selector).offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                        _menu_link_event(selector);
                    });

                });
            }
        }
    });
    $(".logo-box a[href^='#'], #branding a[href^='#'], #branding-bottom a[href^='#']").on('click', function(e) {
        $("body").addClass("is-scroll");
        if ($("#phantom").css("display") == "block") {
            var floatMenuH = $("#phantom").height();
        } else {
            var floatMenuH = 0;
        }
        var $_this = $(this),
            selector = $_this.attr("href");

        var base_speed = 600,
            speed = base_speed;
        if ($(selector).length > 0) {
            var this_offset = $_this.offset(),
                that_offset = $(selector).offset(),
                offset_diff = Math.abs(that_offset.top - this_offset.top),
                speed = (offset_diff * base_speed) / 1000;
        }
        if (selector == "#") {
            $("html").animate({
                scrollTop: 0
            }, speed, function() {
                $("body").removeClass("is-scroll");
            });
        } else {
            if ($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                $("html").animate({
                    scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                }, speed, function() {
                    $("body").removeClass("is-scroll");
                });
            } else {
                if ($(selector).length > 0) {
                    $("html").animate({
                        scrollTop: $(selector).offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                    });
                }
            }
        }
        return false;
    });
    //float
    floatmenu_create();

    let menu_has_href = false;
    $(".mainmenu >.menu-item > a").each(function() {
        var href = jQuery(this).attr("href");
        if (href.indexOf("#") > -1 && href != "#") {
            menu_has_href = true;
        }
    });
    if (menu_has_href) {
        $.onDemandScript("/qfy-content/themes/qfy-01/js/a-menu-href.js", function() {
            mainmenu_href_event();
        })
    }
    if ($(".yy_website_notice").length > 0) {
        var hasnotice = getCookie("yy_website_notice");
        //console.log("hasnotice="+hasnotice);
        if (hasnotice != "1") {
            var begin = $(".yy_website_notice").attr("data-begin");
            var end = $(".yy_website_notice").attr("data-end");
            var timestamp = 8 * 3600 + Date.parse(new Date()) / 1000;
            if ((begin && timestamp < begin) || (end && timestamp > end)) {
                //pass

            } else {
                setTimeout(function() {
                    $("body").addClass("is-showing-notice");
                }, 100);
            }
        }
        $(".yy_website_notice_close").click(function() {
            var type = $(this).attr("data-close");
            if (type == 1) {
                setCookie("yy_website_notice", 1, 1);
            } else if (type == 2) {
                setCookie("yy_website_notice", 1, -1);
            } else {
                setCookie("yy_website_notice", 1, 365);

            }
            $(".yy_website_notice").remove();
            $("body").removeClass("is-showing-notice");
        })
    }

    //ready end
});

function floatmenu_create() {
    var $ = jQuery;
    if (jQuery("#header.logo-left-right #navigation ul.ab-center").length > 0) {
        var v1 = jQuery("#header #branding").width();
        var v2 = jQuery("#header .assistive-info .top-bar-right").width();
        jQuery("#header #navigation #main-nav").css("text-align", "center").css("left", (v2 - v1) / 2 + "px");
    }
    if ($("#header.newrightmenu,#header.newleftmenu").length > 0) {
        if ($("#page.bodyheader40,#page.bodyheader0").length > 0) {
            $("#header").css("position", "fixed").css("top", "0");
            return;
        }
    };

    if (dtGlobals.isMobile && !dtGlobals.isiPad) smartMenu = false;
    if (smartMenu && $("#header").length > 0) {
        $.onDemandScript("/qfy-content/themes/qfy-01/js/a-menu-float.js", function() {
            floatmenu_create_init();
        })
    }

}

function _menu_link_event(hash) {
    $ = jQuery;
    //å¤„ç†ä¸»èœå•
    var ishash = false;
    if (hash.indexOf("#") == 0 && hash != "#" && hash.indexOf("=") < 0 && jQuery(hash).length > 0) {
        $(".mainmenu").each(function() {
            $(this).find("a").each(function() {
                var href = jQuery(this).attr("href");
                if (href) {
                    var start = href.indexOf(hash);
                    if (href.substr(start) == hash && ishash == false) {
                        ishash = true;
                        var ul = jQuery(this).closest(".mainmenu");
                        ul.find(".act").removeClass("act");
                        var currli = jQuery(this).closest("li");
                        currli.addClass("act");
                        currli.parents("li").addClass("act");
                    }
                }
            })
        })

    } else {
        $(".mainmenu .sub-nav .act").each(function() {
            var href = $(this).find(">a").attr("href");
            if (href.indexOf("#") > -1) {
                $(this).removeClass("act");
            }
        })

    }
    //å¤„ç†å…¶ä»–èœå•
    if (hash.indexOf("#") == 0 && hash != "#" && hash.indexOf("=") < 0 && jQuery(hash).length > 0) {
        $(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function() {
            var ismenuhash = false;
            $(this).find("a").each(function() {
                var href = jQuery(this).attr("href");
                if (href) {
                    var start = href.indexOf(hash);
                    if (href.substr(start) == hash && ismenuhash == false) {
                        ismenuhash = true;
                        var ul = jQuery(this).closest("ul.menu");
                        ul.find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
                        var currli = jQuery(this).closest("li");
                        currli.addClass("current-menu-item");
                        currli.parents("li").addClass("current-menu-item");
                    }
                }
            })
        })

    } else {
        $(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function() {
            $(this).find(">li.current-menu-item").each(function(i) {
                if (i > 0) {
                    $(this).removeClass("current-menu-item current-menu-ancestor");
                    $(this).find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
                }
            });
        })
    }

    if (hash.indexOf("#") == 0 && hash != "#" && hash.indexOf("=") < 0 && jQuery(hash).length > 0) {
        $(".tabcontent-inner>ul").each(function() {
            var ismenuhash = false;
            $(this).find("a").each(function() {
                var href = $(this).attr("href");
                if (href) {
                    var start = href.indexOf(hash);
                    if (href.substr(start) == hash && ismenuhash == false) {
                        ismenuhash = true;
                        var ul = jQuery(this).closest(".tabcontent-inner");
                        ul.find(".active").removeClass("active");
                        $(this).addClass("active");
                    }
                }
            })
        })
    }
}

function mainmenu_event() {
    $ = jQuery;
    //custom menu
    if ($("body").hasClass("u-body")) {
        return;
    }

    $("#mobile-menu").removeAttr("style").wrap("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible main-mobile-menu' style='display:none' />");
    if ($("#mobile-menu").hasClass("dropTopStyle")) {
        $("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
        $("#dl-menu:not(.dl-qfymobile-menu)").remove();
        $("body").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropTopStyle_containter' >" + menu_html + "</div>");
        menu_html = null;
        if ($("#mobile-menu").hasClass("left")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
        } else if ($("#mobile-menu").hasClass("right")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
        } else {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
        }

        var padding = $("#mobile-menu").attr("data-padding");
        if (padding) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left", padding + "px").css("padding-right", padding + "px");
        }
        if ($("#mobile-menu").hasClass("positionFixed")) {
            mobile_menu_fix();
        }

    } else if ($("#mobile-menu").hasClass("dropCenterStyle")) {
        $("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
        $("#dl-menu:not(.dl-qfymobile-menu)").remove();
        $("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropCenterStyle_containter' >" + menu_html + "</div>");
        menu_html = null;
        if ($("#mobile-menu").hasClass("left")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
        } else if ($("#mobile-menu").hasClass("right")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
        } else {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
        }
        var padding = $("#mobile-menu").attr("data-padding");
        if (padding) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left", padding + "px").css("padding-right", padding + "px");
        }
        if ($("#mobile-menu").hasClass("positionFixed")) {
            mobile_menu_fix();
        }


    } else if ($("#header").hasClass("wf-mobile-hidden")) {
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
        $("#dl-menu:not(.dl-qfymobile-menu)").remove();
        $("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible mobiledefault_containter' style='text-align:center;margin:0px auto;' >" + menu_html + "</div>");
        if ($("#mobile-menu").hasClass("positionFixed")) {
            mobile_menu_fix();
        }

    } else {
        //default
        if ($("#mobile-menu").hasClass("positionFixed")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("mobiledefault_containter");
            mobile_menu_fix();
        }

    }

    $(".underline-hover > li > a > span").not(".underline-hover > li > a > span.mega-icon").append("<i class='underline'></i>");
    $("#main-nav .menu-nav > li > a > span").append("<i class='underline'></i>");

    var $mainNav = $("#main-nav,.mini-nav");

    var $mobileNav = $mainNav.clone();
    var $mobileTopNav = $(".mini-nav").clone();
    var backCap = $("#mobile-menu > .menu-back").html();

    $mobileNav
        .attr("id", "")
        .attr("class", "dl-menu")
        .find(".sub-nav")
        .addClass("dl-submenu")
        .removeClass("sub-nav")
        .prepend("<li class='menu-item dl-back'><a href='#'><span>" + backCap + "</a></li>");


    $mobileNav.appendTo("#dl-menu:not(.dl-qfymobile-menu)").wrap("<div class='dl-container' />");


    $("body").removeClass("mobilefloatmenu");
    $("body >.dl-menu-film,body >.dl-menu-fixedheader").remove();
    if ($("#mobile-menu").hasClass("floatmenu") || $("#mobile-menu").hasClass("fullfloatmenu") || $("#mobile-menu").hasClass("leftbtnmenu")) {
        $("body").addClass("mobilefloatmenu");
        var menu_content = $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").prop("outerHTML");
        $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").remove();
        $("body").prepend("<div  class='dl-menuwrapper  wf-mobile-visible floatmenu floatwarpper' >" + menu_content + "</div>");
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").prop("outerHTML");
        $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").remove();
        $("body #page").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible floatmenu' >" + menu_html + "</div>");

        if ($("#mobile-menu").hasClass("fullfloatmenu")) {
            $(".dl-menuwrapper.floatmenu").addClass("fullfloatmenu");
        } else if ($("#mobile-menu").hasClass("leftbtnmenu")) {
            $("body").addClass("mobileleftbtnmenu");
            $(".dl-menuwrapper.floatmenu").addClass("leftbtnmenu").find(".dl-container").prepend(jQuery(".menu_displaynone").html()).append(jQuery(".menu_displaynone_footer").html());
            if ($("body >.dl-menu-film").length == 0) {
                $("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
            }
            if ($("body >.dl-menu-fixedheader").length == 0 && $(".leftbtnmenu #mobile-menu.displaynone").length == 0) {

                if ($(".yy_website_notice").length > 0) {
                    $(".yy_website_notice").after("<div class='dl-menu-fixedheader wf-mobile-visible'>" + jQuery(".menu_displaynone_header").html() + "</div>");
                } else {
                    $("body").prepend("<div class='dl-menu-fixedheader wf-mobile-visible'>" + jQuery(".menu_displaynone_header").html() + "</div>");
                }
            }
            if (top != self && jQuery("body").hasClass("compose-mode")) {
                jQuery("body").find(".qfyheadercontent [bitDataAction='site_widget_container'] .site_tooler").each(
                    function() {
                        parent.widgetHover(this, jQuery("body"));
                    })
                jQuery("body").find(".qfyheadercontent [bitDataAction='site_fix_container']").each(function() {
                    parent.widgetFixEvent(this);
                })
            }
            jQuery("body").addClass("moble_menufixed");
            mobile_menu_fix_2();
            if (jQuery(window).scrollTop() > jQuery(".dl-menu-fixedheader").height()) {
                jQuery(".dl-menu-fixedheader").css("position", "fixed");
                jQuery("body").addClass("fixedheadering");
            } else {
                jQuery(".dl-menu-fixedheader").css("position", "relative");
                jQuery("body").removeClass("fixedheadering");
            }
        }
        if ($("#mobile-menu").hasClass("left")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
            $(".floatwarpper").addClass("left");
        } else if ($("#mobile-menu").hasClass("right")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
            $(".floatwarpper").addClass("right");
        } else {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
            $(".floatwarpper").addClass("center");
        }
        var padding = $("#mobile-menu").attr("data-padding");
        if (padding) {
            $(".floatwarpper").css("padding-left", padding + "px").css("padding-right", padding + "px");
        }
        var element_right = $("#mobile-menu").attr("data-right");
        if (element_right) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("right", element_right + "px");
        }
        var element_top = $("#mobile-menu").attr("data-top");
        if (element_top) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("top", element_top + "px");
        }

    }

    if (!$("html").hasClass("old-ie")) $("#dl-menu:not(.dl-qfymobile-menu)").dlmenu();

    var timeouthidden = new Array();
    $(".qfy-sub-div.MenuAnimIn_js", $mainNav).parent().each(function(i) {
        var $this = jQuery(this);


        jQuery(this).on("mouseenter", function(e) {

            var obj = jQuery(this).find(".qfy-sub-div:first");
            if (timeouthidden[i]) {
                clearTimeout(timeouthidden[i]);
            }
            var h = obj.children().height();
            var t = obj.attr("data-time");
            if (!obj.hasClass("ing") && !obj.hasClass("ed")) {
                obj.stop().addClass("ing").removeClass("ending").css({ "visibility": "visible", "height": 0 }).animate({ "height": h }, t * 1000, function() {
                    jQuery(this).removeClass("ing").addClass("ed").css({ "visibility": "visible" });
                });
            }

        }).on("mouseleave", function(e) {

            var obj = jQuery(this).find(".qfy-sub-div:first");
            if (timeouthidden[i]) {
                clearTimeout(timeouthidden[i]);
            }
            timeouthidden[i] = setTimeout(function() {
                if (obj.hasClass("ending") || obj.hasClass("ing")) return;
                obj.addClass("ending").removeClass("ed").animate({ "height": 0 }, 500, function() { jQuery(this).removeClass("ending ed").css({ "visibility": "hidden", "height": 0 }); });
            }, 300);
        });
    });

    $(".sub-nav", $mainNav).parent().each(function() {
        var $this = $(this);
        if (dtGlobals.isMobile || dtGlobals.isWindowsPhone) {
            $this.find("> a").on("click tap", function(e) {
                if (!$(this).hasClass("dt-clicked")) {
                    e.preventDefault();
                    $mainNav.find(".dt-clicked").removeClass("dt-clicked");
                    $(this).addClass("dt-clicked");
                } else {
                    e.stopPropagation();
                }

            });
        };

        var menuTimeoutShow,
            menuTimeoutHide;

        if ($this.hasClass("dt-mega-menu")) {

            $this.on("mouseenter tap", function(e) {
                if (e.type == "tap") e.stopPropagation();
                var $ = jQuery;
                var $this = jQuery(this);
                $this.addClass("dt-hovered");

                dtGlobals.isHovering = true;


                var $_this = jQuery(this),
                    $_this_h = $this.height();

                var $_this_ofs_top = $this.position().top;
                $this.find("> .sub-nav").css({
                    top: $_this_ofs_top + $_this_h
                });


                if ($this.hasClass("mega-auto-width")) {
                    var $_this = $(this),
                        $_this_sub = $_this.find(" > .sub-nav > li"),
                        coll_width = $("#main .wf-wrap").width() / 5,
                        $_this_par_width = $_this.parent().width(),
                        $_this_parents_ofs = $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left;

                    $_this.find(" > .sub-nav").css({
                        left: $_this_parents_ofs,
                        "marginLeft": -($_this.find(" > .sub-nav").width() / 2 - $_this.width() / 2)
                    });
                }
                if ($this.is(':first-child') && $this.hasClass("mega-auto-width")) {
                    $this.find(" > .sub-nav").css({
                        left: $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left,
                        "marginLeft": 0
                    });
                } else if ($this.is(':last-child') && $this.hasClass("mega-auto-width")) {
                    $this.find(" > .sub-nav").css({
                        left: "auto",
                        right: $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").width() - ($this.position().left + $this.width()),
                        "marginLeft": 0
                    });
                };

                if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
                    $this.children("ul").addClass("right-overflow");
                };
                if ($this.position().left < ($this.children("ul").width() / 2)) {
                    $this.children("ul").addClass("left-overflow");
                }

                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);

                menuTimeoutShow = setTimeout(function() {
                    if ($this.hasClass("dt-hovered")) {
                        $this.find("ul").stop().css("visibility", "visible").animate({
                            "opacity": 1
                        }, 150);
                    }
                }, 100);
            });

            $this.on("mouseleave", function(e) {
                var $this = $(this);
                $this.removeClass("dt-hovered");

                dtGlobals.isHovering = false;
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);

                menuTimeoutHide = setTimeout(function() {
                    if (!$this.hasClass("dt-hovered")) {
                        $this.children("ul").stop().animate({
                            "opacity": 0
                        }, 150, function() {
                            jQuery(this).css("visibility", "hidden");

                            jQuery(this).find("ul").stop().css("visibility", "hidden").animate({
                                "opacity": 0
                            }, 10);
                        });

                        setTimeout(function() {
                            if (!$this.hasClass("dt-hovered")) {
                                $this.children("ul").removeClass("right-overflow");
                                $this.children("ul").removeClass("left-overflow");
                            }
                        }, 400);

                    }
                }, 150);

                $this.find("> a").removeClass("dt-clicked");
            });
        } else {

            $this.on("mouseenter tap", function(e) {
                if (e.type == "tap") e.stopPropagation();
                var $ = jQuery;
                var $this = jQuery(this);
                $this.addClass("dt-hovered");
                if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
                    //if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - 240 < 0) {
                    $this.children("ul").addClass("right-overflow");
                }
                dtGlobals.isHovering = true;
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);

                if ($this.find(".qfy-sub-div").length == 0 && $this.closest(".qfyheaderul").length == 0) {
                    menuTimeoutShow = setTimeout(function() {
                        if ($this.hasClass("dt-hovered")) {
                            if ($this.closest("#main-nav").attr("data-sliderdown")) {
                                var h = $this.children('ul').height();
                                $this.children('ul').stop().css({ "visibility": "visible", "opacity": "1", "overflow": "hidden", "max-height": "0" }).animate({
                                    "max-height": h
                                }, 300, function() {
                                    jQuery(this).css({ "overflow": "inherit" })
                                });
                            } else if ($this.closest("#main-nav").hasClass("sub-sliderup")) {
                                $this.children('ul').stop().css("opacity", "1").css("visibility", "visible").css("margin-top", "0");
                            } else {
                                $this.children('ul').stop().css("visibility", "visible").animate({
                                    "opacity": 1
                                }, 150);
                            }


                        }
                    }, 100);
                }
            });

            $this.on("mouseleave", function(e) {
                var $this = jQuery(this);
                $this.removeClass("dt-hovered");

                dtGlobals.isHovering = false;
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);
                if ($this.find(".qfy-sub-div").length == 0 && $this.closest(".qfyheaderul").length == 0) {
                    menuTimeoutHide = setTimeout(function() {
                        if (!$this.hasClass("dt-hovered")) {

                            if ($this.closest("#main-nav").attr("data-sliderdown")) {
                                $this.children("ul").stop().removeAttr("style");
                            } else if ($this.closest("#main-nav").hasClass("sub-sliderup")) {
                                $this.children("ul").stop().removeAttr("style");
                            } else {
                                $this.children("ul").stop().animate({
                                    "opacity": 0
                                }, 150, function() {
                                    jQuery(this).css("visibility", "hidden");
                                });

                            }

                            setTimeout(function() {
                                if (!$this.hasClass("dt-hovered")) {
                                    $this.children("ul").removeClass("right-overflow");
                                }
                            }, 400);
                        }
                    }, 150);
                }

                $this.find("> a").removeClass("dt-clicked");
            });
        };
    });

    /* Main navigation: end */

}

function floatmenucontrols_mouseenter() {
    if (typeof(parent.floatmenucontrols_mouseenter) == "function") {
        parent.floatmenucontrols_mouseenter();
    }
}

function floatmenucontrols_mouseout() {
    if (typeof(parent.floatmenucontrols_mouseout) == "function") {
        parent.floatmenucontrols_mouseout();
    }
}

function base64_encode(str) { var str = toUTF8(str); var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""); var out, i, j, len, r, l, c;
    i = j = 0;
    len = str.length;
    r = len % 3;
    len = len - r;
    l = (len / 3) << 2; if (r > 0) { l += 4 }
    out = new Array(l); while (i < len) { c = str.charCodeAt(i++) << 16 | str.charCodeAt(i++) << 8 | str.charCodeAt(i++);
        out[j++] = base64EncodeChars[c >> 18] + base64EncodeChars[c >> 12 & 63] + base64EncodeChars[c >> 6 & 63] + base64EncodeChars[c & 63] } if (r == 1) { c = str.charCodeAt(i++);
        out[j++] = base64EncodeChars[c >> 2] + base64EncodeChars[(c & 3) << 4] + "==" } else { if (r == 2) { c = str.charCodeAt(i++) << 8 | str.charCodeAt(i++);
            out[j++] = base64EncodeChars[c >> 10] + base64EncodeChars[c >> 4 & 63] + base64EncodeChars[(c & 15) << 2] + "=" } } return out.join("") };

function base64_decode(str) { var base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1]; var c1, c2, c3, c4; var i, j, len, r, l, out;
    len = str.length; if (len % 4 != 0) { return "" } if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(str)) { return "" } if (str.charAt(len - 2) == "=") { r = 1 } else { if (str.charAt(len - 1) == "=") { r = 2 } else { r = 0 } }
    l = len; if (r > 0) { l -= 4 }
    l = (l >> 2) * 3 + r;
    out = new Array(l);
    i = j = 0; while (i < len) { c1 = base64DecodeChars[str.charCodeAt(i++)]; if (c1 == -1) { break }
        c2 = base64DecodeChars[str.charCodeAt(i++)]; if (c2 == -1) { break }
        out[j++] = String.fromCharCode((c1 << 2) | ((c2 & 48) >> 4));
        c3 = base64DecodeChars[str.charCodeAt(i++)]; if (c3 == -1) { break }
        out[j++] = String.fromCharCode(((c2 & 15) << 4) | ((c3 & 60) >> 2));
        c4 = base64DecodeChars[str.charCodeAt(i++)]; if (c4 == -1) { break }
        out[j++] = String.fromCharCode(((c3 & 3) << 6) | c4) } return toUTF16(out.join("")) };

function toUTF8(str) { if (str.match(/^[\x00-\x7f]*$/) != null) { return str.toString() } var out, i, j, len, c, c2;
    out = [];
    len = str.length; for (i = 0, j = 0; i < len; i++, j++) { c = str.charCodeAt(i); if (c <= 127) { out[j] = str.charAt(i) } else { if (c <= 2047) { out[j] = String.fromCharCode(192 | (c >>> 6), 128 | (c & 63)) } else { if (c < 55296 || c > 57343) { out[j] = String.fromCharCode(224 | (c >>> 12), 128 | ((c >>> 6) & 63), 128 | (c & 63)) } else { if (++i < len) { c2 = str.charCodeAt(i); if (c <= 56319 && 56320 <= c2 && c2 <= 57343) { c = ((c & 1023) << 10 | (c2 & 1023)) + 65536; if (65536 <= c && c <= 1114111) { out[j] = String.fromCharCode(240 | ((c >>> 18) & 63), 128 | ((c >>> 12) & 63), 128 | ((c >>> 6) & 63), 128 | (c & 63)) } else { out[j] = "?" } } else { i--;
                            out[j] = "?" } } else { i--;
                        out[j] = "?" } } } } } return out.join("") };

function toUTF16(str) { if ((str.match(/^[\x00-\x7f]*$/) != null) || (str.match(/^[\x00-\xff]*$/) == null)) { return str.toString() } var out, i, j, len, c, c2, c3, c4, s;
    out = [];
    len = str.length;
    i = j = 0; while (i < len) { c = str.charCodeAt(i++); switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                out[j++] = str.charAt(i - 1); break;
            case 12:
            case 13:
                c2 = str.charCodeAt(i++);
                out[j++] = String.fromCharCode(((c & 31) << 6) | (c2 & 63)); break;
            case 14:
                c2 = str.charCodeAt(i++);
                c3 = str.charCodeAt(i++);
                out[j++] = String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); break;
            case 15:
                switch (c & 15) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        c2 = str.charCodeAt(i++);
                        c3 = str.charCodeAt(i++);
                        c4 = str.charCodeAt(i++);
                        s = ((c & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63) - 65536; if (0 <= s && s <= 1048575) { out[j++] = String.fromCharCode(((s >>> 10) & 1023) | 55296, (s & 1023) | 56320) } else { out[j++] = "?" } break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        i += 4;
                        out[j++] = "?"; break;
                    case 12:
                    case 13:
                        i += 5;
                        out[j++] = "?"; break } } } return out.join("") };


function weiBoAndWeiXinToolTip() {
    //ie8ä¸æ”¯æŒ
    if (jQuery("html#ie8").length == 1) {
        return false;
    }
    Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
    };
    var objs = jQuery(".soc-ico .weixin");
    objs.each(function() {
        var obj = jQuery(this);
        var name = obj.attr("data-href");
        obj.attr("title", '');
        var title = "<img src='/FeiEditor/public_api/getImageFromWebApi/weixin/" + name + "'  width='160'/><div>è¯·æ‰«äºŒç»´ç å…³æ³¨å¾®ä¿¡</div>";
        var data = { tipJoint: "bottom", style: "dark" };
        new Opentip(obj, title, data);
    })
    var objs = jQuery(".soc-ico .weibo");
    objs.each(function() {
        var obj = jQuery(this);
        var name = obj.attr("data-href");
        obj.attr("title", '');
        var title = "<img src='/FeiEditor/public_api/getImageFromWebApi/weibo/" + name + "' width='160' /><div>è¯·æ‰«äºŒç»´ç å…³æ³¨å¾®åš</div>";
        var data = { tipJoint: "bottom", style: "dark" };
        new Opentip(obj, title, data);
    })
}

function toolTip(objs) {
    //ie8ä¸æ”¯æŒ
    if (jQuery("html#ie8").length == 1) {
        return false;
    }
    if (typeof(objs) == "undefined") {
        objs = jQuery("[data-tooltip='on']");
    }
    Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
    };
    objs.each(function() {
        var obj = jQuery(this);
        var title = jQuery(this).attr("data-original-title");
        if (!title) title = "";
        var image = jQuery(this).attr("data-original-image");
        var imagewidth = jQuery(this).attr("data-original-imagewidth");
        var imageheight = jQuery(this).attr("data-original-imageheight");
        if (image) {
            if (!imagewidth) imagewidth = 150;
            if (!imageheight) imageheight = 150;
            title = "<div>" + title + "</div>" + "<img src='" + image + "'  style='width:" + imagewidth + "px;height:" + imageheight + "px'/>";
        }
        var cate = jQuery(this).attr("data-tooltip-cate");
        var data = "";
        if (cate == 1) {
            data = { tipJoint: "bottom" };
        } else if (cate == 2) {
            data = { tipJoint: "bottom", style: "alert" };
        } else if (cate == 3) {
            data = { tipJoint: "bottom", style: "dark" };
        } else if (cate == 4) {
            data = { tipJoint: "bottom", style: "glass" };
        } else if (cate == 5) {
            data = { tipJoint: "bottom right", style: "dark" };
        } else if (cate == 6) {
            data = { tipJoint: "bottom left", style: "dark" };
        } else if (cate == 7) {
            data = { tipJoint: "top right", style: "dark" };
        } else if (cate == 8) {
            data = { style: "stemsDemo", tipJoint: "bottom right", stem: "bottom right", stemLength: 10, stemBase: 30 };
        } else if (cate == 9) {
            data = { style: "stemsDemo", tipJoint: "bottom left", stem: "bottom left", stemLength: 10, stemBase: 30 };
        } else if (cate == 10) {
            data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "top", borderColor: "#317CC5" };
        } else if (cate == 11) {
            data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom", borderColor: "#317CC5" };
        } else if (cate == 12) {
            data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom left", borderColor: "#317CC5" }
        }
        if (data != "") {
            new Opentip(obj, title, data);
        }
    })
}

function toVisit(obj) {
    var p = jQuery(obj).closest(".qfy_item_post");
    var post_id = p.attr("data-postid");
    var pt = p.find('[data-title="true"]');
    var title = "";
    if (pt.length > 0) {
        var title = jQuery.trim(pt.text());
    }
    jConfirm("ç¡®è®¤æ˜¯å¦ç¦»å¼€å½“å‰é¡µé¢ï¼Œè®¿é—®é¡µé¢ã€" + title + "ã€‘ï¼Ÿ", function() {
        top.$('#pageUrl').val(post_id).change();
    });

}

function toEditor(obj, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    parent.toEditor(obj);
}

function toCopy(obj) {
    var p = jQuery(obj).closest(".qfy_item_post");
    var id = p.closest(".vc-element").attr("data-model-id");


    var post_id = p.attr("data-postid");
    parent.bitSettingsEdit(post_id, "å¤åˆ¶ä¸€ä¸ªé¡µé¢", "copyPage", "COPY");
}

function toDelete(obj) {
    parent.toDelete(obj);
}

function toEditProduct(obj) {
    parent.toEditProduct(obj);
    return false;
}

function toRedirectProduct(obj) {
    parent.toRedirectProduct(obj);
    return false;
}

function toDeleteCate(obj) {
    parent.toDeleteCate(obj);
}

function pageNav(paged, aobj) {
    if (aobj && jQuery(aobj).closest("#sitetop_pagehtml").length > 0) {
        top.pageNav(paged, aobj);
        return;
    }
    var obj = top.jQuery("#site-content-iframe");
    var url = obj.attr("src");
    if (url.indexOf("paged") > -1) {
        var tmp = url.split("&paged");
        url = tmp[0] + "&paged=" + paged;
    } else {
        if (url.indexOf("?") > -1) {
            url = url + "&paged=" + paged;
        } else {
            url = url + "?paged=" + paged;
        }
    }
    obj.attr("src", url);
}

function pageCate(page_id, cate_id) {
    var obj = top.jQuery("#site-content-iframe");
    var url = obj.attr("src");
    if (cate_id == 0) cate_id = "";
    if (url.indexOf("post_id") > -1) {
        var tmp = url.split("&post_id");
        url = tmp[0] + "&post_id=" + page_id + "&categories=" + cate_id;
    } else {
        if (url.indexOf("?") > -1) {
            url = url + "&post_id=" + page_id + "&categories=" + cate_id;
        } else {
            url = url + "?post_id=" + page_id + "&categories=" + cate_id;
        }
    }
    jConfirm("ç¡®è®¤æ˜¯å¦éœ€è¦æ‰“å¼€è¯¥åˆ†ç±»åˆ—è¡¨é¡µé¢ï¼Ÿ", function() {
        obj.attr("src", url);
    });

    return false;
}

function searchResult(p) {
    var obj = top.jQuery("#site-content-iframe");
    if (obj.length > 0) {
        var action = jQuery(p).attr("action");
        var search = jQuery(p).find("[name='search']").val();
        var page_id = jQuery(p).find("[name='page_id']").val();
        var searchtype = jQuery(p).find("[name='searchtype']").val();
        var ep_search = jQuery(p).find("[name='ep_search']").val();
        var qfyuuid = jQuery(p).find("[name='qfyuuid']").val();
        var ep_relevancy = jQuery(p).find("[name='ep_relevancy']").val();

        var url = obj.attr("src");
        if (url.indexOf("post_id") > -1) {
            var tmp = url.split("&post_id");
            url = tmp[0] + "&post_id=" + page_id + "&search=" + encodeURIComponent(search) + "&searchtype=" + searchtype;
        } else {
            if (url.indexOf("?") > -1) {
                url = url + "&post_id=" + page_id + "&search=" + encodeURIComponent(search) + "&searchtype=" + searchtype;
            } else {
                url = url + "?post_id=" + page_id + "&search=" + encodeURIComponent(search) + "&searchtype=" + searchtype;
            }
        }
        if (ep_search && qfyuuid) {
            url = url + "&ep_search=1&qfyuuid" + qfyuuid;
            if (ep_relevancy) {
                url = url + "&ep_relevancy=1";
            }
        }
        obj.attr("src", url);
        return false;
    }
}

function toorderview(id) {
    id = id.replace("#", "");
    var obj = top.jQuery("#site-content-iframe");
    var page_id = top.jQuery("#pageUrl").val();
    var url = obj.attr("src");
    if (url.indexOf("post_id") > -1) {
        var tmp = url.split("&post_id");
        url = tmp[0] + "&post_id=" + page_id + "&view-order=" + id;
    } else {
        if (url.indexOf("?") > -1) {
            url = url + "&post_id=" + page_id + "&view-order=" + id;
        } else {
            url = url + "?post_id=" + page_id + "&view-order=" + id;
        }
    }
    obj.attr("src", url);
}

function toorderpage(page_id) {

    var obj = top.jQuery("#site-content-iframe");
    var url = obj.attr("src");
    if (url.indexOf("post_id") > -1) {
        var tmp = url.split("&post_id");
        url = tmp[0] + "&post_id=" + page_id;
    } else {
        if (url.indexOf("?") > -1) {
            url = url + "&post_id=" + page_id;
        } else {
            url = url + "?post_id=" + page_id;
        }
    }
    obj.attr("src", url);
}

function jConfirm(msg, yes, no, title) {
    if (top != self) {
        top.jConfirm(msg, yes, no, title);
    }
}

function jAlert(msg, title) {
    if (!is_edit_model) {
        alert(msg);
    } else {
        top.jAlert(msg, title);
    }
}

function setCookie(cname, cvalue, exdays) //cookiesè®¾ç½®
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}

function getCookie(Name) //cookiesè¯»å–
{
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if (end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        } else return ""
    }
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null) return unescape(decodeURI(r[2]));
    return null;
}

function tobigimage(obj) {
    var bigimage = jQuery(obj).parents(".qfy_showbox").find(".bigImage");
    var height = bigimage.find("img").height();
    var src = jQuery(obj).find("img").attr("src");
    jQuery(obj).parents(".qfy_imgList").find("img").css("border", "0");
    jQuery(obj).find("img").css("border", "2px solid #f63");
    src = src.replace("-150x150", "");
    bigimage.find("img").attr("src", src).height(height);
}

function slideLine(box, stf, delay, speed, h) {

    if (jQuery("#" + box + " div").length == 0) {
        return false;
    }

    var slideBox = document.getElementById(box);
    var delay = delay || 1000,
        speed = speed || 20,
        h = h || 20;
    var tid = null,
        pause = false;
    var s = function() { tid = setInterval(slide, speed); }
    var slide = function() {
        if (pause) return;
        slideBox.scrollTop += 1;
        if (slideBox.scrollTop % h == 0) {
            clearInterval(tid);
            slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
            slideBox.scrollTop = 0;
            setTimeout(s, delay);
        }
    }
    slideBox.onmouseover = function() { pause = true; }
    slideBox.onmouseout = function() { pause = false; }
    setTimeout(s, delay);
}

function vc_gallery_relat() {
    jQuery(".qfe_gallery.rela_other .vc-carousel .qfy_image_vc_item img").each(function() {
        var img = jQuery(this);
        var src = img.attr("src");
        img.css("cursor", "pointer");
        src = src.replace(/-[\d]*x[\d]*/g, "");
        img.unbind("click").bind("click", function() {
            jQuery(".qfe_gallery.rela_other .slides").each(function() {
                var obj = jQuery(this);
                var index = 0;
                obj.find("img").each(function() {
                    var toimg = jQuery(this);
                    var tosrc = toimg.attr("src");
                    tosrc = tosrc.replace(/-[\d]*x[\d]*/g, "");
                    var p = toimg.closest("li");

                    if (!p.hasClass("clone")) {
                        index++;
                    }

                    if (!p.hasClass("clone") && src == tosrc) {
                        p.siblings().removeClass("flex-active-slide");

                        p.addClass("flex-active-slide");
                        var width = p.width();

                        p.parent().css("-webkit-transition-duration", "0.6s");
                        p.parent().css("transition-duration", "0.6s");
                        p.parent().css("-webkit-transform", 'translate3d(-' + (index * width) + 'px, 0px, 0px)');
                        p.parent().css("transform", 'translate3d(-' + (index * width) + 'px, 0px, 0px)');

                        return;
                    }
                })
            })

        })
    });
}

function qfbookformSubmit(obj) {
    if (!is_edit_model) {
        var p = jQuery(obj).closest(".QFBOOKSearchsimpleformdiv");
        var url = p.attr("action");
        var t1 = p.find("[name='QFBOOKSearch-check-in-view']").val();
        var t2 = p.find("[name='QFBOOKSearch-check-out-view']").val();
        if (url.indexOf("?") > -1) {
            location.href = url + "&QFBOOKSearch-check-in-view=" + t1 + "&QFBOOKSearch-check-out-view=" + t2;
        } else {
            location.href = url + "?QFBOOKSearch-check-in-view=" + t1 + "&QFBOOKSearch-check-out-view=" + t2;
        }

    }
}



//æœ‰ä¾§æ çš„æ—¶å€™å†åŠ è½½è¿™ä¸ªå‡½æ•°
function parallax_scroll_fun() {
    if (jQuery("#parallax-nav").length > 0) {
        jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-scroll.js", function() {
            parallax_scroll_fun_init();
        })
    }
}

function checkAdvertising() {
    var uuid = dtGlobals.id;
    var href = "http://www.qifeiye.com?tcode=freesite&uuid=" + uuid;
    if (dtGlobals.qfymodel) { href = "#" }
    var jAdObj = jQuery(".qfy_advertising");
    var style = "display:block !important;opacity: 1 !important;position:fixed !important;bottom:40px !important;left:0 !important;width:116px !important;height:25px !important;line-height:24px !important;background:#23282D !important;z-index:2147483647 !important;text-align:center;color:#fff !important;font-size:12px;border-top-right-radius:3px;border-bottom-right-radius:3px;";
    if (!jAdObj.hasClass("band")) { var content = "BY èµ·é£žé¡µè‡ªåŠ©å»ºç«™" } else { var content = "èµ·é£žé¡µæä¾›å…è´¹æµé‡" }
    if (jAdObj.length == 0) { var tmphtml = '<a class="wf-mobile-hidden qfy_advertising" target=_blank style="' + style + '"  rel="external nofollow" href="' + href + '" >' + content + "</a>";
        jQuery("#page").append(tmphtml) }
    var opacity = jAdObj.css("opacity");
    if (opacity != "1") { jAdObj.attr("style", style) }
    if (jAdObj.css("position") != "fixed") { jAdObj.attr("style", style) }
    if (jAdObj.css("bottom") != "40px") { jAdObj.attr("style", style) }
    if (jAdObj.css("left") != "0px") { jAdObj.attr("style", style) }
    var bgcolor = jAdObj.css("background-color");
    if (bgcolor != "#000000" && bgcolor != "rgb(0, 0, 0)") { jAdObj.attr("style", style) }
    var color = jAdObj.css("color");
    if (color != "#ffffff" && color != "rgb(255, 255, 255)") { jAdObj.attr("style", style) }
    var marginLeft = jAdObj.css("margin-left");
    if (marginLeft != "0px") { jAdObj.attr("style", style) }
    var marginTop = jAdObj.css("margin-top");
    if (marginTop != "0px") { jAdObj.attr("style", style) }
    var zindex = jAdObj.css("z-index");
    if (zindex != "2147483647") { jAdObj.attr("style", style) }
    var width = jAdObj.css("width");
    if (width != "116px") { jAdObj.attr("style", style) }
    var height = jAdObj.css("height");
    if (height != "20px") { jAdObj.attr("style", style) }
    var transform = jAdObj.css("transform");
    if (transform != "none") { jAdObj.attr("style", style) }
    var visible = jAdObj.css("visibility");
    if (visible != "visible") { jAdObj.attr("style", style) }
    var display = jAdObj.css("display");
    if (display != "block" && jQuery("body").width() > 760) { jAdObj.attr("style", style) }
    if (jAdObj.attr("href") != href) { jAdObj.attr("href", href) }
    if (jAdObj.html() != content) { jAdObj.html(content) }
    if (top != self) { try { if (top.window.location.host != window.location.host) { location.href = "http://www.qifeiye.com" } } catch (e) { location.href = "http://www.qifeiye.com" } }
    jQuery("#footer_band").hide();
}

function clickscode(obj) {
    jQuery(obj).attr('src', '/api/scode.php' + '?' + Math.random());
}

function nav_pagemore(obj) {
    if (jQuery(obj).hasClass("vc")) {
        jAlert("ç¼–è¾‘æƒ…å†µä¸‹ï¼Œæ— æ³•ç‚¹å‡»ï¼Œè¯·åœ¨é¢„è§ˆæƒ…å†µä¸‹ä½¿ç”¨ï¼");
        return;
    }
    if (jQuery(obj).find(".loading").length > 0) {
        return;
    }
    if (jQuery(obj).hasClass("notmore")) {
        return;
    }
    var type = 0;
    if (jQuery(obj).parent().hasClass("bitcommerce-pagination")) {
        var p = jQuery(obj).closest(".bitcommerce").parent();
        var id = p.attr("qfyuuid");
        var luClass = "[qfyuuid='" + id + "'] ul.products>div";
        var childClass = "ul.products>div";
    } else if (jQuery(obj).closest(".qfy_images_list").length > 0) {
        var p = jQuery(obj).closest(".qfy_images_list");
        var id = p.attr("qfyuuid");
        var luClass = "[qfyuuid='" + id + "'] .qfe_images_list";
        var childClass = ".qfe_images_list";
        if (jQuery(luClass).find(".more.mypages").length > 0) {
            type = 1;
        }
    } else if (jQuery(obj).closest(".qfe_images_lib").length > 0) {
        var p = jQuery(obj).closest(".qfe_images_lib");
        var id = p.attr("qfyuuid");
        var luClass = "[qfyuuid='" + id + "'] .qfe_images_lib_isotope";
        var childClass = ".qfe_images_lib_isotope";
        if (jQuery(luClass).find(".more.mypages").length > 0) {
            type = 1;
        }
    } else if (jQuery(obj).closest(".advanced_list").length > 0) {
        var p = jQuery(obj).closest(".advanced_list");
        var id = p.attr("qfyuuid");
        if (p.find(".vc-carousel-slideline-inner:visible").length > 0) {
            var luClass = "[qfyuuid='" + id + "'] .vc-carousel-slideline-inner ";
            var childClass = ".vc-carousel-slideline-inner";
        } else {
            var luClass = "[qfyuuid='" + id + "'] .qfe_wrapper ";
            var childClass = ".qfe_wrapper";
        }
        type = 0;
        if (p.find(".list-style7").length > 0) {
            //type = 1;
        }
    } else {
        var p = jQuery(obj).closest(".qfe_teaser_grid");
        var id = p.attr("qfyuuid");
        var luClass = "[qfyuuid='" + id + "'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
        var childClass = "ul.qfe_thumbnails";
    }

    if (p.find("div.qfy_list_loading").length > 0) {
        return;
    }
    var list_id = p.find(".qfe_teaser_grid.qfe_content_element").attr("id");

    p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
    p.find(luClass + " li").css("transform", "none").css("top", "auto").css("position", "relative");
    var url = jQuery(obj).attr("data-url");
    if (url.indexOf("?") > -1) {
        url = url + "&isappend=1";
    } else {
        url = url + "?isappend=1";
    }
    var loadtext = jQuery(obj).attr("data-loadtext");
    var old_html = jQuery(obj).find("a").html();
    jQuery(obj).hide();
    if (typeof global_image_loading != "undefined") {

        jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;">' + global_image_loading + '</div>');
    } else {
        jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;"><img src="/FeiEditor/bitSite/images/spinner.gif"><span style="color:#808080;font-size:12px;position: relative; top: -3px;">&nbsp;' + loadtext + '</span></div>');

    }

    jQuery.get(url, function(data) {
        if (list_id) {
            var nowlistobj = jQuery(data).find("#" + list_id + " ul.qfe_thumbnails");
        } else {
            var nowlistobj = jQuery(data).find(luClass);
        }
        var pagemore = nowlistobj.closest(".qfy-element").find(".more.mypages");

        var style = nowlistobj.find(">li").attr("style");
        p.find(childClass).append(nowlistobj.html());
        if (p.hasClass("noanimale") || p.find(".noanimale").length > 0) {
            p.find(childClass).height("auto");
            p.find(childClass + ">li:not(.mobile_list_inner)").attr("style", style).css("transform", "none").css("top", "auto").css("position", "relative");
        }
        jQuery(obj).show();
        //jQuery("html").animate({ scrollTop:  jQuery(obj).offset().top - jQuery(window).height()/2 }, "fast");

        var curr_postion = p.find("div.qfy_list_loading").offset().top + 100;
        var curr_height = p.height();
        p.find("div.qfy_list_loading").remove();
        if (type == "1") {
            jQuery(obj).remove();
        }

        if (pagemore.length > 0) {
            jQuery(obj).attr("data-url", pagemore.attr("data-url"));
            jQuery(obj).attr("style", pagemore.attr("style"));
        } else {
            jQuery(obj).remove();
            p.find(".has_no_more").show();
        }

        if (p.find(".categories_filter").length > 0) {
            p.find(".categories_filter a[data-filter='*']").click();
        }

        if (p.attr("data-open") == "1")
            changelistlinkfun(p);

        vc_js_init();
        tranlanguage(p);

        list_more_waypoint();

        if (!p.hasClass("noanimale") && p.find(".isotope-item").length > 0 && p.find(".noanimale").length == 0) {
            p.find(childClass).isotope('reloadItems').isotope();
        }

        if (p.find(".qfe_gallery_slides.qfe_flexslider").length > 0) {
            vc_plugin_flexslider();
        }
    })
}


function nav_pagecate_confirm(obj) {
    if (jQuery(obj).find(".loading").length > 0) {
        return;
    }

    var li = jQuery(obj).closest("li");
    var li_id = li.attr("data-id");
    var c = jQuery(obj).closest(".qfy-listcatecontrols");
    var type = c.attr("type");
    var id = c.attr("to_qfyuuid");
    if (!id || !type) {
        jAlert("æ²¡æœ‰æ‰¾åˆ°å¯¹åº”çš„åˆ—è¡¨");
        return;
    }

    if (jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length > 0 && !li.hasClass("has-children")) {
        jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
    }

    c.find(".current-cat").removeClass("current-cat current-menu-item");
    li.addClass("current-cat current-menu-item");
    if (c.attr("data-child") == "1") {
        c.find(".list-content .children").hide();
        li.parents("li,ul").show();
        if (li.hasClass("cat-parent") && li.closest(".list-content").length > 0) li.find(">.children").show();
    }
    if (c.find(".item_a").length > 0) {
        c.find(".item_a").removeClass("active");
        li.find(".item_a").addClass("active");
    }
    var p = jQuery("[qfyuuid='" + id + "'].qfe_teaser_grid.qfe_content_element").parent();
    var model_id = p.attr("data-model-id");
    if (model_id && parent) {
        parent.ajaxBeforeLoading(0, p);
        var model = parent.vc.shortcodes.get(model_id);
        var params = model.get('params');
        if (type)
            params.post_type = type;
        if (type == "products") {
            var pro_old = params.pro_categories;
            params.pro_categories = li_id;
        } else if (type == "product") {
            var product_old = params.product_categories;
            params.product_categories = li_id;
        } else {
            var post_old = params.post_categories;
            params.post_categories = li_id;
        }
        if (params.parse_url)
            var parse_url_old = params.parse_url;
        if (params.parse_search)
            var parse_search_old = params.parse_search;
        params.parse_url = "0";
        params.parse_search = "0";

        model.save({ params: params });
        parent.vc.ShortcodesBuilder.update(model);
        if (type == "products") {
            params.pro_categories = pro_old;
        } else if (type == "product") {
            params.product_categories = product_old;
        } else {
            params.post_categories = post_old;
        }
        if (parse_url_old)
            params.parse_url = parse_url_old;
        if (parse_search_old)
            params.parse_search = parse_search_old;
        model.save({ params: params });
    }

}

function nav_customsearch(obj, customurl) {
    if (top.jQuery("#site-html #site-body").length > 0) {
        top.jAlert("è¯·åœ¨é¢„è§ˆä¸‹æŸ¥çœ‹");
        return;
    }
    if (jQuery(".qfy_custom_search").length > 0) {
        if (typeof nav_customsearch_click != "function") {
            jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-customsearch.js", function() {
                nav_customsearch_click(obj, customurl);
            })
        } else {
            nav_customsearch_click(obj, customurl);
        }
    }
}

function tranlanguage(htm) {
    if (jQuery("body.qfy_slw_tzh").length == 1) {
        StranBody(htm[0]);

    } else if (jQuery("body.qfy_slw_szh").length == 1) {
        StranBody(htm[0], 0);
    }
}

function nav_pagecate(obj, flag) {
    if (jQuery(obj).find(".loading").length > 0) {
        return;
    }
    var type = 0;
    var li = jQuery(obj).closest("li");
    var c = jQuery(obj).closest(".qfy-listcatecontrols");
    var id = c.attr("to_qfyuuid");
    var p = jQuery("[qfyuuid='" + id + "']");
    if (p.length == 0 && jQuery(obj).attr("data-bindurl")) {
        location.href = jQuery(obj).attr("data-bindurl");
        return;
    } else if (flag == "direct") {
        location.href = jQuery(obj).attr("data-url");
        return;
    }

    var luClass = "[qfyuuid='" + id + "'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
    var childClass = "ul.qfe_thumbnails";
    if (p.find("div.qfy_list_loading").length > 0) {
        return;
    }
    if (jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length > 0 && !li.hasClass("has-children")) {
        jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
    }
    p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
    p.find(luClass + " li").css("transform", "none").css("top", "auto").css("position", "relative");
    var url = jQuery(obj).attr("data-url");


    c.find(".current-cat").removeClass("current-cat current-menu-item");
    li.addClass("current-cat current-menu-item");
    if (c.attr("data-child") == "1") {
        c.find(".list-content .children").hide();
        li.parents("li,ul").show();
        if (li.hasClass("cat-parent") && li.closest(".list-content").length > 0) li.find(">.children").show();
    }
    if (c.find(".item_a").length > 0) {
        c.find(".item_a").removeClass("active");
        li.find(".item_a").addClass("active");
    }
    var image_src = "//f.goodq.top/qfy-content/plugins/qfy_form/admin/images/loading.gif";
    var w = "";
    if (p.attr("data-loading")) {
        image_src = p.attr("data-loading");
        w = p.attr("data-loading-w");
    }

    var text = jQuery.trim(jQuery(obj).text());
    jQuery(obj).closest(".dl-menuwrapper").find(".phone-text").html(text);


    if (typeof global_image_loading != "undefined") {
        p.html('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;">' + global_image_loading + '</div>');
    } else {
        p.html('<div class="qfy_list_loading"  style="margin:50px auto;text-align:center;"><img style="width:' + w + 'px" src="' + image_src + '"></div>');
    }
    jQuery.get(url, function(data) {
        var nowlistobj = jQuery(data).find("[qfyuuid='" + id + "']");
        if (nowlistobj.length > 0) {
            p.replaceWith(nowlistobj);
            window.vc_js_init2();
            window.vc_js_init();
            if (p.find(".noResult").length == 0) {
                jQuery('[data-ride="vc-carousel"]').each(function() {
                    qfy_carousel_fun(jQuery(this))
                })
            }
            tranlanguage(p);
        }
        if (nowlistobj.attr("data-open") == "1")
            changelistlinkfun(nowlistobj);

        list_more_waypoint();

        if (typeof nav_pagecate_callback == "function") {
            nav_pagecate_callback();
        }

    })
}

function preventDefaultFn(event) {
    event.preventDefault();
}

function qfy_notice_event() {
    if (jQuery(".qfy-element.qfy_notice .notice_warp").length > 0 || jQuery("a[href^='qfy_notice']").length > 0) {
        if (typeof window['_qfy_notice_event'] !== 'function') {
            jQuery.onDemandScript("/FeiEditor/bitSite/js/notices.js").done(function() {
                _qfy_notice_event();
            })
        } else {
            _qfy_notice_event();
        }
    }
}

function changeURLArg(url, arg, arg_val) {
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + arg_val;
    if (url.match(pattern)) {
        var tmp = '/(' + arg + '=)([^&]*)/gi';
        tmp = url.replace(eval(tmp), replaceText);
        return tmp;
    } else {
        if (url.match('[\?]')) {
            return url + '&' + replaceText;
        } else {
            return url + '?' + replaceText;
        }
    }
    return url + '\n' + arg + '\n' + arg_val;
}

function gototab(obj) {
    var p = jQuery(obj).closest(".qfy-tabcontent");
    p.find(".tabcontent-header-menu li.item button").removeClass("active");
    jQuery(obj).find("button").addClass("active");
    var index = p.find(".tabcontent-header-menu li.item").index(jQuery(obj));
    if (p.find(".royalSlider_gallery_new").attr("transitiontype") == "none") {
        if (p.find(".royalSlider_gallery_new>.vc-element").length > 0) {
            p.find(".royalSlider_gallery_new>.vc-element").removeClass("edittabshow").addClass("edittabhide");
            p.find(".royalSlider_gallery_new>.vc-element:eq(" + index + ")").removeClass("edittabhide").addClass("edittabshow");
        } else {
            p.find(".royalSlider_gallery_new>section").hide();
            p.find(".royalSlider_gallery_new>section:eq(" + index + ")").show().css("height", "100%");
        }
    } else {
        p.find(".rsBullets .rsNavItem:eq(" + index + ")").click();
    }
}

function backlistbtn(obj) {
    var $this = jQuery(obj).closest(".qfe_teaser_grid.qfe_content_element");
    var h = $this.find(".list_hidden_btn");
    h.siblings().show();
    if (h.siblings(".mypages").length > 0) {
        var mstyle = h.siblings(".mypages").attr("style");
        if (mstyle) mstyle = mstyle.replace("display: block;", "");
        h.siblings(".mypages").attr("style", mstyle);
    }
    h.hide();
    vc_teaserGrid();
    if (curr_scrollbar) jQuery(window).scrollTop(curr_scrollbar);
}
var curr_scrollbar = 0;

function changelistlinkfun($this, $flag) {
    $this.find("a.link_title:not(.a_file),a.link_image:not(.a_file),a.vc_read_more:not(.a_file),a.item_link,a.item_a_link,.prenext_inner a,>a").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        curr_scrollbar = jQuery(window).scrollTop();
        var link = jQuery(this).attr("href");
        if ($flag == "again") {
            $this = jQuery(this).closest(".list_hiddencontent").closest(".qfy-element");
            if (link == "#" || !link) return false;
        }
        var h = $this.find(".list_hidden_btn");
        var slider = h.attr("data-slider");
        h.find(".backbtn").hide();
        h.siblings().hide();
        h.show();
        var image_src = "//f.goodq.top/qfy-content/plugins/qfy_form/admin/images/loading.gif";
        var w = "";
        if (h.closest(".qfy-element").attr("data-loading")) {
            image_src = h.closest(".qfy-element").attr("data-loading");
            w = h.closest(".qfy-element").attr("data-loading-w");
        }

        h.find(".list_hiddencontent").html('<div class="qfy_list_loading"  style="margin:0 auto;padding:100px 0;text-align:center;"><img style="width:' + w + 'px" src="' + image_src + '"></div>');
        var pt = h.closest(".qfy-element").offset().top;
        if (curr_scrollbar > pt) {
            jQuery("html").animate({ scrollTop: pt }, "fast");
        }

        jQuery.get(link, function(data) {
            var htm = jQuery(data).find(".content-wrapper").html();
            if (!htm) htm = "";
            if (slider == "1") {
                var htm_prev = "";
                var htm_next = "";
                if (jQuery(data).find(".bitMainTopSider").length > 0) {
                    htm_prev = "<div class='bmts' style='position:relative;width:100%'>" + jQuery(data).find(".bitMainTopSider").html() + "</div>";
                }
                if (jQuery(data).find(".bitMainBottomSider").length > 0) {
                    htm_next = "<div class='bmbs'  style='position:relative;width:100%'>" + jQuery(data).find(".bitMainBottomSider").html() + "</div>";
                }
                htm = htm_prev + htm + htm_next;
            }
            h.find(".list_hiddencontent").html(htm);
            h.find(".backbtn").show();
            window.vc_js_init2();
            window.vc_js_init();
            qfy_notice_event();
            tranlanguage(h);
            //ã€‚ã€‚ã€‚ã€‚ã€‚
            changelistlinkfun(jQuery(".list_hiddencontent .teaser_grid_container,.list_hiddencontent .advanced_list,.list_hiddencontent .qfy-prenext,.list_hiddencontent .mypages.pagenav"), "again");
        });

        return false; //é˜»æ­¢é“¾æŽ¥è·³è½¬
    });
}

function list_more_waypoint() {
    if (jQuery(".qfe_teaser_grid .more.auto").length > 0) {
        jQuery(".qfe_teaser_grid .more.auto").waypoint('destroy');
        jQuery(".qfe_teaser_grid .more.auto").waypoint({
            handler: function(direction) {
                jQuery(this).click();
            },
            triggerOnce: true,
            offset: "bottom-in-view",
        })
    }
}

var qfy_template_waypoint;
jQuery(document).ready(function($) {

    if (dtGlobals.isWindowsPhone) { $("body").addClass("ie-mobile") }
    if (!$("html").hasClass("old-ie")) { dtGlobals.isPhone = false;
        dtGlobals.isTablet = false;
        dtGlobals.isDesktop = false; try { var size = top.window.getComputedStyle(top.document.body, ":after").getPropertyValue("content"); if (size.indexOf("phone") != -1 && dtGlobals.isMobile) { dtGlobals.isPhone = true } else if (size.indexOf("tablet") != -1 && dtGlobals.isMobile) { dtGlobals.isTablet = true } else { dtGlobals.isDesktop = true } } catch (e) {} };


    jQuery(".mobile_variation_warp").closest("section").css("z-index", "100");
    jQuery("#dl-menu .qfy-sub-div").remove();
    setTimeout(function() {
        jQuery(".qfy-sub-div").each(function() {
            if (jQuery(this).attr("data-full") == "1") {
                var bw = jQuery("body").width();
                var offsetleft = jQuery(this).closest("li").offset().left;
                jQuery(this).css("width", "100vw").css("margin-left", "-" + (offsetleft) + "px");
            }
        })
    }, 500);
    jQuery("#main-nav .hassubdiv").mouseenter(function() {
        jQuery(this).find(".qfy-sub-div").each(function() {
            if (jQuery(this).attr("data-full") == "1") {
                var bw = jQuery("body").width();
                var offsetleft = jQuery(this).closest("li").offset().left;
                jQuery(this).css("width", "100vw").css("margin-left", "-" + (offsetleft) + "px");
            }
        })
    })

    if (jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").length > 0) {
        jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").each(function() {
            var cur = jQuery(this).find(".list-content .current-cat");
            jQuery(this).find(".list-content .children").hide();
            cur.parents("li,ul").show();
            if (cur.hasClass("cat-parent") && cur.closest(".list-content").length > 0) cur.find(">.children").show();
        })

    }
    if (jQuery(".qfy_template_lib .viewmoretemplate").length > 0) {
        jQuery(".qfy_template_lib .viewmoretemplate").waypoint({
            handler: function(direction) {
                if (jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length > 0) {
                    jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
                }

            },
            triggerOnce: true,
            offset: "bottom-in-view",
        })
    }

    if (!is_edit_model) {
        jQuery(".qfe_teaser_grid.qfe_content_element[data-open='1']").each(function() {
            var $this = jQuery(this);
            changelistlinkfun($this);
        })
        qfy_notice_event();
        list_more_waypoint();
    }
    if (jQuery("body.free_public").length > 0) {
        checkAdvertising();
        setTimeout("checkAdvertising()", 3000);
        setTimeout("checkAdvertising()", 6000);
        setTimeout("checkAdvertising()", 10000);
        setTimeout("checkAdvertising()", 20000);
        setTimeout("checkAdvertising()", 30000);
        setTimeout("checkAdvertising()", 100000);
    }

    jQuery(".qfytemplateslist .qfypreloadimg").each(function() {
        var newurl = jQuery(this).attr("data-src");
        var $this = jQuery(this);
        jQuery('<img src="' + newurl + '">').load(function() {
            $this.attr("src", newurl);
        })
    })
    jQuery(".qfy_scroll_box:not(.load)").each(function() {
        jQuery(this).addClass("load");
        var box = jQuery(this).attr("id");
        var delay = jQuery(this).attr("data-delay");
        var speed = jQuery(this).attr("data-speed");
        var h = jQuery(this).attr("data-h");
        slideLine(box, "div", delay, speed, h);
    });

    vc_gallery_relat();
    //ç‰¹æ®Šå¤„ç†ä¸€äº›ç½‘ç«™
    if (jQuery(".re_second_user_class").length > 0 && jQuery.trim(jQuery(".re_second_user_span").text()) == "") {
        jQuery(".re_second_user_class").hide();
    }

    if (jQuery(".addon-custom-datepicker").length > 0) {
        jQuery(".addon-custom-datepicker").datepicker({
            dateFormat: "yy-mm-dd",
            numberOfMonths: 1,
        });
    }
    if (jQuery(".addon-custom-datetimepicker").length > 0) {
        jQuery(".addon-custom-datetimepicker").datetimepicker({
            dateFormat: "yy-mm-dd",
            numberOfMonths: 1,
            showTime: true,
            constrainInput: false
        });
    }
    //æ¨¡æ¿åˆ—è¡¨
    if (jQuery(".qfytemplateslist").length > 0) {
        $.onDemandScript("/qfy-content/themes/qfy-01/js/a-template.js", function() {
            template_list_init();
        });
    }
    var current_page_id = jQuery('body').attr('data-pid');
    var current_page_key = jQuery('body').attr('data-pkey');
    if (current_page_id != '' && current_page_id != 'undefined' && current_page_key != '' && current_page_key != 'undefined') {
        var multlocal = getCookie("bit_current_currency");
        jQuery.ajax({
            url: '/FeiEditor/traffic/log',
            type: 'post',
            async: true,
            dataType: "JSON",
            data: {
                st_pid: current_page_id,
                st_pkey: current_page_key,
                st_ip: (!is_edit_model && dtGlobals.visit_country_enable == 1) ? 1 : 0,
                st_currency: (!is_edit_model && dtGlobals.cny_auto_ip == 1 && !multlocal) ? 1 : 0,
            },
            success: function(rlt) {
                if (rlt.redirect && rlt.redirect != "") {
                    location.href = rlt.redirect;
                } else if (rlt.country && rlt.country.currency) {
                    if (!multlocal) {
                        setCookie("bit_current_currency", rlt.country.currency);
                        var site_url = window.location.href;
                        var basetmp = site_url.split("#")[0].split("?");

                        if (basetmp.length > 1) {
                            var tmps = basetmp[1].split("&");
                            var news = [];
                            for (var i = 0; i < tmps.length; i++) {
                                if (tmps[i].indexOf("bit-currency=") > -1) {} else {
                                    news.push(tmps[i]);
                                }
                            }
                            if (news) {
                                site_url = basetmp[0] + "?" + news.join("&");
                            } else {
                                site_url = basetmp[0] + "?";
                            }
                            site_url = site_url + '&bit-currency=' + rlt.country.currency;
                        } else {
                            site_url = site_url.split("#")[0] + '?bit-currency=' + rlt.country.currency;
                        }

                        window.location.href = site_url;
                    }

                } else if (rlt.flag == 0) {
                    jQuery.onDemandScript("/FeiEditor/bitSite/js/log.js", function() {
                        var fingerprint = new Fingerprint({ canvas: true }).get();
                        fingerprint = window.btoa(fingerprint);
                        fingerprint = window.btoa(fingerprint);
                        jQuery.ajax({
                            url: '/FeiEditor/traffic/log_r',
                            type: 'post',
                            async: true,
                            data: {
                                fprint: fingerprint
                            }
                        });
                    })
                }
            }
        });
    }
    setTimeout(function() {
        try {
            if (top != self && !jQuery("body").hasClass("compose-mode")) {
                if (top.jQuery('#pageUrl').length > 0 && parent.jQuery("#vc-post-id").val() != dtGlobals.curr_id) {
                    if (parent.jQuery("#vc-post-id").val()) {
                        top.jQuery('#pageUrl').val(dtGlobals.curr_id).change();
                        return;
                    } else if (jQuery("#vc-post-id").length == 0) {
                        top.jAlert("é¡µé¢è¿‡æœŸï¼Œæ­£å°è¯•è‡ªåŠ¨åˆ·æ–°ï¼");
                        setTimeout(function() { top.location.reload(); }, 1000);
                        return;
                    }
                }
            }
        } catch (e) {}
    }, 1000);
    position_follow_function();
    //ready end
})


function qfy_popinfo_fun(htm, timetoclose) {
    jQuery(".qfy_popinfo").remove();
    if (htm) {
        var msg = '<div class="qfy_popinfo" ><div class="md-content">' + htm + '</div></div>';
        jQuery("body").append(msg);
        setTimeout(function() { jQuery(".qfy_popinfo").addClass("qfy_show"); }, 500);
        if (timetoclose) {
            setTimeout(function() { jQuery(".qfy_popinfo").removeClass("qfy_show"); }, timetoclose * 1000);
        }
    }
}

function weixin_auto_redirect() {
    //ç¬¬ä¸‰æ–¹è¡¥å…¨ä¿¡æ¯é¡µé¢ï¼Œä¸è¦è·³
    if (jQuery('.qfyuser[data-template="changeinfo"]').length > 0) {
        return;
    }
    jQuery.post("/admin/admin-ajax.php", { action: "weixin_auto_redirect" }, function(data) {
        if (data.indexOf("http") == 0) {
            location.href = data;
        }
    });
}

function openheaderbtn(obj) {
    if (jQuery("#page,#phantom").hasClass("menuopen")) {
        jQuery("#page,#phantom").removeClass("menuopen");
    } else {
        jQuery("#page,#phantom").addClass("menuopen");
    }
}

function before_quick_search(obj) {
    var search = jQuery(obj).find("[name='search']").val();
    if (search == "") {
        return false;
    }
}

function quick_search(obj) {
    var v = jQuery(obj).val();
    var pageid = jQuery(obj).attr("data-pageid");
    var title = jQuery(obj).attr("data-title") ? jQuery(obj).attr("data-title") : "æœç´¢";
    var placeholder = jQuery(obj).attr("data-placeholder") ? jQuery(obj).attr("data-placeholder") : "è¯·è¾“å…¥å…³é”®è¯";
    var btn1 = jQuery(obj).attr("data-btn1") ? jQuery(obj).attr("data-btn1") : "ç¡®è®¤";
    var btn2 = jQuery(obj).attr("data-btn2") ? jQuery(obj).attr("data-btn2") : "å–æ¶ˆ";
    var posttype = jQuery(obj).attr("data-posttype");
    var postcate = jQuery(obj).attr("data-postcate");
    var bw = jQuery("body").width();
    var bh = jQuery(window).height();
    var message = "<div><form action='/'  onsubmit='return before_quick_search(this)'><input type='hidden'  name='searchtype' value='" + posttype + "' /><input type='hidden'  name='searchcate' value='" + postcate + "' /><input type='hidden' name='page_id' value='" + pageid + "'><div style='box-sizing: border-box;padding: 26px 24px 5px 24px;font-size: 18px;font-weight: 500;line-height: 24px;text-align: left;'>" + title + "</div>";
    if (jQuery(obj).attr("data-es") == "1") {
        message += '<input type="hidden"  name="ep_search" value="1" />';
        message += '<input type="hidden"  name="qfyuuid" value="' + jQuery(obj).attr("data-es-uuid") + '" />';
        if (jQuery(obj).attr("data-es-relevancy") == "1") {
            message += '<input type="hidden"  name="ep_relevancy" value="1" />';
        }
    }
    message += '<div  style="height: 80px;box-sizing: border-box;padding: 0 24px;overflow-y: auto;font-size: 15px;line-height: 1.5;color: rgba(0,0,0,.7);"><input style="border-width: 1px;border-style: solid;padding: 15px;background: #f2f2f2;width: 100%;text-indent: 6px;box-sizing: border-box;margin-top: 5px;border-radius: 0;outline:0;border-color:#ececec;" placeholder="' + placeholder + '" type="search" name="search"></div>';
    message += '<div class="pop_search_btn_div" style="padding: 0 20px;text-align: right;box-sizing: border-box;"><button type="submit" style="min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;font-size:14px;">' + btn1 + '</button><button type="button" onclick="unblockUI()" style="font-size:14px;min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;">' + btn2 + '</button></div></form></div>';
    if (bw < 768) {
        var w = bw - 40;
        jQuery.blockUI({ onOverlayClick: top.jQuery.unblockUI, css: { "cursor": "auto", "top": "30%", "left": "50%", "margin-left": "-" + (w / 2) + "px", width: w + "px", height: "180px" }, message: message });
    } else {
        jQuery.blockUI({ onOverlayClick: top.jQuery.unblockUI, css: { "cursor": "auto", "top": "30%", "left": "50%", "margin-left": "-360px", width: "720px", height: "180px" }, message: message });
    }
    jQuery('body').css('cursor', 'auto');
}

function unblockUI() {
    jQuery.unblockUI();
}

function beforeOnclick(e, msg) {
    if (confirm(msg)) {} else {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
}

function login_button_click(id, link) {
    if (self != top && typeof parent.jAlert == "function") {
        jAlert("åœ¨ç¼–è¾‘æ¨¡å¼ä¸‹ï¼Œä¸å…è®¸ä½¿ç”¨è¯¥åŠŸèƒ½ï¼Œè¯·åˆ°é¢„è§ˆæ¨¡å¼ä¸‹ä½¿ç”¨ã€‚");
        return false;
    }
    var back = location.href;
    try { if (location.href.indexOf('qfy-login.php') > 0) back = document.loginform.redirect_to.value; } catch (e) { back = '/'; }
    location.href = (link ? link : '/') + '?connect=' + id + '&action=login&qfy_nocache=true&back=' + escape(back);
}

function play_qfy_video(obj) {
    //click
    if (typeof play_qfy_video_init != "function") {
        jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-popvideo.js", function() {
            play_qfy_video_init(obj);
        });
    } else {
        play_qfy_video_init(obj);
    }
}

function play_local_video(obj) {
    //click
    if (typeof play_local_video_init != "function") {
        jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-popvideo.js", function() {
            play_local_video_init(obj);
        });
    } else {
        play_local_video_init(obj);
    }
}

function init_usermange_detail() {
    if (jQuery("#usermanage_container").length <= 0) return;
    if (typeof window['_init_usermange_detail'] !== 'function') {
        jQuery.onDemandScript("/FeiEditor/bitSite/js/users.js", function() {
            _init_usermange_detail();
        })
    } else {
        _init_usermange_detail();
    }
}

function qfy_secode_check(obj) {
    if (typeof qfy_scode_check_init != "function") {
        jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-scode.js", function() {
            qfy_scode_check_init(obj);
        });
    } else {
        qfy_scode_check_init(obj);
    }
}

if (typeof(position_follow_function) != 'function') {
    function position_follow_function() {
        //æ‰‹æœºï¼Œç¼–è¾‘ï¼Œè‡ªç”±åŒºå—ä¸é€‚ç”¨ã€‚æ·»åŠ ç±»position-follow
        if (is_edit_model) {
            return;
        }
        if (jQuery(".position-follow").length > 0) {
            jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-follow.js", function() {
                position_follow_init();
            });
        }
    }
}

var pop_scrollTop = 0;

function pop_stopScroll() {
    if (jQuery(window).width() > 760) {
        return;
    }
    pop_scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // ä½¿bodyè„±ç¦»æ–‡æ¡£æµ
    jQuery("body").addClass('dialog-open');
    jQuery("body").css('top', -pop_scrollTop + 'px');
}

function pop_recoverScroll() {
    if (jQuery(window).width() > 760) {
        return;
    }
    jQuery("body").removeClass('dialog-open');
    document.body.scrollTop = document.documentElement.scrollTop = pop_scrollTop;
}

function open_menu_pop_content() {
    if (jQuery("body").hasClass("pop-content")) {
        jQuery("body").removeClass("pop-content");
    } else {
        jQuery("body").addClass("pop-content");
    }
}

function auto_tab_menu($this) {

    if (!$this.hasClass("active")) {
        $this.addClass("active");
    } else {
        return;
    }
    if (!$this.attr("data-param")) {
        return;
    }


    var data = JSON.parse($this.attr("data-param"));
    if (!data.scope) {
        data.scope = "#" + $this.closest("section").attr("id");
    }

    if (!data.level) {
        return;
    }
    if ($(data.scope).length == 0) {
        return;
    }



    var isTakeOverByClick = false;
    var idList = [];
    var a = $(data.scope).find(data.level.join(","));

    $.each(a, function(index, value) {

        idList.push(index);
        var anchor = document.createElement('a');
        anchor.setAttribute('id', data.name + index);
        $(data.location).append("<div class='w-toc " + value.localName + "' id='cl" + index + "'>" + value.innerText + "</div>");
        value.parentNode.insertBefore(anchor, value);
        $(data.location + " #cl" + index).click(function() {
            isTakeOverByClick = true;
            window.location.href = "#" + data.name + index;
            $(data.location + ' .w-toc style').remove();
            $(this).append("<style>" + data.location + " #cl" + index + ":before{background-color: " + data.activeBackground + "}</style>");
            $(data.location + ' .w-toc').css("color", "" + data.color + "");
            $(this).css("color", "" + data.activeColor + "");
        })
    })
    if (data.title == null || data.title == "") {
        $this.find(".table-content .title").text("");
    } else {
        $this.find(".table-content .title").text(data.title);
    }
    if (data.hidetitle == 1) {
        $this.find(".table-content .title").hide();
    }
    $(data.location + " .w-toc").css({ "padding": "5px 2px", "color": "" + data.color + "" });
    $(data.location).append("<style>" + data.location + " .w-toc:before{content:' ';display:inline-block;height:100%;left:0;margin-top:-1px;position:absolute;width:3px;}</style>");


    for (let i = 0; i < data.level.length; i++) {
        $(data.scope + " ." + data.level[i]).css({ "padding-left": (10 * i + 10) + "px", "font-family": data.font, "font-size": data.size[i] + "px", "margin-bottom": data.margin[i] + "px" });
    }

    $this.find(".table-content").css({ "max-width": "" + data.maxWidth + "", "background-color": "" + data.background + "", "box-shadow": "0 0 10px #ccc", "overflow": "hidden" });
    $this.find(".table-content .title").attr("style", data.fontstyle);
    // $(data.location+" .table-title").click(function(){
    // 	$(data.location).toggle();
    // }),
    var width = $this.find(".table-content").width();

    var height = $this.find(".table-content").height();
    var container_h = $(data.scope).offset().top * 1 + $(data.scope).height();
    $(window).scroll(function() {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        !isTakeOverByClick && $.each(idList, function(index, id) {
            var head = $(data.scope + ' #' + data.name + id);
            var item = $(data.location + ' #cl' + id);
            var offsetTopHead = head.offset().top;
            if (scrollTop >= offsetTopHead) {
                $(data.location + ' .w-toc style').remove();
                item.append("<style>" + data.location + " #cl" + index + ":before{background-color: " + data.activeBackground + "}</style>");
                $(data.location + ' .w-toc').css("color", "" + data.color + "");
                item.css("color", "" + data.activeColor + "");
            }
        });
        isTakeOverByClick = false;




        var offsetTopHeads = $this.offset().top;
        if (scrollTop >= offsetTopHeads) {
            $this.find(".table-content").css({ "position": "fixed", "top": "0", "width": width + "px" });
            $this.closest("section").addClass("sectiontopIndex");
            if (scrollTop > container_h - height) {
                $this.find(".table-content").css({ "position": "fixed", "top": -(scrollTop - (container_h - height)) + "px", "width": width + "px" });
            }
        } else {
            $this.find(".table-content").css("position", "initial");
            $this.closest("section").removeClass("sectiontopIndex");
        }
    });
}


;

/* thickbox: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-includes/js/thickbox/thickbox.js) */
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 */

if (typeof tb_pathToImage != 'string') {
    var tb_pathToImage = thickboxL10n.loadingAnimation;
}

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
jQuery(document).ready(function() {
    tb_init('a.thickbox, area.thickbox, input.thickbox'); //pass where to apply thickbox

});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk) {
    jQuery('body').on('click', domChunk, tb_click);
}

function tb_click() {
    var t = this.title || this.name || null;
    var a = this.href || this.alt;
    var g = this.rel || false;
    tb_show(t, a, g);
    this.blur();
    return false;
}

function tb_show(caption, url, imageGroup) { //function called when the user clicks on a thickbox link

    imgLoader = new Image(); // preload image
    imgLoader.src = tb_pathToImage;
    try {
        if (typeof document.body.style.maxHeight === "undefined") { //if IE 6
            jQuery("body", "html").css({ height: "100%", width: "100%" });
            jQuery("html").css("overflow", "hidden");
            if (document.getElementById("TB_HideSelect") === null) { //iframe to hide select elements in ie6
                jQuery("body").append("<iframe id='TB_HideSelect'>" + thickboxL10n.noiframes + "</iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
                jQuery("#TB_overlay").click(tb_remove);
            }
        } else { //all others
            if (document.getElementById("TB_overlay") === null) {
                jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
                jQuery("#TB_overlay").click(tb_remove);
            }
        }

        if (tb_detectMacXFF()) {
            jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack"); //use png overlay so hide flash
        } else {
            jQuery("#TB_overlay").addClass("TB_overlayBG"); //use background and opacity
        }

        if (caption === null) { caption = ""; }
        jQuery("body").append("<div id='TB_load'><img src='" + imgLoader.src + "' width='60' /></div>"); //add loader to the page

        jQuery('#TB_load').show(); //show loader

        var baseURL;
        if (url.indexOf("?") !== -1) { //ff there is a query string involved
            baseURL = url.substr(0, url.indexOf("?"));
        } else {
            baseURL = url;
        }

        var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
        var urlType = baseURL.toLowerCase().match(urlString);

        if (urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp') { //code to show images

            TB_PrevCaption = "";
            TB_PrevURL = "";
            TB_PrevHTML = "";
            TB_NextCaption = "";
            TB_NextURL = "";
            TB_NextHTML = "";
            TB_imageCount = "";
            TB_FoundURL = false;
            if (imageGroup) {
                TB_TempArray = jQuery("a[rel=" + imageGroup + "]").get();
                for (TB_Counter = 0;
                    ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
                    var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
                    if (!(TB_TempArray[TB_Counter].href == url)) {
                        if (TB_FoundURL) {
                            TB_NextCaption = TB_TempArray[TB_Counter].title;
                            TB_NextURL = TB_TempArray[TB_Counter].href;
                            TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>" + thickboxL10n.next + "</a></span>";
                        } else {
                            TB_PrevCaption = TB_TempArray[TB_Counter].title;
                            TB_PrevURL = TB_TempArray[TB_Counter].href;
                            TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>" + thickboxL10n.prev + "</a></span>";
                        }
                    } else {
                        TB_FoundURL = true;
                        TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
                    }
                }
            }

            imgPreloader = new Image();
            imgPreloader.onload = function() {
                imgPreloader.onload = null;

                // Resizing large images - orginal by Christian Montoya edited by me.
                var pagesize = tb_getPageSize();
                var x = pagesize[0] - 50;
                var y = pagesize[1] - 20;
                var imageWidth = imgPreloader.width;
                var imageHeight = imgPreloader.height;
                if (imageWidth > x) {
                    imageHeight = imageHeight * (x / imageWidth);
                    imageWidth = x;
                    if (imageHeight > y) {
                        imageWidth = imageWidth * (y / imageHeight);
                        imageHeight = y;
                    }
                } else if (imageHeight > y) {
                    imageWidth = imageWidth * (y / imageHeight);
                    imageHeight = y;
                    if (imageWidth > x) {
                        imageHeight = imageHeight * (x / imageWidth);
                        imageWidth = x;
                    }
                }
                // End Resizing

                TB_WIDTH = imageWidth + 30;
                TB_HEIGHT = imageHeight + 60;
                jQuery("#TB_window").append("<a href='' id='TB_ImageOff' title='" + thickboxL10n.close + "'><img id='TB_Image' src='" + url + "' width='" + imageWidth + "' height='" + imageHeight + "' alt='" + caption + "'/></a>" + "<div id='TB_caption'>" + caption + "<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='" + thickboxL10n.close + "'><div class='tb-close-icon'></div></a></div>");

                jQuery("#TB_closeWindowButton").click(tb_remove);

                if (!(TB_PrevHTML === "")) {
                    function goPrev() {
                        if (jQuery(document).unbind("click", goPrev)) { jQuery(document).unbind("click", goPrev); }
                        jQuery("#TB_window").remove();
                        jQuery("body").append("<div id='TB_window'></div>");
                        tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
                        return false;
                    }
                    jQuery("#TB_prev").click(goPrev);
                }

                if (!(TB_NextHTML === "")) {
                    function goNext() {
                        jQuery("#TB_window").remove();
                        jQuery("body").append("<div id='TB_window'></div>");
                        tb_show(TB_NextCaption, TB_NextURL, imageGroup);
                        return false;
                    }
                    jQuery("#TB_next").click(goNext);

                }

                jQuery(document).bind('keydown.thickbox', function(e) {
                    e.stopImmediatePropagation();

                    if (e.which == 27) { // close
                        if (!jQuery(document).triggerHandler('qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }]))
                            tb_remove();

                    } else if (e.which == 190) { // display previous image
                        if (!(TB_NextHTML == "")) {
                            jQuery(document).unbind('thickbox');
                            goNext();
                        }
                    } else if (e.which == 188) { // display next image
                        if (!(TB_PrevHTML == "")) {
                            jQuery(document).unbind('thickbox');
                            goPrev();
                        }
                    }
                    return false;
                });

                tb_position();
                jQuery("#TB_load").remove();
                jQuery("#TB_ImageOff").click(tb_remove);
                jQuery("#TB_window").css({ 'visibility': 'visible' }); //for safari using css instead of show
            };

            imgPreloader.src = url;
        } else { //code to show html

            var queryString = url.replace(/^[^\?]+\??/, '');
            var params = tb_parseQuery(queryString);

            TB_WIDTH = (params['width'] * 1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
            TB_HEIGHT = (params['height'] * 1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
            ajaxContentW = TB_WIDTH - 30;
            ajaxContentH = TB_HEIGHT - 45;

            if (url.indexOf('TB_iframe') != -1) { // either iframe or ajax window
                urlNoQuery = url.split('TB_');
                jQuery("#TB_iframeContent").remove();
                if (params['modal'] != "true") { //iframe no modal
                    jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>" + caption + "</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='" + thickboxL10n.close + "'><div class='tb-close-icon'></div></a></div></div><iframe allowFullScreen=true allowFullScreen  frameborder='0' hspace='0' src='" + urlNoQuery[0] + "' id='TB_iframeContent' name='TB_iframeContent" + Math.round(Math.random() * 1000) + "' onload='tb_showIframe()' style='width:" + (ajaxContentW + 29) + "px;height:" + (ajaxContentH + 17) + "px;' >" + thickboxL10n.noiframes + "</iframe>");
                } else { //iframe modal
                    jQuery("#TB_overlay").unbind();
                    jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' src='" + urlNoQuery[0] + "' id='TB_iframeContent' name='TB_iframeContent" + Math.round(Math.random() * 1000) + "' onload='tb_showIframe()' style='width:" + (ajaxContentW + 29) + "px;height:" + (ajaxContentH + 17) + "px;'>" + thickboxL10n.noiframes + "</iframe>");
                }
            } else { // not an iframe, ajax
                if (jQuery("#TB_window").css("visibility") != "visible") {
                    if (params['modal'] != "true") { //ajax no modal
                        jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>" + caption + "</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><div class='tb-close-icon'></div></a></div></div><div id='TB_ajaxContent' style='width:" + ajaxContentW + "px;height:" + ajaxContentH + "px'></div>");
                    } else { //ajax modal
                        jQuery("#TB_overlay").unbind();
                        jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:" + ajaxContentW + "px;height:" + ajaxContentH + "px;'></div>");
                    }
                } else { //this means the window is already up, we are just loading new content via ajax
                    jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW + "px";
                    jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH + "px";
                    jQuery("#TB_ajaxContent")[0].scrollTop = 0;
                    jQuery("#TB_ajaxWindowTitle").html(caption);
                }
            }

            jQuery("#TB_closeWindowButton").click(tb_remove);

            if (url.indexOf('TB_inline') != -1) {
                jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
                jQuery("#TB_window").bind('tb_unload', function() {
                    jQuery('#' + params['inlineId']).append(jQuery("#TB_ajaxContent").children()); // move elements back when you're finished
                });
                tb_position();
                jQuery("#TB_load").remove();
                jQuery("#TB_window").css({ 'visibility': 'visible' });
            } else if (url.indexOf('TB_iframe') != -1) {
                tb_position();
                jQuery("#TB_load").remove();
                jQuery("#TB_window").css({ 'visibility': 'visible' });
            } else {
                jQuery("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()), function() { //to do a post change this load method
                    tb_position();
                    jQuery("#TB_load").remove();
                    tb_init("#TB_ajaxContent a.thickbox");
                    jQuery("#TB_window").css({ 'visibility': 'visible' });
                });
            }

        }

        if (!params['modal']) {
            jQuery(document).bind('keyup.thickbox', function(e) {

                if (e.which == 27) { // close
                    e.stopImmediatePropagation();
                    if (!jQuery(document).triggerHandler('qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }]))
                        tb_remove();

                    return false;
                }
            });
        }

    } catch (e) {
        //nothing here
    }
}

//helper functions below
function tb_showIframe() {
    jQuery("#TB_load").remove();
    jQuery("#TB_window").css({ 'visibility': 'visible' });
}

function tb_remove() {
    jQuery("#TB_imageOff").unbind("click");
    jQuery("#TB_closeWindowButton").unbind("click");
    jQuery("#TB_window").fadeOut("fast", function() { jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove(); });
    jQuery("#TB_load").remove();
    if (typeof document.body.style.maxHeight == "undefined") { //if IE 6
        jQuery("body", "html").css({ height: "auto", width: "auto" });
        jQuery("html").css("overflow", "");
    }
    jQuery(document).unbind('.thickbox');
    return false;
}

function tb_position() {

    var isIE6 = typeof document.body.style.maxHeight === "undefined";
    jQuery("#TB_window").css({ marginLeft: '-' + parseInt((TB_WIDTH / 2), 10) + 'px', width: TB_WIDTH + 'px' });
    if (!isIE6) { // take away IE6
        jQuery("#TB_window").css({ marginTop: '-' + parseInt((TB_HEIGHT / 2), 10) + 'px' });
    }
}

function tb_parseQuery(query) {
    var Params = {};
    if (!query) { return Params; } // return empty object
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) { continue; }
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

function tb_getPageSize() {
    var de = document.documentElement;
    var w = window.innerWidth || self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
    var h = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
    arrayPageSize = [w, h];
    return arrayPageSize;
}

function tb_detectMacXFF() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox') != -1) {
        return true;
    }
};

/* jquery-lazy: (http://w-57018-13995-62907.13919614996.sites.cnfree01.qifeiye.com/qfy-includes/js/jquery.lazy.min.js) */
/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
! function(t, e) { "use strict";

    function r(r, a, i, u, l) {
        function f() { L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function() { s(!0) }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function(t) { "resize" === t.type && (w = B = -1), s(t.all) }), u.a = function(t) { t = c(t), i.push.apply(i, t) }, u.g = function() { return i = n(i).filter(function() { return !n(this).data(a.loadedName) }) }, u.f = function(t) { for (var e = 0; e < t.length; e++) { var r = i.filter(function() { return this === t[e] });
                    r.length && s(!1, r) } }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e)) }

        function c(t) { var i = a.defaultImage,
                o = a.placeholder,
                u = a.imageBase,
                l = a.srcsetAttribute,
                f = a.loaderAttribute,
                c = a._f || {};
            t = n(t).filter(function() { var t = n(this),
                    r = m(this); return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e) }).data("plugin_" + a.name, r); for (var s = 0, d = t.length; s < d; s++) { var A = n(t[s]),
                    g = m(t[s]),
                    h = A.attr(a.imageBaseAttribute) || u;
                g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')") } return t }

        function s(t, e) { if (!i.length) return void(a.autoDestroy && r.destroy()); for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
                if (t || e || A(o[s])) { var g = n(o[s]),
                        h = m(o[s]),
                        b = g.attr(a.attribute),
                        v = g.attr(a.imageBaseAttribute) || l,
                        p = g.attr(a.loaderAttribute);
                    g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p)) }
            u && (i = n(i).filter(function() { return !n(this).data(c) })) }

        function d(t, e, r, i) {++z; var o = function() { y("onError", t), p(), o = n.noop };
            y("beforeLoad", t); var u = a.attribute,
                l = a.srcsetAttribute,
                f = a.sizesAttribute,
                c = a.retinaAttribute,
                s = a.removeAttribute,
                d = a.loadedName,
                A = t.attr(c); if (i) { var g = function() { s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop };
                t.off(I).one(I, o).one(D, g), y(i, t, function(e) { e ? (t.off(D), g()) : (t.off(I), o()) }) || t.trigger(I) } else { var h = n(new Image);
                h.one(I, o).one(D, function() { t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p() }); var m = (L && A ? A : t.attr(u)) || "";
                h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D) } }

        function A(t) { var e = t.getBoundingClientRect(),
                r = a.scrollDirection,
                n = a.threshold,
                i = h() + n > e.top && -n < e.bottom,
                o = g() + n > e.left && -n < e.right; return "vertical" === r ? i : "horizontal" === r ? o : i && o }

        function g() { return w >= 0 ? w : w = n(t).width() }

        function h() { return B >= 0 ? B : B = n(t).height() }

        function m(t) { return t.tagName.toLowerCase() }

        function b(t, e) { if (e) { var r = t.split(",");
                t = ""; for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "") } return t }

        function v(t, e) { var n, i = 0; return function(o, u) {
                function l() { i = +new Date, e.call(r, o) } var f = +new Date - i;
                n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f) } }

        function p() {--z, i.length || z || y("onFinishedAll") }

        function y(t, e, n) { return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0) } var z = 0,
            w = -1,
            B = -1,
            L = !1,
            T = "afterLoad",
            D = "load",
            I = "error",
            N = "img",
            E = "src",
            F = "srcset",
            C = "sizes",
            O = "background-image"; "event" === a.bind || o ? f() : n(t).on(D + "." + l, f) }

    function a(a, o) { var u = this,
            l = n.extend({}, u.config, o),
            f = {},
            c = l.name + "-" + ++i; return u.config = function(t, r) { return r === e ? l[t] : (l[t] = r, u) }, u.addItems = function(t) { return f.a && f.a("string" === n.type(t) ? n(t) : t), u }, u.getItems = function() { return f.g ? f.g() : {} }, u.update = function(t) { return f.e && f.e({}, !t), u }, u.force = function(t) { return f.f && f.f("string" === n.type(t) ? n(t) : t), u }, u.loadAll = function() { return f.e && f.e({ all: !0 }, !0), u }, u.destroy = function() { return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e }, r(u, l, a, f, c), l.chainable ? a : u } var n = t.jQuery || t.Zepto,
        i = 0,
        o = !1;
    n.fn.Lazy = n.fn.lazy = function(t) { return new a(this, t) }, n.Lazy = n.lazy = function(t, r, i) { if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) { t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r]; for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)(o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i); for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0] } }, a.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, n(t).on("load", function() { o = !0 }) }(window);;