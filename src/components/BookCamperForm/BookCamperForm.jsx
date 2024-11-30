import { Formik, Form, Field, ErrorMessage } from 'formik';
import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './BookCamperForm.module.css';

import Button from '../Button/Button.jsx';
import { addMonths } from 'date-fns'; // Правильний імпорт для addMonths
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const BookingSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimum 3 letters')
    .max(50, 'Maximum 50 letters')
    .required('Required'),
  email: Yup.string().required('Required'),
  date: Yup.array()
    .of(Yup.date().nullable()) // Перевірка, чи є валідні дати
    .required('Please select a date range')
    .test('dateRange', 'Please select a date range', value => {
      // Перевірка на те, чи не є значенням масиву порожній масив чи значення null
      return value && value.length === 2 && value[0] && value[1];
    }),
  comment: Yup.string().max(90, 'Maximum 90 letters'),
});

export default function BookCamperForm() {
  // const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // Handle form submission logic here
    console.log(values);
    // dispatch(addBooking(values));
    actions.resetForm();
    setStartDate(null); // Очищаємо значення дати початку
    setEndDate(null); // Очищаємо значення дати кінця
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ username: '', email: '', date: '', comment: '' }}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <Field
              className={css.field}
              type="text"
              name="username"
              placeholder="Name*"
            />
            <ErrorMessage
              name="username"
              component="span"
              className={css.error}
            />
            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
            <div className={css.field}>
              <DatePicker
                dateFormat="yyyy-MM-dd"
                placeholderText="Booking date*"
                className={css.datepicker} // Можна додати кастомні стилі для календаря
                selected={startDate}
                onChange={dates => {
                  onChange(dates);
                  setFieldValue('date', dates); // Update Formik state with the selected dates
                }}
                minDate={new Date()}
                maxDate={addMonths(new Date(), 3)}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                showDisabledMonthNavigation
                isClearable={true}
              />
            </div>
            <ErrorMessage name="date" component="span" className={css.error} />

            <Field
              className={clsx(css.field, css.commentField)}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage
              name="comment"
              component="span"
              className={css.error}
            />

            <Button type="submit" text="Send" className={css.submitBtn} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
