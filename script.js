var git = require('simple-git');
var async = require('async');




function pullFromCommons(callback) {
  var pathToRepo = __dirname + '/../../../git/platformml/commons';
  console.log("\n\nPULLING FROM commons-------------------------------------------------------------------------------");
  git(pathToRepo).stash(function(err, update) {
    if(!err) {
      console.log("Stash results: " + update);
      git(pathToRepo).pull(function(err, update) {
        if(err) {
          console.log("ERROR: " + JSON.stringify(err, null, 4));
        } else {
          console.log("PULL UPDATE: " + JSON.stringify(update.summary, null, 4));
          git(pathToRepo).stash(['apply'], function(err, update) {
            if(!err) {
              console.log("STASH UPDATE: " + update);
            }
            callback(null, 'done');
          });
        }
      });
    }
  });
}

function pullFromMl(callback) {
  var pathToRepo = __dirname + '/../../../git/platformml/ml';
  console.log("\n\nPULLING FROM ml-------------------------------------------------------------------------------");
  git(pathToRepo).stash(function(err, update) {
    if(!err) {
      console.log("Stash results: " + update);
      git(pathToRepo).pull(function(err, update) {
        if(err) {
          console.log("ERROR: " + JSON.stringify(err, null, 4));
        } else {
          console.log("PULL UPDATE: " + JSON.stringify(update.summary, null, 4));
          git(pathToRepo).stash(['apply'], function(err, update) {
            if(!err) {
              console.log("STASH UPDATE: " + update);
            }
            callback(null, 'done');
          });
        }
      });
    }
  });
}
function pullFromMlScheduler(callback) {
  var pathToRepo = __dirname + '/../../../git/platformml/ml-scheduler';
  console.log("\n\nPULLING FROM ml-scheduler-------------------------------------------------------------------------------");
  git(pathToRepo).stash(function(err, update) {
    if(!err) {
      console.log("Stash results: " + update);
      git(pathToRepo).pull(function(err, update) {
        if(err) {
          console.log("ERROR: " + JSON.stringify(err, null, 4));
        } else {
          console.log("PULL UPDATE: " + JSON.stringify(update.summary, null, 4));
          git(pathToRepo).stash(['apply'], function(err, update) {
            if(!err) {
              console.log("STASH UPDATE: " + update);
            }
            callback(null, 'done');
          });
        }
      });
    }
  });
}

function pullFromGlide(callback) {
  var pathToRepo = __dirname + '/../../../git/platformml/glide';
  console.log("\n\nPULLING FROM glide------------------------------------------------------------------------------");
  git(pathToRepo).stash(function(err, update) {
    if(!err) {
      console.log("Stash results: " + update);
      git(pathToRepo).pull(function(err, update) {
        if(err) {
          console.log("ERROR: " + JSON.stringify(err, null, 4));
        } else {
          console.log("PULL UPDATE: " + JSON.stringify(update.summary, null, 4));
          git(pathToRepo).stash(['apply'], function(err, update) {
            if(!err) {
              console.log("STASH UPDATE: " + update);
            }
            callback(null, 'done');
          });
        }
      });
    }
  });
}

function pullFromGlideTest(callback) {
  var pathToRepo = __dirname + '/../../../git/platformml/glide-test';
  console.log("\n\nPULLING FROM glide-test-------------------------------------------------------------------------------");
  git(pathToRepo).stash(function(err, update) {
    if(!err) {
      console.log("Stash results: " + update);
      git(pathToRepo).pull(function(err, update) {
        if(err) {
          console.log("PULL ERROR: " + JSON.stringify(err, null, 4));
        } else {
          console.log("PULL UPDATE: " + JSON.stringify(update.summary, null, 4));
          git(pathToRepo).stash(['apply'], function(err, update) {
            if(!err) {
              console.log("STASH UPDATE: " + update);
            }
            callback(null, 'done');
          });
        }
      });
    }
  });
}




async.series([
  pullFromCommons,
  pullFromMl,
  pullFromGlide,
  pullFromGlideTest,
  pullFromMlScheduler
  ], function(err, results) {
    if(err)
      console.log(err);
    console.log('Done');
  });
