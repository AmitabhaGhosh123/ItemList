import React from 'react'

const Item = (props) => {
    const article = props.article;
    const thumbnail_url = props.thumbnail_url;
    return (
        <>
         <div className="col-md-6 mb-4 mb-lg-0">
          <div className="card">
            <h3 className="card-header">{article.title}</h3>
            <h4 className="publish">By: {article.author}</h4>
            <h4 className="publish">Published on: {article.created_at}</h4>
            <div className="card-body">
             <img src={thumbnail_url + article.image_url} alt="fittr image" />           
            </div>
          </div>
         </div>
        </>
    );
}

export default Item;