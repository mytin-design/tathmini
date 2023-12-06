


//objective is to create a script that returns either
//either BE, ME, AE, or EE, when a mark is passed

let criteria = "";
let marks = "";


function returnCriteria() {
    if( marks <= 50 && marks >= 41) {
        criteria = "EE - Exceeding Expectations";
    }else if(marks <= 40 && marks >= 25) {
        criteria = "ME - Meeting Expectations";
    }else if(marks <= 24 && marks >= 15) {
        criteria ="AE - Approaching Expectations";
    }else if (marks <= 14 && marks >= 0) {
        criteria = "BE - Below Expectations"
    }else if(marks === null && marks === undefined && marks === "") {
        criteria = "Please input marks";
    } else {
        criteria = "Please input marks 0 -50";

    }

    return "Your Grading is: " + criteria;
}




console.log(returnCriteria());



let sum = ""

let x = 7;

let y = 45;


function calculateSum() {
    sum = x + y;
    return sum;
}


console.log(calculateSum());

