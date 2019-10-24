import React from 'react';

export default class CreateUpdateUser extends React.Component {
    
    constructor(props, context){
        super(props);
        
        this.state = {
            firstName: props.user.user.firstName,
            lastName: props.user.user.lastName,
            age: props.user.user.age,
            hobby: props.user.user.hobby,
        }
    }

    AddUser = ()=>{
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            hobby: this.state.hobby
        }
        console.log("user", user)
        this.props.addUser(user);
    }

    onChangeText = (e) => {
        // target is input element, real dom element
        let target = e.target;
        let classlist = target.classList.toString();

        if(classlist.indexOf("fname")>=0){
            this.setState({
                firstName: target.value
            })
        }else if(classlist.indexOf("password")>=0){
            this.setState({
                password: target.value
            })
        }else if(classlist.indexOf("street")>=0){
            this.setState({
                street: target.value
            })
        }else{
            if (target.value && target.value.length <= 11) {
                this.setState({
                    cellPhone: target.value
                })    
            }            
        }
    }

    render() {
        return (
            <div className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>First Name</b>
                        <input type="text" className="form-control col-md-6 fname" value={this.state.firstName} 
                            placeholder="First Name"
                            onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Last Name </b>
                        <input type="text" className="form-control col-md-6 lname" value={this.state.lastName} 
                          placeholder="Last Name"
                          onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Age </b>
                    <input type="number" className="form-control col-md-6 age" value={this.state.age} 
                          placeholder="Age"
                          onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Hobby </b>
                        <input type="text" className="form-control col-md-6 hobby" value={this.state.hobby} 
                            placeholder="hobby" maxLength="11"
                            onChange={this.onChangeText} />
                    </div>
                    
                    <input type="button" className={"btn btn-primary col-md-2"} value={"SAVE USER"} onClick={this.AddUser}/>
                </div>
            </div>
        )
    }   
}