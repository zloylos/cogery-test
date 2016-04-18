import React, {Component} from 'react';

export default class BlaBla extends Component {
    static propTypes = {
        bla: React.PropTypes.bool
    }

    render() {
        const {bla} = this.props;
        return (
            <div>{bla}</div>
        );
    }
}
