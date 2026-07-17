// =========================================
// Get Guest Name
// =========================================

const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

const guestName = document.getElementById("guestName");

let guestText = "Our Distinguished Guest";

if (guest) {
    guestText = decodeURIComponent(guest);
}

guestName.innerHTML = guestText;


// =========================================
// SMART FONT SIZE
// =========================================

function smartGuestName(){

    const words = guestText.trim().split(/\s+/).length;

    let size = 40;

    if(words == 3){

        size = 34;

    }

    if(words == 4){

        size = 30;

    }

    if(words >= 5){

        size = 26;

    }

    guestName.style.fontSize = size + "px";

    while(

        (guestName.scrollHeight > guestName.clientHeight ||

        guestName.scrollWidth > guestName.clientWidth)

        && size > 16

    ){

        size--;

        guestName.style.fontSize = size + "px";

    }

}

smartGuestName();


// =========================================
// RSVP Button
// =========================================

const rsvpButton = document.getElementById("rsvpButton");

if(rsvpButton){

    const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfTNwyctNnz9KR4f4WHtUo234dq0oVlWAY77o9CVXWRkidDxg/viewform?usp=pp_url";

    if(guest){

        rsvpButton.href =
            formURL +
            "&entry.2095795296=" +
            encodeURIComponent(guest);

    }else{

        rsvpButton.href = formURL;

    }

}