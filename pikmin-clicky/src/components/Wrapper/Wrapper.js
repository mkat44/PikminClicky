import React from "react";
import "./Wrapper.css";
import pikmins from "../../pikmin.json";
import ImageCard from "../ImageCard/ImageCard";

class Wrapper extends React.Component {
    state = {
        unselectedPikmin: pikmins,
        pikmins: pikmins,
        score: 0,
        topscore: 0,
        clicked: false
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectPikmin = id => {

        const findPikmin = this.state.unselectedPikmin.find(item => item.id === id);

        if(findPikmin === undefined) {
            // bad click
            console.log(this.state.clicked);
            this.setState({ 
                topscore: (this.state.score > this.state.topscore) ? this.state.score : this.state.topscore,
                score: 0,
                pikmins: pikmins,
                unselectedPikmin: pikmins,
                clicked: false
            });
        }
        else {
            // good click
            const newPikmin = this.state.unselectedPikmin.filter(item => item.id !== id);
                this.setState({ 
                score: this.state.score + 1,
                pikmins: pikmins,
                unselectedPikmin: newPikmin,
                clicked: true
            });
        }

        this.shuffleArray(pikmins);
    };

    render() {
        return (
            <div className="container">
            <h1 >Current Score: {this.state.score} | Top Score: {this.state.topscore}</h1>
                <div className="row">
                    <div className="wrapper">
                        {this.state.pikmins.map(
                            pikmin => <ImageCard id={pikmin.id} name={pikmin.name} image={pikmin.image} isClicked={this.state.clicked} selectPikmin={this.selectPikmin} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Wrapper;