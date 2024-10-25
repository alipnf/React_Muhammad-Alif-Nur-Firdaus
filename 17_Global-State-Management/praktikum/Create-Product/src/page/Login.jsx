import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Login data", values);
      // Lakukan proses login
    },
  });

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-feedback">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <p className="mt-3">
        Dont have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
