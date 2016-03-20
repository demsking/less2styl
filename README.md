# LESS to Stylus converter

Convert LESS to Stylus.

## Installation

    npm install -g less2styl

## Command line usage

    less2styl styles.less > styles.styl

## Programmatic usage
    
    less2styl(src, [options], done);
    
## Programmatic example

    var less2styl = require('less2styl');
    
    var src = '.class { width: (1 + 1) }';
    var options = {  
      indent: '2',      // possible indent values: 'tab' or number (of spaces)
      unPrefix: false,
      keepColons: true
      cssSyntax: false,
    };
    
    less2styl(src, options, function(output) {
        console.log(output);
    });
    
## License

MIT
