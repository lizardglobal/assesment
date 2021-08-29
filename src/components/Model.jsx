import React, { Component } from 'react';

export default class Model extends Component {
    render() {
        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
        } 
        return (
            <div className="modal" show fade style={modelStyle}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Summary</h5>
                            <button type="button" className="btn-close" onClick={this.props.hide}></button>
                        </div>
                        <div className="modal-body">
                            <p>{this.props.summary}</p>
                            <p>{this.props.publishDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}