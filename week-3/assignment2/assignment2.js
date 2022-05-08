for(var i=0; i<5; i++){
    const header=document.createElement('h2');
    header.innerHTML="Using Javascript";
    document.body.appendChild(header);
}

//var heading=document.getElementsByTagName('h2');
//heading. 
//heading.style.fontWeight='lighter'

var h2Elements = document.getElementsByTagName("h2");

for(var i = 0; i < h2Elements.length; i++) {
   h2Elements[i].style.fontSize = "20 px";
   h2Elements[i].style.fontWeight= "lighter";
   h2Elements[i].style.fontFamily= "sans-serif";
   h2Elements[i].style.color= "cornflowerblue"
}

var head=document.getElementsByTagName("h2");
head.className='border';
console.log(head.className)
