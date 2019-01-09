import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from "./DishComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
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

        return( 
        <div className="App">
            <Header />
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetail showDishDetail={this.state.showDishDetail}
                selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            <Footer />
        </div>);
    }
}

export default Main;
