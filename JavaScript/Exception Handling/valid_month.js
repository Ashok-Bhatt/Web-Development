
function getMonth(month_no){

    if (month_no<0 || month_no>12){
        throw new Error("invalid month number given");
    } else {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[month_no-1];
    }
}

try {
    let month_no = 13;
    let month = getMonth(month_no);
    console.log(month);
} catch (err) {
    console.log(err.message);
} finally {
    console.log("Desired Month printed successfully");
}