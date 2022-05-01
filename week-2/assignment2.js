var newHead=document.createElement('h1');
newHead.textContent="my header"
document.body.appendChild(newHead);

var newP=document.createElement('p');
newP.textContent="This is a paragraph created by javascript"
document.body.appendChild(newP);


function makeList(){
    let arr=["lists","are","hard","to","make!"];
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

function makeFooter(){
var footer=document.createElement('footer');
document.body.appendChild(footer);
var p2=document.createElement('p');
footer.appendChild(p2);
var fp=document.createTextNode("Created by Destiny Niesen,  April 2022");
p2.appendChild(fp);
}
console.log(makeFooter());