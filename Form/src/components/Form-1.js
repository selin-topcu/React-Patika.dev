import { useFormik } from "formik";
import "./App.css";

function Form1() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "Selin",
      lastName: "Dayıoğlu",
      email: "slndayioglu@gmail.com",
      gender: "women",
      hobies: [],
      country: "Turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          value={values.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          value={values.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input value={values.email} name="email" onChange={handleChange} />
        <br />
        <span>Women</span>
        <input
          value="women"
          type="radio"
          name="gender"
          onChange={handleChange}
          checked={values.gender === "women"}
        />
        <span>Man</span>
        <input
          value="man"
          type="radio"
          name="gender"
          onChange={handleChange}
          checked={values.gender === "man"}
        />
        <br />
        <span>Sport</span>
        <input
          type="checkbox"
          name="hobies"
          value="sport"
          onChange={handleChange}
        />
        <br />
        <span>Music</span>
        <input
          type="checkbox"
          name="hobies"
          value="music"
          onChange={handleChange}
        />
        <br />
        <span>Art</span>
        <input
          type="checkbox"
          name="hobies"
          value="art"
          onChange={handleChange}
        />
        <br />
        <select value={values.country} name="country" onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
        </select>
        <br />
        <button type="submit">Submit</button>
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default Form1;
