/**
 * Created by ebundala on 5/13/2019.
 */


const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require('gulp-eslint');
const fs = require("fs");
const dest="./dist";
const src="./server/**/*.js";
const linterOptions={
    fix:true
}
function lint(cb) {
    gulp.src([src])
        .pipe(eslint(linterOptions))
        .pipe(eslint.formatEach());
    //.pipe(eslint.failAfterError());
    if(cb)cb();

}
function build(cb) {
     gulp.src(src)
        .pipe(babel())
        .pipe(gulp.dest(dest));
     if(cb)cb();

}
function copyAPIspec(cb) {
    gulp.src("./server/openapi.json")
        .pipe(gulp.dest(dest));
    if(cb)cb();

}
function clean(cb) {
    if(cb){
        cb();
    }
}
gulp.task('lint', lint);

gulp.task("test",function () {
    console.log("testing")
})

gulp.task("build",function (cb) {
    clean(function () {
    copyAPIspec(function () {
        build(cb)
    });
    })
})

gulp.task("watch",function () {
    gulp.watch(src,build,copyAPIspec)
});
gulp.task("default",function (cb) {
    gulp.series(lint,build)
});