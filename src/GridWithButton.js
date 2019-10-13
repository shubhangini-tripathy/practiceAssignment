import React from 'react';
import { Grid, Image, Button} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'

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
        return (
            <Grid>
                <Grid.Row columns={2}>
                    {this.renderRedirect()}
                    <Grid.Column>
                        <Image src='https://icon-library.net/images/icon-company/icon-company-4.jpg' size='large' />
                        <div>
                            <Button primary onClick={this.setRedirect}>Primary</Button>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://p7.hiclipart.com/preview/802/535/682/users-group-computer-icons-membership.jpg' size='large' />
                        <div>
                            <Button primary onClick={this.setRedirect}>Primary</Button>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default GridWithButton;