import React from 'react';
import videoFile from '../Assets/video.mp4'

export default function BackgroundVideo() {
    return (
        <div>
            <video autoPlay loop muted className={"video"}>
                <source src={videoFile} type={"video/mp4"}/>
            </video>
        </div>
    );
}