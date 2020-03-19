import React from 'react';

const WandCard = props => {
    const wand = props.wand;
    const core = props.core;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={wand.imageUrl}
              alt={core}
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">
             <span>{wand.core}</span>
            </h5>
            <small className="card-text">{wand.length}</small>
          </div>
        </div>
      </div>
    );
  };
  
  export default WandCard;
  