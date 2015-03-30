module.exports = function (config) {
    config.set({
        'singleRun': true,
        'reporters': ['dots'],
        'browsers': ['PhantomJS'],
        'frameworks': ['jasmine'],
        'files': ['test/**/*.js']
    });
};
