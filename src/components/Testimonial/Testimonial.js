import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HeaderTop from '../HeaderTop/HeaderTop';
import ReviewCard from '../ReviewCard/ReviewCard';
const Testimonial = () => {
    const reviews = [
        {
            name:"John Doe",
            profileImageURL:"https://i.ibb.co/jHPnKKp/p-1.jpg",
            review:"Awesome",
            rating:"5"
        },
        {
        
            name:"",
            profileImageURL:"https://i.ibb.co/09p8gNp/face-4.jpg",
            review:"Very nice!!",
            rating:""
        },
        {
            name:"",
            profileImageURL:"https://i.ibb.co/rZC4tzk/face-2.jpg",
            review:"Good job!",
            rating:""
        },
        {
            name:"",
            profileImageURL:"https://i.ibb.co/SQvbL04/p-3.jpg",
            review:"Creative",
            rating:""
        }
      ];
    return (
        <div>
        <HeaderTop/>
            <Container className="pb-5 mt-5">
            <Row className="flex-wrap">
             {
                  reviews.map(review => <ReviewCard  reviewData={review}></ReviewCard> )
             } 
             {
                  reviews.map(review => <ReviewCard  reviewData={review}></ReviewCard> )
             }       
             </Row>
        </Container>
        </div>
    );
};

export default Testimonial;