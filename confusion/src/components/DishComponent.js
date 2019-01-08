import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

    class DishDetail extends Component{
        constructor(props){
            super(props);
        };

        renderComments(selectedDish:object) {

            let comments:object,
            comment_render:const;

            if (selectedDish!= null && selectedDish.comments != null ) {
                
                comments = selectedDish.comments;

                comment_render = comments.map((comments) => {
                    return(
                        <div key={comments.id} className="col-12 col-md-5 m-1">
                        <React.Fragment>  
                            <ListGroupItem>
                                {comments.comment}
                            </ListGroupItem>
                            <ListGroupItem>
                                -- {comments.author}, {comments.date}
                            </ListGroupItem>
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
            };
        };

        renderDishDetail(dish:object) { 
            if (this.props.showDishDetail != false && dish != null )  {
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
            };
        };

        render(){

            return(
                <React.Fragment>
                    <div className="component">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                {this.renderDishDetail(this.props.selectedDish)}
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