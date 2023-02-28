import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import black from "../components/img/black.png";
import blue from "../components/img/blue.png";
import red from "../components/img/red.png";
import green from "../components/img/green.png"
import orange from "../components/img/orange.png"
import style from "../App.css";

export default function Products() {
    return (
    <><CardGroup>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={black} />
            <Card.Body>
                <Card.Title>WeWear Men's T-Shirt</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem
                    officia accusantium maiores quisquam dolorum?
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
            <Card.Img variant="top" src={blue} />
            <Card.Body>
                <Card.Title>WeWear Women's T-Shirt</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem
                    officia accusantium maiores quisquam dolorum?
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
            <Card.Img variant="top" src={red} />
            <Card.Body>
                <Card.Title>WeWear Kids Short Sleeve T-Shirt</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem
                    officia accusantium maiores quisquam dolorum?
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
    <CardGroup>
        <Card className="category2" style={style}>
            <Card.Img variant="top" src={green} />
            <Card.Body>
                <Card.Title>WeWear Oversized T-Shirt</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem
                    officia accusantium maiores quisquam dolorum?
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category2" style={style}>
            <Card.Img variant="top" src={orange} />
            <Card.Body>
                <Card.Title>WeWear Long Sleeve Shirt</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem
                    officia accusantium maiores quisquam dolorum?
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardGroup><br></br></>
    );
}