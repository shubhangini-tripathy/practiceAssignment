import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GridWithButton from './GridWithButton';
import styles from './style.module.css';

class DashBoard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <Image src='https://www.steelheadstalkerstackle.com/wp-content/uploads/2017/10/shop-earn-redeem.png' size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://s3.amazonaws.com/s3.delivery.com/PointsPage/point-cycle.png' size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://mtiproducts.com/wp-content/uploads/2016/06/refferal.png' size='large' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Typography component="div" className={styles.uppercontainercolor} />
                </Container>
                <CssBaseline />
                <Container fixed className={styles.lowercontainercolor}>
                    <GridWithButton />
                    <Typography component="div" />

                </Container>
            </React.Fragment>
        )
    }
}
export default DashBoard;