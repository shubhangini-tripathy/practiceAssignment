import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GridWithButton from './GridWithButton';
import styles from './style.module.css';

class DashBoard extends React.Component {
    render() {
        const sampleImages = ['https://www.steelheadstalkerstackle.com/wp-content/uploads/2017/10/shop-earn-redeem.png',
            'https://s3.amazonaws.com/s3.delivery.com/PointsPage/point-cycle.png',
            'https://mtiproducts.com/wp-content/uploads/2016/06/refferal.png'];

        return (
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Grid>
                        <Grid.Row columns={3}>
                            {sampleImages.map(
                                image => (<Grid.Column>
                                    <Image src={image} size='large' />
                                </Grid.Column>))}
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