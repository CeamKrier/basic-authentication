import React from "react";
import { Formik, Field, Form, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";

import { ISignup, IValues } from "./Signup.interface";
import { styled } from "styles/theme";
import { LocalStorageKeys } from "utils/constants";
import useProvider from "hooks/useProvider";
import { login } from "store/actions";

const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    language: Yup.string().required("Required")
});

const Signup = ({}: ISignup) => {
    const { dispatch } = useProvider();
    return (
        <Formik
            initialValues={{
                password: "",
                email: "",
                language: "tr"
            }}
            validationSchema={SignupSchema}
            onSubmit={(values: IValues, { setSubmitting }: FormikHelpers<IValues>) => {
                localStorage.setItem(LocalStorageKeys.user, JSON.stringify(values, null, 2));
                dispatch(login(values));
                setSubmitting(false);
            }}>
            {({ values, setFieldValue }: FormikProps<IValues>) => (
                <Form>
                    <StyledInputRow>
                        {values.email && <StyledLabel htmlFor='email'>E-mail</StyledLabel>}
                        <StyledInput id='email' name='email' placeholder='E-Mail' type='email' />
                    </StyledInputRow>

                    <StyledInputRow>
                        {Boolean(values.password) && <StyledLabel htmlFor='password'>Password</StyledLabel>}
                        <StyledInput id='password' name='password' placeholder='Password' type='password' />
                    </StyledInputRow>

                    <StyledInputRow>
                        <StyledLanguageSelect id='language' name='language' placeholder='Pick Language' onChange={e => setFieldValue("language", e.target.value)} defaultValue='tr'>
                            <option value='tr' label='Türkçe'>
                                Türkçe
                            </option>
                            <option value='us' label='English'>
                                English
                            </option>
                        </StyledLanguageSelect>
                    </StyledInputRow>

                    <StyledInputRow>
                        <StyledButton type='submit' disabled={Boolean(!values.email || !values.password)}>
                            Submit
                        </StyledButton>
                    </StyledInputRow>
                </Form>
            )}
        </Formik>
    );
};

const StyledInput = styled(Field, {
    height: "24px",
    backgroundColor: "transparent",
    paddingBottom: "8px",
    border: 0,
    borderBottom: "1px solid",
    borderBottomColor: "#BBC3CF",
    color: "#121212",
    "&::placeholder": {
        color: "#64738C"
    },
    "&:focus-visible": {
        outline: 0,
        borderBottom: "2px solid",
        borderBottomColor: "#0DAFC0"
    }
});

const StyledLabel = styled("label", {
    fontSize: "12px"
});

const StyledLanguageSelect = styled("select", {
    height: "30px",
    backgroundColor: "transparent",
    paddingBottom: "8px",
    border: 0,
    borderBottom: "2px solid",
    borderBottomColor: "#64738C",
    color: "#121212",
    "&::placeholder": {
        color: "#64738C"
    },
    "&:focus-visible": {
        outline: 0,

        borderBottomColor: "#0DAFC0"
    }
});

const StyledButton = styled("button", {
    borderRadius: "12px",
    backgroundColor: "#E82223",
    height: "56px",
    border: 0,
    "&:disabled": {
        backgroundColor: "#BBC3CF"
    }
});

const StyledInputRow = styled("div", {
    display: "flex",
    flexDirection: "column",
    marginBottom: "37.5px"
});

export default Signup;
