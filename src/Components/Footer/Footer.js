import React from "react"
import { BsEnvelopeAt } from "react-icons/bs"
import { FaPhone } from "react-icons/fa"

export default function Footer() {
  return (
    <div>
      <div className="px-10 py-10 bg-primary z-10 relative grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" space-y-5">
          <img src="/imgs/logo.png" alt="logo" />
          <p className=" leading-8 text-primaryLight">
            پکتو سامانه سفارش و خرید اینترنتی پک پذیرایی تک‌نفره برای سمینار،
            همایش‌، مجلس ختم و ترحیم، جلسه دفاع پایان نامه، تور گردشگری، مهمانی
            و سایر مراسم­‌ها است. وظیفه پکتو تهیه و ارسال بسته های پذیرایی با
            بهترین کیفیت و مناسب‌ترین قیمت در کمترین زمان ممکن و کمک به برگزاری
            هرچه آبرومندانه تر مراسم‌های شما است. همچنین مدیران محترم مدارس
            می‌توانند جهت سفارش هفتگی میان وعده سلامت دانش‌­آموزان از طریق
            مراجعه به صفحه ویژه مدارس در سایت پَکِتو اقدام نمایند.
          </p>
          <div className="text-primaryLight space-y-3">
            <p className="flex gap-2 items-center cursor-pointer hover:text-minorTX">
              <BsEnvelopeAt />
              hnie.ghorbani@gmail.com
            </p>
            <p className="flex gap-2 items-center cursor-pointer hover:text-minorTX">
              <FaPhone />
              02177300012
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <img src="./imgs/logo-anjoman.cf66575.png" alt="" />
            <img src="./imgs/logo-ecunion.7f2795e.png" alt="" />
            <img src="./imgs/enamad.png" alt="" />
          </div>
        </div>
        <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d146802.45382332455!2d51.476734371174224!3d35.718273801456405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2sus!4v1702482129299!5m2!1sfa!2sus"
              className="w-full rounded-xl"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/*end footer */}
      <div className="bg-zinc-800 px-10 py-1 text-center text-primaryLight">
        تمام حقوق برای پَکِتو محفوظ است
      </div>
    </div>
  )
}
