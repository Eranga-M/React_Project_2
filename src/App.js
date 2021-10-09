import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return(
    <React.Fragment>
        <h1 className="text-center text-dark text-capitalize my-5"> Welcome to Tour Vision </h1>
        <div className="container">
  <div className="row">
    <div className="col"> <div class="card">
  <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Photography</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <a href="#" class="btn btn-primary">See More</a>
  </div>
</div> </div>

    <div className="col"> <div class="card">
  <img src="https://picsum.photos/201/301" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Travel</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <a href="#" class="btn btn-primary">See More</a>
  </div>
</div> </div>

    <div className="col"> <div class="card">
  <img src="https://picsum.photos/202/301" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Hiking</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <a href="#" class="btn btn-primary">See More</a>
  </div>
</div> </div>
  </div>
</div>
    </React.Fragment>
    );
};

export default App;