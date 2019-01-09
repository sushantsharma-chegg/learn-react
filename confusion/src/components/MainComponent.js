import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import DishDetail from "./DishComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: COMMENTS,
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: null,
            showDishDetail: false
        };
    }

    componentDidMount() {
        console.log("Main component componentDidMount invoked");
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
        this.setState({ showDishDetail: true });
    }

    render() {
        console.log("Main component render invoked");
        const homePage = () =>{
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
        return( 
        <div className="App">
            <Header />
            <Switch>
                <Route path="/contactus" component={Contact} />
                <Route path="/home" component={homePage} />
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
                <Redirect to="/home" />
            </Switch>
            {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetail showDishDetail={this.state.showDishDetail}
                selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
            <Footer />
        </div>);
    }
}

export default Main;
