import {Component} from 'react';
import PropTypes from 'prop-types';

export default class BlaBla extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    static defaultProps = {
        text: ''
    }

    render() {
        const {text} = this.props;
        return (
            <div>{text}</div>
        );
    }
}
