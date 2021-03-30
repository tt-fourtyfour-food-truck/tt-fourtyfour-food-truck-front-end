import React from "react";

//store
import { connect } from "react-redux";

// action creators
import { addTruck } from "../../store";

const AddTruck = props => {

    const handleSumbit = e => {
        e.preventDefault();
        props.addTruck(/* newTruck */);
    }

    return (
    <>
    <form onSubmit={handleSumbit}>
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