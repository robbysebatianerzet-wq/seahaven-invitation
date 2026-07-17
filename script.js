// ===============================
// Get Guest Name from URL
// ===============================

const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

const guestName = document.getElementById("guestName");

if (guest) {

    guestName.textContent = decodeURIComponent(guest);

} else {

    guestName.textContent = "Our Distinguished Guest";

}

// ===============================
// RSVP Button
// ===============================

const rsvpButton = document.getElementById("rsvpButton");

if (rsvpButton) {

    const baseURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSfTNwyctNnz9KR4f4WHtUo234dq0oVlWAY77o9CVXWRkidDxg/viewform?usp=pp_url";

    if (guest) {

        rsvpButton.href =
            baseURL +
            "&entry.2095795296=" +
            encodeURIComponent(decodeURIComponent(guest));

    } else {

        rsvpButton.href = baseURL;

    }

}