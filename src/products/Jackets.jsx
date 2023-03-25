import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import jacket1 from "./images/jackets/11.png";
import jacket2 from "./images/jackets/12.png";
import jacket3 from "./images/jackets/13.png";
import jacket4 from "./images/jackets/14.png";
import jacket5 from "./images/jackets/15.png";
import style from "../App.css";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const navigate = useNavigate();
    return (
    <>
    <div className="backButton">
        <Button onClick={() => { navigate(-1); } }>&laquo; All Categories</Button>
    </div> 
    <CardGroup className="categories">
        <Card className="category" style={style}>
            <Card.Img variant="top" src={jacket1}/>
            <Card.Body>
                <Card.Title>WeWear Men's Jackets</Card.Title>
                <Card.Text>
                    Introducing the perfect addition to your wardrobe, our Men's Black Jacket!    
                    Crafted from premium black fabric, this jacket features a sleek and modern design that is both versatile and timeless
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={jacket2} />
            <Card.Body>
                <Card.Title>WeWear Women's Jacket</Card.Title>
                <Card.Text>
                    Introducing the perfect addition to your wardrobe, our Women's Blue Jacket!     
                    Crafted from premium black fabric, this jacket features a sleek and modern design that is both versatile and timeless.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={jacket3} />
            <Card.Body>
                <Card.Title>WeWear Leather Jacket</Card.Title>
                <Card.Text>
                    Unisex Red Leather Jacket!
                    Crafted from high-quality materials, this jacket is both durable and comfortable.    
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={jacket4}/>
            <Card.Body>
                <Card.Title>WeWear Limited Edition Jacket</Card.Title>
                <Card.Text>
                    Unisex Green Limited-Edition Jacket!
                    Limited edition jackets are made with high-quality materials and feature unique design elements.  
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={jacket5}/>
            <Card.Body>
                <Card.Title>WeWear Exclusive Jacket</Card.Title>
                <Card.Text>
                    Unisex Exclusive Jeans, Finished in Orange.
                    Suitable for exclusive events.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>    
    </CardGroup>
    <br></br>
    </>
    );
}