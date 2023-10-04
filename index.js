const assistant = document.getElementById("assistant");
const assistantImage = document.querySelector(".assistant-image");

function moveAssistantTo(buttonIndex) {
  const buttons = document.querySelectorAll(".button");
  const targetButton = buttons[buttonIndex];
  const buttonRect = targetButton.getBoundingClientRect();

  assistant.style.transform = `translate(${buttonRect.left}px, ${buttonRect.top}px)`;
  assistant.style.opacity = 1;
  const explanation = document.getElementById("explanation");
  explanation.className = "explanation";
  explanation.textContent = `Button "${targetButton.textContent}" is used to ${targetButton.textContent}.`;
}
