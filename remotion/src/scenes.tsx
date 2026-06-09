import { AbsoluteFill, Img, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { colors, display, body, script } from "./theme";

// SCENE 1: Hook — "Ngopi di Sekolah?"
export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s1 = spring({ frame, fps, config: { damping: 12 } });
  const s2 = spring({ frame: frame - 12, fps, config: { damping: 14 } });
  const s3 = spring({ frame: frame - 24, fps, config: { damping: 14 } });
  const zoom = interpolate(frame, [0, 90], [1.15, 1.0]);
  return (
    <AbsoluteFill style={{ backgroundColor: colors.espresso }}>
      <Img
        src={staticFile("coffee1.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${zoom})`,
          opacity: 0.55,
        }}
      />
      <AbsoluteFill
        style={{
          background: `linear-gradient(180deg, rgba(42,24,16,0.3) 0%, rgba(42,24,16,0.85) 100%)`,
        }}
      />
      {/* Steam circles */}
      {[0, 1, 2, 3, 4].map((i) => {
        const delay = i * 6;
        const y = interpolate((frame - delay) % 90, [0, 90], [200, -400]);
        const op = interpolate((frame - delay) % 90, [0, 30, 70, 90], [0, 0.4, 0.2, 0]);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${30 + i * 8}%`,
              bottom: "20%",
              width: 80 + i * 20,
              height: 80 + i * 20,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.5)",
              filter: "blur(20px)",
              transform: `translateY(${y}px)`,
              opacity: op,
            }}
          />
        );
      })}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 60 }}>
        <div
          style={{
            fontFamily: script,
            fontSize: 72,
            color: colors.accent,
            opacity: s1,
            transform: `translateY(${interpolate(s1, [0, 1], [40, 0])}px) rotate(-4deg)`,
            marginBottom: -20,
          }}
        >
          eh, kamu...
        </div>
        <div
          style={{
            fontFamily: display,
            fontSize: 220,
            color: colors.cream,
            lineHeight: 0.95,
            textAlign: "center",
            opacity: s2,
            transform: `scale(${interpolate(s2, [0, 1], [0.7, 1])})`,
            letterSpacing: 2,
            textShadow: "0 8px 30px rgba(0,0,0,0.5)",
          }}
        >
          NGOPI
          <br />
          <span style={{ color: colors.caramel }}>DI SEKOLAH?</span>
        </div>
        <div
          style={{
            fontFamily: body,
            fontWeight: 700,
            fontSize: 36,
            color: colors.creamLight,
            opacity: s3,
            transform: `translateY(${interpolate(s3, [0, 1], [30, 0])}px)`,
            marginTop: 40,
            letterSpacing: 4,
          }}>
          YES, BISA BANGET
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// SCENE 2: Coffee Menu
export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleS = spring({ frame, fps, config: { damping: 14 } });
  const items = ["AMERICANO", "CAPPUCCINO", "LATTE", "ESPRESSO"];
  return (
    <AbsoluteFill style={{ backgroundColor: colors.cream }}>
      <Img
        src={staticFile("coffee2.jpg")}
        style={{
          position: "absolute",
          right: -100,
          top: 0,
          height: "100%",
          width: "70%",
          objectFit: "cover",
          transform: `translateX(${interpolate(frame, [0, 40], [200, 0], { extrapolateRight: "clamp" })}px)`,
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          background: `linear-gradient(90deg, ${colors.cream} 0%, ${colors.cream} 35%, transparent 60%)`,
        }}
      />
      <div style={{ padding: 70, paddingTop: 180 }}>
        <div
          style={{
            fontFamily: script,
            fontSize: 64,
            color: colors.caramel,
            opacity: titleS,
            transform: `translateX(${interpolate(titleS, [0, 1], [-50, 0])}px)`,
            marginBottom: -10,
          }}
        >
          our
        </div>
        <div
          style={{
            fontFamily: display,
            fontSize: 180,
            color: colors.espresso,
            lineHeight: 0.9,
            opacity: titleS,
            transform: `translateX(${interpolate(titleS, [0, 1], [-80, 0])}px)`,
            letterSpacing: 1,
          }}
        >
          COFFEE
          <br />
          MENU
        </div>
        <div style={{ marginTop: 80 }}>
          {items.map((it, i) => {
            const s = spring({ frame: frame - 25 - i * 10, fps, config: { damping: 16 } });
            return (
              <div
                key={it}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  marginBottom: 30,
                  opacity: s,
                  transform: `translateX(${interpolate(s, [0, 1], [-60, 0])}px)`,
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: colors.caramel,
                  }}
                />
                <div
                  style={{
                    fontFamily: display,
                    fontSize: 72,
                    color: colors.espresso,
                    letterSpacing: 2,
                  }}
                >
                  {it}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// SCENE 3: Non-Coffee — playful color burst
export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const imgS = spring({ frame, fps, config: { damping: 14 } });
  const titleS = spring({ frame: frame - 15, fps, config: { damping: 14 } });

  const tags = [
    { label: "MATCHA", color: "#9bbf6e", x: "8%", y: "8%", delay: 28 },
    { label: "CHOCO", color: "#8b4513", x: "65%", y: "12%", delay: 34 },
    { label: "STRAWBERRY", color: "#e88aab", x: "5%", y: "78%", delay: 40 },
    { label: "TARO", color: "#a78bfa", x: "60%", y: "82%", delay: 46 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.creamLight }}>
      {/* burst rings */}
      {[0, 1, 2].map((i) => {
        const s = spring({ frame: frame - i * 4, fps, config: { damping: 18 } });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 1400,
              height: 1400,
              borderRadius: "50%",
              border: `3px solid ${colors.caramel}`,
              opacity: 0.15,
              transform: `translate(-50%,-50%) scale(${interpolate(s, [0, 1], [0, 1 + i * 0.15])})`,
            }}
          />
        );
      })}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <Img
          src={staticFile("drinks.jpg")}
          style={{
            width: "78%",
            height: "62%",
            objectFit: "cover",
            borderRadius: 40,
            transform: `scale(${interpolate(imgS, [0, 1], [0.6, 1])}) rotate(${interpolate(imgS, [0, 1], [-6, 0])}deg)`,
            opacity: imgS,
            boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
          }}
        />
      </AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleS,
          transform: `translateY(${interpolate(titleS, [0, 1], [-40, 0])}px)`,
        }}
      >
        <div style={{ fontFamily: script, fontSize: 60, color: colors.caramel, marginBottom: -10 }}>
          gak suka kopi?
        </div>
        <div
          style={{
            fontFamily: display,
            fontSize: 150,
            color: colors.espresso,
            letterSpacing: 2,
            lineHeight: 0.9,
          }}
        >
          NON-COFFEE
        </div>
      </div>
      {tags.map((t) => {
        const s = spring({ frame: frame - t.delay, fps, config: { damping: 10 } });
        return (
          <div
            key={t.label}
            style={{
              position: "absolute",
              left: t.x,
              top: t.y,
              background: t.color,
              color: "white",
              padding: "14px 28px",
              borderRadius: 999,
              fontFamily: body,
              fontWeight: 900,
              fontSize: 32,
              letterSpacing: 2,
              opacity: s,
              transform: `scale(${s}) rotate(${interpolate(s, [0, 1], [-15, -4])}deg)`,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            {t.label}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// SCENE 4: Vibe — happy students
export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const zoom = interpolate(frame, [0, 120], [1.0, 1.12]);
  const overlayS = spring({ frame: frame - 10, fps, config: { damping: 16 } });
  const lineS = spring({ frame: frame - 30, fps, config: { damping: 16 } });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.espresso }}>
      <Img
        src={staticFile("students.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${zoom})`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `linear-gradient(180deg, rgba(42,24,16,0.1) 30%, rgba(42,24,16,0.95) 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 200,
          left: 60,
          right: 60,
        }}
      >
        <div
          style={{
            fontFamily: script,
            fontSize: 56,
            color: colors.accent,
            opacity: overlayS,
            transform: `translateY(${interpolate(overlayS, [0, 1], [30, 0])}px)`,
            marginBottom: -10,
          }}
        >
          vibesnya...
        </div>
        <div
          style={{
            fontFamily: display,
            fontSize: 170,
            color: colors.cream,
            lineHeight: 0.9,
            opacity: overlayS,
            letterSpacing: 1,
          }}
        >
          SERU
          <br />
          BARENG
          <br />
          <span style={{ color: colors.caramel }}>TEMAN!</span>
        </div>
        <div
          style={{
            marginTop: 40,
            height: 4,
            background: colors.accent,
            transform: `scaleX(${lineS})`,
            transformOrigin: "left",
            width: "60%",
          }}
        />
        <div
          style={{
            fontFamily: body,
            fontWeight: 700,
            fontSize: 32,
            color: colors.creamLight,
            marginTop: 24,
            opacity: lineS,
            letterSpacing: 2,
          }}
        >
          HARGA PELAJAR · KUALITAS PRO
        </div>
      </div>
    </AbsoluteFill>
  );
};

// SCENE 5: CTA / Brand
export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoS = spring({ frame, fps, config: { damping: 12 } });
  const subS = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const locS = spring({ frame: frame - 28, fps, config: { damping: 14 } });
  const pulse = 1 + Math.sin(frame / 8) * 0.03;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 40%, ${colors.caramel} 0%, ${colors.caramelDark} 50%, ${colors.espresso} 100%)`,
      }}
    >
      {/* floating beans */}
      {Array.from({ length: 12 }).map((_, i) => {
        const x = (i * 137) % 1080;
        const drift = Math.sin((frame + i * 20) / 30) * 20;
        const y = ((frame * (1 + (i % 3) * 0.3) + i * 200) % 2200) - 200;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x + drift,
              top: y,
              width: 30,
              height: 45,
              background: colors.espresso,
              borderRadius: "50%",
              opacity: 0.3,
              transform: `rotate(${(frame + i * 30) * 2}deg)`,
            }}
          />
        );
      })}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 60 }}>
        <div
          style={{
            fontFamily: script,
            fontSize: 70,
            color: colors.cream,
            opacity: logoS,
            transform: `rotate(-5deg) scale(${interpolate(logoS, [0, 1], [0.5, 1])})`,
            marginBottom: -10,
          }}
        >
          welcome to
        </div>
        <div
          style={{
            fontFamily: display,
            fontSize: 230,
            color: colors.cream,
            lineHeight: 0.9,
            opacity: logoS,
            transform: `scale(${pulse})`,
            letterSpacing: 4,
            textShadow: "0 10px 40px rgba(0,0,0,0.4)",
            textAlign: "center",
          }}
        >
          KOPI
          <br />
          MITRA
        </div>
        <div
          style={{
            width: 200,
            height: 4,
            background: colors.cream,
            marginTop: 30,
            opacity: subS,
            transform: `scaleX(${subS})`,
          }}
        />
        <div
          style={{
            fontFamily: body,
            fontWeight: 900,
            fontSize: 36,
            color: colors.cream,
            marginTop: 30,
            opacity: subS,
            letterSpacing: 6,
            textAlign: "center",
          }}
        >
          SMK MITRA INDUSTRI
        </div>
        <div
          style={{
            marginTop: 60,
            padding: "24px 50px",
            background: colors.cream,
            borderRadius: 999,
            opacity: locS,
            transform: `scale(${locS})`,
          }}
        >
          <div
            style={{
              fontFamily: body,
              fontWeight: 900,
              fontSize: 38,
              color: colors.espresso,
              letterSpacing: 2,
            }}
          >
            KUNJUNGI KAMI!
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
