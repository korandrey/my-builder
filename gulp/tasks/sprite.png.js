module.exports = function() {
    $.gulp.task('sprite.png', function (cb) {
        var spriteData =
            $.gulp.src('./source/images/*.png') // путь, откуда берем картинки для спрайта
                .pipe($.gp.spritesmith({
                    imgName: 'sprite.png',
                    cssName: 'sprite.css',
                }));

        spriteData.img.pipe($.gulp.dest('./build/assets/img')); // путь, куда сохраняем картинку
        spriteData.css.pipe($.gulp.dest('./build/assets/css')); // путь, куда сохраняем стили
        cb();
    });
};