import React from 'react'
import Post from './Post'

export default class PostCont extends React.Component {

    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div 
                style={{
                    width: '60%',
                    margin: "20px auto 20px auto",
                    padding: '10px',
                    backgroundColor: '#ddd',
                    border: 'solid #999 1px',
                    borderRadius: 10,
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    //justifyContent: 'space-between'
            }}>

                <div style={{
                        width:'90%',
                        margin: "10px auto 10px auto"
                }}>
                    <a href="/edit"
                    className="button is-primary"
                    >
                        [+] Create New Entry 
                    </a>
                </div>
                {console.log(this.props)}
                {this.props.items.map((e, i) => 
                    <Post
                        key={i} 
                        id={i}
                        title={e.title} 
                        body={e.body}
                    />
                )}
            </div>
        )
    }

}