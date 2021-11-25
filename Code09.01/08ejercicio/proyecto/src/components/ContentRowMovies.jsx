import React from "react";
import "../assets/css/app.css";

function ContentRowMovies() {
  return (
    <div>
      {/* <!-- Content Row Movies--> */}
      <div class="row">
        {/* <!-- Movies in Data Base --> */}
        <div class="col-md-4 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Movies in Data Base
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">21</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-film fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Total awards --> */}
        <div class="col-md-4 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    {" "}
                    Total awards
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">79</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-award fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Actors quantity --> */}
        <div class="col-md-4 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Actors quantity
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">49</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-user fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End movies in Data Base --> */}
    </div>
  );
}

export default ContentRowMovies;
