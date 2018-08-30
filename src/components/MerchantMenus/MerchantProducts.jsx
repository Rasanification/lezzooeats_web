import React, { Component } from 'react';
import { Grid, Menu,Sticky, Segment} from 'semantic-ui-react';
import '../../resources/MerchantMenus.css';
import Scrollspy from 'react-scrollspy';
// import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import CheckoutCard from './CheckoutCard';

export default class MerchantProducts extends Component {
  constructor(props) {
    super(props);
  }

  state = { active: true }
  handleContextRef = contextRef => this.setState({ contextRef })
  handleToggle = () => this.setState({ active: !this.state.active })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { active, contextRef } = this.state
    const { activeItem } = this.state

    return (
      <div ref={this.handleContextRef}>
        <Segment style={{padding:0,margin:0, }}>
          <Sticky context={contextRef} >
            <Segment style={{padding:0,margin:0}}>
              <Menu secondary style={{background: 'white',padding: 4,paddingLeft: 30,paddingRight: 30,margin: 0,}}>
                <Scrollspy items={this.props.sections} style={{ display: "inherit" }} currentClassName="active" componentTag="section">
                  {
                    this.props.merchantCategories.map((category) => {
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
          <Grid stackable fluid columns={2}>
            <Grid.Column width={10}>
              <div style={{padding: 50,}}>
                {
                  this.props.merchantCategories.map((category) => {
                    return (
                      <section id={"section-" + category.product_category_id}>
                        <h1 style={{marginTop: 40,marginBottom: 40,}}>{category.product_category_name.en}</h1>
                        <Grid stackable fluid>
                          {
                            this.props.merchantProducts.map((product) => {
                              if (product.product_category === category.product_category_id) {
                                return (
                                  <Grid.Column width={8}>
                                    {/* <ProductCard product={product} />*/}
                                    <ProductModal product={product}/>
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
            <Grid.Column width={5}>
              <Sticky style={{marginTop: 165,}} context={contextRef} offset={100} >

                  <CheckoutCard />
              </Sticky>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}
