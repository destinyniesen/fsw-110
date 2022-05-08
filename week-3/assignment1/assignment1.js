for (let i = 0; i < 10; i++) {
    const newHeading=document.createElement("h1");
    newHeading.innerHTML="Hello World";
    document.body.appendChild(newHeading);
}

var h1Elements = document.getElementsByTagName("h1");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "blue";
}

function makeList(){
let names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
const container=document.createElement('div');
document.body.appendChild(container);
const newList=document.createElement("ul");


for(var i=0; i<names.length; i++){
    var newName=document.createElement("li");
    newName.textContent=names[i];
    newList.appendChild(newName);
}
container.appendChild(newList);	
        return newList;

}
console.log(makeList());
