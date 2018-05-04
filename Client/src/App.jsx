import React from 'react';
import Header from './Components/Header'
import PostCont from './Components/PostCont'
import Editor from './Components/Editor'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


const Hello = () => <h1>Hello World</h1>
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
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={(props) => <PostCont {...props} items={this.dummmy}/>}/>
                        <Route path='/edit' render={(props) => <Editor/>}/>
                    </Switch>
                </BrowserRouter>                
            </div>
        
        )
    }
}