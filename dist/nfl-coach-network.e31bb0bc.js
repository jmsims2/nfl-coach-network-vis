// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"coaches.json":[function(require,module,exports) {
module.exports = [{
  "name": "Matt Patricia",
  "position": "Graduate Assistant",
  "team": "Rensselaer Polytechnic Institute",
  "year": 1996
}, {
  "name": "Matt Patricia",
  "position": "Defensive Line Coach",
  "team": "Amherst",
  "year": 1999
}, {
  "name": "Matt Patricia",
  "position": "Defensive Line Coach",
  "team": "Amherst",
  "year": 2000
}, {
  "name": "Matt Patricia",
  "position": "Offensive Graduate Assistant",
  "team": "Syracuse",
  "year": 2001
}, {
  "name": "Matt Patricia",
  "position": "Offensive Graduate Assistant",
  "team": "Syracuse",
  "year": 2002
}, {
  "name": "Matt Patricia",
  "position": "Offensive Graduate Assistant",
  "team": "Syracuse",
  "year": 2003
}, {
  "name": "Matt Patricia",
  "position": "Offensive Assistant",
  "team": "New England Patriots",
  "year": 2004
}, {
  "name": "Matt Patricia",
  "position": "Assistant Offensive Line Coach",
  "team": "New England Patriots",
  "year": 2005
}, {
  "name": "Matt Patricia",
  "position": "Linebackers Coach",
  "team": "New England Patriots",
  "year": 2006
}, {
  "name": "Matt Patricia",
  "position": "Linebackers Coach",
  "team": "New England Patriots",
  "year": 2007
}, {
  "name": "Matt Patricia",
  "position": "Linebackers Coach",
  "team": "New England Patriots",
  "year": 2008
}, {
  "name": "Matt Patricia",
  "position": "Linebackers Coach",
  "team": "New England Patriots",
  "year": 2009
}, {
  "name": "Matt Patricia",
  "position": "Linebackers Coach",
  "team": "New England Patriots",
  "year": 2010
}, {
  "name": "Matt Patricia",
  "position": "Safeties Coach",
  "team": "New England Patriots",
  "year": 2011
}, {
  "name": "Matt Patricia",
  "position": "Defensive Coordinator",
  "team": "New England Patriots",
  "year": 2012
}, {
  "name": "Matt Patricia",
  "position": "Defensive Coordinator",
  "team": "New England Patriots",
  "year": 2013
}, {
  "name": "Matt Patricia",
  "position": "Defensive Coordinator",
  "team": "New England Patriots",
  "year": 2014
}, {
  "name": "Matt Patricia",
  "position": "Defensive Coordinator",
  "team": "New England Patriots",
  "year": 2015
}, {
  "name": "Matt Patricia",
  "position": "Defensive Coordinator",
  "team": "New England Patriots",
  "year": 2016
}, {
  "name": "Matt Patricia",
  "position": "Defensive Coordinator",
  "team": "New England Patriots",
  "year": 2017
}, {
  "name": "Matt Patricia",
  "position": "Head Coach",
  "team": "Detroit Lions",
  "year": 2018
}, {
  "name": "Matt Patricia",
  "position": "Head Coach",
  "team": "Detroit Lions",
  "year": 2019
}, {
  "name": "Matt Nagy",
  "position": "Player",
  "team": "New York Dragons",
  "year": 2002
}, {
  "name": "Matt Nagy",
  "position": "Player",
  "team": "Carolina Cobras",
  "year": 2004
}, {
  "name": "Matt Nagy",
  "position": "Player",
  "team": "Georgia Force",
  "year": 2005
}, {
  "name": "Matt Nagy",
  "position": "Player",
  "team": "Georgia Force",
  "year": 2006
}, {
  "name": "Matt Nagy",
  "position": "Player",
  "team": "Columbus Destroyers",
  "year": 2007
}, {
  "name": "Matt Nagy",
  "position": "Player",
  "team": "Columbus Destroyers",
  "year": 2008
}, {
  "name": "Matt Nagy",
  "position": "Coaching Intern",
  "team": "Philadelphia Eagles",
  "year": 2008
}, {
  "name": "Matt Nagy",
  "position": "Coaching Intern",
  "team": "Philadelphia Eagles",
  "year": 2009
}, {
  "name": "Matt Nagy",
  "position": "Coaches Assistant",
  "team": "Philadelphia Eagles",
  "year": 2010
}, {
  "name": "Matt Nagy",
  "position": "Offensive Quality Control Coach",
  "team": "Philadelphia Eagles",
  "year": 2011
}, {
  "name": "Matt Nagy",
  "position": "Offensive Quality Control Coach",
  "team": "Philadelphia Eagles",
  "year": 2012
}, {
  "name": "Matt Nagy",
  "position": "Quarterbacks Coach",
  "team": "Kansas City Chiefs",
  "year": 2013
}, {
  "name": "Matt Nagy",
  "position": "Quarterbacks Coach",
  "team": "Kansas City Chiefs",
  "year": 2014
}, {
  "name": "Matt Nagy",
  "position": "Quarterbacks Coach",
  "team": "Kansas City Chiefs",
  "year": 2015
}, {
  "name": "Matt Nagy",
  "position": "Offensive Coordinator",
  "team": "Kansas City Chiefs",
  "year": 2016
}, {
  "name": "Matt Nagy",
  "position": "Offensive Coordinator",
  "team": "Kansas City Chiefs",
  "year": 2017
}, {
  "name": "Matt Nagy",
  "position": "Head Coach",
  "team": "Chicago Bears",
  "year": 2018
}, {
  "name": "Matt Nagy",
  "position": "Head Coach",
  "team": "Chicago Bears",
  "year": 2019
}, {
  "name": "Matt LaFleur",
  "position": "Offensive Assistant",
  "team": "Saginaw Valley State",
  "year": 2003
}, {
  "name": "Matt LaFleur",
  "position": "Offensive Assistant",
  "team": "Central Michigan University",
  "year": 2004
}, {
  "name": "Matt LaFleur",
  "position": "Offensive Assistant",
  "team": "Central Michigan University",
  "year": 2005
}, {
  "name": "Matt LaFleur",
  "position": "Quarterbacks Coach",
  "team": "Northern Michigan",
  "year": 2006
}, {
  "name": "Matt LaFleur",
  "position": "Offensive Coordinator",
  "team": "Ashland",
  "year": 2007
}, {
  "name": "Matt LaFleur",
  "position": "Offensive Quality Control Coach",
  "team": "Houston Texans",
  "year": 2008
}, {
  "name": "Matt LaFleur",
  "position": "Offensive Quality Control Coach",
  "team": "Houston Texans",
  "year": 2009
}, {
  "name": "Matt LaFleur",
  "position": "Quarterbacks Coach",
  "team": "Washington Redskins",
  "year": 2010
}, {
  "name": "Matt LaFleur",
  "position": "Quarterbacks Coach",
  "team": "Washington Redskins",
  "year": 2011
}, {
  "name": "Matt LaFleur",
  "position": "Quarterbacks Coach",
  "team": "Washington Redskins",
  "year": 2012
}, {
  "name": "Matt LaFleur",
  "position": "Quarterbacks Coach",
  "team": "Washington Redskins",
  "year": 2013
}, {
  "name": "Matt LaFleur",
  "position": "Quarterbacks Coach",
  "team": "Notre Dame",
  "year": 2014
}, {
  "name": "Matt LaFleur",
  "position": "Quarterbacks Coach",
  "team": "Atlanta Falcons",
  "year": 2015
}, {
  "name": "Matt LaFleur",
  "position": "Quarterbacks Coach",
  "team": "Atlanta Falcons",
  "year": 2016
}, {
  "name": "Matt LaFleur",
  "position": "Offensive Coordinator",
  "team": "Los Angeles Rams",
  "year": 2017
}, {
  "name": "Matt LaFleur",
  "position": "Offensive Coordinator",
  "team": "Tennessee Titans",
  "year": 2018
}, {
  "name": "Matt LaFleur",
  "position": "Head Coach",
  "team": "Green Bay Packers",
  "year": 2019
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Assistant",
  "team": "Missouri",
  "year": 1979
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Assistant",
  "team": "Missouri",
  "year": 1980
}, {
  "name": "Mike Zimmer",
  "position": "Inside Linebackers Coach",
  "team": "Weber State",
  "year": 1981
}, {
  "name": "Mike Zimmer",
  "position": "Inside Linebackers Coach",
  "team": "Weber State",
  "year": 1982
}, {
  "name": "Mike Zimmer",
  "position": "Inside Linebackers Coach",
  "team": "Weber State",
  "year": 1983
}, {
  "name": "Mike Zimmer",
  "position": "Inside Linebackers Coach",
  "team": "Weber State",
  "year": 1984
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Weber State",
  "year": 1985
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Weber State",
  "year": 1986
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Weber State",
  "year": 1987
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Weber State",
  "year": 1988
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Washington State",
  "year": 1989
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Washington State",
  "year": 1990
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Washington State",
  "year": 1991
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Washington State",
  "year": 1992
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Washington State",
  "year": 1993
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Dallas Cowboys",
  "year": 1994
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Dallas Cowboys",
  "year": 1995
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Dallas Cowboys",
  "year": 1996
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Dallas Cowboys",
  "year": 1997
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Dallas Cowboys",
  "year": 1998
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Backs Coach",
  "team": "Dallas Cowboys",
  "year": 1999
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2000
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2001
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2002
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2003
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2004
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2005
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2006
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Atlanta Falcons",
  "year": 2007
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Cincinnati Bengals",
  "year": 2008
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Cincinnati Bengals",
  "year": 2009
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Cincinnati Bengals",
  "year": 2010
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Cincinnati Bengals",
  "year": 2011
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Cincinnati Bengals",
  "year": 2012
}, {
  "name": "Mike Zimmer",
  "position": "Defensive Coordinator",
  "team": "Cincinnati Bengals",
  "year": 2013
}, {
  "name": "Mike Zimmer",
  "position": "Head Coach",
  "team": "Minnesota Vikings",
  "year": 2014
}, {
  "name": "Mike Zimmer",
  "position": "Head Coach",
  "team": "Minnesota Vikings",
  "year": 2015
}, {
  "name": "Mike Zimmer",
  "position": "Head Coach",
  "team": "Minnesota Vikings",
  "year": 2016
}, {
  "name": "Mike Zimmer",
  "position": "Head Coach",
  "team": "Minnesota Vikings",
  "year": 2017
}, {
  "name": "Mike Zimmer",
  "position": "Head Coach",
  "team": "Minnesota Vikings",
  "year": 2018
}, {
  "name": "Mike Zimmer",
  "position": "Head Coach",
  "team": "Minnesota Vikings",
  "year": 2019
}, {
  "name": "Freddie Kitchens",
  "position": "Running Backs Coach",
  "team": "Glenville State",
  "year": 1999
}, {
  "name": "Freddie Kitchens",
  "position": "Graduate Assistant",
  "team": "LSU",
  "year": 2000
}, {
  "name": "Freddie Kitchens",
  "position": "Running Backs Coach",
  "team": "North Texas",
  "year": 2001
}, {
  "name": "Freddie Kitchens",
  "position": "Running Backs Coach",
  "team": "North Texas",
  "year": 2002
}, {
  "name": "Freddie Kitchens",
  "position": "Running Backs Coach",
  "team": "North Texas",
  "year": 2003
}, {
  "name": "Freddie Kitchens",
  "position": "Tight Ends Coach",
  "team": "Mississippi State",
  "year": 2004
}, {
  "name": "Freddie Kitchens",
  "position": "Running Backs Coach",
  "team": "Mississippi State",
  "year": 2005
}, {
  "name": "Freddie Kitchens",
  "position": "Tight Ends Coach",
  "team": "Dallas Cowboys",
  "year": 2006
}, {
  "name": "Freddie Kitchens",
  "position": "Tight Ends Coach",
  "team": "Arizona Cardinals",
  "year": 2007
}, {
  "name": "Freddie Kitchens",
  "position": "Tight Ends Coach",
  "team": "Arizona Cardinals",
  "year": 2008
}, {
  "name": "Freddie Kitchens",
  "position": "Tight Ends Coach",
  "team": "Arizona Cardinals",
  "year": 2009
}, {
  "name": "Freddie Kitchens",
  "position": "Tight Ends Coach",
  "team": "Arizona Cardinals",
  "year": 2010
}, {
  "name": "Freddie Kitchens",
  "position": "Tight Ends Coach",
  "team": "Arizona Cardinals",
  "year": 2011
}, {
  "name": "Freddie Kitchens",
  "position": "Tight Ends Coach",
  "team": "Arizona Cardinals",
  "year": 2012
}, {
  "name": "Freddie Kitchens",
  "position": "Quarterbacks Coach",
  "team": "Arizona Cardinals",
  "year": 2013
}, {
  "name": "Freddie Kitchens",
  "position": "Quarterbacks Coach",
  "team": "Arizona Cardinals",
  "year": 2014
}, {
  "name": "Freddie Kitchens",
  "position": "Quarterbacks Coach",
  "team": "Arizona Cardinals",
  "year": 2015
}, {
  "name": "Freddie Kitchens",
  "position": "Quarterbacks Coach",
  "team": "Arizona Cardinals",
  "year": 2016
}, {
  "name": "Freddie Kitchens",
  "position": "Running Backs Coach",
  "team": "Arizona Cardinals",
  "year": 2017
}, {
  "name": "Freddie Kitchens",
  "position": "Offensive Coordinator",
  "team": "Cleveland Browns",
  "year": 2018
}, {
  "name": "Freddie Kitchens",
  "position": "Head Coach",
  "team": "Cleveland Browns",
  "year": 2019
}, {
  "name": "Mike Tomlin",
  "position": "Wide Receivers Coach",
  "team": "VMI",
  "year": 1995
}, {
  "name": "Mike Tomlin",
  "position": "Graduate Assistant",
  "team": "Memphis",
  "year": 1996
}, {
  "name": "Mike Tomlin",
  "position": "Wide Receivers Coach",
  "team": "Arkansas State",
  "year": 1997
}, {
  "name": "Mike Tomlin",
  "position": "Defensive Backs Coach",
  "team": "Arkansas State",
  "year": 1998
}, {
  "name": "Mike Tomlin",
  "position": "Defensive Backs Coach",
  "team": "Cincinnati",
  "year": 1999
}, {
  "name": "Mike Tomlin",
  "position": "Defensive Backs Coach",
  "team": "Cincinnati",
  "year": 2000
}, {
  "name": "Mike Tomlin",
  "position": "Defensive Backs Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2001
}, {
  "name": "Mike Tomlin",
  "position": "Defensive Backs Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2002
}, {
  "name": "Mike Tomlin",
  "position": "Defensive Backs Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2003
}, {
  "name": "Mike Tomlin",
  "position": "Defensive Backs Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2004
}, {
  "name": "Mike Tomlin",
  "position": "Defensive Backs Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2005
}, {
  "name": "Mike Tomlin",
  "position": "Defensive Coordinator",
  "team": "Minnesota Vikings",
  "year": 2006
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2007
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2008
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2009
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2010
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2011
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2012
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2013
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2014
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2015
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2016
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2017
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2018
}, {
  "name": "Mike Tomlin",
  "position": "Head Coach",
  "team": "Pittsburgh Steelers",
  "year": 2019
}, {
  "name": "John Harbaugh",
  "position": "Running Backs Coach",
  "team": "Western Michigan",
  "year": 1984
}, {
  "name": "John Harbaugh",
  "position": "Running Backs Coach",
  "team": "Western Michigan",
  "year": 1985
}, {
  "name": "John Harbaugh",
  "position": "Running Backs Coach",
  "team": "Western Michigan",
  "year": 1986
}, {
  "name": "John Harbaugh",
  "position": "Tight Ends Coach",
  "team": "Pittsburgh",
  "year": 1987
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Morehead State",
  "year": 1988
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Cincinnati",
  "year": 1989
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Cincinnati",
  "year": 1990
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Cincinnati",
  "year": 1991
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Cincinnati",
  "year": 1992
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Cincinnati",
  "year": 1993
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Cincinnati",
  "year": 1994
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Cincinnati",
  "year": 1995
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Cincinnati",
  "year": 1996
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Indiana",
  "year": 1997
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 1998
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 1999
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 2000
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 2001
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 2002
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 2003
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 2004
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 2005
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 2006
}, {
  "name": "John Harbaugh",
  "position": "Special Teams Coach",
  "team": "Philadelphia Eagles",
  "year": 2007
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2008
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2009
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2010
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2011
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2012
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2013
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2014
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2015
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2016
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2017
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2018
}, {
  "name": "John Harbaugh",
  "position": "Head Coach",
  "team": "Baltimore Ravens",
  "year": 2019
}, {
  "name": "Zac Taylor",
  "position": "Player",
  "team": "Tampa Bay Buccaneers",
  "year": 2007
}, {
  "name": "Zac Taylor",
  "position": "Graduate Assistant",
  "team": "Texas A&M",
  "year": 2008
}, {
  "name": "Zac Taylor",
  "position": "Graduate Assistant",
  "team": "Texas A&M",
  "year": 2009
}, {
  "name": "Zac Taylor",
  "position": "Graduate Assistant",
  "team": "Texas A&M",
  "year": 2010
}, {
  "name": "Zac Taylor",
  "position": "Graduate Assistant",
  "team": "Texas A&M",
  "year": 2011
}, {
  "name": "Zac Taylor",
  "position": "Assistant Quarterbacks Coach",
  "team": "Miami Dolphins",
  "year": 2012
}, {
  "name": "Zac Taylor",
  "position": "Quarterbacks Coach",
  "team": "Miami Dolphins",
  "year": 2013
}, {
  "name": "Zac Taylor",
  "position": "Quarterbacks Coach",
  "team": "Miami Dolphins",
  "year": 2014
}, {
  "name": "Zac Taylor",
  "position": "Quarterbacks Coach",
  "team": "Miami Dolphins",
  "year": 2015
}, {
  "name": "Zac Taylor",
  "position": "Offensive Coordinator",
  "team": "Cincinnati",
  "year": 2016
}, {
  "name": "Zac Taylor",
  "position": "Assistant Wide Receivers Coach",
  "team": "Los Angeles Rams",
  "year": 2017
}, {
  "name": "Zac Taylor",
  "position": "Quarterbacks Coach",
  "team": "Los Angeles Rams",
  "year": 2018
}, {
  "name": "Zac Taylor",
  "position": "Head Coach",
  "team": "Cincinnati Bengals",
  "year": 2019
}, {
  "name": "Bill Belichick",
  "position": "Special Assistant",
  "team": "Baltimore Colts",
  "year": 1975
}, {
  "name": "Bill Belichick",
  "position": "Special Teams Coach",
  "team": "Detroit Lions",
  "year": 1976
}, {
  "name": "Bill Belichick",
  "position": "Wide Receivers Coach",
  "team": "Detroit Lions",
  "year": 1977
}, {
  "name": "Bill Belichick",
  "position": "Assistant Special Teams Coach",
  "team": "Denver Broncos",
  "year": 1978
}, {
  "name": "Bill Belichick",
  "position": "Special Teams Coach",
  "team": "New York Giants",
  "year": 1979
}, {
  "name": "Bill Belichick",
  "position": "Special Teams Coach",
  "team": "New York Giants",
  "year": 1980
}, {
  "name": "Bill Belichick",
  "position": "Special Teams Coach",
  "team": "New York Giants",
  "year": 1981
}, {
  "name": "Bill Belichick",
  "position": "Special Teams Coach",
  "team": "New York Giants",
  "year": 1982
}, {
  "name": "Bill Belichick",
  "position": "Special Teams Coach",
  "team": "New York Giants",
  "year": 1983
}, {
  "name": "Bill Belichick",
  "position": "Special Teams Coach",
  "team": "New York Giants",
  "year": 1984
}, {
  "name": "Bill Belichick",
  "position": "Defensive Coordinator",
  "team": "New York Giants",
  "year": 1985
}, {
  "name": "Bill Belichick",
  "position": "Defensive Coordinator",
  "team": "New York Giants",
  "year": 1986
}, {
  "name": "Bill Belichick",
  "position": "Defensive Coordinator",
  "team": "New York Giants",
  "year": 1987
}, {
  "name": "Bill Belichick",
  "position": "Defensive Coordinator",
  "team": "New York Giants",
  "year": 1988
}, {
  "name": "Bill Belichick",
  "position": "Defensive Coordinator",
  "team": "New York Giants",
  "year": 1989
}, {
  "name": "Bill Belichick",
  "position": "Defensive Coordinator",
  "team": "New York Giants",
  "year": 1990
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "Cleveland Browns",
  "year": 1991
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "Cleveland Browns",
  "year": 1992
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "Cleveland Browns",
  "year": 1993
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "Cleveland Browns",
  "year": 1994
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "Cleveland Browns",
  "year": 1995
}, {
  "name": "Bill Belichick",
  "position": "Assistant Head Coach",
  "team": "New England Patriots",
  "year": 1996
}, {
  "name": "Bill Belichick",
  "position": "Defensive Coordinator",
  "team": "New York Jets",
  "year": 1997
}, {
  "name": "Bill Belichick",
  "position": "Defensive Coordinator",
  "team": "New York Jets",
  "year": 1998
}, {
  "name": "Bill Belichick",
  "position": "Defensive Coordinator",
  "team": "New York Jets",
  "year": 1999
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2000
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2001
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2002
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2003
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2004
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2005
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2006
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2007
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2008
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2009
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2010
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2011
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2012
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2013
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2014
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2015
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2016
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2017
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2018
}, {
  "name": "Bill Belichick",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 2019
}, {
  "name": "Adam Gase",
  "position": "Graduate Assistant",
  "team": "LSU",
  "year": 2000
}, {
  "name": "Adam Gase",
  "position": "Recruiting Assistant",
  "team": "LSU",
  "year": 2001
}, {
  "name": "Adam Gase",
  "position": "Recruiting Assistant",
  "team": "LSU",
  "year": 2002
}, {
  "name": "Adam Gase",
  "position": "Scouting Assistant",
  "team": "Detroit Lions",
  "year": 2003
}, {
  "name": "Adam Gase",
  "position": "Scouting Assistant",
  "team": "Detroit Lions",
  "year": 2004
}, {
  "name": "Adam Gase",
  "position": "Offensive Assistant",
  "team": "Detroit Lions",
  "year": 2005
}, {
  "name": "Adam Gase",
  "position": "Offensive Assistant",
  "team": "Detroit Lions",
  "year": 2006
}, {
  "name": "Adam Gase",
  "position": "Quarterbacks Coach",
  "team": "Detroit Lions",
  "year": 2007
}, {
  "name": "Adam Gase",
  "position": "Offensive Assistant",
  "team": "San Francisco 49ers",
  "year": 2008
}, {
  "name": "Adam Gase",
  "position": "Wide Receivers Coach",
  "team": "Denver Broncos",
  "year": 2009
}, {
  "name": "Adam Gase",
  "position": "Wide Receivers Coach",
  "team": "Denver Broncos",
  "year": 2010
}, {
  "name": "Adam Gase",
  "position": "Quarterbacks Coach",
  "team": "Denver Broncos",
  "year": 2011
}, {
  "name": "Adam Gase",
  "position": "Quarterbacks Coach",
  "team": "Denver Broncos",
  "year": 2012
}, {
  "name": "Adam Gase",
  "position": "Offensive Coordinator",
  "team": "Denver Broncos",
  "year": 2013
}, {
  "name": "Adam Gase",
  "position": "Offensive Coordinator",
  "team": "Denver Broncos",
  "year": 2014
}, {
  "name": "Adam Gase",
  "position": "Offensive Coordinator",
  "team": "Chicago Bears",
  "year": 2015
}, {
  "name": "Adam Gase",
  "position": "Head Coach",
  "team": "Miami Dolphins",
  "year": 2016
}, {
  "name": "Adam Gase",
  "position": "Head Coach",
  "team": "Miami Dolphins",
  "year": 2017
}, {
  "name": "Adam Gase",
  "position": "Head Coach",
  "team": "Miami Dolphins",
  "year": 2018
}, {
  "name": "Adam Gase",
  "position": "Head Coach",
  "team": "New York Jets",
  "year": 2019
}, {
  "name": "Sean McDermott",
  "position": "Graduate Assistant",
  "team": "William & Mary",
  "year": 1998
}, {
  "name": "Sean McDermott",
  "position": "Scouting Assistant",
  "team": "Philadelphia Eagles",
  "year": 1999
}, {
  "name": "Sean McDermott",
  "position": "Scouting Assistant",
  "team": "Philadelphia Eagles",
  "year": 2000
}, {
  "name": "Sean McDermott",
  "position": "Assistant to the Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2001
}, {
  "name": "Sean McDermott",
  "position": "Defensive Assistant",
  "team": "Philadelphia Eagles",
  "year": 2002
}, {
  "name": "Sean McDermott",
  "position": "Defensive Assistant",
  "team": "Philadelphia Eagles",
  "year": 2003
}, {
  "name": "Sean McDermott",
  "position": "Assistant Defensive Backs Coach",
  "team": "Philadelphia Eagles",
  "year": 2004
}, {
  "name": "Sean McDermott",
  "position": "Assistant Defensive Backs Coach",
  "team": "Philadelphia Eagles",
  "year": 2005
}, {
  "name": "Sean McDermott",
  "position": "Assistant Defensive Backs Coach",
  "team": "Philadelphia Eagles",
  "year": 2006
}, {
  "name": "Sean McDermott",
  "position": "Secondary Coach",
  "team": "Philadelphia Eagles",
  "year": 2007
}, {
  "name": "Sean McDermott",
  "position": "Linebackers Coach",
  "team": "Philadelphia Eagles",
  "year": 2008
}, {
  "name": "Sean McDermott",
  "position": "Defensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 2009
}, {
  "name": "Sean McDermott",
  "position": "Defensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 2010
}, {
  "name": "Sean McDermott",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 2011
}, {
  "name": "Sean McDermott",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 2012
}, {
  "name": "Sean McDermott",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 2013
}, {
  "name": "Sean McDermott",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 2014
}, {
  "name": "Sean McDermott",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 2015
}, {
  "name": "Sean McDermott",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 2016
}, {
  "name": "Sean McDermott",
  "position": "Head Coach",
  "team": "Buffalo Bills",
  "year": 2017
}, {
  "name": "Sean McDermott",
  "position": "Head Coach",
  "team": "Buffalo Bills",
  "year": 2018
}, {
  "name": "Sean McDermott",
  "position": "Head Coach",
  "team": "Buffalo Bills",
  "year": 2019
}, {
  "name": "Pat Shurmur",
  "position": "Graduate Assistant",
  "team": "Michigan State",
  "year": 1988
}, {
  "name": "Pat Shurmur",
  "position": "Graduate Assistant",
  "team": "Michigan State",
  "year": 1989
}, {
  "name": "Pat Shurmur",
  "position": "Special Teams Coach",
  "team": "Michigan State",
  "year": 1990
}, {
  "name": "Pat Shurmur",
  "position": "Special Teams Coach",
  "team": "Michigan State",
  "year": 1991
}, {
  "name": "Pat Shurmur",
  "position": "Special Teams Coach",
  "team": "Michigan State",
  "year": 1992
}, {
  "name": "Pat Shurmur",
  "position": "Special Teams Coach",
  "team": "Michigan State",
  "year": 1993
}, {
  "name": "Pat Shurmur",
  "position": "Special Teams Coach",
  "team": "Michigan State",
  "year": 1994
}, {
  "name": "Pat Shurmur",
  "position": "Special Teams Coach",
  "team": "Michigan State",
  "year": 1995
}, {
  "name": "Pat Shurmur",
  "position": "Special Teams Coach",
  "team": "Michigan State",
  "year": 1996
}, {
  "name": "Pat Shurmur",
  "position": "Special Teams Coach",
  "team": "Michigan State",
  "year": 1997
}, {
  "name": "Pat Shurmur",
  "position": "Offenive Line Coach",
  "team": "Stanford",
  "year": 1998
}, {
  "name": "Pat Shurmur",
  "position": "Offenive Line Coach",
  "team": "Philadelphia Eagles",
  "year": 1999
}, {
  "name": "Pat Shurmur",
  "position": "Offenive Line Coach",
  "team": "Philadelphia Eagles",
  "year": 2000
}, {
  "name": "Pat Shurmur",
  "position": "Offenive Line Coach",
  "team": "Philadelphia Eagles",
  "year": 2001
}, {
  "name": "Pat Shurmur",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 2002
}, {
  "name": "Pat Shurmur",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 2003
}, {
  "name": "Pat Shurmur",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 2004
}, {
  "name": "Pat Shurmur",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 2005
}, {
  "name": "Pat Shurmur",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 2006
}, {
  "name": "Pat Shurmur",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 2007
}, {
  "name": "Pat Shurmur",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 2008
}, {
  "name": "Pat Shurmur",
  "position": "Offensive Coordinator",
  "team": "Los Angeles Rams",
  "year": 2009
}, {
  "name": "Pat Shurmur",
  "position": "Offensive Coordinator",
  "team": "Los Angeles Rams",
  "year": 2010
}, {
  "name": "Pat Shurmur",
  "position": "Head Coach",
  "team": "Cleveland Browns",
  "year": 2011
}, {
  "name": "Pat Shurmur",
  "position": "Head Coach",
  "team": "Cleveland Browns",
  "year": 2012
}, {
  "name": "Pat Shurmur",
  "position": "Offensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 2013
}, {
  "name": "Pat Shurmur",
  "position": "Offensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 2014
}, {
  "name": "Pat Shurmur",
  "position": "Offensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 2015
}, {
  "name": "Pat Shurmur",
  "position": "Tight Ends Coach",
  "team": "Minnesota Vikings",
  "year": 2016
}, {
  "name": "Pat Shurmur",
  "position": "Offensive Coordinator",
  "team": "Minnesota Vikings",
  "year": 2017
}, {
  "name": "Pat Shurmur",
  "position": "Head Coach",
  "team": "New York Giants",
  "year": 2018
}, {
  "name": "Pat Shurmur",
  "position": "Head Coach",
  "team": "New York Giants",
  "year": 2019
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Miami Dolphins",
  "year": 1991
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Miami Dolphins",
  "year": 1992
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Miami Dolphins",
  "year": 1993
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Miami Dolphins",
  "year": 1994
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Miami Dolphins",
  "year": 1995
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Green Bay Packers",
  "year": 1996
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Green Bay Packers",
  "year": 1997
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Green Bay Packers",
  "year": 1998
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Philadelphia Eagles",
  "year": 1999
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Cleveland Browns",
  "year": 2000
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Green Bay Packers",
  "year": 2001
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Green Bay Packers",
  "year": 2002
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Green Bay Packers",
  "year": 2003
}, {
  "name": "Doug Pedersen",
  "position": "Player",
  "team": "Green Bay Packers",
  "year": 2004
}, {
  "name": "Doug Pedersen",
  "position": "Head Coach",
  "team": "Calvary Baptist Academy",
  "year": 2005
}, {
  "name": "Doug Pedersen",
  "position": "Head Coach",
  "team": "Calvary Baptist Academy",
  "year": 2006
}, {
  "name": "Doug Pedersen",
  "position": "Head Coach",
  "team": "Calvary Baptist Academy",
  "year": 2007
}, {
  "name": "Doug Pedersen",
  "position": "Head Coach",
  "team": "Calvary Baptist Academy",
  "year": 2008
}, {
  "name": "Doug Pedersen",
  "position": "Offensive Quality Control Coach",
  "team": "Philadelphia Eagles",
  "year": 2009
}, {
  "name": "Doug Pedersen",
  "position": "Offensive Quality Control Coach",
  "team": "Philadelphia Eagles",
  "year": 2010
}, {
  "name": "Doug Pedersen",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 2011
}, {
  "name": "Doug Pedersen",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 2012
}, {
  "name": "Doug Pedersen",
  "position": "Offensive Coordinator",
  "team": "Kansas City Chiefs",
  "year": 2013
}, {
  "name": "Doug Pedersen",
  "position": "Offensive Coordinator",
  "team": "Kansas City Chiefs",
  "year": 2014
}, {
  "name": "Doug Pedersen",
  "position": "Offensive Coordinator",
  "team": "Kansas City Chiefs",
  "year": 2015
}, {
  "name": "Doug Pedersen",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2016
}, {
  "name": "Doug Pedersen",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2017
}, {
  "name": "Doug Pedersen",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2018
}, {
  "name": "Doug Pedersen",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2019
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "New Orleans Saints",
  "year": 1989
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "New Orleans Saints",
  "year": 1990
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Ottawa Rough Riders",
  "year": 1991
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Dallas Cowboys",
  "year": 1992
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Dallas Cowboys",
  "year": 1993
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Dallas Cowboys",
  "year": 1994
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Dallas Cowboys",
  "year": 1995
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Dallas Cowboys",
  "year": 1996
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Dallas Cowboys",
  "year": 1997
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Dallas Cowboys",
  "year": 1998
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Dallas Cowboys",
  "year": 1999
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "New York Giants",
  "year": 2000
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "New York Giants",
  "year": 2001
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "New York Giants",
  "year": 2002
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "New York Giants",
  "year": 2003
}, {
  "name": "Jason Garrett",
  "position": "Player",
  "team": "Miami Dolphins",
  "year": 2004
}, {
  "name": "Jason Garrett",
  "position": "Quarterbacks Coach",
  "team": "Miami Dolphins",
  "year": 2005
}, {
  "name": "Jason Garrett",
  "position": "Quarterbacks Coach",
  "team": "Miami Dolphins",
  "year": 2006
}, {
  "name": "Jason Garrett",
  "position": "Offensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2007
}, {
  "name": "Jason Garrett",
  "position": "Offensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2008
}, {
  "name": "Jason Garrett",
  "position": "Offensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2009
}, {
  "name": "Jason Garrett",
  "position": "Offensive Coordinator",
  "team": "Dallas Cowboys",
  "year": 2010
}, {
  "name": "Jason Garrett",
  "position": "Head Coach",
  "team": "Dallas Cowboys",
  "year": 2011
}, {
  "name": "Jason Garrett",
  "position": "Head Coach",
  "team": "Dallas Cowboys",
  "year": 2012
}, {
  "name": "Jason Garrett",
  "position": "Head Coach",
  "team": "Dallas Cowboys",
  "year": 2013
}, {
  "name": "Jason Garrett",
  "position": "Head Coach",
  "team": "Dallas Cowboys",
  "year": 2014
}, {
  "name": "Jason Garrett",
  "position": "Head Coach",
  "team": "Dallas Cowboys",
  "year": 2015
}, {
  "name": "Jason Garrett",
  "position": "Head Coach",
  "team": "Dallas Cowboys",
  "year": 2016
}, {
  "name": "Jason Garrett",
  "position": "Head Coach",
  "team": "Dallas Cowboys",
  "year": 2017
}, {
  "name": "Jason Garrett",
  "position": "Head Coach",
  "team": "Dallas Cowboys",
  "year": 2018
}, {
  "name": "Jason Garrett",
  "position": "Head Coach",
  "team": "Dallas Cowboys",
  "year": 2019
}, {
  "name": "Jay Gruden",
  "position": "Player",
  "team": "Barcelona Dragons",
  "year": 1991
}, {
  "name": "Jay Gruden",
  "position": "Player",
  "team": "Tampa Bay Storm",
  "year": 1992
}, {
  "name": "Jay Gruden",
  "position": "Player",
  "team": "Tampa Bay Storm",
  "year": 1993
}, {
  "name": "Jay Gruden",
  "position": "Player",
  "team": "Tampa Bay Storm",
  "year": 1994
}, {
  "name": "Jay Gruden",
  "position": "Player",
  "team": "Tampa Bay Storm",
  "year": 1995
}, {
  "name": "Jay Gruden",
  "position": "Player",
  "team": "Tampa Bay Storm",
  "year": 1996
}, {
  "name": "Jay Gruden",
  "position": "Offensive Coordinator",
  "team": "Nashville Kats",
  "year": 1997
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Orlando Predators",
  "year": 1998
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Orlando Predators",
  "year": 1999
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Orlando Predators",
  "year": 2000
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Orlando Predators",
  "year": 2001
}, {
  "name": "Jay Gruden",
  "position": "Offensive Assistant",
  "team": "Tampa Bay Buccaneers",
  "year": 2002
}, {
  "name": "Jay Gruden",
  "position": "Player",
  "team": "Orlando Predators",
  "year": 2002
}, {
  "name": "Jay Gruden",
  "position": "Player",
  "team": "Orlando Predators",
  "year": 2003
}, {
  "name": "Jay Gruden",
  "position": "Offensive Assistant",
  "team": "Tampa Bay Buccaneers",
  "year": 2003
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Orlando Predators",
  "year": 2004
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Orlando Predators",
  "year": 2005
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Orlando Predators",
  "year": 2006
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Orlando Predators",
  "year": 2007
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Orlando Predators",
  "year": 2008
}, {
  "name": "Jay Gruden",
  "position": "Offensive Assistant",
  "team": "Tampa Bay Buccaneers",
  "year": 2004
}, {
  "name": "Jay Gruden",
  "position": "Offensive Assistant",
  "team": "Tampa Bay Buccaneers",
  "year": 2005
}, {
  "name": "Jay Gruden",
  "position": "Offensive Assistant",
  "team": "Tampa Bay Buccaneers",
  "year": 2006
}, {
  "name": "Jay Gruden",
  "position": "Offensive Assistant",
  "team": "Tampa Bay Buccaneers",
  "year": 2007
}, {
  "name": "Jay Gruden",
  "position": "Offensive Assistant",
  "team": "Tampa Bay Buccaneers",
  "year": 2008
}, {
  "name": "Jay Gruden",
  "position": "Offensive Coordinator",
  "team": "Florida Tuskers",
  "year": 2009
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Florida Tuskers",
  "year": 2010
}, {
  "name": "Jay Gruden",
  "position": "Offensive Coordinator",
  "team": "Cincinnati Bengals",
  "year": 2011
}, {
  "name": "Jay Gruden",
  "position": "Offensive Coordinator",
  "team": "Cincinnati Bengals",
  "year": 2012
}, {
  "name": "Jay Gruden",
  "position": "Offensive Coordinator",
  "team": "Cincinnati Bengals",
  "year": 2013
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Washington Redskins",
  "year": 2014
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Washington Redskins",
  "year": 2015
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Washington Redskins",
  "year": 2016
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Washington Redskins",
  "year": 2017
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Washington Redskins",
  "year": 2018
}, {
  "name": "Jay Gruden",
  "position": "Head Coach",
  "team": "Washington Redskins",
  "year": 2019
}, {
  "name": "Bruce Arians",
  "position": "Graduate Assistant",
  "team": "Virginia Tech",
  "year": 1975
}, {
  "name": "Bruce Arians",
  "position": "Graduate Assistant",
  "team": "Virginia Tech",
  "year": 1976
}, {
  "name": "Bruce Arians",
  "position": "Graduate Assistant",
  "team": "Virginia Tech",
  "year": 1977
}, {
  "name": "Bruce Arians",
  "position": "Wide Receivers Coach",
  "team": "Mississippi State",
  "year": 1978
}, {
  "name": "Bruce Arians",
  "position": "Wide Receivers Coach",
  "team": "Mississippi State",
  "year": 1979
}, {
  "name": "Bruce Arians",
  "position": "Wide Receivers Coach",
  "team": "Mississippi State",
  "year": 1980
}, {
  "name": "Bruce Arians",
  "position": "Running Backs Coach",
  "team": "Alabama",
  "year": 1981
}, {
  "name": "Bruce Arians",
  "position": "Running Backs Coach",
  "team": "Alabama",
  "year": 1982
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Temple",
  "year": 1983
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Temple",
  "year": 1984
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Temple",
  "year": 1985
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Temple",
  "year": 1986
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Temple",
  "year": 1987
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Temple",
  "year": 1988
}, {
  "name": "Bruce Arians",
  "position": "Running Backs Coach",
  "team": "Kansas City Chiefs",
  "year": 1989
}, {
  "name": "Bruce Arians",
  "position": "Running Backs Coach",
  "team": "Kansas City Chiefs",
  "year": 1990
}, {
  "name": "Bruce Arians",
  "position": "Running Backs Coach",
  "team": "Kansas City Chiefs",
  "year": 1991
}, {
  "name": "Bruce Arians",
  "position": "Running Backs Coach",
  "team": "Kansas City Chiefs",
  "year": 1992
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Mississippi State",
  "year": 1993
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Mississippi State",
  "year": 1994
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Mississippi State",
  "year": 1995
}, {
  "name": "Bruce Arians",
  "position": "Tight Ends Coach",
  "team": "New Orleans Saints",
  "year": 1996
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Alabama",
  "year": 1997
}, {
  "name": "Bruce Arians",
  "position": "Quarterbacks Coach",
  "team": "Indianapolis Colts",
  "year": 1998
}, {
  "name": "Bruce Arians",
  "position": "Quarterbacks Coach",
  "team": "Indianapolis Colts",
  "year": 1999
}, {
  "name": "Bruce Arians",
  "position": "Quarterbacks Coach",
  "team": "Indianapolis Colts",
  "year": 2000
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Cleveland Browns",
  "year": 2001
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Cleveland Browns",
  "year": 2002
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Cleveland Browns",
  "year": 2003
}, {
  "name": "Bruce Arians",
  "position": "Wide Receivers Coach",
  "team": "Pittsburgh Steelers",
  "year": 2004
}, {
  "name": "Bruce Arians",
  "position": "Wide Receivers Coach",
  "team": "Pittsburgh Steelers",
  "year": 2005
}, {
  "name": "Bruce Arians",
  "position": "Wide Receivers Coach",
  "team": "Pittsburgh Steelers",
  "year": 2006
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Pittsburgh Steelers",
  "year": 2007
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Pittsburgh Steelers",
  "year": 2008
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Pittsburgh Steelers",
  "year": 2009
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Pittsburgh Steelers",
  "year": 2010
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Pittsburgh Steelers",
  "year": 2011
}, {
  "name": "Bruce Arians",
  "position": "Offensive Coordinator",
  "team": "Indianapolis Colts",
  "year": 2012
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Arizona Cardinals",
  "year": 2013
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Arizona Cardinals",
  "year": 2014
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Arizona Cardinals",
  "year": 2015
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Arizona Cardinals",
  "year": 2016
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Arizona Cardinals",
  "year": 2017
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Arizona Cardinals",
  "year": 2018
}, {
  "name": "Bruce Arians",
  "position": "Head Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2019
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "William & Mary",
  "year": 1994
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "VMI",
  "year": 1995
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "Hofstra",
  "year": 1996
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "Hofstra",
  "year": 1997
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "Hofstra",
  "year": 1998
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "Hofstra",
  "year": 1999
}, {
  "name": "Dan Quinn",
  "position": "Defensive Coordinator",
  "team": "Hofstra",
  "year": 2000
}, {
  "name": "Dan Quinn",
  "position": "Defensive Quality Control Coach",
  "team": "San Francisco 49ers",
  "year": 2001
}, {
  "name": "Dan Quinn",
  "position": "Defensive Quality Control Coach",
  "team": "San Francisco 49ers",
  "year": 2002
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "San Francisco 49ers",
  "year": 2003
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "San Francisco 49ers",
  "year": 2004
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "Miami Dolphins",
  "year": 2005
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "Miami Dolphins",
  "year": 2006
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "New York Jets",
  "year": 2007
}, {
  "name": "Dan Quinn",
  "position": "Defensive Line Coach",
  "team": "New York Jets",
  "year": 2008
}, {
  "name": "Dan Quinn",
  "position": "Assistant Head Coach",
  "team": "Seattle Seahawks",
  "year": 2009
}, {
  "name": "Dan Quinn",
  "position": "Assistant Head Coach",
  "team": "Seattle Seahawks",
  "year": 2010
}, {
  "name": "Dan Quinn",
  "position": "Defensive Coordinator",
  "team": "Florida",
  "year": 2011
}, {
  "name": "Dan Quinn",
  "position": "Defensive Coordinator",
  "team": "Florida",
  "year": 2012
}, {
  "name": "Dan Quinn",
  "position": "Defensive Coordinator",
  "team": "Seattle Seahawks",
  "year": 2013
}, {
  "name": "Dan Quinn",
  "position": "Defensive Coordinator",
  "team": "Seattle Seahawks",
  "year": 2014
}, {
  "name": "Dan Quinn",
  "position": "Head Coach",
  "team": "Atlanta Falcons",
  "year": 2015
}, {
  "name": "Dan Quinn",
  "position": "Head Coach",
  "team": "Atlanta Falcons",
  "year": 2016
}, {
  "name": "Dan Quinn",
  "position": "Head Coach",
  "team": "Atlanta Falcons",
  "year": 2017
}, {
  "name": "Dan Quinn",
  "position": "Head Coach",
  "team": "Atlanta Falcons",
  "year": 2018
}, {
  "name": "Dan Quinn",
  "position": "Head Coach",
  "team": "Atlanta Falcons",
  "year": 2019
}, {
  "name": "Sean Payton",
  "position": "Player",
  "team": "Chicago Bruisers",
  "year": 1987
}, {
  "name": "Sean Payton",
  "position": "Player",
  "team": "Pittsburgh Gladiators",
  "year": 1987
}, {
  "name": "Sean Payton",
  "position": "Player",
  "team": "Ottawa Rough Riders",
  "year": 1987
}, {
  "name": "Sean Payton",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1987
}, {
  "name": "Sean Payton",
  "position": "Player",
  "team": "Leicester Panthers",
  "year": 1988
}, {
  "name": "Sean Payton",
  "position": "Offensive Assistant",
  "team": "San Diego State",
  "year": 1988
}, {
  "name": "Sean Payton",
  "position": "Offensive Assistant",
  "team": "San Diego State",
  "year": 1989
}, {
  "name": "Sean Payton",
  "position": "Running Backs Coach",
  "team": "Indiana State",
  "year": 1990
}, {
  "name": "Sean Payton",
  "position": "Running Backs Coach",
  "team": "Indiana State",
  "year": 1991
}, {
  "name": "Sean Payton",
  "position": "Running Backs Coach",
  "team": "San Diego State",
  "year": 1992
}, {
  "name": "Sean Payton",
  "position": "Running Backs Coach",
  "team": "San Diego State",
  "year": 1993
}, {
  "name": "Sean Payton",
  "position": "Offensive Coordinator",
  "team": "Miami (OH)",
  "year": 1994
}, {
  "name": "Sean Payton",
  "position": "Offensive Coordinator",
  "team": "Miami (OH)",
  "year": 1995
}, {
  "name": "Sean Payton",
  "position": "Quarterbacks Coach",
  "team": "Illinois",
  "year": 1996
}, {
  "name": "Sean Payton",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 1997
}, {
  "name": "Sean Payton",
  "position": "Quarterbacks Coach",
  "team": "Philadelphia Eagles",
  "year": 1998
}, {
  "name": "Sean Payton",
  "position": "Quarterbacks Coach",
  "team": "New York Giants",
  "year": 1999
}, {
  "name": "Sean Payton",
  "position": "Offensive Coordinator",
  "team": "New York Giants",
  "year": 2000
}, {
  "name": "Sean Payton",
  "position": "Offensive Coordinator",
  "team": "New York Giants",
  "year": 2001
}, {
  "name": "Sean Payton",
  "position": "Offensive Coordinator",
  "team": "New York Giants",
  "year": 2002
}, {
  "name": "Sean Payton",
  "position": "Quarterbacks Coach",
  "team": "Dallas Cowboys",
  "year": 2003
}, {
  "name": "Sean Payton",
  "position": "Quarterbacks Coach",
  "team": "Dallas Cowboys",
  "year": 2004
}, {
  "name": "Sean Payton",
  "position": "Quarterbacks Coach",
  "team": "Dallas Cowboys",
  "year": 2005
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2006
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2007
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2008
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2009
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2010
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2011
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2012
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2013
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2014
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2015
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2016
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2017
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2018
}, {
  "name": "Sean Payton",
  "position": "Head Coach",
  "team": "New Orleans Saints",
  "year": 2019
}, {
  "name": "Ron Rivera",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1984
}, {
  "name": "Ron Rivera",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1985
}, {
  "name": "Ron Rivera",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1986
}, {
  "name": "Ron Rivera",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1987
}, {
  "name": "Ron Rivera",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1988
}, {
  "name": "Ron Rivera",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1989
}, {
  "name": "Ron Rivera",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1990
}, {
  "name": "Ron Rivera",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1991
}, {
  "name": "Ron Rivera",
  "position": "Player",
  "team": "Chicago Bears",
  "year": 1992
}, {
  "name": "Ron Rivera",
  "position": "Defensive Quality Control Coach",
  "team": "Chicago Bears",
  "year": 1997
}, {
  "name": "Ron Rivera",
  "position": "Defensive Quality Control Coach",
  "team": "Chicago Bears",
  "year": 1998
}, {
  "name": "Ron Rivera",
  "position": "Linebackers Coach",
  "team": "Philadelphia Eagles",
  "year": 1999
}, {
  "name": "Ron Rivera",
  "position": "Linebackers Coach",
  "team": "Philadelphia Eagles",
  "year": 2000
}, {
  "name": "Ron Rivera",
  "position": "Linebackers Coach",
  "team": "Philadelphia Eagles",
  "year": 2001
}, {
  "name": "Ron Rivera",
  "position": "Linebackers Coach",
  "team": "Philadelphia Eagles",
  "year": 2002
}, {
  "name": "Ron Rivera",
  "position": "Linebackers Coach",
  "team": "Philadelphia Eagles",
  "year": 2003
}, {
  "name": "Ron Rivera",
  "position": "Defensive Coordinator",
  "team": "Chicago Bears",
  "year": 2004
}, {
  "name": "Ron Rivera",
  "position": "Defensive Coordinator",
  "team": "Chicago Bears",
  "year": 2005
}, {
  "name": "Ron Rivera",
  "position": "Defensive Coordinator",
  "team": "Chicago Bears",
  "year": 2006
}, {
  "name": "Ron Rivera",
  "position": "Linebackers Coach",
  "team": "Los Angeles Chargers",
  "year": 2007
}, {
  "name": "Ron Rivera",
  "position": "Defensive Coordinator",
  "team": "Los Angeles Chargers",
  "year": 2008
}, {
  "name": "Ron Rivera",
  "position": "Defensive Coordinator",
  "team": "Los Angeles Chargers",
  "year": 2009
}, {
  "name": "Ron Rivera",
  "position": "Defensive Coordinator",
  "team": "Los Angeles Chargers",
  "year": 2010
}, {
  "name": "Ron Rivera",
  "position": "Head Coach",
  "team": "Carolina Panthers",
  "year": 2011
}, {
  "name": "Ron Rivera",
  "position": "Head Coach",
  "team": "Carolina Panthers",
  "year": 2012
}, {
  "name": "Ron Rivera",
  "position": "Head Coach",
  "team": "Carolina Panthers",
  "year": 2013
}, {
  "name": "Ron Rivera",
  "position": "Head Coach",
  "team": "Carolina Panthers",
  "year": 2014
}, {
  "name": "Ron Rivera",
  "position": "Head Coach",
  "team": "Carolina Panthers",
  "year": 2015
}, {
  "name": "Ron Rivera",
  "position": "Head Coach",
  "team": "Carolina Panthers",
  "year": 2016
}, {
  "name": "Ron Rivera",
  "position": "Head Coach",
  "team": "Carolina Panthers",
  "year": 2017
}, {
  "name": "Ron Rivera",
  "position": "Head Coach",
  "team": "Carolina Panthers",
  "year": 2018
}, {
  "name": "Ron Rivera",
  "position": "Head Coach",
  "team": "Carolina Panthers",
  "year": 2019
}, {
  "name": "Doug Marrone",
  "position": "Player",
  "team": "Miami Dolphins",
  "year": 1987
}, {
  "name": "Doug Marrone",
  "position": "Player",
  "team": "New Orleans Saints",
  "year": 1989
}, {
  "name": "Doug Marrone",
  "position": "Player",
  "team": "London Monarchs",
  "year": 1991
}, {
  "name": "Doug Marrone",
  "position": "Player",
  "team": "London Monarchs",
  "year": 1992
}, {
  "name": "Doug Marrone",
  "position": "Tight Ends Coach",
  "team": "Cortland State",
  "year": 1992
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "Coast Guard",
  "year": 1993
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "Northeastern",
  "year": 1994
}, {
  "name": "Doug Marrone",
  "position": "Tight Ends Coach",
  "team": "Georgia Tech",
  "year": 1996
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "Georgia Tech",
  "year": 1997
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "Georgia Tech",
  "year": 1998
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "Georgia Tech",
  "year": 1999
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "Georgia",
  "year": 2000
}, {
  "name": "Doug Marrone",
  "position": "Tight Ends Coach",
  "team": "Tennessee",
  "year": 2001
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "New York Jets",
  "year": 2002
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "New York Jets",
  "year": 2003
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "New York Jets",
  "year": 2004
}, {
  "name": "Doug Marrone",
  "position": "Offensive Line Coach",
  "team": "New York Jets",
  "year": 2005
}, {
  "name": "Doug Marrone",
  "position": "Offensive Coordinator",
  "team": "New Orleans Saints",
  "year": 2006
}, {
  "name": "Doug Marrone",
  "position": "Offensive Coordinator",
  "team": "New Orleans Saints",
  "year": 2007
}, {
  "name": "Doug Marrone",
  "position": "Offensive Coordinator",
  "team": "New Orleans Saints",
  "year": 2008
}, {
  "name": "Doug Marrone",
  "position": "Head Coach",
  "team": "Syracuse",
  "year": 2009
}, {
  "name": "Doug Marrone",
  "position": "Head Coach",
  "team": "Syracuse",
  "year": 2010
}, {
  "name": "Doug Marrone",
  "position": "Head Coach",
  "team": "Syracuse",
  "year": 2011
}, {
  "name": "Doug Marrone",
  "position": "Head Coach",
  "team": "Syracuse",
  "year": 2012
}, {
  "name": "Doug Marrone",
  "position": "Head Coach",
  "team": "Buffalo Bills",
  "year": 2013
}, {
  "name": "Doug Marrone",
  "position": "Head Coach",
  "team": "Buffalo Bills",
  "year": 2014
}, {
  "name": "Doug Marrone",
  "position": "Assistant Head Coach",
  "team": "Jacksonville Jaguars",
  "year": 2015
}, {
  "name": "Doug Marrone",
  "position": "Assistant Head Coach",
  "team": "Jacksonville Jaguars",
  "year": 2016
}, {
  "name": "Doug Marrone",
  "position": "Head Coach",
  "team": "Jacksonville Jaguars",
  "year": 2017
}, {
  "name": "Doug Marrone",
  "position": "Head Coach",
  "team": "Jacksonville Jaguars",
  "year": 2018
}, {
  "name": "Doug Marrone",
  "position": "Head Coach",
  "team": "Jacksonville Jaguars",
  "year": 2019
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "Pittsburgh Steelers",
  "year": 1997
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "Pittsburgh Steelers",
  "year": 1998
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "Pittsburgh Steelers",
  "year": 1999
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "Pittsburgh Steelers",
  "year": 2000
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "New England Patriots",
  "year": 2001
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "New England Patriots",
  "year": 2002
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "New England Patriots",
  "year": 2003
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "New England Patriots",
  "year": 2004
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "New England Patriots",
  "year": 2005
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "New England Patriots",
  "year": 2006
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "New England Patriots",
  "year": 2007
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "New England Patriots",
  "year": 2008
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "Kansas City Chiefs",
  "year": 2009
}, {
  "name": "Mike Vrabel",
  "position": "Player",
  "team": "Kansas City Chiefs",
  "year": 2010
}, {
  "name": "Mike Vrabel",
  "position": "Linebackers Coach",
  "team": "Ohio State",
  "year": 2011
}, {
  "name": "Mike Vrabel",
  "position": "Defensive Line Coach",
  "team": "Ohio State",
  "year": 2012
}, {
  "name": "Mike Vrabel",
  "position": "Defensive Line Coach",
  "team": "Ohio State",
  "year": 2013
}, {
  "name": "Mike Vrabel",
  "position": "Linebackers Coach",
  "team": "Houston Texans",
  "year": 2014
}, {
  "name": "Mike Vrabel",
  "position": "Linebackers Coach",
  "team": "Houston Texans",
  "year": 2015
}, {
  "name": "Mike Vrabel",
  "position": "Linebackers Coach",
  "team": "Houston Texans",
  "year": 2016
}, {
  "name": "Mike Vrabel",
  "position": "Defensive Coordinator",
  "team": "Houston Texans",
  "year": 2017
}, {
  "name": "Mike Vrabel",
  "position": "Head Coach",
  "team": "Tennessee Titans",
  "year": 2018
}, {
  "name": "Mike Vrabel",
  "position": "Head Coach",
  "team": "Tennessee Titans",
  "year": 2019
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1985
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1986
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1987
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1988
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1989
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1990
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1991
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1992
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1993
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 1994
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Carolina Panthers",
  "year": 1995
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "New York Jets",
  "year": 1996
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Detroit Lions",
  "year": 1997
}, {
  "name": "Frank Reich",
  "position": "Player",
  "team": "Detroit Lions",
  "year": 1998
}, {
  "name": "Frank Reich",
  "position": "Offensive Assistant",
  "team": "Indianapolis Colts",
  "year": 2008
}, {
  "name": "Frank Reich",
  "position": "Quarterbacks Coach",
  "team": "Indianapolis Colts",
  "year": 2009
}, {
  "name": "Frank Reich",
  "position": "Quarterbacks Coach",
  "team": "Indianapolis Colts",
  "year": 2010
}, {
  "name": "Frank Reich",
  "position": "Wide Receivers Coach",
  "team": "Indianapolis Colts",
  "year": 2011
}, {
  "name": "Frank Reich",
  "position": "Wide Receivers Coach",
  "team": "Arizona Cardinals",
  "year": 2012
}, {
  "name": "Frank Reich",
  "position": "Quarterbacks Coach",
  "team": "Los Angeles Chargers",
  "year": 2013
}, {
  "name": "Frank Reich",
  "position": "Offensive Coordinator",
  "team": "Los Angeles Chargers",
  "year": 2014
}, {
  "name": "Frank Reich",
  "position": "Offensive Coordinator",
  "team": "Los Angeles Chargers",
  "year": 2015
}, {
  "name": "Frank Reich",
  "position": "Offensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 2016
}, {
  "name": "Frank Reich",
  "position": "Offensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 2017
}, {
  "name": "Frank Reich",
  "position": "Head Coach",
  "team": "Indianapolis Colts",
  "year": 2018
}, {
  "name": "Frank Reich",
  "position": "Head Coach",
  "team": "Indianapolis Colts",
  "year": 2019
}, {
  "name": "Bill O'Brien",
  "position": "Tight Ends Coach",
  "team": "Brown",
  "year": 1993
}, {
  "name": "Bill O'Brien",
  "position": "Inside Linebackers Coach",
  "team": "Brown",
  "year": 1994
}, {
  "name": "Bill O'Brien",
  "position": "Graduate Assistant",
  "team": "Georgia Tech",
  "year": 1995
}, {
  "name": "Bill O'Brien",
  "position": "Graduate Assistant",
  "team": "Georgia Tech",
  "year": 1996
}, {
  "name": "Bill O'Brien",
  "position": "Graduate Assistant",
  "team": "Georgia Tech",
  "year": 1997
}, {
  "name": "Bill O'Brien",
  "position": "Running Backs Coach",
  "team": "Georgia Tech",
  "year": 1998
}, {
  "name": "Bill O'Brien",
  "position": "Running Backs Coach",
  "team": "Georgia Tech",
  "year": 1999
}, {
  "name": "Bill O'Brien",
  "position": "Running Backs Coach",
  "team": "Georgia Tech",
  "year": 2000
}, {
  "name": "Bill O'Brien",
  "position": "Offensive Coordinator",
  "team": "Georgia Tech",
  "year": 2001
}, {
  "name": "Bill O'Brien",
  "position": "Offensive Coordinator",
  "team": "Georgia Tech",
  "year": 2002
}, {
  "name": "Bill O'Brien",
  "position": "Running Backs Coach",
  "team": "Maryland",
  "year": 2003
}, {
  "name": "Bill O'Brien",
  "position": "Running Backs Coach",
  "team": "Maryland",
  "year": 2004
}, {
  "name": "Bill O'Brien",
  "position": "Offensive Coordinator",
  "team": "Duke",
  "year": 2005
}, {
  "name": "Bill O'Brien",
  "position": "Offensive Coordinator",
  "team": "Duke",
  "year": 2006
}, {
  "name": "Bill O'Brien",
  "position": "Offensive Assistant",
  "team": "New England Patriots",
  "year": 2007
}, {
  "name": "Bill O'Brien",
  "position": "Wide Receivers Coach",
  "team": "New England Patriots",
  "year": 2008
}, {
  "name": "Bill O'Brien",
  "position": "Quarterbacks Coach",
  "team": "New England Patriots",
  "year": 2009
}, {
  "name": "Bill O'Brien",
  "position": "Quarterbacks Coach",
  "team": "New England Patriots",
  "year": 2010
}, {
  "name": "Bill O'Brien",
  "position": "Offensive Coordinator",
  "team": "New England Patriots",
  "year": 2011
}, {
  "name": "Bill O'Brien",
  "position": "Head Coach",
  "team": "Penn State",
  "year": 2012
}, {
  "name": "Bill O'Brien",
  "position": "Head Coach",
  "team": "Penn State",
  "year": 2013
}, {
  "name": "Bill O'Brien",
  "position": "Head Coach",
  "team": "Houston Texans",
  "year": 2014
}, {
  "name": "Bill O'Brien",
  "position": "Head Coach",
  "team": "Houston Texans",
  "year": 2015
}, {
  "name": "Bill O'Brien",
  "position": "Head Coach",
  "team": "Houston Texans",
  "year": 2016
}, {
  "name": "Bill O'Brien",
  "position": "Head Coach",
  "team": "Houston Texans",
  "year": 2017
}, {
  "name": "Bill O'Brien",
  "position": "Head Coach",
  "team": "Houston Texans",
  "year": 2018
}, {
  "name": "Bill O'Brien",
  "position": "Head Coach",
  "team": "Houston Texans",
  "year": 2019
}, {
  "name": "Andy Reid",
  "position": "Graduate Assistant",
  "team": "BYU",
  "year": 1982
}, {
  "name": "Andy Reid",
  "position": "Offensive Line Coach",
  "team": "San Francisco State",
  "year": 1983
}, {
  "name": "Andy Reid",
  "position": "Offensive Line Coach",
  "team": "San Francisco State",
  "year": 1984
}, {
  "name": "Andy Reid",
  "position": "Offensive Line Coach",
  "team": "San Francisco State",
  "year": 1985
}, {
  "name": "Andy Reid",
  "position": "Offensive Line Coach",
  "team": "Northern Arizona",
  "year": 1986
}, {
  "name": "Andy Reid",
  "position": "Offensive Line Coach",
  "team": "UTEP",
  "year": 1987
}, {
  "name": "Andy Reid",
  "position": "Offensive Line Coach",
  "team": "UTEP",
  "year": 1988
}, {
  "name": "Andy Reid",
  "position": "Offensive Line Coach",
  "team": "Missouri",
  "year": 1989
}, {
  "name": "Andy Reid",
  "position": "Offensive Line Coach",
  "team": "Missouri",
  "year": 1990
}, {
  "name": "Andy Reid",
  "position": "Offensive Line Coach",
  "team": "Missouri",
  "year": 1991
}, {
  "name": "Andy Reid",
  "position": "Offensive Assistant",
  "team": "Green Bay Packers",
  "year": 1992
}, {
  "name": "Andy Reid",
  "position": "Offensive Assistant",
  "team": "Green Bay Packers",
  "year": 1993
}, {
  "name": "Andy Reid",
  "position": "Offensive Assistant",
  "team": "Green Bay Packers",
  "year": 1994
}, {
  "name": "Andy Reid",
  "position": "Assistant Offensive Line Coach",
  "team": "Green Bay Packers",
  "year": 1995
}, {
  "name": "Andy Reid",
  "position": "Assistant Offensive Line Coach",
  "team": "Green Bay Packers",
  "year": 1996
}, {
  "name": "Andy Reid",
  "position": "Quarterbacks Coach",
  "team": "Green Bay Packers",
  "year": 1997
}, {
  "name": "Andy Reid",
  "position": "Quarterbacks Coach",
  "team": "Green Bay Packers",
  "year": 1998
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 1999
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2000
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2001
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2002
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2003
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2004
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2005
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2006
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2007
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2008
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2009
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2010
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2011
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Philadelphia Eagles",
  "year": 2012
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Kansas City Chiefs",
  "year": 2013
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Kansas City Chiefs",
  "year": 2014
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Kansas City Chiefs",
  "year": 2015
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Kansas City Chiefs",
  "year": 2016
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Kansas City Chiefs",
  "year": 2017
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Kansas City Chiefs",
  "year": 2018
}, {
  "name": "Andy Reid",
  "position": "Head Coach",
  "team": "Kansas City Chiefs",
  "year": 2019
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Dunmore HS",
  "year": 1979
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Dunmore HS",
  "year": 1980
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Dunmore HS",
  "year": 1981
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Milford Academy",
  "year": 1982
}, {
  "name": "Vic Fangio",
  "position": "",
  "team": "",
  "year": 1983
}, {
  "name": "Vic Fangio",
  "position": "Defensive Assistant",
  "team": "Philadelphia Stars",
  "year": 1984
}, {
  "name": "Vic Fangio",
  "position": "",
  "team": "",
  "year": 1985
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "New Orleans Saints",
  "year": 1986
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "New Orleans Saints",
  "year": 1987
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "New Orleans Saints",
  "year": 1988
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "New Orleans Saints",
  "year": 1989
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "New Orleans Saints",
  "year": 1990
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "New Orleans Saints",
  "year": 1991
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "New Orleans Saints",
  "year": 1992
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "New Orleans Saints",
  "year": 1993
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "New Orleans Saints",
  "year": 1994
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 1995
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 1996
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 1997
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Carolina Panthers",
  "year": 1998
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Indianapolis Colts",
  "year": 1999
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Indianapolis Colts",
  "year": 2000
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Indianapolis Colts",
  "year": 2001
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Houston Texans",
  "year": 2002
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Houston Texans",
  "year": 2003
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Houston Texans",
  "year": 2004
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Houston Texans",
  "year": 2005
}, {
  "name": "Vic Fangio",
  "position": "Defensive Assistant",
  "team": "Baltimore Ravens",
  "year": 2006
}, {
  "name": "Vic Fangio",
  "position": "Defensive Assistant",
  "team": "Baltimore Ravens",
  "year": 2007
}, {
  "name": "Vic Fangio",
  "position": "Defensive Assistant",
  "team": "Baltimore Ravens",
  "year": 2008
}, {
  "name": "Vic Fangio",
  "position": "Linebackers Coach",
  "team": "Baltimore Ravens",
  "year": 2009
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Stanford",
  "year": 2010
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "San Francisco 49ers",
  "year": 2011
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "San Francisco 49ers",
  "year": 2012
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "San Francisco 49ers",
  "year": 2013
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "San Francisco 49ers",
  "year": 2014
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Chicago Bears",
  "year": 2015
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Chicago Bears",
  "year": 2016
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Chicago Bears",
  "year": 2017
}, {
  "name": "Vic Fangio",
  "position": "Defensive Coordinator",
  "team": "Chicago Bears",
  "year": 2018
}, {
  "name": "Vic Fangio",
  "position": "Head Coach",
  "team": "Denver Broncos",
  "year": 2019
}, {
  "name": "Jon Gruden",
  "position": "Graduate Assistant",
  "team": "Tennessee",
  "year": 1986
}, {
  "name": "Jon Gruden",
  "position": "Graduate Assistant",
  "team": "Tennessee",
  "year": 1987
}, {
  "name": "Jon Gruden",
  "position": "Passing Game Coordinator",
  "team": "Southeast Missouri State",
  "year": 1988
}, {
  "name": "Jon Gruden",
  "position": "Tight Ends Coach",
  "team": "Pacific",
  "year": 1989
}, {
  "name": "Jon Gruden",
  "position": "Offensive Assistant",
  "team": "San Francisco 49ers",
  "year": 1990
}, {
  "name": "Jon Gruden",
  "position": "Wide Receivers Coach",
  "team": "Pittsburgh",
  "year": 1991
}, {
  "name": "Jon Gruden",
  "position": "Offensive Assistant",
  "team": "Green Bay Packers",
  "year": 1992
}, {
  "name": "Jon Gruden",
  "position": "Wide Receivers Coach",
  "team": "Green Bay Packers",
  "year": 1993
}, {
  "name": "Jon Gruden",
  "position": "Wide Receivers Coach",
  "team": "Green Bay Packers",
  "year": 1994
}, {
  "name": "Jon Gruden",
  "position": "Offensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 1995
}, {
  "name": "Jon Gruden",
  "position": "Offensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 1996
}, {
  "name": "Jon Gruden",
  "position": "Offensive Coordinator",
  "team": "Philadelphia Eagles",
  "year": 1997
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Oakland Raiders",
  "year": 1998
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Oakland Raiders",
  "year": 1999
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Oakland Raiders",
  "year": 2000
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Oakland Raiders",
  "year": 2001
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2002
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2003
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2004
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2005
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2006
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2007
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2008
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Oakland Raiders",
  "year": 2018
}, {
  "name": "Jon Gruden",
  "position": "Head Coach",
  "team": "Oakland Raiders",
  "year": 2019
}, {
  "name": "Anthony Lynn",
  "position": "Player",
  "team": "Denver Broncos",
  "year": 1993
}, {
  "name": "Anthony Lynn",
  "position": "Player",
  "team": "San Francisco 49ers",
  "year": 1995
}, {
  "name": "Anthony Lynn",
  "position": "Player",
  "team": "San Francisco 49ers",
  "year": 1996
}, {
  "name": "Anthony Lynn",
  "position": "Player",
  "team": "Denver Broncos",
  "year": 1997
}, {
  "name": "Anthony Lynn",
  "position": "Player",
  "team": "Denver Broncos",
  "year": 1998
}, {
  "name": "Anthony Lynn",
  "position": "Player",
  "team": "Denver Broncos",
  "year": 1999
}, {
  "name": "Anthony Lynn",
  "position": "Special Teams Assistant",
  "team": "Denver Broncos",
  "year": 2000
}, {
  "name": "Anthony Lynn",
  "position": "Special Teams Assistant",
  "team": "Denver Broncos",
  "year": 2001
}, {
  "name": "Anthony Lynn",
  "position": "Special Teams Assistant",
  "team": "Denver Broncos",
  "year": 2002
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "Jacksonville Jaguars",
  "year": 2003
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "Jacksonville Jaguars",
  "year": 2004
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "Dallas Cowboys",
  "year": 2005
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "Dallas Cowboys",
  "year": 2006
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "Cleveland Browns",
  "year": 2007
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "Cleveland Browns",
  "year": 2008
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "New York Jets",
  "year": 2009
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "New York Jets",
  "year": 2010
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "New York Jets",
  "year": 2011
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "New York Jets",
  "year": 2012
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "New York Jets",
  "year": 2013
}, {
  "name": "Anthony Lynn",
  "position": "Running Backs Coach",
  "team": "New York Jets",
  "year": 2014
}, {
  "name": "Anthony Lynn",
  "position": "Assistant Head Coach",
  "team": "Buffalo Bills",
  "year": 2015
}, {
  "name": "Anthony Lynn",
  "position": "Assistant Head Coach",
  "team": "Buffalo Bills",
  "year": 2016
}, {
  "name": "Anthony Lynn",
  "position": "Head Coach",
  "team": "Los Angeles Chargers",
  "year": 2017
}, {
  "name": "Anthony Lynn",
  "position": "Head Coach",
  "team": "Los Angeles Chargers",
  "year": 2018
}, {
  "name": "Anthony Lynn",
  "position": "Head Coach",
  "team": "Los Angeles Chargers",
  "year": 2019
}, {
  "name": "Pete Carroll",
  "position": "Graduate Assistant",
  "team": "Pacific",
  "year": 1973
}, {
  "name": "Pete Carroll",
  "position": "Graduate Assistant",
  "team": "Pacific",
  "year": 1974
}, {
  "name": "Pete Carroll",
  "position": "Graduate Assistant",
  "team": "Pacific",
  "year": 1975
}, {
  "name": "Pete Carroll",
  "position": "Graduate Assistant",
  "team": "Pacific",
  "year": 1976
}, {
  "name": "Pete Carroll",
  "position": "Graduate Assistant",
  "team": "Arkansas",
  "year": 1977
}, {
  "name": "Pete Carroll",
  "position": "Secondary Coordinator",
  "team": "Iowa State",
  "year": 1978
}, {
  "name": "Pete Carroll",
  "position": "Secondary Coordinator",
  "team": "Ohio State",
  "year": 1979
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "North Carolina State",
  "year": 1980
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "North Carolina State",
  "year": 1981
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "North Carolina State",
  "year": 1982
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "Pacific",
  "year": 1983
}, {
  "name": "Pete Carroll",
  "position": "Defensive Backs Coach",
  "team": "Buffalo Bills",
  "year": 1984
}, {
  "name": "Pete Carroll",
  "position": "Defensive Backs Coach",
  "team": "Minnesota Vikings",
  "year": 1985
}, {
  "name": "Pete Carroll",
  "position": "Defensive Backs Coach",
  "team": "Minnesota Vikings",
  "year": 1986
}, {
  "name": "Pete Carroll",
  "position": "Defensive Backs Coach",
  "team": "Minnesota Vikings",
  "year": 1987
}, {
  "name": "Pete Carroll",
  "position": "Defensive Backs Coach",
  "team": "Minnesota Vikings",
  "year": 1988
}, {
  "name": "Pete Carroll",
  "position": "Defensive Backs Coach",
  "team": "Minnesota Vikings",
  "year": 1989
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "New York Jets",
  "year": 1990
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "New York Jets",
  "year": 1991
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "New York Jets",
  "year": 1992
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "New York Jets",
  "year": 1993
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "New York Jets",
  "year": 1994
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "San Francisco 49ers",
  "year": 1995
}, {
  "name": "Pete Carroll",
  "position": "Defensive Coordinator",
  "team": "San Francisco 49ers",
  "year": 1996
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 1997
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 1998
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "New England Patriots",
  "year": 1999
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "USC",
  "year": 2001
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "USC",
  "year": 2002
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "USC",
  "year": 2003
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "USC",
  "year": 2004
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "USC",
  "year": 2005
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "USC",
  "year": 2006
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "USC",
  "year": 2007
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "USC",
  "year": 2008
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "USC",
  "year": 2009
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2010
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2011
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2012
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2013
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2014
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2015
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2016
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2017
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2018
}, {
  "name": "Pete Carroll",
  "position": "Head Coach",
  "team": "Seattle Seahawks",
  "year": 2019
}, {
  "name": "Sean McVay",
  "position": "Assistant Wide Receivers Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2008
}, {
  "name": "Sean McVay",
  "position": "Wide Receivers Coach",
  "team": "Florida Tuskers",
  "year": 2009
}, {
  "name": "Sean McVay",
  "position": "Assistant Tight Ends Coach",
  "team": "Washington Redskins",
  "year": 2010
}, {
  "name": "Sean McVay",
  "position": "Tight Ends Coach",
  "team": "Washington Redskins",
  "year": 2011
}, {
  "name": "Sean McVay",
  "position": "Tight Ends Coach",
  "team": "Washington Redskins",
  "year": 2012
}, {
  "name": "Sean McVay",
  "position": "Tight Ends Coach",
  "team": "Washington Redskins",
  "year": 2013
}, {
  "name": "Sean McVay",
  "position": "Offensive Coordinator",
  "team": "Washington Redskins",
  "year": 2014
}, {
  "name": "Sean McVay",
  "position": "Offensive Coordinator",
  "team": "Washington Redskins",
  "year": 2015
}, {
  "name": "Sean McVay",
  "position": "Offensive Coordinator",
  "team": "Washington Redskins",
  "year": 2016
}, {
  "name": "Sean McVay",
  "position": "Head Coach",
  "team": "Los Angeles Rams",
  "year": 2017
}, {
  "name": "Sean McVay",
  "position": "Head Coach",
  "team": "Los Angeles Rams",
  "year": 2018
}, {
  "name": "Sean McVay",
  "position": "Head Coach",
  "team": "Los Angeles Rams",
  "year": 2019
}, {
  "name": "Kyle Shanahan",
  "position": "Graduate Assistant",
  "team": "UCLA",
  "year": 2003
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Quality Control Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2004
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Quality Control Coach",
  "team": "Tampa Bay Buccaneers",
  "year": 2005
}, {
  "name": "Kyle Shanahan",
  "position": "Wide Receivers Coach",
  "team": "Houston Texans",
  "year": 2006
}, {
  "name": "Kyle Shanahan",
  "position": "Quarterbacks Coach",
  "team": "Houston Texans",
  "year": 2007
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Coordinator",
  "team": "Houston Texans",
  "year": 2008
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Coordinator",
  "team": "Houston Texans",
  "year": 2009
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Coordinator",
  "team": "Washington Redskins",
  "year": 2010
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Coordinator",
  "team": "Washington Redskins",
  "year": 2011
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Coordinator",
  "team": "Washington Redskins",
  "year": 2012
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Coordinator",
  "team": "Washington Redskins",
  "year": 2013
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Coordinator",
  "team": "Cleveland Browns",
  "year": 2014
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Coordinator",
  "team": "Atlanta Falcons",
  "year": 2015
}, {
  "name": "Kyle Shanahan",
  "position": "Offensive Coordinator",
  "team": "Atlanta Falcons",
  "year": 2016
}, {
  "name": "Kyle Shanahan",
  "position": "Head Coach",
  "team": "San Francisco 49ers",
  "year": 2017
}, {
  "name": "Kyle Shanahan",
  "position": "Head Coach",
  "team": "San Francisco 49ers",
  "year": 2018
}, {
  "name": "Kyle Shanahan",
  "position": "Head Coach",
  "team": "San Francisco 49ers",
  "year": 2019
}, {
  "name": "Kliff Kingsbury",
  "position": "Player",
  "team": "New England Patriots",
  "year": 2003
}, {
  "name": "Kliff Kingsbury",
  "position": "Player",
  "team": "New Orleans Saints",
  "year": 2004
}, {
  "name": "Kliff Kingsbury",
  "position": "Player",
  "team": "Denver Broncos",
  "year": 2005
}, {
  "name": "Kliff Kingsbury",
  "position": "Player",
  "team": "New York Jets",
  "year": 2005
}, {
  "name": "Kliff Kingsbury",
  "position": "Player",
  "team": "Cologne Centaurians",
  "year": 2006
}, {
  "name": "Kliff Kingsbury",
  "position": "Player",
  "team": "Buffalo Bills",
  "year": 2006
}, {
  "name": "Kliff Kingsbury",
  "position": "Player",
  "team": "Montreal Allouettes",
  "year": 2007
}, {
  "name": "Kliff Kingsbury",
  "position": "Player",
  "team": "Winnipeg Blue Bombers",
  "year": 2007
}, {
  "name": "Kliff Kingsbury",
  "position": "Offensive Quality Control Coach",
  "team": "Houston",
  "year": 2008
}, {
  "name": "Kliff Kingsbury",
  "position": "Offensive Quality Control Coach",
  "team": "Houston",
  "year": 2009
}, {
  "name": "Kliff Kingsbury",
  "position": "Offensive Coordinator",
  "team": "Houston",
  "year": 2010
}, {
  "name": "Kliff Kingsbury",
  "position": "Offensive Coordinator",
  "team": "Houston",
  "year": 2011
}, {
  "name": "Kliff Kingsbury",
  "position": "Offensive Coordinator",
  "team": "Texas A&M",
  "year": 2012
}, {
  "name": "Kliff Kingsbury",
  "position": "Head Coach",
  "team": "Texas Tech",
  "year": 2013
}, {
  "name": "Kliff Kingsbury",
  "position": "Head Coach",
  "team": "Texas Tech",
  "year": 2014
}, {
  "name": "Kliff Kingsbury",
  "position": "Head Coach",
  "team": "Texas Tech",
  "year": 2015
}, {
  "name": "Kliff Kingsbury",
  "position": "Head Coach",
  "team": "Texas Tech",
  "year": 2016
}, {
  "name": "Kliff Kingsbury",
  "position": "Head Coach",
  "team": "Texas Tech",
  "year": 2017
}, {
  "name": "Kliff Kingsbury",
  "position": "Head Coach",
  "team": "Texas Tech",
  "year": 2018
}, {
  "name": "Kliff Kingsbury",
  "position": "Head Coach",
  "team": "Arizona Cardinals",
  "year": 2019
}, {
  "name": "Brian Flores",
  "position": "Scouting Assistant",
  "team": "New England Patriots",
  "year": 2004
}, {
  "name": "Brian Flores",
  "position": "Scouting Assistant",
  "team": "New England Patriots",
  "year": 2005
}, {
  "name": "Brian Flores",
  "position": "Pro Scout",
  "team": "New England Patriots",
  "year": 2006
}, {
  "name": "Brian Flores",
  "position": "Pro Scout",
  "team": "New England Patriots",
  "year": 2007
}, {
  "name": "Brian Flores",
  "position": "Special Teams Assistant",
  "team": "New England Patriots",
  "year": 2008
}, {
  "name": "Brian Flores",
  "position": "Special Teams Assistant",
  "team": "New England Patriots",
  "year": 2009
}, {
  "name": "Brian Flores",
  "position": "Assistant Offense and Special Teams",
  "team": "New England Patriots",
  "year": 2010
}, {
  "name": "Brian Flores",
  "position": "Defensive Assistant",
  "team": "New England Patriots",
  "year": 2011
}, {
  "name": "Brian Flores",
  "position": "Safeties Coach",
  "team": "New England Patriots",
  "year": 2012
}, {
  "name": "Brian Flores",
  "position": "Safeties Coach",
  "team": "New England Patriots",
  "year": 2013
}, {
  "name": "Brian Flores",
  "position": "Safeties Coach",
  "team": "New England Patriots",
  "year": 2014
}, {
  "name": "Brian Flores",
  "position": "Safeties Coach",
  "team": "New England Patriots",
  "year": 2015
}, {
  "name": "Brian Flores",
  "position": "Linebackers Coach",
  "team": "New England Patriots",
  "year": 2016
}, {
  "name": "Brian Flores",
  "position": "Linebackers Coach",
  "team": "New England Patriots",
  "year": 2017
}, {
  "name": "Brian Flores",
  "position": "Defensive Coordinator",
  "team": "New England Patriots",
  "year": 2018
}, {
  "name": "Brian Flores",
  "position": "Head Coach",
  "team": "Miami Dolphins",
  "year": 2019
}];
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _coaches = _interopRequireDefault(require("./coaches.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.getElementById("root");
var ul = document.createElement("ul");

var nflCoaches = _coaches.default.filter(function (c) {
  return c.year === 2019;
}).sort(function (a, b) {
  return a.name.localeCompare(b.name);
});

nflCoaches.forEach(function (c) {
  var li = document.createElement("li");
  li.innerHTML = c.name;
  ul.appendChild(li);
});
root.appendChild(ul);
},{"./coaches.json":"coaches.json"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56658" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/nfl-coach-network.e31bb0bc.map