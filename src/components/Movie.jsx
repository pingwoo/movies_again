function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="movie card">
            {
                poster === 'N/A' ? (
                    <img
                    className="activator"
                    src={`https://via.placeholder.com/300x400?text=${title}`}
                    alt='Check movie1'/>
                ) : 
                    <img className="activator" src={poster} alt='Check movie2' />
                
            }
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                </span>
                <p>{year} <span className="right">{type}</span></p>
            </div>
        </div>
}

export { Movie };
