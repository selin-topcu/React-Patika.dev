import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validations";
function Signup() {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });
  console.log(errors);
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <div>{errors.email}</div>}
        {/* touched ve onblur sayesinde inputa yazılan veri başka bir inputa girildiğinde eğer istenilen şartları sağlamazsa error yazısı çıkmasını sağlıyor */}
        <br />
        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div>{errors.password}</div>}
        <br />
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          value={values.passwordConfirm}
          name="passwordConfirm"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div>{errors.passwordConfirm}</div>
        )}
        <br />

        <button type="submit">Submit</button>
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default Signup;
