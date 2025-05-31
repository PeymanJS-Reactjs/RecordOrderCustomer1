const CommentClient = () => {
    return (
      <div id="Comment">
            <div className="container">
                <div className="slides-container">
                    <div className="mySlides fade">
                        <div className="content__slider">
                            <div className="comment">
                                <div className="icon__comment">

                                </div>
                                <div className="text__comment">
                                    
                                </div>
                                <div className="commenter">
                                    <img src={} alt="commenter" />
                                    <div className="stars">
                                         <i class="fas fa-star"></i>
                                         <i class="fas fa-star"></i>
                                         <i class="fas fa-star"></i>
                                         <i class="fas fa-star"></i>
                                         <i class="far fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
        </div>
      </div>
    );
}
 
export default CommentClient;