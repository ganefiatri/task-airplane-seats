// class to create element
const createDiv = document.querySelector(".create-seat");
// seat section to set inputer
let seatSection;
// var seat availabel
let seatsAvailable = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

console.log(seatsAvailable)
// check number from input
 check = function(){
    seatSection = parseInt(document.getElementById('number').value);

    // check in condition if its true select function to run
    if (seatSection == 1) {
        aisleSeat();
    } else if (seatSection == 2) {
        windowSeat();
    } else if (seatSection == 3) {
        middleSeat();
    }
    else{
        other();
    }
}

// function for aisleseat
aisleSeat = function() {
    // number seat from 1 to 17 seat 
    for (var i = 1; i <= 17; i++) {
        if (seatsAvailable[i] == 0) {
            window.alert("been assigned to Aisle seat " + i);
            // create element
            const div = document.createElement("div");
            div.className = "aisle";
            div.style.backgroundColor = "blue";
            div.innerText = i;
            createDiv.appendChild(div);
            seatsAvailable[i] = 1;
            break;
        }
    };

}

windowSeat = function() {

    for (var i = 18; i <= 22; i++) {
        if (seatsAvailable[i] == 0) {
            window.alert("been assigned to window seat " + i);
            const div = document.createElement("div");
            div.className = "window";
            div.style.backgroundColor = "green";
            div.innerText = i;
            createDiv.appendChild(div);
            seatsAvailable[i] = 1;
            break;
        }

    };

}

middleSeat = function() {

    for (var i = 23; i <= 34; i++) {
        if (seatsAvailable[i] == 0) {
            window.alert("been assigned to middle seat " + i);
            const div = document.createElement("div");
            div.className = "middle";
            div.style.backgroundColor = "red";
            div.innerText = i;
            createDiv.appendChild(div);
            seatsAvailable[i] = 1;
            break;
        }

    };

}


other = function() {
    window.alert("Wrong number");
}
