import React from "react";

const videoDetail = ({video}) => {

    if(!video) {
        return <div>Loading....</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return ( 
        <div>
            <div className="ui embed">
                <iframe title="Video" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default videoDetail;