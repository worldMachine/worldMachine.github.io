import React from "react";
import Lottie from "lottie-react-web";

export default function LottieAnimation(props: any) {
  const { animation, height, width, autoplay, loop } = props;
  return (
    <Lottie
      width={width}
      height={height}
      options={{
        animationData: animation,
        autoplay: autoplay,
        loop: loop,
      }}
    />
  );
}
