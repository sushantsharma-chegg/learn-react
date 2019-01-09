import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

function RenderComments({selectedDish}) {

let comments,
comment_render;

if ((selectedDish!= null ) && (selectedDish.comments != null )) {

    comments = selectedDish.comments;

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

function DishDetail(props) {
    return (
    <React.Fragment>
        <div className="component">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDishDetail showDishDetail={props.showDishDetail} dish={props.selectedDish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments selectedDish={props.selectedDish} />
            </div>
          </div>
        </div>
    </React.Fragment>
    )
};
    
export default DishDetail;