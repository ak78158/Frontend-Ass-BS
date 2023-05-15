import { useState } from "react";
import "./movieItem.scss";

const MovieItem = ({ movieItem, myQueue, setMyQueue, calledFyQueue }) => {
  const [starRating, setStarRating] = useState(0);

  const handleMyQueueAdd = () => {
    const findIndex = myQueue.findIndex(
      (item) => item.imdbID === movieItem.imdbID
    );
    if (findIndex === -1) {
      setMyQueue((prev) => [...prev, { ...movieItem, starRating: starRating }]);
    } else {
      const newMyQueue = myQueue.filter((item) => {
        return item.imdbID !== movieItem.imdbID;
      });
      setMyQueue((prev) => [
        ...newMyQueue,
        { ...movieItem, starRating: starRating }
      ]);
    }
  };

  const handleMyQueueRemove = () => {
    const newMyQueue = myQueue.filter((item) => {
      return item.imdbID !== movieItem.imdbID;
    });
    console.log("newMyQueue", newMyQueue);
    setMyQueue([...newMyQueue]);
  };

  console.log("MyQueue", myQueue);

  return (
    <div className="movieItem">
      <div className="movieTitle">{movieItem.Title}</div>
      <img
        src={movieItem.Poster}
        alt={movieItem.Title}
        className="moviePoster"
      />
      <div className="starBtnContainer">
        {!calledFyQueue && (
          <button
            onClick={() => {
              setStarRating((prev) => {
                return Math.max(prev - 1, 0);
              });
            }}
          >
            -
          </button>
        )}
        <div>
          {new Array(calledFyQueue ? movieItem.starRating : starRating).fill(
            "⭐"
          )}
        </div>
        {!calledFyQueue && (
          <button
            onClick={() => {
              setStarRating((prev) => {
                return Math.min(prev + 1, 5);
              });
            }}
          >
            +
          </button>
        )}
      </div>
      {calledFyQueue ? (
        <button onClick={handleMyQueueRemove}>Remove</button>
      ) : (
        <button onClick={handleMyQueueAdd}>Add to MyQueue</button>
      )}
    </div>
  );
};

export default MovieItem;
