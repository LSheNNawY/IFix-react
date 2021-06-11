const emailValidate = (email) => {
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return regex.test(String(email).toLowerCase());
}


const authFormValidation = (email, password, setError) => {
    let error = {};
    if (email === '')
        error.email = 'Email is required';
    else if (!emailValidate(email))
        error.email = 'Invalid email';
    else
        error.email = 'valid'


    if (password === '')
        error.password = 'Password is required';
    else
        error.password = 'valid';


    setError(error);


    return error.email === 'valid' && error.password === 'valid' ;
}

module.exports = {emailValidate,authFormValidation}