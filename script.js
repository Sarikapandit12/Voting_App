document.addEventListener("DOMContentLoaded", () => {
    const voteButton = document.getElementById("voteButton");
    const options = document.querySelectorAll("input[name='vote']");

    voteButton.addEventListener("click", () => {
        const selectedOption = document.querySelector("input[name='vote']:checked");
        
        if (selectedOption) {
            const selectedValue = selectedOption.value;
            alert(`You voted for ${selectedValue}`);
            
            // This example does not cover backend integration 
            alert("Please select an option before voting.");
        }
    });
});
