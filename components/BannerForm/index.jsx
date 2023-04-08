import React from "react";
import s from "./BannerForm.module.css";

function BannerForm({ title, para }) {
  return (
    <div className={s.banner_form}>
      <h2 className={s.banner_form__title}>{title}</h2>
      <p>{para}</p>

      <form className={s.search__form}>
        <fieldset>
          <label htmlFor="loc">Location</label>
          <input type="text" id="loc" placeholder="Newyork" />
        </fieldset>

        <fieldset>
          <label htmlFor="guests">No. of Guests</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="type">Room Type</label>
          <select>
            <option>King</option>
            <option>Queen</option>
            <option>Double</option>
          </select>
        </fieldset>

        <input type="submit" value="Search" className="" />
      </form>
    </div>
  );
}

export default BannerForm;
