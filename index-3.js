import React, {Component} from 'react';

const DEFAULT_TEST = 100;

export default class BlaBla extends Component {
    static propTypes = {
        bla: React.PropTypes.bool,
        test: React.PropTypes.number
    }
    static propTypes = {
        bla: React.PropTypes.bool,
        test: React.PropTypes.number
    }
    componentWillMount() {
        this.setState({
            wow: test > 500,
            wowwow: bla && test > 900
        });
    }

    render() {
        console.log('test');
        const {bla, test} = this.props;
        const {wow, wowwow} = this.state;
        return (
            <div>
                {wow ? <span>{'test'}</span> : null}
            </div>
        );
    }
}
