document.addEventListener("DOMContentLoaded", function () {
    // Get the input field and add an event listener for keyup
    var searchInput = document.getElementById("quick_search");
    searchInput.addEventListener("keyup", function () {
        // Get the search query from the input field
        var searchQuery = searchInput.value.toLowerCase();

        // Get all product sections
        var productSections = document.querySelectorAll(".product-section");

        // Loop through each product section
        productSections.forEach(function (section) {
            // Get the section title
            var sectionTitle = section.querySelector("h1").textContent.toLowerCase();

            // Get all product boxes within the section
            var productBoxes = section.querySelectorAll(".box");

            // Loop through each product box
            productBoxes.forEach(function (box) {
                // Get the product name within the box
                var productName = box.querySelector("h3").textContent.toLowerCase();

                // Check if the search query matches the section title or product name
                if (sectionTitle.includes(searchQuery) || productName.includes(searchQuery)) {
                    // Show the product box if it matches
                    box.style.display = "block";
                } else {
                    // Hide the product box if it doesn't match
                    box.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons with class 'add-to-cart'
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add click event listener to each 'Add to Cart' button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the product name from the 'data-product' attribute
            const productName = button.getAttribute('data-product');

            // Perform actions like adding the product to the cart or showing a message
            // For now, let's just log the product name to the console
            console.log(`Added ${productName} to the cart!`);

            // Toggle the 'clicked' class on the button
            button.classList.toggle('clicked');
        });
    });
});
