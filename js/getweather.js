// JavaScript Document
/*var xmlToJson=function (xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType==1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
var XMLDoc=function (callback){
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
      //Success
      if (xmlhttp.readyState==4 && xmlhttp.status==200){
        //console.log("Response from server : "+xmlhttp.responseText);
        callback(xmlhttp.responseXML); 
      }
};
xmlhttp.open("GET","http://opendata.cwb.gov.tw/opendataapi?dataid=F-C0032-001&authorizationkey=CWB-92799803-3FCA-4361-BD85-44ECAE90D988",true);
xmlhttp.send();
}

XMLDoc(function(e){
   //Now you can call your function
   var weathers = JSON.stringify(xmlToJson(e));
   //console.log("Converted JSON: "+weathers);  
 
});*/


/*$(function () {
  $.ajax({
    type: "GET",
    url: "http://opendata.cwb.gov.tw/opendataapi?dataid=F-C0032-001&authorizationkey=CWB-92799803-3FCA-4361-BD85-44ECAE90D988",
    dataType: "xml",
    error: function (e) {
      console.log(e);
    },
    success: function (e) {
      var xml = e;
      console.log($(xml));
    }
  });
});*/