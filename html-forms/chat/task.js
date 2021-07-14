const chatWidgetSmall = document.getElementsByClassName("chat-widget").item(0);
const chatMessagesField = document.getElementsByClassName("chat-widget__messages").item(0);

const chatInputField = document.getElementById("chat-widget__input");
let msgs = document.getElementById("chat-widget__messages");
let phrasesPool = ["Can you chill a little, man?",
    "There's nothing here!",
    "OMG, please...",
    "Whatta hell do u want from me?",
    "Take it easy, dude",
    "I don't know",
    "Oh, so you're from Russia? Sorry"];


chatWidgetSmall.addEventListener("click", function (event) {
    event.preventDefault();
    let classes = chatWidgetSmall.classList;
    if (!classes.contains("chat-widget_active")) classes.add("chat-widget_active");
})

chatInputField.addEventListener("change", function () {
    processDialogue();
    chatMessagesField.scrollIntoView(false);
})

function processDialogue() {
    msgs.innerHTML += userSpeaking(chatInputField.value);
    chatInputField.value = "";
    msgs.innerHTML += botSpeaking();
}

function getRandomPhrase() {
    let rnd = Math.floor(Math.random() * phrasesPool.length);
    return phrasesPool[rnd];
}

function userSpeaking(phrase) {
    return `<div class="message message_client">
                <div class="message__time">` + new Date().toLocaleTimeString() + `</div>
                <div class="message__text">` + phrase + `</div>
            </div>`;
}

function botSpeaking() {
    return `<div class="message">
                <div class="message__time">` + new Date().toLocaleTimeString() + `</div>
                <div class="message__text">` + getRandomPhrase() + `</div>
            </div>`;
}
