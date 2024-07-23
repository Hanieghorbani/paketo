import React from "react"
import {  Field, ErrorMessage } from "formik"

export default function TextArea({label,id,style,width,placeholder}) {
  return (
    <div className={`text-start relative ${width}`}>
      <label htmlFor={id} className="text-sm mb-1">
        {label}
      </label>
      <Field
        as="textarea"
        id={id}
        name={id}
        className={style ? style : "form-comment h-40"}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={id}
        component="div"
        className="error form-error  md:w-1/2"
      />
    </div>
  )
}
