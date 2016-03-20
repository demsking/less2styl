var fs = require('fs');
var less = require('less');
var Css2Stylus = require('css2stylus/lib/css2stylus');
var exec = require('child_process').exec;

var bin = './node_modules/css2stylus/bin/css2stylus';
var default_options = {  
    indent: '2',      // possible indent values: 'tab' or number (of spaces)
    unPrefix: false,
    keepColons: true,
    cssSyntax: false,
};

module.exports = (filename, options, done) => {
    filename = filename || process.argv[2];
    options = options || default_options;
    done = done || options;
    
    if (typeof options == 'function') {
        options = default_options;
    }
    
    var str = fs.readFileSync(filename).toString();
    
    less.render(str, (e, output) => {
        var converter = new Css2Stylus.Converter(output);
        
        output = converter.processCss(options).getStylus();
        
        if (typeof done == 'function') {
            return done(output);
        }
        
        process.stdout.write(output);
    });
};
