import { Formik, Form, Field } from 'formik';
import { useState, useRef } from 'react';
import * as yup from 'yup';
import './MultiStepForm.css'

export const MultiStepForm = () => {
    let formRef = useRef(null);
    const [step, setStep] = useState(0);
    
    const validationSchema = yup.object().shape({
        firstName: yup.string().required('Please Enter a First Name'),
        lastName: yup.string().required('Please Enter a Last Name')
    });

    const initialValues = {
        firstName: '',
        lastName: '',
    };

    return (
        <div>
            <Formik validateOnChange initialValues={initialValues} validationSchema={validationSchema} onSubmit={console.log("Form submitted")}>
                {({ isValid, validateForm, errors }) => (
                    <Form noValidate ref={(ele) => { formRef = ele }}>
                        <h2>Register Now!</h2>
                        <div className='FormFields'>
                            <Field name="firstName" variant="text" label="firstName" placeholder="First Name *" />
                            <Field name="lastName" variant="text" placeholder="Last Name *"></Field>
                            <button type="submit" >Next</button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
};