import React, { Component } from 'react';
import { Container,Grid, Input } from 'semantic-ui-react';
import MerchantCard from './MerchantCard';
class Merchants extends Component {
    render() {
        return (
        <Container>
            <Input size='massive' icon='search' placeholder='Search...' fluid/>
            <br />
            <Grid doubling stackable columns={3}>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
                    <Grid.Column>
                        <MerchantCard />
                    </Grid.Column>
            </Grid>
        </Container>
        );
    }
}
// this is comment
export default Merchants;
