//function Loadjson(file,callback) {
//  var xhr = new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange = function(){
  //  if(xhr.readyState === 4 && xhr.status == "200"){
  //    callback(xhr.responseText);
  //  }
//  };
//  xhr.send(null);

//Loadjson("data.json",function(text)
//{
//  var data = JSON.parse(text);
//  console.log(data);
  //basics(data.details);
  //careerinfo(data.career);
//  education(data.education);
  //skills(data.skills);
  //achievements(data.achievements);
//})

function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error("error"));
      }
    })
  })
}
var newfile = loadjson("data.json");
newfile.then(data=>{
  console.log(data);
    basics(data.details);
    careerinfo(data.career);
    education(data.education);
    skills(data.skills);
    achievements(data.achievements);
})
var child1 = document.querySelector(".childone");
function basics(det){
  var name = document.createElement("name");
  var image = document.createElement("img");
  var phone = document.createElement("h4");
  var email = document.createElement("a");
  var adrs = document.createElement("h2");

    adrs.textContent = "Address";
  email.href = "mailto:anithalavanya6@gmail.com";
  email.textContent = det.email;
  phone.textContent = det.phnno;
  image.src = det.image;
  name.textContent = det.name;
  child1.appendChild(image);
  child1.appendChild(name);
  child1.appendChild(phone);
  child1.appendChild(email);
  child1.appendChild(adrs);

  var hr = document.createElement("hr");
  child1.append(hr);

  var p = document.createElement("p");
  p.textContent = det.Address;
  child1.appendChild(p);
  }
var child2 = document.querySelector(".childtwo");
function careerinfo(info){
  var heading = document.createElement("h2");
  heading.textContent="career objective";
  child2.appendChild(heading);

  var hr = document.createElement("hr");
  child2.append(hr);

  var c = document.createElement("h2")
  c.textContent = info.info;
  child2.appendChild(c);

  var hr = document.createElement("hr");
  child2.appendChild(hr);



}
function education(edu){
  var hd = document.createElement("h2");
  hd.textContent="eductaional qualification";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border = "1";
  child2.appendChild(table1);

  tabledata="";
  for(i=0;i<edu.length;i++){
    tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
  }
  table1.innerHTML=tabledata;


}
function skills(tech){
  var hd = document.createElement("h2");
  hd.textContent="technical skills";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<tech.length;i++){
    var title = document.createElement("h4");
    title.textContent=tech[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=tech[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }


}
function achievements(ache)
{
  var hd = document.createElement("h2");
  hd.textContent="Achievements";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<ache.length;i++){
    var title = document.createElement("h4");
    title.textContent=ache[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=ache[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}
function openpage(){
  window.open("mypro.html","_self",true)
}
