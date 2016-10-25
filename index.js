import React, {Component} from 'react';

const DEFAULT_TEST = 100;

export default class BlaBla extends Component {
    static propTypes = {
        bla: React.PropTypes.bool,
        test: React.PropTypes.number
    }
// ======================
    static defaultProps = {
        bla: true,
        test: 999
    }

    state = {
        wow: true,
        wowwow: true,
        wowowwww: true
    };

// ======================
    componentWillMount() {
        this.setState({
            wow: test > 500,
            wowwow: bla && test > 900
        });
    }

    render() {
        const {bla, test} = this.props;
        const {wow, wowwow} = this.state;
        return (
            <div>
                {bla ? test : DEFAULT_TEST}
                {wow ? <span>{'test'}</span> : null}
            </div>
        );
    }
}
