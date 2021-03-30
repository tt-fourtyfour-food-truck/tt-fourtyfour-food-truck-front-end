import React from "react";
import { connect } from "react-redux";

const AddTruck = props => {
    return (
    <>
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

    };
}

export default connect(mapStateToProps, mapDispatchToProps())(AddTruck);