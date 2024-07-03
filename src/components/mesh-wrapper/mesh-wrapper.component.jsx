import React from "react";
import { MeshGradientRenderer } from "@johnn-e/react-mesh-gradient";
import "./mesh-wrapper.styles.scss";

const MeshWrapper = ({ children }) => {
  return (
    <MeshGradientRenderer
      className="gradient"
      colors={["#65185b", "#3a1437", "#261865", "#3a1437", "#65185b"]}
      backgroundColor="#041023"
      wireframe={true}
      speed={0.005}
    >
      {children}
    </MeshGradientRenderer>
  );
};

export default MeshWrapper;
