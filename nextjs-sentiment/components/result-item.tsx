import { ResultItemProps, Result } from "@/interfaces";

const ResultItem: React.FC<ResultItemProps> = ({ result }) => {
  const out = result as Result;
  const algos = Object.keys(out);
  return (
    <>
      {algos.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "rgba(130, 130, 130, 0.4)",
              color: "white",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "17px",
              width: "85%",
            }}
          >
            <div
              style={{ fontWeight: "bold", color: "#fff200", marginTop: "5px" }}
            >
              {item}
            </div>
            {out[item] === 1 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="wrapper">
                  <div className="tick"></div>
                </div>
                <div style={{ fontWeight: "bold", color: "#0ae8ad" }}>
                  {"Positive"}
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="wrong-wrapper">
                  <div className="wrong"></div>
                </div>
                <div style={{ fontWeight: "bold", color: "red" }}>
                  {"Negative"}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ResultItem;
