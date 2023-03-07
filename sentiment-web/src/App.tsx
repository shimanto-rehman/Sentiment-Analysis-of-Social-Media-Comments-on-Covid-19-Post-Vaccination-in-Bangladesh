import { useEffect, useState } from "react";
import reactLogo from "./assets/logo.png";
import "./App.css";
import {
  Box,
  Container,
  MenuItem,
  Paper,
  Select,
  CircularProgress,
  styled,
} from "@mui/material";
import { Algo, Result } from "./interfaces";
import ResultComponent from "./result-component";

function App() {
  const [result, setresult] = useState<Result>();
  const [text, settext] = useState("");
  const [algo, setalgo] = useState<Algo>("nn" as Algo.NN);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchBtn = document.getElementById("search-btn");
    const search = document.getElementById("search");
    const tip = document.getElementById("tip");

    let i = 0;
    let message = "Put Your Sentence here...";
    let typeSpeed = 100;

    // check if searchBtn, search and tip exist
    if (searchBtn && search && tip) {
      searchBtn.addEventListener("click", () => {
        search.style.width = "80%";
        search.style.paddingLeft = "60px";
        search.style.cursor = "text";
        search.focus();

        typeWriter();
      });

      search.addEventListener("keydown", () => {
        tip.style.visibility = "visible";
        tip.style.opacity = "1";
      });

      function typeWriter() {
        if (i < message.length) {
          search?.setAttribute("placeholder", message.slice(0, i + 1));
          i++;
          setTimeout(typeWriter, typeSpeed);
        }
      }
    }

    // remove the event listener
    return () => {
      searchBtn?.removeEventListener("click", () => {});
      search?.removeEventListener("keydown", () => {});
    };
  }, []);

  // Call the API
  async function getSentiment(sentence: string, algorithm: string) {
    let url = "http://127.0.0.1:5000/";

    if (algorithm === "nn") {
      url = url + "predict" + "?data=" + sentence;
    } else {
      url = url + "predict/nb" + "?data=" + sentence;
    }

    setIsLoading(true);

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setresult(data as Result);
          setIsLoading(false);
        }, 1000);
      });
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(130, 130, 130, 0.8)",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center!important",
          alignItems: "center!important",
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center", marginTop: "5rem" }}>
          <img src={reactLogo} height="170px" alt="alternatetext" />
          <h3 className="title" style={{ paddingTop: "2rem"}}>
            Sentiment analysis of social media comments on covid 19
            post-vaccination in Bangladesh
          </h3>
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
          <h1>
            <b>Predict</b> the <b>Sentence</b>
          </h1>
          <div className="search-container">
            <i
              id="search-btn"
              className="fa fa-search fa-2x"
              aria-hidden="true"
            ></i>
            <input
              type="text"
              id="search"
              onChange={(e) => {
                settext(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && text !== "") {
                  getSentiment(text, algo);
                }
              }}
              placeholder=""
              autoComplete="off"
            />
            <p id="tip">Hit enter to search</p>
          </div>
        </Box>

        {/* Spacing */}
        <Box sx={{ height: "5px" }}></Box>

        {/* Select Algorithm */}
        <Select
          id="selectAlgo"
          // border white style
          sx={{
            width: "200px",
            border: "1px solid #fff",
            borderRadius: "8px",
            color: "#fff",
          }}
          label="Select Algorithm"
          value={algo}
          onChange={(e) => {
            setalgo(e.target.value as Algo);
          }}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem className="dropdown-item" value={"nn"}>
            Neural Network
          </MenuItem>
          <MenuItem className="dropdown-item" value={"ml"}>
            Machine Learning
          </MenuItem>
        </Select>

        {/* Spacing */}
        <Box sx={{ height: "20px" }}></Box>

        {/* show json result */}
        {isLoading ? (
          <>
            <h2 style={{ color: "white" }}>Predicting...</h2>
            <CircularProgress color="success" />
          </>
        ) : (
          // 3
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginBottom: "5rem",
            }}
          >
            {result && <ResultComponent result={result} />}
          </div>
        )}
      </Box>
      <div style={{ width: "100%" }}>
        <div className="ag-format-container">
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  UI/Web&amp;Graph design for teenagers 11-17&#160;years old
                </div>

                <div className="ag-courses-item_date-box">
                  Start:
                  <span className="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  UX/UI Web-Design&#160;+ Mobile Design
                </div>

                <div className="ag-courses-item_date-box">
                  Start:
                  <span className="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Annual package "Product+UX/UI+Graph designer&#160;2022"
                </div>

                <div className="ag-courses-item_date-box">
                  Start:
                  <span className="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Graphic Design</div>

                <div className="ag-courses-item_date-box">
                  Start:
                  <span className="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Motion Design</div>

                <div className="ag-courses-item_date-box">
                  Start:
                  <span className="ag-courses-item_date">30.11.2022</span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Front-end development&#160;+ jQuery&#160;+ CMS
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">Digital Marketing</div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Interior Design</div>

                <div className="ag-courses-item_date-box">
                  Start:
                  <span className="ag-courses-item_date">31.10.2022</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
