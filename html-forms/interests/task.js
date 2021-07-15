let interests = document.getElementsByClassName("interests interests_active");
let categories = new Array();
findCategories();

let test = document.querySelectorAll(".interests_main label .interest__check");
console.log(test)

for (let category of categories) {
    category.addEventListener("change", function () {
        console.log(category.children.item(0).checked)
        let subInterests = category.nextSibling.nextSibling.getElementsByClassName("interest__check");
        for (let item of subInterests) {
            (category.children.item(0).checked) ? item.checked = true : item.checked = false;
        }
    })
}


function findCategories() {
    for (let item of interests) {
        categories.push(item.previousSibling.previousSibling);
    }
}