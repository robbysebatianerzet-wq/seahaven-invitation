// ===============================
// Get Guest Name from URL
// ===============================

const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

const guestName = document.getElementById("guestName");

if (guest) {

    guestName.innerHTML = decodeURIComponent(guest);

} else {

    guestName.innerHTML = "Our Distinguished Guest";

}

// ===============================
// RSVP Button
// ===============================

const rsvpButton = document.getElementById("rsvpButton");

if (rsvpButton && guest){

    const formURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSdb1w9pBS1JxuLQS4lHLqbYqwonGQGFVrIus-An2ItS3EPKTg/viewform?usp=pp_url"
        + "&entry.971898052=" + encodeURIComponent(guest);

    rsvpButton.href = formURL;

}