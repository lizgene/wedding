// app.config(function($httpProvider, RestangularProvider) {
//   // fixes rails security issue
//   $httpProvider.defaults.headers.common['X-CSRF-Token'] =
//     $('meta[name=csrf-token]').attr('content');

//   // tell restangular my api routes are served through api/:resource
//   RestangularProvider.setBaseUrl('/api');

//   //rails returns an object. this extracts the array (what angular expects) from the object.
//   RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
//     var extractedData;

//     if (operation === "getList") {
//       extractedData = data[what];
//       extractedData.error = data.error;

//     } else {
//       extractedData = data;
//     }
//     return extractedData;
//   });

// });