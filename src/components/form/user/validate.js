export default (values, props) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'The email field is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please provide a valid email address.';
    }

    if (!values.password) {
        errors.password = 'The password field is required.';
    }
    else if (values.password.length > 15) {
        errors.password = 'The password must be 15 characters or less.';
    }

    return errors;
}