import MovieItem from "../../components/movieItem/movieItem";
import "./myQueue.scss";

const MyQueue = ({ myQueue, setMyQueue }) => {
  return (
    <div>
      <div className="myQueueHeading">My Queue</div>
      <div className="moviesList">
        {myQueue?.map((movieItem) => {
          return (
            <MovieItem
              movieItem={movieItem}
              myQueue={myQueue}
              calledFyQueue={true}
              setMyQueue={setMyQueue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyQueue;
