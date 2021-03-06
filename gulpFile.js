/**
 * Created by adortbud on 8/19/2016.
 */
var gulp = require('gulp');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();

// tasks
gulp.task('vet',function () {
    log('Analyzing source with JSHint and JSCS');
    return gulp.src(config.alljs)
        .pipe($.if(args.verbose,$.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish',{verbose:true}))
        .pipe($.jshint.reporter('fail'));
});


// local functions
function log(msg){
    if(typeof(msg) === 'object'){
        for(var item in msg){
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
                else {
                    $.util.log($.util.colors.blue(msg));
                }
        }
    }
}