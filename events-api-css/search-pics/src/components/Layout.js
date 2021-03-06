import React from "react";

const Layout = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      <div style={{ flexGrow: 1 }}>{props.children}</div>
      <footer
        style={{ marginTop: "5em", alignSelf: "center", marginBottom: "1.5em" }}
      >
        <h4>
          Powered by{" "}
          <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
            Usplash
          </a>{" "}
          and{" "}
          <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
            Pexels
          </a>{" "}
          © {new Date().getFullYear()}
        </h4>
      </footer>
    </div>
  );
};

export default Layout;
