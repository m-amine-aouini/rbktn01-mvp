import React, { Component } from 'react';

class MakeP extends Component {
    constructor(props) {
        super(props)
        this.state = {
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


    }
    on_change(e) {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
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
                    <button >Post Product</button>

                </form>

            </div>
        )
    }
}

export default MakeP;