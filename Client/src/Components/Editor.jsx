import React from 'react'

export default class Editor extends React.Component {


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
                    <a href="/"
                    className="button is-danger"
                    >
                        [x] Back 
                    </a>


                    <form>
                        <input className='input' type="text"  style={{margin: '20px 0 20px 0'}} name="Title" placeholder='Title'/> 
                        <textarea className='textarea' placeholder='Description'></textarea><br/>
                        <input className='button is-primary' type="submit" value="Save" />
                    </form>


                </div>
                
            </div>
        )
    }

}