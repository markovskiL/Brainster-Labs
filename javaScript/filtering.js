// Cards Filtering Script

document.querySelector("#filter-coding").addEventListener("change", filterCoding);
document.querySelector("#filter-design").addEventListener("change", filterDesign);
document.querySelector("#filter-marketing").addEventListener("change", filterMarketing);

function filterCoding() {
    hideAllCards();

    if (document.querySelector("#filter-coding").checked) {
        var codingCards = document.querySelectorAll(".coding");
        codingCards.forEach(codingCard => {
            codingCard.style.display = "flex";
        });
        document.querySelector("#filter-design").checked = false;
        document.querySelector("#filter-marketing").checked = false;
    }
    else {
        showAllCards();
    }
}

function filterDesign() {
    hideAllCards();

    if(document.querySelector("#filter-design").checked) {
        var designCards = document.querySelectorAll(".design");
        designCards.forEach(designCard => {
            designCard.style.display = "flex";
        });

        document.querySelector("#filter-coding").checked = false;
        document.querySelector("#filter-marketing").checked = false;
    } else {
        showAllCards();
    }
}

function filterMarketing() {
    hideAllCards();

    if(document.querySelector("#filter-marketing").checked) {
        var marketingCards = document.querySelectorAll(".marketing");
        marketingCards.forEach(marketingCard => {
            marketingCard.style.display = "flex";
        });

        document.querySelector("#filter-design").checked = false;
        document.querySelector("#filter-coding").checked = false;
    } else {
        showAllCards();
    }
}


function hideAllCards() {
    var allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        card.style.display = "none";
    });
}

function showAllCards() {
    var allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        card.style.display = "flex";
    });
}


