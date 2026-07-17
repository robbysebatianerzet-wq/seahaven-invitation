const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

const guestName = document.getElementById("guestName");

if (guest) {

    guestName.innerHTML = decodeURIComponent(guest);

} else {

    guestName.innerHTML = "Our Distinguished Guest";

}