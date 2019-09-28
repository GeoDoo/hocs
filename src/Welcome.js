import React from 'react';
import { withUser } from './hocs';
import userData from './data/user.json';

class Welcome extends React.Component {
    render() {
        const { user } = this.props;

        return <p>Welcome {user.name}!</p>;
    }
}

export const WelcomeGuest = withUser(Welcome, () => '');
export const WelcomeUser = withUser(Welcome, () => userData);