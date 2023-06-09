import useGlobalContext from "../custom Hooks/useGlobalContex";

function Home() {
  const { hits, isLoading,removePost } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
 

  return (
    <div className="stories-div">
      {hits.map((hit) => {
        const { title, author, objectID, num_comments, url } = hit;

        return (
          <div key={objectID}>
            <div className="card" >
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> comments
              </p>
              <div className="card-button">
                <a href={url} target="_blank">
                  Read More
                </a>
                <button onClick={()=>removePost(hit.objectID)}>Remove</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
