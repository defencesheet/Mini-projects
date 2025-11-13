let textInput = document.getElementById("text-input");
let result = document.getElementById("result");
let button = document.getElementById("check-btn");

let firstClick = true; 


textInput.addEventListener("input", () => {
  if (textInput.value.trim() !== "") {
    button.style.display = "inline-block";
  } else {
    button.style.display = "none";
    result.textContent = "";
  }
});


button.addEventListener("click", () => {
  if (firstClick) {
    
    let userInput = textInput.value;
    const cleanTxt = userInput.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseTxt = cleanTxt.split("").reverse().join("");

    if (userInput === "") {
      result.textContent = "Please enter a word or phrase";
      result.style.color = "black";
    } else if (cleanTxt === reverseTxt) {
      result.textContent = `✅ "${userInput}" is a palindrome.`;
      result.style.color = "green";
    } else {
      result.textContent = `❌ "${userInput}" is not a palindrome.`;
      result.style.color = "red";
    }

    button.textContent = "Check Again"; 
    firstClick = false; 

  } else {
    
    textInput.value = "";
    result.textContent = "";
    button.textContent = "Check";
    button.style.display = "none";
    firstClick = true; 
  }
});
