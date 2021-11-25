import React from "react";
import "../assets/css/app.css";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";

function ContentWrapper() {
  return (
    <div>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" class="d-flex flex-column"></div>
      {/* <!-- End of Content Wrapper --> */}
      <div>
        <TopBar />
        <ContentRowTop />
        <Footer />
      </div>
    </div>
  );
}

export default ContentWrapper;
