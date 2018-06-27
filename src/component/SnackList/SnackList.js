import React, { Component } from 'react';
import { connect } from 'react-redux';
import SnackItem from '../SnackItem/SnackItem';

const mapReduxToProps = (reduxStore) => ({
    snacks: reduxStore.snackReducer
});

class SnackList extends Component {
    render() {
        return (
            <div>
            <pre>{JSON.stringify(this.props)}</pre>
            {this.props.snacks.map((snack, i) => {
               return <SnackItem key={i} snack={snack} />
            })}
            </div>
        )
    }
}

export default connect(mapReduxToProps) (SnackList);