// JavaScript Document
  app.factory('weatherser',['$http',function($http){

return $http({
	method:'GET',
	url:"http://opendata.cwb.gov.tw/opendataapi?dataid=F-C0032-001&authorizationkey=CWB-92799803-3FCA-4361-BD85-44ECAE90D988"
}).success(function(data){
	console.log(data);
	return data;})
.error(function(err){
	console.log( err);
	return err;})
	
	}]);