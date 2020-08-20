import React from 'react';
import '../css/bestproduct.css';
import { Container,  Col } from 'reactstrap' 
import { GrDiamond } from "react-icons/gr";
import { Link } from "react-router-dom";

const BestProduct = (props) => {
    const { category, name, src } = props;
    return(
        <Container fluid={true}>

            <Col xs="auto">
            <div className="BestProduct">
                <img src={src} alt="hello" className="center"/>
                <div className="title-container">
                    <p className="category">{ category }</p>
                    <h2 className="productTitle">{name}</h2>
                    <GrDiamond/>
                    <Link to="/collection" className="link nav-link">
                        <button type="button" className="shopButton">SHOP NOW</button>
                    </Link>
                    
                </div>
                <div style={{backgroundColor:"white", height:"1px"}}></div>
            </div>
            
            </Col>
            
        
        </Container>
        
    )
}






export default BestProduct;