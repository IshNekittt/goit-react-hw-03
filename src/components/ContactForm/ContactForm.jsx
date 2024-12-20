import { Formik, Form, Field } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const startValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string(),
  number: Yup.number(),
});

export default function ContactForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={startValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <label>
          Name
          <Field name="name" />
        </label>
        <label>
          Number
          <Field name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
