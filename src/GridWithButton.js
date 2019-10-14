import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import styles from './style.module.css';

class GridWithButton extends React.Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/buttoncontent' />
        }
    }
    render() {
        const sampleData = [['https://objective-neumann-2002d8.netlify.com/static/media/image.d48ff2b2.png', 'Your feedback is important and has value.let us help you voice be heard and get started earning your rewards and points.Cash in or donate to your favorite charity.its up to you'], [
            'https://objective-neumann-2002d8.netlify.com/static/media/image.d48ff2b2.png', 'Go in quality insights from your most important partners,your customers and future customer.Get feedback on your company.and other companies in tech industry']];
        const buttonText = ['Singup with LinkedIn', 'Signin with LinkedIn'];

        return (

            <Grid columns='equal' className={styles.lowercontainercolor}>
                <Grid.Column><p className={styles.font}>Companies</p></Grid.Column>
                <Grid.Column><p className={styles.font}>Users</p></Grid.Column>
                <Grid.Row>
                    {sampleData.map(
                        (data, i) => (<Grid.Column key={i}>
                            <Image src={data[0]} size='medium' />
                            <Header as='h2' disabled >
                                {data[1]}
                            </Header>
                            <button className={styles.button} primary onClick={this.setRedirect}>{buttonText[i]}</button>
                        </Grid.Column>))}
                </Grid.Row>
                {this.renderRedirect()}
            </Grid>

        )
    }
}
export default GridWithButton;
