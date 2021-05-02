import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../../icons/star.svg';
import './ReviewCard.css';
const ReviewCard = ({reviewData}) => {
    console.log(reviewData);
    const {name, profileImageURL, review,rating} = reviewData;
    console.log(rating);
    console.log(profileImageURL);
  
    return (
        <Col>
          <Card style={{width:'250px',height:'250px'}} className="d-flex flex-column justify-content-center align-items-center p-4 mb-5 review-card">
          <Image src={profileImageURL} style={{width:'80px',height:'80px'}} roundedCircle></Image>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center mt-2">
             <p>{name}</p>
             <small>{review}</small>
          </Card.Body>
          {/* {rating} */}
          <div id="full-stars-example">
            <div class="rating-group">
                <label aria-label="1 star" class="rating__label" for="rating-1">
                <Image src={star} width={20}></Image>
                </label>
                <label aria-label="2 stars" class="rating__label" for="rating-2">
                <Image src={star} width={20}></Image>
                </label>
               
                <label aria-label="3 stars" class="rating__label" for="rating-3">
                <Image src={star} width={20}></Image>
                </label>
                <label aria-label="4 stars" class="rating__label" for="rating-4">
                <Image src={star} width={20}></Image>

                </label>
               
                <label aria-label="5 stars" class="rating__label" for="rating-5">
                <Image src={star} width={20}></Image>
                </label>
                
            </div>
            
          </div>
          
          
          </Card>
          <div>
        
      </div>
        </Col>
    );
};

export default ReviewCard;