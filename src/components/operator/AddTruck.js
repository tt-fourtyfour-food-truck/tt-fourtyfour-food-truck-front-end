import React from "react";

//store
import { connect } from "react-redux";

// action creators
import { addTruck } from "../../store";

const AddTruck = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.addTruck(/* newTruck */);
        // props.history.push(``); // push to dashboard
    }

    return (
    <>
    <form onSubmit={handleSubmit}>
    </form>
    </>
    );
}

const mapStateToProps = state => {
    return {
        operator: state.app.operator
    };
}

const mapDispatchToProps = () => {
    return {
        addTruck
    };
}

export default connect(mapStateToProps, mapDispatchToProps())(AddTruck);