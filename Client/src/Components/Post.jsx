import React from 'react'

export default class Post extends React.Component {

    constructor(props) {
        super (props)
    }

    render() {
        return  (
            <div className="card" 
                style={{
                width: '90%',
                margin: "10px auto 0 auto"
            }}>
                <header className="card-header">
                    <h2 className="card-header-title">{this.props.title}</h2>
                </header>
                <div className="card-content">
                    <div className="content">{this.props.body}</div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">Edit</a>
                    <a href="#" className="card-footer-item 
                    has-background-danger
                    has-text-white">Delete</a>
                </footer>
            </div>
        )
    }

}