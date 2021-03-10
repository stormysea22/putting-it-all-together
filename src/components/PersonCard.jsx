import React , { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: this.props.age
        };
    }
    birthday = () => {
        this.setState({age: this.state.age + 1})
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <fieldset>
                <div className="d-flex flex-wrap justify-content-center align-items-center align-content-center">
                    <div className="card w-25">
                        <div className="card border-info mb-3">
                            <h1 className="card-title, text-left"> { lastName }, { firstName } </h1>
                            <p className="card-text, text-left"> Age: {this.state.age} </p>
                            <p className="card-text, text-left"> Hair Color: { hairColor } </p>
                            <button onClick={this.birthday}>Give { firstName } a Birthday!</button>
                        </div>
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default PersonCard;