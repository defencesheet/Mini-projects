let textInput = document.getElementById("text-input");
let result = document.getElementById("result");
let button = document.getElementById("count-btn");
let vowels = ['a', 'e', 'i', 'o', 'u'];

let firstClick = true; // to track button state

// Show button when user starts typing
textInput.addEventListener("input", () => {
  if (textInput.value.trim() !== "") {
    button.style.display = "inline-block";
  } else {
    button.style.display = "none";
    result.textContent = "";
  }
});

// When user clicks button
button.addEventListener("click", () => {
  if (firstClick) {
    // Count vowels
    let input = textInput.value.toLowerCase();
    if (input === "") {
      result.textContent = "Please write something.";
    } else {
      let count = 0;
      for (let char of input) {
        if (vowels.includes(char)) count++;
      }
      result.textContent = `Total Vowels: ${count}`;
      button.textContent = "Check Again";
      firstClick = false;
    }
  } else {
    // Reset for new sentence
    textInput.value = "";
    result.textContent = "";
    button.textContent = "Count Vowels";
    button.style.display = "none";
    firstClick = true;
  }
});
