function generateNewPassword() {
    return Math.random()
        .toString(36)
        .substring(2)
        .replace("j", "@")
        .replace("r", "$")
        .replace("5", "*")
        .replace("y", "#");
}

export { generateNewPassword };
