var newHead=document.createElement('h1');
newHead.textContent="Welcome to my JS site!";
document.body.appendChild(newHead);

var newPar=document.createElement('p');
newPar.textContent="All of this was created with javascript";
document.body.appendChild(newPar);

function makeList(){
let arr=["I am learning to use javascript", "It is allowing me to add this list", "Now my website runs properly"];
const container=document.createElement('div');
document.body.appendChild(container);
const newList = document.createElement('ol');

    for (i = 0; i <= arr.length - 1; i++) {
        const listItems = document.createElement('li');
        listItems.appendChild(document.createTextNode(arr[i]));
        newList.appendChild(listItems);		
    }
    container.appendChild(newList);	
    return newList;
}
console.log(makeList());