//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);
/*
document.title = "DOM vezba";

let items = document.getElementById("items");
let listItems = document.getElementsByClassName("list-item");

for(let i=0; i < listItems.length; i++)
{
    //listItems[i].style.color = "white";
    if(i%2==0)
    {
        listItems[i].style.backgroundColor = "#D8B0DE";
    }
    else listItems[i].style.backgroundColor = "#B0DEBA";
}

document.getElementById("lista").textContent = "Nesto";

listItems[3].textContent = "neki item";

querySelector
document.querySelector("#paragraf p").style.backgroundColor = "#B0DEBA";
*/

let listItem = document.getElementById("items")
console.log(listItem.parentNode);
listItem.parentNode.style.backgroundColor = "lightblue"
//child
//console.log(listItem.childNodes)
//listItem.childNodes[1].style.backgroundColor = "brown"
//children
listItem.children[0].style.backgroundColor = "yellow"
console.log(listItem.children)

listItem.firstElementChild;
listItem.lastElementChild;

//sibling

console.log(listItem.previousElementSibling);
listItem.previousElementSibling.style.color = "brown"
console.log(listItem.nextElementSibling)
let drugiElement = document.getElementsByClassName("list-item")[1];
drugiElement.previousElementSibling.style.backgroundColor = "green"