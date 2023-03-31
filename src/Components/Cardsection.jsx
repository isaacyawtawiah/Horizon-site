import React from 'react'
import img1 from "../assets/c1.jpg"
import img2 from "../assets/c2.jpg"
import img3 from "../assets/c3.jpg"
import img4 from "../assets/c4.jpg"

const Cardsection = () => {
  return (
    <div>
        <div className="card-section">
        <div className="container-md mt-5">
            <div className="row justify-content-around text-center">
                <div className="card mr-2" style={{width: "14rem"}}>
                    <img src={img1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Interacting With Nature</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card mr-2" style={{width: "14rem"}}>
                    <img src={img2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Happiness Is Free</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card mr-2" style={{width: "14rem"}}>
                    <img src={img3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Community Is Good</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "14rem"}}>
                    <img src={img4} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Beach Life</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

      
    </div>
  )
}

export default Cardsection
