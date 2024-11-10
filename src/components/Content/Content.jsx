import DownloadButton from "../DownloadButton/DownloadButton";
import "./Content.scss";

const Content = ({ id, title, info, image, reversed = false }) => {
    return (
        <section id={id} className="content">
            <h2 className="content__title">{title}</h2>
            <article className={`content__article ${reversed && "content__article--reversed"}`}>
                <img src={image} alt={title} loading="lazy" />
                <div className="content__info">
                    <p>{info}</p>
                    <div className="content__download">
                        <DownloadButton text="Завантажити картинку" fileSrc={image} />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Content;
