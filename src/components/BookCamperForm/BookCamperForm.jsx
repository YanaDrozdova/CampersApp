import css from './BookCamperForm.module.css';
import { Formik, Form, Field } from 'formik';
import clsx from 'clsx';

import Button from '../Button/Button.jsx';

export default function BookCamperForm() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={{}} onSubmit={{}}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="username"
            placeholder="Name*"
          />
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <Field
            className={css.field}
            type="text"
            name="date"
            placeholder="Booking date*"
          />
          <Field
            className={clsx(css.field, css.commentField)}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <Button type="submit" text="Send" className={css.submitBtn} />
        </Form>
      </Formik>
    </div>
  );
}
