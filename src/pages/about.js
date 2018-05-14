import React, { Component } from 'react';
import styled from 'styled-components';

export default class About extends Component {


    // reloadHandler = (poop) => {
    //     console.log(poop);
    //     window.location.reload(true);
    // }

    render () {
        return (
            <div>
                <h1>About Us</h1>
                <p>
                Cray tote bag lo-fi kale chips taxidermy franzen. Normcore etsy disrupt, meggings tilde iPhone stumptown chicharrones. Hoodie chambray kickstarter kitsch lyft, narwhal vaporware actually shoreditch pinterest paleo dreamcatcher austin. Distillery kogi vaporware wolf. Freegan occupy crucifix flexitarian ramps gochujang mlkshk selvage. Waistcoat irony messenger bag, cardigan fixie shaman four loko roof party etsy.
                </p>



                    {/* eCommerce Shoprocket - start */}
                    {/* <Button onClick={() => {this.reloadHandler('poooop')}}>Load Shop</Button>
                  
                  <div className="sr-block sr-default" sr-meta="" sr-show-max="99" style={{visibility: 'hidden'}}>
                        <div className="sr-item sr-buy-widget sr-small">
                            <div className="sr-image-holder">
                                <img src="[IMAGESRC]/convert?w=460&h=460&fit=max&quality=100" className="sr-image" title="[NAME]" alt="[NAME]"/>
                            </div>
                            <div className="sr-product-details">
                                <div className="sr-name">[NAME]</div>
                                <div className="sr-strapline">[STRAPLINE] </div>
                                <div className="sr-price">[CURRENCY][PRICE]</div>           
                                <a className="sr-add-link" href="[ADDTOCART]" type="button">
                                    <div className="sr-add"><i className="fa fa-shopping-cart"></i> Buy Now</div>
                                </a>
                            </div>                              
                        </div>
                    </div> */}
                    {/* eCommerce Shoprocket - end */}                    



            </div>
        )
    }
}

const Button = styled.button`
    color: orange;
    margin-left: 40%;
    cursor: pointer;
`