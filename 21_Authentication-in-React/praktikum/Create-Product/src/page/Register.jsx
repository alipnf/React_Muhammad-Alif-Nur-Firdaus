import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "First name must be at least 3 characters")
        .required("Required"),
      lastName: Yup.string()
        .min(3, "Last name must be at least 3 characters")
        .required("Required"),
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
      // Lakukan proses registrasi
    },
  });

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className={`form-control ${formik.touched.firstName && formik.errors.firstName ? "is-invalid" : ""}`}
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="invalid-feedback">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className={`form-control ${formik.touched.lastName && formik.errors.lastName ? "is-invalid" : ""}`}
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="invalid-feedback">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${formik.touched.username && formik.errors.username ? "is-invalid" : ""}`}
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="invalid-feedback">{formik.errors.username}</div>
          ) : null}
        </div>

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

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "is-invalid" : ""}`}
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="invalid-feedback">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      <p className="mt-3">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}
