const workingTime = (req, res, next) => {
    let availableOpeningTime = new Date();
    let day = availableOpeningTime.getDay();
    let hour = availableOpeningTime.getHours();

    if(day >= 1 && day <= 5 && hour >= 9 && hour <= 17){
        console.log('Site is opening');
        next();
    } 
    else {
         console.log('Store closed actually , You can return next Tomorow Or Next Monday at 9 AM ');
         next();
    }
}

module.exports = workingTime;