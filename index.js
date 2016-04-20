import React, {Component} from 'react';

const DEFAULT_TEST = 100;

export default class BlaBla extends Component {
    static propTypes = {
        bla: React.PropTypes.bool,
        test: React.PropTypes.number
    }

    static defaultProps = {
        bla: true,
        test: 999
    }

    render() {
        const {bla, test} = this.props;
        return (
            <div>{bla ? test : DEFAULT_TEST}</div>
        );
    }
}
