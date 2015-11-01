
app.controller("weatherCtrl", ['$scope', '$http','weatherser', function($scope,$http, weatherser) {
	$scope.info=[];
	var city=[{'name':'臺北市','id':'009'},{'name':'新北市','id':'010'},
{'name':'基隆市','id':'011'},{'name':'花蓮縣','id':'012'},{'name':'宜蘭縣','id':'013'},
{'name':'金門縣','id':'014'},{'name':'澎湖縣','id':'015'},{'name':'臺南市','id':'016'},
{'name':'高雄市','id':'017'},{'name':'嘉義縣','id':'018'},{'name':'嘉義市','id':'019'},
{'name':'苗栗縣','id':'020'},{'name':'臺中市','id':'021'},{'name':'桃園市','id':'022'},
{'name':'新竹縣','id':'023'},{'name':'新竹市','id':'024'},{'name':'屏東縣','id':'025'},
{'name':'南投縣','id':'026'},{'name':'臺東縣','id':'027'},{'name':'彰化縣','id':'028'},
{'name':'雲林縣','id':'029'},{'name':'連江縣','id':'030'}	];
	loadinfo();
	function loadinfo(){
	weatherser.then(function(data){
		var data1=data[0].data;
		var data2=data[1].data;
		//console.log(city[0].name);
		//console.log(data2);
		
		$scope.todayinfo=data2.cwbopendata.dataset.parameterSet.parameter;
		
		$scope.local=data1.cwbopendata.dataset.location;
		$scope.info=data1.cwbopendata.dataset.datasetInfo;
		$scope.Time=data1.cwbopendata.dataset.location[0].weatherElement[0].time;	
		$scope.citySelect=$scope.local[0];
		//console.log($scope.local);
		$scope.eachtitle=[' ','天氣狀況','氣溫(℃)','舒適度','降雨機率'];	
		$scope.uptime='更新時間：';
		//console.log($scope.local);
		angular.forEach($scope.local, function(value, key) {
			$scope.local[key].id=key;
			angular.forEach(city,function(v,k){
			if($scope.local[key].locationName===city[k].name){
				$scope.local[key].helperurl=
				'https://crossorigin.me/http://opendata.cwb.gov.tw/opendataapi?dataid=F-C0032-'
				+city[k].id+
				'&authorizationkey=CWB-92799803-3FCA-4361-BD85-44ECAE90D988';}
			})
		  	
			akk(key,$scope.local[key].helperurl);
			});
		console.log($scope.todayinfo);
	});
	
	}
	function akk(id,burl){
		
		$http({
			method:'GET',
			url:burl,
	
			transformResponse:function (data){
				  var x2js = new X2JS();
				  var jj=x2js.xml_str2json(data);
				  //console.log(jj.cwbopendata.dataset.parameterSet);
				  return jj;
				}})
			.success(function(data){
				//console.log(dataSet);
				$scope.todayinfo[id]=data.cwbopendata.dataset.parameterSet.parameter;
				return data;
				})
			.error(function(err){
				//console.log( err);
				return err;})
			};

	


	
	
}]);