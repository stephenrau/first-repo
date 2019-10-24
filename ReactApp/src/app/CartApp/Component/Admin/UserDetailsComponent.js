import React from 'react';

export default class SignUpUser extends React.Component {
    
    constructor(props, context){
        super(props);
        
        this.state = {
            firstName: props.user.user.firstName,
            street: props.user.user.street,
            cellPhone: props.user.user.cellPhone
        }
    }

    AddUser = ()=>{
        let user = {
            firstName: this.state.firstName,
            street: this.state.street,
            cellPhone: this.state.cellPhone
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
                        <b>Name</b> <br/>
                        {this.state.firstName} <br/>
                    </div>
                    <br/>
                    <div className="col-md-12">
                        <b>Street </b> <br/>
                        {this.state.street} <br/>
                    </div>
                    <br/>
                    <div className="col-md-12">
                        <b>Mobile </b> <br/>
                        {this.state.cellPhone} <br/>
                    </div>
                </div>
            </div>
        )
    }   
}