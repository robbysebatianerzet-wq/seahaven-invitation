// ===============================
// Guest Name from URL
// ===============================

const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

const guestName = document.getElementById("guestName");

if(guest){

    guestName.innerHTML = decodeURIComponent(guest);

}else{

    guestName.innerHTML = "Our Distinguished Guest";

}



// ===============================
// AUTO FIT FONT
// ===============================

function autoFitText(){

    let size = 42;

    guestName.style.fontSize = size + "px";

    while(
        guestName.scrollHeight >
        guestName.clientHeight &&
        size > 18
    ){

        size--;

        guestName.style.fontSize = size + "px";

    }

}

autoFitText();



// ===============================
// RSVP Button
// ===============================

const rsvpButton =
document.getElementById("rsvpButton");

if(rsvpButton){

    const baseURL =
"https://docs.google.com/forms/d/e/1FAIpQLSfTNwyctNnz9KR4f4WHtUo234dq0oVlWAY77o9CVXWRkidDxg/viewform?usp=pp_url";

    if(guest){

        rsvpButton.href =
            baseURL +
            "&entry.2095795296=" +
            encodeURIComponent(guest);

    }else{

        rsvpButton.href = baseURL;

    }

}