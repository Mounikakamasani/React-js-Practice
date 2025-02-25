import React,{Component} from "react";
//class component
////this.props.children
class Welcome extends Component{
    render(){
        const {name,gender}=this.props

        return(
            <div>
                <h1>Welcome {name} gender {gender}</h1>
               
                
            </div>
        
    )
    }
}
export default Welcome