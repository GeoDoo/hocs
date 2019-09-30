import React from 'react';

const getDisplayName = (WrappedComponent) =>
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

const withUser = (WrappedComponent, getUser = () => '') => {
    class WithUser extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                user: ''
            }
        }

        async componentDidMount() {
            this.setState({
                user: await getUser()
            })
        }

        render() {
            return this.state.user ? <WrappedComponent user={this.state.user} /> : <p>Welcome guest!</p>;
        }
    }

    WithUser.displayName = `WithUser(${getDisplayName(WrappedComponent)})`;
    return WithUser;
}

export { withUser };