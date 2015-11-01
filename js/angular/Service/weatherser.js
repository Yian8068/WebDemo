app.factory('ws',['$http',function($http){
		var baseurl=
		'https://crossorigin.me/http://opendata.cwb.gov.tw/opendataapi?dataid'+
		'=F-C0032-001&authorizationkey=CWB-92799803-3FCA-4361-BD85-44ECAE90D988';
		return $http({
					method:'GET',
					url:baseurl,
					crossDomain: true, // enable this
					transformResponse:function (data){
					//console.log('trans request!>>>');
					   var x2js = new X2JS();
					   var jj=x2js.xml_str2json(data);
		  	 		   return jj;
					}}).success(function(data){
							//console.log('success return');
							return data.cwbopendata;
					 }).error(function(err){
						 	//console.log( err);
							return err;});
}]);
app.factory('hs',['$http',function($http){
		var baseurl=
		'https://crossorigin.me/http://opendata.cwb.gov.tw/opendataapi?dataid'+
		'=F-C0032-009&authorizationkey=CWB-92799803-3FCA-4361-BD85-44ECAE90D988';
		return $http({
					method:'GET',
					url:baseurl,
					crossDomain: true, // enable this
					transformResponse:function (data){
					//console.log('trans request!>>>');
					   var x2js = new X2JS();
					   var jj=x2js.xml_str2json(data);
		  	 		   return jj;
					}}).success(function(data){
							//console.log('success return');
							return data.cwbopendata;
					 }).error(function(err){
						 	//console.log( err);
							return err;});
}]);
app.factory('weatherser', function($q, ws, hs) {
    return $q.all([ws, hs]);
});