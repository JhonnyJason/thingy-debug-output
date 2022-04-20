// Generated by CoffeeScript 2.6.1
//###############################################################################
var modulesToDebug, toJson;

toJson = function(obj) {
  return JSON.stringify(obj, null, 4);
};

//###############################################################################
modulesToDebug = {};

//###############################################################################
//region exposedFunctions
export var createLogFunctions = function(modulename) {
  var log, olog;
  log = function(arg) {
    if (modulesToDebug[modulename]) {
      console.log("[" + modulename + "]: " + arg);
    }
  };
  olog = function(obj) {
    return log("\n" + toJson(obj));
  };
  return {log, olog};
};

//###############################################################################
export var debugOn = function(modulename) {
  modulesToDebug[modulename] = true;
};

export var debugOff = function(modulename) {
  delete modulesToDebug[modulename];
};

//###############################################################################
export var addModulesToDebug = function(toDebug) {
  var name, toD;
  for (name in toDebug) {
    toD = toDebug[name];
    if (toD) {
      modulesToDebug[name] = true;
    }
  }
};

//endregion
