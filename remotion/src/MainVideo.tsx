import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { Scene1, Scene2, Scene3, Scene4, Scene5 } from "./scenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-bottom-left" })}
          timing={linearTiming({ durationInFrames: 18 })}
        />
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene3 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene4 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 22 })}
        />
        <TransitionSeries.Sequence durationInFrames={185}>
          <Scene5 />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
