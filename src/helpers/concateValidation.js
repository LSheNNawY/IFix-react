const emailValidate = (email) => {
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return regex.test(String(email).toLowerCase());
}


const authFormValidation = (name, email, body, setError) => {
    let error = {};
    if (email === '')
        error.email = 'Email is required';
    else if (!emailValidate(email))
        error.email = 'Invalid email';
    else
        error.email = 'valid'


    if (name === '')
        error.name = 'name is required';
    else
        error.name = 'valid';
    if (body === '')
        error.body = 'comment is required';
    else
        error.body = 'valid';
    setError(error);
    return error.email === 'valid' && error.name === 'valid' && error.body === 'valid' ;
}

module.exports = {emailValidate,authFormValidation}