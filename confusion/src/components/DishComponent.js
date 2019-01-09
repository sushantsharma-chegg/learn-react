import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

    class DishDetail extends Component{

        componentDidMount() {
            console.log("Dish component componentDidMount invoked");
        }

        componentDidUpdate() {
            console.log("Dish component componentDidUpdate invoked");
        }

        renderComments(selectedDish) {

            let comments,
            comment_render;

            if ((selectedDish!= null ) && (selectedDish.comments != null )) {

                comments = selectedDish.comments;

                comment_render = comments.map((comments) => {
                    return(
                        <div key={comments.id} className="col-12 col-md-5 m-1">
                        <React.Fragment>
                            <div className="component">
                                <ListGroupItem>
                                    {comments.comment}
                                </ListGroupItem>
                                <ListGroupItem>
                                    -- {comments.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))}
                                </ListGroupItem>
                            </div>
                        </React.Fragment>
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

        renderDishDetail(dish,showDishDetail) { 
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

        render(){
            console.log("Dish component render invoked");
            return(
                <React.Fragment>
                    <div className="component">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                {this.renderDishDetail(this.props.selectedDish, this.props.showDishDetail)}
                            </div>
                        </div>
                    </div>
                    <div className="component">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                {this.renderComments(this.props.selectedDish)}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        };
    };
    
export default DishDetail;