const Banner = ({image, text, alt}) => {
    return (
        <div className="container" id="image-container">
            <img src={image} className="banner" id="banner" alt={alt}/>
            <div className="overlay" id="overlay"></div>
            {text && <h1 className="text" id="image-text">{text}</h1>}
        </div>
    );
};

export default Banner;