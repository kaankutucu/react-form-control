import { Formik } from 'formik';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Anywhere in your app!</h1>
      <Formik
          initialValues={{ email: '', password: '' , gender: '' , hobies: [], country:[] }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
              />
              {errors.password && touched.password && errors.password}

                <label htmlFor="gender">Gender</label>

                <span>Male</span>
                <input
                    type="radio"
                    name="gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.male}
                />

                <span>Famale</span>
                <input
                    type="radio"
                    name="gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.female}
                />


                <br/><br/><br/>


              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

                {JSON.stringify(values)}

                <br/><br/><br/>

                <input type="checkbox" name="hobies" value="football" onChange={handleChange}/> Football
                <input type="checkbox" name="hobies" value="basketball" onChange={handleChange} /> Basketball
                <input type="checkbox" name="hobies" value="volleyball" onChange={handleChange}/> Volleyball

                <br/><br/><br/>

                <select name="country" id="" onChange={handleChange} value={values.country}>
                    <option value="tr">TR</option>
                    <option value="en">En</option>
                    <option value="us">Usa</option>
                </select>
            </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
