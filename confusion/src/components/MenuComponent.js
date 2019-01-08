import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishComponent';

  class Menu extends Component{
    constructor(props){
      super(props);
      this.state = {
        selectedDish: null,
        showDishDetail: true
      };
    };
  
    onDishSelect(dish) {
      this.setState({selectedDish: dish});
      this.setState({showDishDetail: true});
    };

    renderDish(dish){
      if (dish != null) {
        return(
          <Card>
          <CardImgOverlay>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>  
                <CardText>{dish.description}</CardText>  
              </CardBody>
          </CardImgOverlay>
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

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>this.onDishSelect(dish)}>
                  <CardImg width="100%" object src={dish.image} alt={dish.name} />
                </Card>
              </div>
            );
        });

        return (
          <React.Fragment>
            <div className="container">
              <div className="row">
                {menu}
              </div>
            </div>
            <DishDetail selectedDish={this.state.selectedDish} />
          </React.Fragment>
        );
    }
  }
export default Menu;