import React from "react"
import { Field, ErrorMessage } from "formik"

export default function Select({ label, items, id }) {
  return (
    <div className="text-start relative">
      <label htmlFor={id} className="text-sm text-start">
        {label}
      </label>

      <Field className="form-style3" as="select" id={id} name={id}>
        <option value="-1" className=" bg-darkBg">
          انتخاب کنید
        </option>

        {items &&
          items.map((item, index) => (
            <option
              key={item._id || index}
              value={item._id || item}
              label={item.title || item.name || item}
              className=" bg-darkBg"
            />
          ))}
      </Field>
      <ErrorMessage
        name={id}
        component="div"
        className="error form-error  md:w-1/2"
      />
    </div>
  )
}
