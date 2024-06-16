function checkForSpam(message) {
    let lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        return true;
    } else {
        return false;
    }
}