function loadjson(file,callback){
var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if (xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
loadjson("data.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	basics(data.details);

})
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.);
})
var ch=document.querySelector(".child1");
function basics(det){
	var img=document.createElement("img");
	img.src="Lighthouse.jpg";
	img.alt="picture";
	ch.appendChild(img);
	var s=document.createElement("h2");
	s.textContent=det.name;
	ch.appendChild(s);
	var email=document.createElement("a");
	email.href="mailto:jyoshnabagadi01@gmail.com";
	email.textContent="jyoshnabagadi01@gmail.com";
	ch.appendChild(email);
	var number=document.createElement("h3");
	number.textContent=det.number;
	ch.appendChild(number);
	var address=document.createElement("p");
	address.textContent=det.address;
	ch.appendChild(address);
}
	var ch2=document.querySelector("p");
	function careerinfo(infodata){
		var h1=document.createElement("h2");
		h1.textContent="career objective";
		ch2.appendChild(h1);
		var hr=document.CreateElement("hr");
		ch2.appendChild("hr");
		var h2=document.createElememt("p");
		h2.textContent=infodata.info;
		ch2.appendChild(h2);
	}
function educationdetails(edu){
var table1=document.createElement("table");
table1.border="1";
ch2.appendChild(table1);
tabledata="";
for(i=0;i<edu.length;i++){
	tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].passout+"</td><td>";

}
	table1.innerHTML=tabledata;
}
