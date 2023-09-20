import React from "react";
import { motion } from "framer-motion";

export default function ThirdSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.7 }}
    >
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #151c5214",
          height: "100vh",
          maxHeight: "300px",
          justifyItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              paddingBlock: "1rem",
              fontWeight: "300",
              paddingTop: "3rem",
            }}
          >
            New Content Heading
          </h2>

          <p
            style={{
              marginBlock: "1rem",
              fontWeight: "200",
              lineHeight: "2.1rem",
              maxWidth: "57ch",
            }}
          >
            Replace this with your new content. You can add your own text and
            descriptions here. Customize it as you need.
          </p>
        </div>
        <div style={{ flex: 2, maxWidth: "40%" }}>
          <img
            style={{
              objectFit: "cover",
              height: "300px",
              maxWidth: "100%",
            }}
            src="../../public/deniz-demirci-0UeHGWsFyHM-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}
