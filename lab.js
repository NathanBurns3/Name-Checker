let givenName = prompt("What is your name?");

switch (givenName) {
    case "Jackson":
    case "Alex":
    case "Mike":
    case "Tom":
        console.log("You are one of my friends");
        break;

    case "James":
    case "John":
    case "Matt":
        console.log("I know who you are");
        break;

    default:
        console.log("I don't know who you are");
};