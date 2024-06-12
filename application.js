
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        const isConfirmed = window.confirm("Are you sure you want to submit this application?");
        
        if (isConfirmed) {
            // Continue with form submission
            
            // Show a thank you message after submission
            window.alert("Thank you for submitting your application!");
        } else {
            event.preventDefault(); // Prevent form submission if not confirmed
        }
    });

    const formInputs = document.querySelectorAll("input[type='text'], input[type='number'], select");

    formInputs.forEach((input, index) => {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                const nextIndex = index + 1;
                if (nextIndex < formInputs.length) {
                    formInputs[nextIndex].focus();
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const numTicketsInput = document.getElementById("numTickets");
    const selectEvent = document.querySelector("select");
    const totalCostDisplay = document.getElementById("totalCost");
    const formInputs = document.querySelectorAll("input[type='text'], input[type='number'], input[type='email'], select");
    
	const eventRates = {
        "Stand-up Comedy Live (Rate = 500/-)": 500,
        "Late Night Comedy (Rate = 1000/-)": 1000,
		"Legends of Rock (Rate = 750/-)":750,
		"Bollywood Tamasha (Rate = 900/-)":900,
		"Friday Night Socials (Rate = 800/-)":800,
		"Spandan (Rate = 750/-)":750,
		"The Conference of The Birds (Rate = 500/-)":500,
		"The Final Twist (Rate = 450/-)":450,
		"Indian Artisian Bazaar (Rate = 350/-)":350,
		"Hi Life Exhibition (Rate = 400/-)":400,
    };
	
    function canMoveToNextField(input) {
        return input.value.length >= input.getAttribute("minlength");
    }

    function updateTotalCost() {
        const selectedEvent = selectEvent.options[selectEvent.selectedIndex].text;
        const eventRate = eventRates[selectedEvent];
        const numTickets = parseInt(numTicketsInput.value, 10);

        if (!isNaN(eventRate) && !isNaN(numTickets)) {
            const totalCost = eventRate * numTickets;
            totalCostDisplay.textContent = `Total Cost: ₹${totalCost}`;
        } else {
            totalCostDisplay.textContent = "Total Cost: ₹0";
        }
    }

    formInputs.forEach((input, index) => {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                if (!canMoveToNextField(input)) {
                    event.preventDefault();
                } else {
                    const nextIndex = index + 1;
                    if (nextIndex < formInputs.length) {
                        formInputs[nextIndex].focus();
                        if (formInputs[nextIndex].type === "text" || formInputs[nextIndex].type === "email") {
                            formInputs[nextIndex].select();
                        }
                    }
                }
            }
        });
    });

    selectEvent.addEventListener("change", updateTotalCost);
    numTicketsInput.addEventListener("input", updateTotalCost);
});

