import { Component } from "react";

import { Link } from 'react-router-dom'

export default class SubscribersCard extends Component {
    state = {
        id: this.props.id,
        name: this.props.name,

    }
    render() {
        let { id, name } = this.props
        console.log(id,name)
        return (

            <tr class="messageC">

                <td> {id} </td>
                <td> {name}</td>


            </tr>

        )
    }
}