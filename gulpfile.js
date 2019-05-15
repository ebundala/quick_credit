/**
 * Created by ebundala on 5/13/2019.
 */


const gulp = require("gulp");
const runSequence = require('run-sequence');
const babel = require("gulp-babel");
const eslint = require('gulp-eslint');
const dest="./dist";
const src="./server/**/*.js";
const linterOptions={
    fix:true
}
function lint(cb) {
    gulp.src([src])
        .pipe(eslint(linterOptions))
        .pipe(eslint.formatEach())
    //.pipe(eslint.failAfterError());
    if(cb)cb();

}
function build(cb) {
     gulp.src(src)
        .pipe(babel())
        .pipe(gulp.dest(dest));
     if(cb)cb();

}
gulp.task('lint', lint);

gulp.task("test",function () {
    console.log("testing")
})

gulp.task("build",build)

gulp.task("watch",function () {
    gulp.watch(src,build)
});
gulp.task("default",function (cb) {
    gulp.series(lint,build)
});