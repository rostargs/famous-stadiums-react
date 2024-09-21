import "./DownloadButton.scss";

const DownloadButton = ({ fileSrc, text }) => {
    return (
        <a href={fileSrc} download className="download-button">
            <button>{text}</button>
        </a>
    );
};

export default DownloadButton;
