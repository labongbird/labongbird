//	HYPE.documents["005"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "005.hyperesources";
	var documentName = "005";
	var documentLoaderFilename = "005_hype_generated_script.js";
	var mainContainerID = "005_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"7":{n:"7.jpg",p:1},"3":{n:"3-%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%84%8E%E1%85%A7.jpg",p:1},"4":{n:"4-%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%84%8E%E1%85%A72.jpg",p:1},"0":{n:"0-%E1%84%91%E1%85%AD%E1%84%8C%E1%85%B5.jpg",p:1},"5":{n:"5-.jpg",p:1},"1":{n:"1-%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%8F%E1%85%A2%E1%84%85%E1%85%B5%E1%86%A8%E1%84%90%E1%85%A5.jpg",p:1},"6":{n:"6-.jpg",p:1},"2":{n:"2-%E1%84%86%E1%85%AE%E1%84%80%E1%85%B5.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#222222",v:{"2":{o:"content-box",h:"0",a:-917,x:"visible",q:"100% 100%",b:3,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:900,d:637,z:"1",aP:"pointer"},"17":{b:604,z:"2",K:"Solid",c:23,L:"Solid",d:15,aS:6,M:1,e:"-0.999176",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"A",x:"visible",I:"Solid",a:893,y:"preserve",J:"Solid"}},n:"mutation1",T:{kTimelineDefaultIdentifier:{d:2.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.15,i:"a",e:30,s:-917,o:"2"},{f:"2",t:0,d:1.15,i:"b",e:0,s:3,o:"2"},{f:"2",t:0,d:2,i:"e",e:"0.000824",s:"-0.999176",o:"17"},{f:"2",t:2,d:0.15,i:"e",e:"1.000000",s:"0.000824",o:"17"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"4":{o:"content-box",h:"1",x:"visible",a:-914,q:"100% 100%",b:0,j:"absolute",r:"inline",c:903.99087799315851,k:"div",z:"1",d:640},"18":{b:600,z:"2",K:"Solid",c:19,L:"Solid",d:17,aS:6,M:1,e:"-1.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"A",x:"visible",I:"Solid",a:82,y:"preserve",J:"Solid"},"19":{b:600,z:"3",K:"Solid",c:19,L:"Solid",d:17,aS:6,M:1,e:"-1.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"B",x:"visible",I:"Solid",a:838,y:"preserve",J:"Solid"}},n:"mutation2",T:{kTimelineDefaultIdentifier:{d:2.29,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.16,i:"a",e:28,s:-914,o:"4"},{f:"2",t:0,d:1.16,i:"b",e:0,s:0,o:"4"},{f:"2",t:0,d:2.15,i:"e",e:"0.000000",s:"-1.000000",o:"18"},{f:"2",t:0,d:2.15,i:"e",e:"0.000000",s:"-1.000000",o:"19"},{f:"2",t:2.15,d:0.14,i:"e",e:"1.000000",s:"0.000000",o:"18"},{f:"2",t:2.15,d:0.14,i:"e",e:"1.000000",s:"0.000000",o:"19"}],f:30}},o:"3"},{x:2,p:"600px",c:"#FFFFFF",v:{"6":{o:"content-box",h:"2",x:"visible",a:-1888,q:"100% 100%",b:-73,j:"absolute",r:"inline",c:904.12117747927982,k:"div",z:"1",d:640},"31":{b:595,z:"4",K:"Solid",c:27,L:"Solid",d:20,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"A",x:"visible",I:"Solid",a:83,y:"preserve",J:"Solid"},"21":{b:595,z:"3",K:"Solid",c:27,L:"Solid",d:20,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"B",x:"visible",I:"Solid",a:833,y:"preserve",J:"Solid"}},n:"mutation3",T:{kTimelineDefaultIdentifier:{d:3,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.28,i:"a",e:-927,s:-1888,o:"6"},{f:"2",t:0,d:0.28,i:"b",e:-28,s:-73,o:"6"},{f:"2",t:0,d:3,i:"e",e:"1.000000",s:"0.000000",o:"31"},{f:"2",t:0,d:3,i:"e",e:"1.000000",s:"0.000000",o:"21"},{f:"2",t:0.28,d:0.18,i:"a",e:28,s:-927,o:"6"},{f:"2",t:0.28,d:0.18,i:"b",e:0,s:-28,o:"6"}],f:30}},o:"5"},{x:3,p:"600px",c:"#FFFFFF",v:{"8":{o:"content-box",h:"3",x:"visible",a:-926,q:"100% 100%",b:0,j:"absolute",r:"inline",c:904.12117747927982,k:"div",z:"1",d:640},"22":{b:603,z:"2",K:"Solid",c:24,L:"Solid",d:14,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"A",x:"visible",I:"Solid",a:84,y:"preserve",J:"Solid"},"23":{b:603,z:"3",K:"Solid",c:24,L:"Solid",d:14,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"B",x:"visible",I:"Solid",a:835,y:"preserve",J:"Solid"}},n:"mutation4",T:{kTimelineDefaultIdentifier:{d:3.01,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.16,i:"a",e:28,s:-926,o:"8"},{f:"2",t:0,d:1.16,i:"b",e:0,s:0,o:"8"},{f:"2",t:0,d:3.01,i:"e",e:"1.000000",s:"0.000000",o:"22"},{f:"2",t:0,d:3.01,i:"e",e:"1.000000",s:"0.000000",o:"23"}],f:30}},o:"7"},{x:4,p:"600px",c:"#FFFFFF",v:{"10":{o:"content-box",h:"4",x:"visible",a:-910,q:"100% 100%",b:0,j:"absolute",r:"inline",c:904.12117747927982,k:"div",z:"1",d:640},"25":{b:600,z:"3",K:"Solid",c:24,L:"Solid",d:15,aS:6,M:1,e:"-1.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"B",x:"visible",I:"Solid",a:838,y:"preserve",J:"Solid"},"24":{b:600,z:"2",K:"Solid",c:24,L:"Solid",d:15,aS:6,M:1,e:"-1.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"A",x:"visible",I:"Solid",a:95,y:"preserve",J:"Solid"}},n:"mutation5",T:{kTimelineDefaultIdentifier:{d:3,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.16,i:"a",e:28,s:-910,o:"10"},{f:"2",t:0,d:1.16,i:"b",e:0,s:0,o:"10"},{f:"2",t:0,d:2.15,i:"e",e:"0.000000",s:"-1.000000",o:"24"},{f:"2",t:0,d:2.15,i:"e",e:"0.000000",s:"-1.000000",o:"25"},{f:"2",t:2.15,d:0.15,i:"e",e:"1.000000",s:"0.000000",o:"24"},{f:"2",t:2.15,d:0.15,i:"e",e:"1.000000",s:"0.000000",o:"25"}],f:30}},o:"9"},{x:5,p:"600px",c:"#000000",v:{"12":{o:"content-box",h:"5",x:"visible",a:-927,q:"100% 100%",b:0,j:"absolute",r:"inline",c:905.02283105022821,k:"div",z:"1",d:640},"26":{b:593,z:"2",K:"Solid",c:24,L:"Solid",d:17,aS:6,M:1,e:"-1.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"A",x:"visible",I:"Solid",a:88,y:"preserve",J:"Solid"},"27":{b:593,z:"3",K:"Solid",c:24,L:"Solid",d:17,aS:6,M:1,e:"-1.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"B",x:"visible",I:"Solid",a:822,y:"preserve",J:"Solid"}},n:"mutation6",T:{kTimelineDefaultIdentifier:{d:2.29,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.15,i:"a",e:27,s:-927,o:"12"},{f:"2",t:0,d:1.15,i:"b",e:0,s:0,o:"12"},{f:"2",t:0,d:2.15,i:"e",e:"0.000000",s:"-1.000000",o:"26"},{f:"2",t:0,d:2.15,i:"e",e:"0.000000",s:"-1.000000",o:"27"},{f:"2",t:2.15,d:0.14,i:"e",e:"1.000000",s:"0.000000",o:"26"},{f:"2",t:2.15,d:0.14,i:"e",e:"1.000000",s:"0.000000",o:"27"}],f:30}},o:"11"},{x:6,p:"600px",c:"#FFFFFF",v:{"29":{b:598,z:"3",K:"Solid",c:29,L:"Solid",d:18,aS:6,M:1,e:"-1.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"B",x:"visible",I:"Solid",a:831,y:"preserve",J:"Solid"},"14":{o:"content-box",h:"6",x:"visible",a:-923,q:"100% 100%",b:-5,j:"absolute",r:"inline",c:903.99087799315851,k:"div",z:"1",d:640},"28":{b:598,z:"2",K:"Solid",c:24,L:"Solid",d:18,aS:6,M:1,e:"-1.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"A",x:"visible",I:"Solid",a:88,y:"preserve",J:"Solid"}},n:"mutation7",T:{kTimelineDefaultIdentifier:{d:2.29,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.16,i:"a",e:28,s:-923,o:"14"},{f:"2",t:0,d:1.16,i:"b",e:0,s:-5,o:"14"},{f:"2",t:0,d:2.15,i:"e",e:"0.000000",s:"-1.000000",o:"28"},{f:"2",t:0,d:2.15,i:"e",e:"0.000000",s:"-1.000000",o:"29"},{f:"2",t:2.15,d:0.14,i:"e",e:"1.000000",s:"0.000000",o:"28"},{f:"2",t:2.15,d:0.14,i:"e",e:"1.000000",s:"0.000000",o:"29"}],f:30}},o:"13"},{x:7,p:"600px",c:"#FFFFFF",v:{"30":{b:594,z:"2",K:"Solid",c:24,L:"Solid",d:16,aS:6,M:1,e:"-1.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"B",x:"visible",I:"Solid",a:907,y:"preserve",J:"Solid"},"16":{o:"content-box",h:"7",x:"visible",a:-858,q:"100% 100%",b:-6,j:"absolute",r:"inline",c:831.29502828222689,k:"div",z:"1",d:640}},n:"mutation8",T:{kTimelineDefaultIdentifier:{d:2.28,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.15,i:"a",e:60,s:-858,o:"16"},{f:"2",t:0,d:1.15,i:"b",e:0,s:-6,o:"16"},{f:"2",t:0,d:2.14,i:"e",e:"0.000000",s:"-1.000000",o:"30"},{f:"2",t:2.14,d:0.14,i:"e",e:"1.000000",s:"0.000000",o:"30"}],f:30}},o:"15"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

