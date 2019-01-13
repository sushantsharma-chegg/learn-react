import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

function RenderComments({comments}) {

let comment_render;

if (comments != null ) {

    comment_render = comments.map((comments) => {
        return(
            <div key={comments.id} className="col-12 col-md-5 m-1">
                <div className="component">

                    <ListGroupItem>
                        {comments.comment}
                    </ListGroupItem>
                    <ListGroupItem>
                        -- {comments.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))}
                    </ListGroupItem>
                </div>
            </div>
        )
    });

    return(
        <React.Fragment>
            <div className="header"><h4>Comments</h4></div>  
                <ListGroup>
                    {comment_render}
                </ListGroup>    
        </React.Fragment>
    );
    }
    else {
        return(
        <div>
        </div>
        );
    }
};

function RenderDishDetail({showDishDetail, dish}) { 
    if (showDishDetail !== false && dish != null )  {
        return(
            <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card>
        );
    }
    else {
        return (
        <div>
        </div>
        );
    }
};

function DishDetail({ dish, comments, showDishDetail}) {
    return (
    <React.Fragment>
        <div className="component">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDishDetail showDishDetail={showDishDetail} dish={dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments selectedDish={comments} />
            </div>
          </div>
        </div>
    </React.Fragment>
    )
};
    
export default DishDetail;