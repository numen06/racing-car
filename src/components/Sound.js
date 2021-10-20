import React from "react";

export default class Sound extends React.PureComponent {
    state = {
        audioUrl: '',
    };

    componentDidMount() {
        this.getAudio();
    }

    // 获取音频
    getAudio = () => {
        // 音乐播放
        const myAudio = new Audio()
        myAudio.preload = true; //
        // myAudio.controls = true;
        myAudio.loop = true;
        myAudio.src = "sounds/themebg.mp3";
        myAudio.play();
        document.getElementById("audioBox").appendChild(myAudio);
    };

    render() {
        return (
            <div id='audioBox'/>
        );
    }
}