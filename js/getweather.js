/*\
|*|
|*|  JXON Snippet #1 - Mozilla Developer Network
|*|
|*|  https://developer.mozilla.org/en-US/docs/JXON
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
\*/
/*
function parseText (sValue) {
  if (/^\s*$/.test(sValue)) { return null; }
  if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
  if (isFinite(sValue)) { return parseFloat(sValue); }
  if (isFinite(Date.parse(sValue))) { return new Date(sValue); }
  return sValue;
}

function JXONTree (oXMLParent) {
  var nAttrLen = 0, nLength = 0, sCollectedTxt = "";
  if (oXMLParent.hasChildNodes()) {
    for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
      oNode = oXMLParent.childNodes.item(nItem);
      if ((oNode.nodeType - 1 | 1) === 3) { sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue; } // nodeType is "Text" (3) or "CDATASection" (4)
      else if (oNode.nodeType === 1 && !oNode.prefix) { // nodeType is "Element" (1)
        sProp = oNode.nodeName.toLowerCase();
        vContent = new JXONTree(oNode);
        if (this.hasOwnProperty(sProp)) {
          if (this[sProp].constructor !== Array) { this[sProp] = [this[sProp]]; }
          this[sProp].push(vContent);
        } else { this[sProp] = vContent; nLength++; }
      }
    }
    this.keyValue = parseText(sCollectedTxt);
  } else { this.keyValue = null; }
  if (oParentNode.hasAttributes && oXMLParent.hasAttributes()) {
    var oAttrib;
    this.keyAttributes = {};
    for (nAttrLen; nAttrLen < oXMLParent.attributes.length; nAttrLen++) {
      oAttrib = oXMLParent.attributes.item(nAttrLen);
      this.keyAttributes[oAttrib.name.toLowerCase()] = parseText(oAttrib.value.trim());
    }
  }
  /*
  * Optional properties...

  this.keyLength = nLength;
  this.attributesLength = nAttrLen;
  // this.DOMNode = oXMLParent;

  */

  /* Object.freeze(this); */
//}

/*
* Optional methods... Uncomment the optional properties first!

JXONTree.prototype.valueOf = function () { return this.keyValue; };
JXONTree.prototype.toString = function () { return String(this.keyValue); };
JXONTree.prototype.getItem = function (nItem) {
  if (nLength === 0) { return null; }
  var nCount = 0;
  for (var sKey in this) { if (nCount === nItem) { return this[sKey]; } nCount++; }
  return null;
};
JXONTree.prototype.getAttribute = function (nAttrId) {
  if (nAttrLen === 0 || nAttrId + 1 > nAttrLen) { return null; }
  var nAttr = 0;
  for (var sAttrName in this.keyAttributes) { if (nAttr === nAttrId) { return this.keyAttributes[sAttrName]; } nAttr++; }
  return null;
};
JXONTree.prototype.hasChildren = function () { return this.keyLength > 0; };

*/

//var myObject = new JXONTree(doc);
// we got our javascript object! try: alert(JSON.stringify(myObject));

// JavaScript Document
var xmlToJson=function (xml) {
	
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
	//xml = xml.responseXML(); 
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
        callback&&callback(xmlhttp.responseXML); 
      }
};

xmlhttp.open("GET","http://opendata.cwb.gov.tw/opendataapi?dataid=F-C0032-001&authorizationkey=CWB-92799803-3FCA-4361-BD85-44ECAE90D988",true);
xmlhttp.send();}

/*XMLDoc(function(e){
   //Now you can call your function
 // console.log(e.length);
  console.log(e.cwbopendata);
   var weathers = xmlToJson(e);
 // console.log(weathers.length);
  //console.log(typeof(weathers));
  console.log(weathers.cwbopendata);
   //console.log("Converted JSON: "+weathers);  
 	return weathers.cwbopendata;
});*/
