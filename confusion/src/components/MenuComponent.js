import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


  class Menu extends Component{

    componentDidMount() {
      console.log("Menu component componentDidMount invoked");
    }

    renderDish(dish){
      if (dish != null) {
        return(
          <Card>
          <CardImgOverlay>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle> {dish.name} </CardTitle>  
                <CardText> {dish.description}</CardText>  
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

      console.log("Menu component render invoked");

        const menu = this.props.dishes.map((dish) => {
            return <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" object src={dish.image} alt={dish.name} />
                </Card>
              </div>;
        });

        return (
          <React.Fragment>
            <div className="container">
              <div className="row">
                {menu}
              </div>
            </div>
          </React.Fragment>
        );
    }
  }
export default Menu;