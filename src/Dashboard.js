import React from 'react';
import { Grid, Image, Header, Statistic } from 'semantic-ui-react';
import GridWithButton from './GridWithButton';
import styles from './style.module.css';


class DashBoard extends React.Component {
    render() {
        const sampleData = [['https://objective-neumann-2002d8.netlify.com/static/media/image.d48ff2b2.png', 'Easy lookup your favourite product and services'], [
            'https://objective-neumann-2002d8.netlify.com/static/media/image.d48ff2b2.png', 'Rate and product/service and provide feedback'], [
            'https://objective-neumann-2002d8.netlify.com/static/media/image.d48ff2b2.png', 'We go to work and get you paid for your feedback']];

        return (
            <React.Fragment>
                <Grid>
                    <Grid.Column width={2} />
                    <Grid.Column width={12}>
                        <p className={styles.font}>Earning Reward is as easy as 1,2,3</p>
                        <Grid columns='equal'>
                            <Grid.Row>
                                {sampleData.map(
                                    (data, i) => (<Grid.Column key={i}>
                                        <Image src={data[0]} size='medium' />
                                        <Statistic.Group widths='four'>
                                            <Statistic color='teal' >
                                                <Statistic.Value >
                                                    {i + 1}</Statistic.Value>
                                            </Statistic>
                                        </Statistic.Group>
                                        <Header as='h2' disabled >
                                            {data[1]}
                                        </Header>
                                    </Grid.Column>))}
                            </Grid.Row>
                            <Grid.Row>
                                <GridWithButton />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
}
export default DashBoard;
