import React from "react";
import { Formik, Field, Form, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import { ISignup, IValues } from "./Signup.interface";
import { styled } from "styles/theme";
import { LocalStorageKeys } from "utils/constants";
import useProvider from "hooks/useProvider";
import { login } from "store/actions";
import SelectInput from "components/SelectInput";
import Button from "components/Button";

const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    language: Yup.string().required("Required")
});

const Signup = ({}: ISignup) => {
    const { dispatch } = useProvider();
    const { t, i18n } = useTranslation();

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
                        {values.email && <StyledLabel htmlFor='email'>{t("keyEmail")}</StyledLabel>}
                        <StyledInput id='email' name='email' placeholder={t("keyEmail")} type='email' />
                    </StyledInputRow>

                    <StyledInputRow>
                        {Boolean(values.password) && <StyledLabel htmlFor='password'>{t("keyPassword")}</StyledLabel>}
                        <StyledInput id='password' name='password' placeholder={t("keyPassword")} type='password' />
                    </StyledInputRow>

                    <StyledInputRow>
                        <SelectInput placeholder={t("keyPickLanguage")} onChange={e => i18n.changeLanguage(e.target.value)} defaultValue='en'>
                            <option value='us' label='English'>
                                English
                            </option>
                            <option value='tr' label='Türkçe'>
                                Türkçe
                            </option>
                        </SelectInput>
                    </StyledInputRow>

                    <StyledInputRow>
                        <Button variant='primary' type='submit' disabled={Boolean(!values.email || !values.password)}>
                            {t("keySubmit")}
                        </Button>
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
