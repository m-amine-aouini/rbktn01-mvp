import React, { Component } from 'react';
import { postProd } from './../../../services/ProductServices';
import { Redirect } from 'react-router-dom';

class MakeP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            madeProd: false,
            title: '',
            description: '',
            imageURL: '',
            cost: 0,
            county: ''
        }
        this.onPostProduct = this.onPostProduct.bind(this);
        this.on_change = this.on_change.bind(this);
    }
    onPostProduct(e) {
        e.preventDefault()
        let urlValidator = /[http:\/\/][https:\/\/]./;

        if (this.state.title.length === 0 ||
            this.state.description.length === 0 ||
            !urlValidator.test(this.state.imageURL) ||
            this.state.county.length === 0) {

            if (this.state.title.length === 0) alert('your title is empty')
            if (this.state.description.length === 0) alert('your description is empty')
            if (!urlValidator.test(this.state.imageURL)) alert('your url is not validated')
            if (this.state.county.length === 0) alert('you didn\'t write your county')

        } else {
            let { title, description, imageURL, cost, county } = this.state;

            let product = { title, description, imageURL, cost, county };
            product.seller_id = localStorage.getItem('_id')
            postProd(product, this.madeProduct.bind(this));
        }
    }
    madeProduct() {
        this.setState({ madeProd: true });
    }
    on_change(e) {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return !this.state.madeProd ? (
            <div>
                <form>
                    <label for="title">Product Title:</label>
                    <input type="text" name="title" onChange={e => this.on_change(e)}></input><br></br>
                    <label for="description">Description:</label>
                    <input type="text" name="description" onChange={e => this.on_change(e)}></input><br></br>
                    <label for="imageURL">Image URL:</label>
                    <input type="text" name="imageURL" onChange={e => this.on_change(e)}></input><br></br>
                    <label for="Price">Price:</label>
                    <input type="number" name="cost" onChange={e => this.on_change(e)}></input><br></br>
                    <label for="county">County:</label>
                    <input type="text" name="county" onChange={e => this.on_change(e)}></input><br></br>
                    <button onClick={this.onPostProduct}>Post Product</button>

                </form>

            </div>
        ) :
            (<Redirect to="myProducts" />)
    }
}

export default MakeP;