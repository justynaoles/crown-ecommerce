import React from 'react';


const withData = WrappedComponent => {

    class WithData extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                data: []
            }
        }

        componentDidMount() {
            fetch(this.props.dataUrl)
            .then(response => response.json())
            .then(data => this.setState({
                data: data.slice(0, 3)
            })).catch(error => console.log('error, cannot load data', error));
        }

        render() {
            const {data, ...otherProps} = this.props;
            return <WrappedComponent data={this.state.data} {...otherProps} />
        }
    }

    return WithData;
};

export default withData