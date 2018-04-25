Module._load = function (request, parent, isMain) {
    var filename = Module._resolveFilename(request, parent);

    var cachedModule = Module._cache[filename];
    if (cachedModule) {
        return cachedModule.exports;
    }

    var module = new Module(filename, parent);
    Module._cache[filename] = module;
    module.load(filename);

    return module.exports;
};

require.cache = Module._cache;