import React, { Component } from 'react';
import { Grid, Menu, Dropdown, Sticky, Segment, List, Item } from 'semantic-ui-react';
import './MerchantMenus.css';
import Scrollspy from 'react-scrollspy';
import ProductCard from './ProductCard';
import CheckoutCard from './CheckoutCard';
import { getMerchantCategories, getMerchantProducts } from '../fetch/Merchants';

export default class MerchantProductCategories extends Component {
  constructor(props) {
    super(props);
    this.state = { merchantCategories: [], merchantProducts: [], sections: [] };
  }
  /////////// sticky ///////////

  state = { active: true }
  handleContextRef = contextRef => this.setState({ contextRef })
  handleToggle = () => this.setState({ active: !this.state.active })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount() {

    getMerchantCategories(this.props.currentMerchant).then((result) => {
      this.setState({ merchantCategories: result.data });
      let sections = [];
      result.data.map((category) => {
        sections.push("section-" + category.product_category_id);
      })
      this.setState({ sections });

    }).catch((error) => {

    })
    getMerchantProducts(this.props.currentMerchant).then((result) => {
      this.setState({ merchantProducts: result.data });
    }).catch((error) => {

    })
  }


  render() {

    const { active, contextRef } = this.state
    const { activeItem } = this.state


    return (
      <div ref={this.handleContextRef}>
        <Segment style={zeropad}>
          <Sticky context={contextRef} >
            <Segment style={zeropad}>
              <Menu secondary style={styleMenu}>
                <Scrollspy items={this.state.sections} style={{ display: "inherit" }} currentClassName="active" componentTag="section">
                  {
                    this.state.merchantCategories.map((category) => {
                      let productName = category.product_category_name.en;
                      return (
                        <Menu.Item href={"#section-" + category.product_category_id} active={activeItem === productName} name={category.product_category_name.en} onClick={this.handleItemClick} />
                      )
                    })
                  }
                </Scrollspy>
              </Menu>
            </Segment>
          </Sticky>
          <Grid stackable fluid centered columns={2}>
            <Grid.Column width={10}>
              <div>
                {
                  this.state.merchantCategories.map((category) => {
                    return (
                      <section id={category.product_category_id}>
                        <h1 style={styleHeaderProduct}>{category.product_category_name.en}</h1>
                        <Grid>
                          {
                            this.state.merchantProducts.map((product) => {
                              if (product.product_category === category.product_category_id) {
                                return (
                                  <Grid.Column width={8}>
                                    <ProductCard product={product} />
                                  </Grid.Column>
                                )
                              }

                            })
                          }
                        </Grid>
                      </section>
                    )
                  })
                }
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <Sticky style={stickyCheckoutCard} context={contextRef} offset={100} >
                <Segment style={zeropad}>
                  <CheckoutCard />
                </Segment>
              </Sticky>
            </Grid.Column>
          </Grid>
        </Segment>

      </div>
    )
  }
}

////////////// css /////////////////
const styleMenu = {
  background: 'white',
  padding: 4,
  paddingLeft: 30,
  paddingRight: 30,
  margin: 0,
};
const zeropad = {
  margin: 0,
  padding: 0,
};
const stickyCheckoutCard = {
  marginTop: 165,
  marginRight: 90,
};
const styleDivProduct = {
  margin: 90,
};
const styleHeaderProduct = {
  marginTop: 40,
  marginBottom: 40,
};