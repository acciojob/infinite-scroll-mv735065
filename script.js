//your code here!
let box=document.querySelector("#infi-list");
let c=0;
function addItemsToBox(num) {
for(let i=1;i<=num;i++){
	c++;
	let list=document.createElement("li");
	list.innerHTML = `Item ${c}`;
	box.append(list);
}
}

addItemsToBox(10);
function checkScroll() {
	if (box.scrollTop + box.clientHeight >= box.scrollHeight - 10) {
        addItemsToBox(2); // Add 2 more items
    }
	
}



box.addEventListener("scroll", checkScroll);

