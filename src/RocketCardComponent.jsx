import React from 'react';

export default props => (
            <div className="card grow" style={{"width": "20rem"}}>
            <img className="card-img-top img-fluid" src={props.image} alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">{props.name}</h4>
              <p className="card-text">
              </p>
              <a href= {props.wikiURL} className="btn btn-primary">
                Wiki link
              </a>
            </div>
          </div>

        );

