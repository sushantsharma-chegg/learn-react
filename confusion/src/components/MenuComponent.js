import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card onClick={() => props.onClick(dish.id)}>
        <RenderMenuItem dish={dish}/>
      </Card>
    </div>;
  });
  return <React.Fragment>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to={`/home`}>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    </React.Fragment>;
};

function RenderMenuItem({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardImgOverlay>
              <CardTitle> {dish.name} </CardTitle>
            </CardImgOverlay>
          </CardBody>
        </Link>
      </Card>
    );
  } else {
    return <div />;
  }
};  

export default Menu;