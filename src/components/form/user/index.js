import { withFormik } from 'formik';
import validate from './validate';
import FormFields from './fields';

// Wrap the form using withFormik HoC
const FormContainer = withFormik({
    // Transform outer props into form values
    mapPropsToValues: props => ({ email: '', password: '' }),
    // Add a custom validation function (this can be async too!)
    validate: validate,
    // Submission handler
    handleSubmit: (values, { props, setSubmitting, setErrors /* setValues, setStatus */ }) => {
        setSubmitting(true);

        props.handleSubmit(values, setSubmitting)
            .then(data => { })
            .catch(err => {
                setErrors(err);
                setSubmitting(false);
            })
    },
})

export default FormContainer(FormFields);