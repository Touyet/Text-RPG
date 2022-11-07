"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseButton = exports.is = exports.isValue = exports.capitalize = exports.extend = void 0;
function extend(obj, attrs, overrideObject = false) {
    let res = Object.assign({}, obj);
    if (!attrs)
        return res;
    for (const attr in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, attr)) {
            const val = attrs[attr];
            if (overrideObject)
                obj[attr] = val;
            else
                res[attr] = val;
        }
    }
    return res;
}
exports.extend = extend;
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
function isValue(val) {
    return val !== null && val !== undefined;
}
exports.isValue = isValue;
function is(val, ...properties) {
    for (const property of properties) {
        if (!Object.prototype.hasOwnProperty.call(val, property))
            return false;
    }
    return true;
}
exports.is = is;
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["LEFT"] = 0] = "LEFT";
    MouseButton[MouseButton["MIDDLE"] = 1] = "MIDDLE";
    MouseButton[MouseButton["RIGHT"] = 2] = "RIGHT";
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
