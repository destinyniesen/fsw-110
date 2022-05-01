var newHead=document.createElement('h1');
newHead.textContent="Welcome to my JS site!";
document.body.appendChild(newHead);

var newPar=document.createElement('p');
newPar.textContent="All of this was created with javascript";
document.body.appendChild(newPar);

var arr=["I am learning to use javascript", "It is allowing me to add this list", "Now my website runs properly"];
var container=document.createElement('div');
document.body.appendChild(container);
var newList = document.createElement('ol');
document.body.appendChild(newList);
let list=document.getElementById("newList");

    for (i = 0; i <= arr.length - 1; i++) {
        const listItems = document.createElement('li');
        listItems.textContent = arr[i];	                   	
        document.list.appendChild(listItems);		
    }
    document.container.appendChild(list);	