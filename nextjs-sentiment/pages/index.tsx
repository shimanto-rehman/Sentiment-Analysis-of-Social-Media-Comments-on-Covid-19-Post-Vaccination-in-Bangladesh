import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

export default function Intro() {
  const router = useRouter();
  return (
    <div className="intro-effect">
      <img src="Chart.png" className="banner" alt="" />
      <div className="area">
        <ul className="circles hght">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center!important",
              alignItems: "center!important",
            }}
          >
            <Box sx={{ width: "100%", textAlign: "center", marginTop: "4rem" }}>
              <img src="/SentimentAnalysis.png" height="350px" alt="SUST" />
              <div style={{ marginTop: "2rem" }}>
                <h3 className="line-1 anim-typewriter-line-1">
                  Sentiment analysis of social media comments on covid 19
                </h3>
                <h3 className="line-2 anim-typewriter-line-2">
                  post-vaccination in Bangladesh.
                </h3>
              </div>
              <div
                style={{
                  margin: "auto",
                  width: "50%",
                  fontWeight: "200",
                }}
              >
                <div
                  style={{
                    color: "#eeeeee",
                    wordBreak: "break-word",
                    marginTop: "1rem",
                    fontSize: "11px",
                  }}
                >
                  This Initiative will expand Bangladeshi public understanding
                  about COVID-19 vaccine. The project's findings may help
                  Bangladesh's immunization program. The project's methods may be
                  used in other nations to gauge public opinion on COVID-19
                  immunization, aiding the worldwide battle against the virus.
                </div>
              </div>
              <svg>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </svg>
            </Box>
            <Box sx={{ width: "100%", textAlign: "center", marginTop: "1rem" }}>
              <div className="route-btn-container">
                <button
                  className="route-btn pulse"
                  onClick={() => {
                    router.push("/predict");
                  }}
                  style={{ marginBottom: "2rem" }}
                >
                  Let's Predict
                </button>
              </div>
            </Box>
          </Box>
        </ul>
      </div>
    </div>
  );
}
