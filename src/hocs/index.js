import React from 'react';

const withUser = (WrappedComponent, getUser) => {
    return class extends React.Component {
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
}

export { withUser };