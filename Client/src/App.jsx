import React from 'react';
import Header from './Components/Header'
import PostCont from './Components/PostCont'

export default class App extends React.Component {
    
    constructor (props) {
        super (props)
        this.dummmy = [
            {
                title: 'hello',
                body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolore. Architecto laborum facilis explicabo sunt, modi fugiat alias sequi ipsa libero ullam perferendis repudiandae, consectetur qui earum voluptatum! Unde, quisquam!'
            },
            {
                title: 'hello',
                body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolore. Architecto laborum facilis explicabo sunt, modi fugiat alias sequi ipsa libero ullam perferendis repudiandae, consectetur qui earum voluptatum! Unde, quisquam!'
            },
            {
                title: 'hello',
                body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolore. Architecto laborum facilis explicabo sunt, modi fugiat alias sequi ipsa libero ullam perferendis repudiandae, consectetur qui earum voluptatum! Unde, quisquam!'
            },
            {
                title: 'hello',
                body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolore. Architecto laborum facilis explicabo sunt, modi fugiat alias sequi ipsa libero ullam perferendis repudiandae, consectetur qui earum voluptatum! Unde, quisquam!'
            },
            {
                title: 'hello',
                body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolore. Architecto laborum facilis explicabo sunt, modi fugiat alias sequi ipsa libero ullam perferendis repudiandae, consectetur qui earum voluptatum! Unde, quisquam!'
            }
        ]
    }
    
    render() {
        return (

            <div style={{
                display: 'flex',
                flexFlow: 'column',
                minHeight: '100vh',
                overflow: 'auto'
            }}>
                <Header/>
                <PostCont items={this.dummmy}/>
            </div>
        
        )
    }
}