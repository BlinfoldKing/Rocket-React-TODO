import React from 'react';
import Header from './Components/Header'
import PostCont from './Components/PostCont'
import Editor from './Components/Editor'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


const Hello = () => <h1>Hello World</h1>
export default class App extends React.Component {
    
    constructor(props) {
        super (props)
        let dummmy = [
            {
                title: 'hello world',
                body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolore. Architecto laborum facilis explicabo sunt, modi fugiat alias sequi ipsa libero ullam perferendis repudiandae, consectetur qui earum voluptatum! Unde, quisquam!'
            },
            {
                title: 'hello ajaja',
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

        this.state = {
            posts: dummmy
        }
    }

    removeTodo(id) {
        this.setState({
            posts: this.state.posts.filter((e, i) => i != id)
        })

        console.log('delete ' + id)
    }

    makePost(title, body) {
        console.log(title)
        let newPosts = this.state.posts
        newPosts.push({title, body})
        this.setState({
            posts: newPosts 
        })
        console.log(this.state.posts)
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
                        <Route exact path='/' render={(props) => <PostCont {...props} onRemove={(i) => this.removeTodo(i)} items={this.state.posts}/>}/>
                        <Route path='/edit' render={(props) => <Editor {...props} makePost={(title, body) => this.makePost(title, body)}/>}/>
                    </Switch>
                </BrowserRouter>                
            </div>
        
        )
    }
}