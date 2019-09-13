(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    // define(['b'], factory);
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    // module.exports = factory(require('b'));
    module.exports = factory('node');
  } else {
    // Browser globals (root is window)
    // root.returnExports = factory(root.b);
    root.returnExports = factory('browser');
  }
}(this, function (environment) {
  environment = environment || 'node';
  // attach properties to the exports object to define
  // the exported module properties.

  // var PATH_SERVER = 'https://social-selectors.itwcreativeworks.com/module/';
  var PATH_SERVER = 'https://cdn.jsdelivr.net/npm/social-selectors/module/libraries/';
  var PATH_LOCAL = './libraries/';

  // if ((typeof window !== 'undefined') && (window.XMLHttpRequest || XMLHttpRequest || ActiveXObject)) {
  //   environment = 'browser';
  // }
  // if (environment == 'browser') {
  //   registerName();
  // }
  //
  // function registerName() {
  //   // console.log('Registered slapform to window!');
  //   try {
  //     window.SocialSelectors = SocialSelectors;
  //   } catch (e) {
  //   }
  // }


  function SocialSelectors(options) {
    this.loaded = false;
    this.library = {};
    this.error = false;
    this.options = options || {};
    this.options.debug = (typeof this.options.debug !== 'undefined') ? options.debug : false;
  };

  SocialSelectors.prototype.isLoaded = function(payload) {
    return this.loaded;
  };


  SocialSelectors.prototype.load = function(payload) {
    // console.log('$$$ LOAD');
    this.extra = '2';
    payload = payload || {};
    payload.debug = typeof payload.debug !== 'undefined' ? typeof payload.debug : false;
    payload.environment = payload.environment || environment || 'browser';
    payload.location = payload.location || 'local';
    payload.library = payload.library || '';
    payload.device = payload.device || 'main';
    payload.path = payload.path || ''; // Overwrite existing hardcoded paths
    if (payload.cacheBreaker === true) {
      payload.cacheBreaker = '?cb=' + Date.now();
    } else if (typeof payload.cacheBreaker !== 'undefined') {
      payload.cacheBreaker = '?cb=' + payload.cacheBreaker;
    } else {
      payload.cacheBreaker = '';
    }

    // options
    this.options.debug = payload.debug;

    var This = this;

    var workingPath = '';
    This.library = {};
    This.loaded = false;
    This.error = false;

    if (payload.environment == 'browser') {

    } else if (payload.environment == 'node') {
      // console.log('$$$ NODE');
      workingPath = (payload.location == 'local') ? PATH_LOCAL : PATH_SERVER;
      workingPath = workingPath + payload.library + '/' + payload.device + '.json';
      workingPath = (payload.path) ? payload.path : workingPath;
      workingPath += payload.cacheBreaker;

      if (This.options.debug) {
        console.log('Working path:', workingPath);
      }

      return new Promise(function(resolve, reject) {
        if (payload.location == 'local') {
          // console.log('$$$ LOCAL');
          try {
            This.library = require(workingPath);
            This.library = (typeof This.library === 'string') ? JSON.parse(This.library) : This.library;
            This.loaded = true;
            This.error = false;
            if (This.options.debug) {
              console.log('Loaded library:', This.library);
            }
            resolve(This.library);
          } catch (e) {
            This.library = e;
            This.loaded = false;
            This.error = e;
            reject(e);
          }
        } else if (payload.location == 'hosted') {
          var request = (workingPath.substring(0,5).indexOf('https') > -1) ? require('https') : require('http');
          var full = '';
          request.get(workingPath, function(res) {
            // console.log('statusCode:', res.statusCode);
            // console.log('headers:', res.headers);
            res.on('data', function(chunk) {
              full += chunk;
            });

            res.on('end', function() {
              try {
                This.library = JSON.parse(full.toString());
                This.loaded = true;
                This.error = false;
                if (This.options.debug) {
                  console.log('Loaded library:', This.library);
                }
                resolve(This.library);
              } catch (e) {
                This.library = e;
                This.loaded = false;
                This.error = e;
                console.error(e);
                reject(e);
              }
            });

            // res.on('data', function(data) {
            //   // process.stdout.write(d);
            //   // console.log('data', data);
            //   var processed = data.toString();
            //   // console.log('data.toString()', processed);
            //   // console.log('JSON.parse', JSON.parse(processed));
            //
            //   try {
            //     This.library = JSON.parse(processed);
            //     This.error = false;
            //     resolve(This.library);
            //   } catch (e) {
            //     This.library = e;
            //     This.error = e;
            //     console.error(e);
            //     reject(e);
            //   }
            // });

          }).on('error', function(e) {
            This.library = e;
            This.loaded = false;
            This.error = e;
            console.error(e);
            reject(e);
          });
        }
      });

    }

  }

  var parseDELETE = function (req) {
    var result;
    try {
      result = JSON.parse(req.responseText);
    } catch (e) {
      result = req.responseText;
    }
    return [result, req];
  };

  SocialSelectors.prototype.get = function(path, def) {
    var This = this;
    var response = def || '';
    var obj = This.library || {};

    if (This.error) {
      return response;
    }

    var fullPath = (path || '')
      .replace(/\[/g, '.')
      .replace(/]/g, '')
      .split('.')
      .filter(Boolean);

    // return revive(fullPath.every(everyFunc) ? obj : def);
    var workingVal;
    if (fullPath.every(everyFunc)) {
      workingVal = obj;
    } else {
      workingVal = def;
      if (This.options.debug) {
        console.error("Could not access path, maybe it's incorrect?", path);
      }
    }

    // if ((typeof workingVal === 'string') && (workingVal.indexOf('$') == 0)) {
    //   if ((workingVal.indexOf('$get(') == 0)) {
    //     workingVal = This.get(workingVal.slice(0, -1).substring(5));
    //   } else if (workingVal.indexOf('$new(') == 0) {
    //
    //   }
    // }

    workingVal = parseTriggers(This, workingVal);
    return revive(workingVal);


    function everyFunc(step) {
      return !(step && (obj = obj[step]) === undefined);
    }

  }

  function revive(value) {
    // logic from: http://ovaraksin.blogspot.com/2013/10/pass-javascript-function-via-json.html
    return (value && (typeof value === 'string') && value.indexOf("function") === 0)
      ? new Function('return ' + value)()
      : value;
  }

  function parseTriggers(This, workingVal) {

    var triggers = ['$get', '$new'];

    if (((typeof workingVal === 'string') && (triggers.some(function(v) { return workingVal.indexOf(v) >= 0; })))) {
      workingVal = ' ' + workingVal + ' ';
            // var occurances = (workingVal.match(/\$get\(/g) || []).length
            // for (var i = 0; i < occurances; i++) {
            //   // var workingValArray = workingVal.match(/(?<=\$get\().*?(?=\)\s)/)
            //   var workingValArray = workingVal.match(/(?=\$get\().*?(?=\)\s)/)
            //   console.log(workingValArray);
            //   workingVal = workingVal.replace('$get(' + workingValArray + ') ', This.get(workingValArray + '') + ' ');
            // }
      var valMatches = workingVal.match(/(?:\$get\().*?(?=\)\s)/g)
      for (var i = 0; i < valMatches.length; i++) {
        valMatches[i] = valMatches[i].replace('$get(', '')
        workingVal = workingVal.replace('$get(' + valMatches[i] + ') ', This.get(valMatches[i]) + ' ')
      }
      workingVal = workingVal.trim();
    }
    return workingVal;

  }

  return SocialSelectors; // Enable if using UMD
  // module.exports = Slapform; // Enable if using regular module.exports
}));
