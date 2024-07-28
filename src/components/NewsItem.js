import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div style={{display:'flex', justifyContent:"flex-end", position:"absolute",right:"0"}}>
            <span class="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img
            src={
              !imgUrl
                ? "https://ideogram.ai/assets/image/lossless/response/e3JNzatdTX6EZMN_LbbJOQ"
                : imgUrl
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Get details
            </a>
          </div>
        </div>
      </div>
    );
  }
}
