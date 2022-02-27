const validation = (firstReg,lastReg,emailReg,passReg) => {

    let errors = {};

    if (!firstReg) {
        errors.first="Name is required."
    } 

    if (!lastReg) {
        errors.last="Name is required."
    } 

    if (!emailReg) {
        errors.email="Email is required."
    } else if (!/\S+@\S+\.\S+/.test(emailReg)) {
        errors.email ="Email is invalid."
    } 

    if (!passReg) {
        errors.password="Password is required."
    } else if (passReg.length < 5) {
        errors.password="Password must be more than 5 characters."
    } 

    return errors;
}

export default validation;