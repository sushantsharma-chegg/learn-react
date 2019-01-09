import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card onClick={() => props.onClick(dish.id)}>
        <RenderDish dish={dish}/>
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
};

function RenderDish({dish}) {
  if (dish != null) {
    return(
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
          <CardImgOverlay>
            <CardTitle> {dish.name} </CardTitle>  
          </CardImgOverlay>
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

export default Menu;