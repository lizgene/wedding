app.config(function($httpProvider, RestangularProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] =
    $('meta[name=csrf-token]').attr('content');

  RestangularProvider.setBaseUrl('/api');

  //rails returns an object. this extracts the array (what angular expects) from the object.
  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    var extractedData;

    if (operation === "getList") {
      window.mydata = data;
      extractedData = data[what];
      extractedData.error = data.error;

    } else {
      extractedData = data;
    }
    return extractedData;
  });
});