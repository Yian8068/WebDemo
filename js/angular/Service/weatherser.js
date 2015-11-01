

app.factory('weatherser',['$http',function($http){

return $http({
	method:'GET',
	url:"https://crossorigin.me/http://opendata.cwb.gov.tw/opendataapi?dataid=F-C0032-001&authorizationkey=CWB-92799803-3FCA-4361-BD85-44ECAE90D988",
	transformResponse:function (data){
		console.log('trans request!>>>')
		  var x2js = new X2JS();
		  var jj=x2js.xml_str2json(data);
		return jj;
		}
}).success(function(data){
		console.log('success return');
		return data.cwbopendata;
	
		
	})
.error(function(err){
	//console.log( err);
	return err;})
	
	}]);
/*$(function () {
  $.ajax({
    type: "GET",
    url: "http://opendata.cwb.gov.tw/opendataapi?dataid=F-C0032-001&authorizationkey=CWB-92799803-3FCA-4361-BD85-44ECAE90D988",
    dataType: "xml",
    error: function (e) {
      console.log('oh no');
    },
    success: function (e) {
      var data = $(e).find('locationName');
      var num = data.length;
	  console.log(data.eq(0).find('textContent'));
	  console.log(num);
      /*var startTime = data.eq(0).find('startTime').text();
      var city = data.eq(0).find('parameter').eq(0).find('parameterValue').text();
      var town = data.eq(0).find('parameter').eq(2).find('parameterValue').text();
      console.log(time);
      console.log(city);
      console.log(town);
	  return data;
    }
  });
});*/
