// main.js
function cleanCache(module) {
    var path = require.resolve(module);
    require.cache[path] = null;
}

setInterval(function () {
    cleanCache('./HotPatchTest.js');
    var code = require('./HotPatchTest.js');
    console.log(code);
}, 2000);