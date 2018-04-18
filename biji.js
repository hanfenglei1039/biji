import { timingSafeEqual } from 'crypto';

var moment = require('moment');
var util   = require('util');
var dbhd   = require('./dboper');
var basic  = require('./basic');
var mqhd   = require('./mqoper');
require('./errorRecord');

const ONE_MINUTE_MILL_SECONDS = 1000 * 60;
const ONE_HOUR_MILL_SECONDS   = ONE_MINUTE_MILL_SECONDS * 60;
const ONE_DAY_MILL_SECONDS    = ONE_HOUR_MILL_SECONDS * 24;
const ONE_WEEK_MILL_SECONDS   = ONE_DAY_MILL_SECONDS * 7;
const ONE_YEAR_MILL_SECONDS   = ONE_DAY_MILL_SECONDS * 365;

const ERR_RESULT_SUCCESS     = "success";
const ERR_RESULT_FAIL        = "fail";
const ERR_RESULT_BIG_SUCCESS = "SUCCESS";
const ERR_RESULT_BIG_FAIL    = "FAIL";

var ERR_CODE_PARAM = 1;
var ERR_CODE_PUB   = 2;

function json2str(jsonData) {
    return JSON.stringify(jsonData);
}

function print(data) {
    return util.inspect(data, { depth: null });
}

function getZeroTimeNumYesterday() {
    var dateTime = new Date();
    var zeroTimeYesterday = new Date(dateTime.toDateString()) - ONE_DAY_MILL_SECONDS;

    return zeroTimeYesterday;
}

function getZeroTimeNumToday() {
    var dateTime = new Date();
    var zeroTimeToday = +new Date(dateTime.toDateString());

    return zeroTimeToday;
}

function isNum(param) {
    return Object.prototype.toString.call(param) === "[object Number]";
}

function isString(param) {
    return Object.prototype.toString.call(param) === "[object String]";
}

function isUndefined(param) {
    return Object.prototype.toString.call(param) === "[object Undefined]";
}

function isBoolean(param) {
    return Object.prototype.toString.call(param) === "[object Boolean]";
}

function isObject(param) {
    return Object.prototype.toString.call(param) === "[object Object]";
}

function isArray(param) {
    return Object.prototype.toString.call(param) === "[object Array]";
}

function isFunction(param) {
    return Object.prototype.toString.call(param) === "[object Function]";
}

function indexOf(array, val) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == val) {
            return i;
        }
    }
    return -1;
}

function removeArrya(array, val) {
    var index = indexOf(array, val);
    if (-1 != index) {
        array.splice(index, 1);
    }
    return array;
}

function removeArrSpecifyObj(array, key, val) {
    array.map(
        function(item, index) {
            var flag = item[key] == val ? true : false;
            if (true == flag) {
                array.splice(index, 1);
            }
        }
    );
    return array;
}

function uniqueArray(array) {
    var obj = {};
    var res = [];
    array.forEach(function(item) {
        if (!obj[item]) {
            obj[item] = true;
            res.push(item);
        }
    });
    return res;
}

function compare(sortName) {
    return function(o, p) {
        var a = {};
        var b = {};
        if (isObject(o) && isObject(p) && o && p) {
            a = o[sortName];
            b = p[sortName];
        }
        if (a === b) {
            return 0;
        }
        if (typeof a === typeof b) {
            return (a < b) ? -1 : 1;
        }
        return (typeof a < typeof b) ? -1 : 1;
    }
}

function stampToday() {
    var today = moment().startOf("day");
    var timestamp = [];
    timestamp.push(today.format("YYYY-MM-DD HH:00:00"));
    for (var i = 0; i < 24; i++) {
        timestamp.push(today.add(1, "hours").format("YYYY-MM-DD HH:00:00"));
    }
    return timestamp;
}

function



