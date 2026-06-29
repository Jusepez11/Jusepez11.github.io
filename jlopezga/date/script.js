const RECIPIENT_EMAIL = "jlopezga@charlotte.edu";
const EMAIL_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

const panels = document.querySelectorAll(".panel");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const buttonStage = document.getElementById("buttonStage");
const attemptText = document.getElementById("attemptText");
const dateInput = document.getElementById("dateInput");
const continueButton = document.getElementById("continueButton");
const optionCards = document.querySelectorAll(".option-card");
const timeInput = document.getElementById("timeInput");
const submitButton = document.getElementById("submitButton");
const formNote = document.getElementById("formNote");
const confirmationCode = document.getElementById("confirmationCode");
const summaryText = document.getElementById("summaryText");

let noClicks = 0;
let selectedLocation = "";

function showPanel(name) {
    panels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === name);
    });
}

function setDateBounds() {
    const today = new Date();
    const max = new Date();
    max.setMonth(max.getMonth() + 6);

    dateInput.min = today.toISOString().split("T")[0];
    dateInput.max = max.toISOString().split("T")[0];
}

function moveNoButton() {
    const stage = buttonStage.getBoundingClientRect();
    const button = noButton.getBoundingClientRect();
    const maxLeft = Math.max(stage.width - button.width, 0);
    const maxTop = Math.max(stage.height - button.height, 0);

    noButton.classList.add("is-running");
    noButton.style.left = `${Math.random() * maxLeft}px`;
    noButton.style.top = `${Math.random() * maxTop}px`;
}

function growYesButton() {
    const scale = 1 + noClicks * 0.24;
    yesButton.style.transform = `scale(${scale})`;
    yesButton.style.zIndex = "3";
}

function handleNo() {
    noClicks += 1;

    if (noClicks >= 5) {
        showPanel("sad");
        return;
    }

    const lines = [
        "Are you sure?",
        "Think carefully.",
        "The yes button is looking better.",
        "Last chance before the sad cat."
    ];

    attemptText.textContent = lines[noClicks - 1];
    growYesButton();
    moveNoButton();
}

function handleYes() {
    showPanel("calendar");
}

function getCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
}

function submitPlan() {
    const selectedDate = dateInput.value;
    const selectedTime = timeInput.value;

    if (!selectedLocation || !selectedTime) {
        formNote.textContent = "Pick a place and time first.";
        return;
    }

    const code = getCode();
    const formData = new FormData();

    formData.append("_subject", `Date plan from Cami - ${code}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append("Date", selectedDate);
    formData.append("Place", selectedLocation);
    formData.append("Time", selectedTime);
    formData.append("Confirmation code", code);
    formData.append("Message", "Cami said yes!");

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formNote.textContent = "";

    fetch(EMAIL_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Email service rejected the submission.");
        }

        confirmationCode.textContent = code;
        summaryText.textContent = `${selectedDate} · ${selectedLocation} · ${selectedTime}`;
        showPanel("confirm");
    })
    .catch(() => {
        formNote.textContent = "The email did not send. Try again in a moment.";
        submitButton.disabled = false;
        submitButton.textContent = "Submit date plan";
    });
}

noButton.addEventListener("click", handleNo);
yesButton.addEventListener("click", handleYes);

continueButton.addEventListener("click", () => {
    if (!dateInput.value) {
        dateInput.focus();
        return;
    }
    showPanel("plan");
});

optionCards.forEach((card) => {
    card.addEventListener("click", () => {
        optionCards.forEach((option) => option.classList.remove("selected"));
        card.classList.add("selected");
        selectedLocation = card.dataset.location;
        formNote.textContent = "";
    });
});

submitButton.addEventListener("click", submitPlan);

setDateBounds();
