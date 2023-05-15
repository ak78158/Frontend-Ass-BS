import { useState } from "react";
import MovieItem from "../../components/movieItem/movieItem";
import MyQueue from "../myQueue/myQueue";
import "./home.scss";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [myQueue, setMyQueue] = useState([]);

  const fetchMovie = async () => {
    const res = await fetch(
      "https://www.omdbapi.com/?s=action&apikey=4640ef30&page=1"
    );
    const resp = await res.json();

    console.log(resp.Search);
    setMovieList(resp.Search);
  };

  console.log(("myQueue home", myQueue));

  return (
    <div>
      <div className="fetchBtn">
        <button onClick={fetchMovie} className="fetchButton">
          Fetch
        </button>
      </div>
      <div className="moviesList">
        {movieList.map((movieItem) => {
          return (
            <MovieItem
              key={movieItem.imdbID}
              movieItem={movieItem}
              setMyQueue={setMyQueue}
              myQueue={myQueue}
              calledFyQueue={false}
            />
          );
        })}
      </div>
      <div className="myQueueList">
        <MyQueue myQueue={myQueue} setMyQueue={setMyQueue} />
      </div>
    </div>
  );
};

export default Home;
