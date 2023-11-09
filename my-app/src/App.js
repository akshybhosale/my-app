import "./App.css";
import Forms from "./compoents/Forms";
import StateHook from "./compoents/StateHook";
// import Video from "./compoents/video";
// import videos from "./data/data";
// import PlayButton from "./compoents/playButton";

// import Statecomp from "./compoents/Statecomp";
function App() {
  return (
    <div>
      <Forms />
      <StateHook />
      {/* <div className="App">
        <div>
          {videos.map((video) => (
            <Video
              title={video.title}
              views={video.views}
              time={video.time}
              channels={video.channels}
              id={video.id}
            ></Video>
          ))}
        </div>
        <div className="play-button">
          <PlayButton
            message="this  is play button"
            onClick={() => console.log("playys")}
          >
            Play
          </PlayButton>
          {/* <PlayButton message="this  is play button" onClick={()=>console.log("playys")}>Pause</PlayButton> */}
        {/* </div>
      </div>
      <hr />
      <Statecomp name="Akshay" /> */}
    </div>
  );
}

export default App;
