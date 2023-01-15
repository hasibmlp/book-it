import s from "./BannerImg.module.css";

export default function BannerImg() {
  return (
    <figure className={s.banner_img_figure}>
      <img className={s.banner_img} src="/img/main-photo.webp" alt="Banner" />
    </figure>
  );
}
