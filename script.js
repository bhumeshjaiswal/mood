function setMood(mood) {
    const body = document.body;
    const emoji = document.getElementById("emoji");
    const message = document.getElementById("message");

    if (mood === "happy") {
        body.style.backgroundColor = "#ffeaa7";
        emoji.textContent = "😊";
        message.textContent = "Keep smiling! Happiness looks great on you.";
    } 
    else if (mood === "sad") {
        body.style.backgroundColor = "#74b9ff";
        emoji.textContent = "😔";
        message.textContent = "It's okay to feel sad. Better days are coming.";
    } 
    else if (mood === "focused") {
        body.style.backgroundColor = "#6c5ce7";
        emoji.textContent = "🎯";
        message.textContent = "Stay focused. Success is closer than you think.";
    } 
    else if (mood === "tired") {
        body.style.backgroundColor = "#dfe6e9";
        emoji.textContent = "😴";
        message.textContent = "Take a break. Rest helps you come back stronger.";
    }

    emoji.style.transform = "scale(1.2)";
    setTimeout(() => {
        emoji.style.transform = "scale(1)";
    }, 300);
}
