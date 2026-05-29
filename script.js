

const portfolioBtn = document.getElementsByClassName("more_btn");
const portfolioItemsDialog = document.getElementById("portfolio_items_popUp");

for (let btn of portfolioBtn){ //loop through all btn with the class name of more_btn because its not only one so its needed
    btn.addEventListener("click", function () {
        portfolioItemsDialog.showModal();
    });
}


