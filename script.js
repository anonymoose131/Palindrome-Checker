const textInputEl = document.getElementById("text-input");
const checkBtnEl = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

checkBtnEl.addEventListener("click", () => {
  checkInput();
});

textInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});

function clearString(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function checkInput() {
  const textInput = textInputEl.value;
  const clearedString = clearString(textInput);

  if (clearedString === "") {
    return alert("Please input a value");
  }

  const reversedString = reverseString(clearedString);

  // Clear Input
  textInputEl.value = "";

  if (clearedString === reversedString) {
    return resultEl.innerHTML = `<strong>${textInput}</strong> is a palindrome`;
  } else {
    return resultEl.innerHTML = `<strong>${textInput}</strong> is not a palindrome`;
  }
}
