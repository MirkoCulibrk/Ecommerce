import React, { Component } from 'react'
import data from '../../fakeData.json';
import ProductList from './Product/ProductList';
import SortHeadings from './Sorting/SortHeadings';
import Sort from './Sorting/Sort.js';
import '../style.scss';
export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            products:data.products,
            sort:""
        }
    }
    sortProducts=(event)=>{
        const sort=event.target.value;
        this.setState(prevState=>({
            sort:sort,
            //first making cloned products and sort it
            products:this.state.products.slice().sort((a,b)=>(
                sort==="lowest"?((a.price<b.price)?-1:1):sort==="highest"?((a.price>b.price)?-1:1):((a.id<b.id)?1:-1)
            ))
        }));
    }
    render() {
        console.log(data);
        console.log('hej')
        return (
            <section className="container d-flex" id="products">
                {/* filters and sort */}
                <div className="col-lg-3 sorting">
                    <h1 className="text-uppercase">Our Products</h1>
                    <SortHeadings title={'Headphones'} categories={["wired","wireless"]}></SortHeadings>
                    <SortHeadings title={'Colors'} categories={["Black", "Yellow","Red"]}></SortHeadings>
                </div>
                {/* products */}
                <div className="col-lg-9 items d-flex flex-lg-wrap ">
                    <div className="row">

                        <Sort sortProducts={this.sortProducts} sort={this.state.sort} ></Sort>
                    </div>
                    <div className="row">

                        <ProductList data={this.state.products}></ProductList>
                    </div>
                </div>
            </section>
        )
    }
}
