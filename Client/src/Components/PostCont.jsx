import React from 'react'
import Post from './Post'

export default class PostCont extends React.Component {

    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div 
                className='has-background-white-ter'
                style={{
                    width: '60%',
                    margin: "0 auto 0 auto",
                    padding: '10px'
            }}>

                <div style={{
                        width:'90%',
                        margin: "10px auto 10px auto"
                }}>
                    <a href="http://"
                    className="button is-primary"
                    >
                        [+] Create New Entry 
                    </a>
                </div>
                
                {this.props.items.map(e => 
                    <Post 
                        title='world' 
                        body='world'
                    />
                )}
            </div>
        )
    }

}