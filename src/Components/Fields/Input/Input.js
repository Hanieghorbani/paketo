import React from "react"
import { Field, ErrorMessage } from "formik"
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa"
import { MdDriveFileRenameOutline } from "react-icons/md"
export default function Input({
  label,
  id,
  type,
  isVisible,
  setIsVisible,
  pass,
  style,
  icon,
  width,
  placeholder
}) {
  const icons = {
    FaPhoneAlt: <FaPhoneAlt />,
    FaEnvelope: <FaEnvelope />,
    FaUser: <FaUser />,
    MdDriveFileRenameOutline: <MdDriveFileRenameOutline />,
  }
  return (
    <div className={`text-start relative ${width}`}>
      <label htmlFor={id} className="text-sm mb-3">
        {label}
      </label>
      <Field
        className={style ? style : "form-content"}
        type={type ? type : "text"}
        id={id}
        name={id}
        placeholder={placeholder}
      />
      <ErrorMessage name={id} component="div" className="error form-error text-red-600 text-[12px]" />
      {pass && (
        <div>
          {isVisible ? (
            <MdOutlineVisibility
              onClick={() => setIsVisible(false)}
              className=" cursor-pointer absolute top-9 left-4 text-primary"
            />
          ) : (
            <MdOutlineVisibilityOff
              onClick={() => setIsVisible(true)}
              className=" cursor-pointer absolute top-9 left-4 text-primary"
            />
          )}
        </div>
      )}
      {icon && (
        <div className="absolute top-9 left-4 text-primary">{icons[icon]}</div>
      )}
    </div>
  )
}
