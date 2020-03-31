import React, { Component } from 'react';

class Course extends Component {
    state = {
        id : null,
        title: null
    }

    componentDidMount(){
        console.log('mounting')
        this.loadData();
    }
    
    componentDidUpdate(){
        console.log('updating')
        this.loadData();
        }

    loadData(){
        if( this.props.match.params.id){
            console.log(this.state.id);
            console.log(this.props.match.params.id)
            console.log(this.state.id !== +this.props.match.params.id);
            if(!this.state.id || (this.state.id && this.state.id !== this.props.match.params.id)){
                this.setState({
                    id: this.props.match.params.id
                })
            }
    }
}
    
    render () {
        let courseId = 'no Id selected'
        if(this.state.id){
            courseId = this.state.id;
        }
        let courseTitle = 'no Course Title given'
        if(this.props.location.hash){
            courseTitle = this.props.location.hash;
            courseTitle = courseTitle.slice(1)
        }
        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {courseId}</p>
            </div>
        );
    }
}

export default Course;