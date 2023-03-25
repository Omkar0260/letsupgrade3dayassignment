const arr = [1, 3, 5, 9, 12, 15, 18, 21];
const list = document.getElementById("list");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    const listItem = document.createElement("li");
    const text = document.createTextNode(arr[i]);
    listItem.appendChild(text);
    list.appendChild(listItem);
  }
}
