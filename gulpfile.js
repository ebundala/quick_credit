/**
 * Created by ebundala on 5/13/2019.
 */


const gulp = require("gulp");
const runSequence = require('run-sequence');
const babel = require("gulp-babel");
const eslint = require('gulp-eslint');
const dest="./dist";
const src="./server/*.js";
const linterOptions={
    fix:true
}

gulp.task('lint', function(){
    return gulp.src([src])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
        .pipe(eslint(linterOptions))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task("test",function () {
    console.log("testing")
})

gulp.task("build",function () {
    return gulp.src([src])
        .pipe(babel())
        .pipe(gulp.dest(dist));

})

gulp.task("default",function () {
   return gulp.series("lint","build",function (cb) {
       cb();
   })
});