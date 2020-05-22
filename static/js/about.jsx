"use strict";

class About extends React.Component {
    render () {
        return (
            <div>
                <p>Huh? Where did the author go?</p>
                <p>Guess the author really didn't want you to know about them.</p>
            </div>
        );
    }
}

ReactDOM.render(<About />, document.querySelector('#author-info'));