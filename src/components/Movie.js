import PropTypes from "prop-types";
import Link from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={"/movie/${id}"}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

/*
Error 발생 .. ?
Movie.PropTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // String을 가지는 Array
};
*/
export default Movie;
