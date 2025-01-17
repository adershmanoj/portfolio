import React, { Component, Fragment , memo} from 'react';

class Typewriter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            displayText: ""
        };
        this.type = this.type.bind(this);
        this.erase = this.erase.bind(this);
        this.startTyping = this.startTyping.bind(this);
    }
    componentDidMount() {
        this.startTyping();
    }

    componentWillUnmount() {
        this._timeout && clearTimeout(this._timeout);
    }
    startTyping() {
        this._timeout = setTimeout(() => {
            this.type();
        }, this.props.delay);
    }
    type() {
        let { index, displayText } = this.state;
        const text = this.props.text[index];
        if (text.length > displayText.length) {
            displayText = text.substr(0, displayText.length + 1); //typing effect
            this.setState({ displayText }, () => {
                this._timeout = setTimeout(() => {
                    this.type();
                }, this.props.speed);
            });
        } else {
            this.props.callback(index + 1); //current word typed
            this._timeout = setTimeout(() => {
                this.erase();
            }, this.props.delay);
        }
    }

    erase() {
        let { index, displayText } = this.state;
        if (displayText.length === 0) {
            index = (index + 1) === this.props.text.length ? 0 : index + 1;
            this.setState({ index }, () => {
                this.startTyping();
            });
        } else {
            displayText = displayText.substr(-displayText.length, (displayText.length - 1));
            this.setState({ displayText }, () => {
                this._timeout = setTimeout(() => {
                    this.erase();
                }, this.props.speed);
            });
        }
    }
    render() {
        const {className} = this.props;
        const { displayText} = this.state;
        return (
            <Fragment>
                <span className={className}>{displayText}</span>
                <div className='cursor'>|</div>
            </Fragment>

        );
    }
}
Typewriter.defaultProps = {
    speed: 100,
    delay: 500,
    text: [],
    callback: () => {}
};
export default memo(Typewriter);
