const messages = [
    "Dream big",
    "Embrace the journey",
    "Work hard , Play hard!"
];

function generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    console.log(randomMessage);
}

generateRandomMessage();