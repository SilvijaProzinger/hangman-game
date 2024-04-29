const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "5px solid black",
      position: "absolute",
      top: "50px",
      right: "-26px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "5px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "110px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "5px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "204px",
      right: "-95px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "204px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

export const drawing = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
