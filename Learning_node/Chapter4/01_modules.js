// NOTE: Loading a Module with require and Default Paths
//Node supports a simple module loading system: there is a one-to-one correspondence
// between the file and module

//to include a module wiithin a node aplication
  // var http = require('http')

// NOTE: VARIATIONS OF 'require'

// require.resolve >>  method performs the lookup for the given module but, rather than load the module, just returns the resolved filename

// require.cache >>  object contains a cached version of all loaded modules
// When you try to load the module again in the same context, it’s loaded from the cache.

var circle = require('./circle.js')

delete require.cache('./circle.js')
//This code forces a reload of the module the next time a  require is called on it.
