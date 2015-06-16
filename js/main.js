require.config({
	baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery-1.10.2.min',
    }
});

requirejs(['jquery', "helpers/utils"], function($, Util) {
	console.log(Util.helloWorld);
	console.log($);
});