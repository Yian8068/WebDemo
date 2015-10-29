
app.controller("weatherCtrl", ['$scope', 'weatherser', function($scope, weatherser) {
	$scope.info=[];
	loadinfo();
	function loadinfo(){
	weatherser.success(function(data){
	$scope.local=data.cwbopendata.dataset.location;
	$scope.info=data.cwbopendata.dataset.datasetInfo;
	$scope.Time=data.cwbopendata.dataset.location[0].weatherElement[0].time;
	$scope.citySelect=$scope.local[0];
	//console.log(data);
	//$scope.info=data.cwbopendata.dataset.location.locationName;
	//$scope.local=data.cwbopendata.dataset.location;
	console.log(data);
	console.log($scope.local);
	//console.log($scope.info);
	console.log($scope.Time);
	//console.log('a-name');
	//var xml = parser.parseFromString(data, "text/xml");
	//datas=xmlToJson(data);
	//console.log(data);
	//var datas=new JXONTree();
	//var x2js=new X2JS();
	//data1=vkbeautify.json(JSON.stringify((x2js.xml_str2json(data))));
	//console.log(data1);
	//console.log(a);
	//data2=x2js.xml_str2json(data);
	//var a=$(data).find('locationName');
	//b=x2js.xml_str2json(a);
	//$scope.info=b;
	//console.log(data1[0]);
	//console.log('<------------>'+typeof(data1));

	//console.log($scope.info);
	
	});
	}
}]);