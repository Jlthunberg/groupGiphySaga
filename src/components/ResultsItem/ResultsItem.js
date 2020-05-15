import React, { Component } from 'react'

export class ResultsItem extends Component {
    render() {
        return (
            <div>
                <li>
                   <img src= {this.props.gif.images.original.url}/>

                </li>
                
            </div>
        )
    }
}

export default ResultsItem
