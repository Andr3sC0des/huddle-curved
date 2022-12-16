import React from "react"


class Follows extends React.Component {
    render(){
        return(
            <>
            <article className="mt-16 w-40 mx-auto flex flex-col">
                <img className="w-8" src={this.props.img} alt="" />
                <h2 className="font-bold font-custom-poppins text-4xl mt-4 mb-0">{this.props.follow}</h2>
                <span className="text-center text-gray-500 mt-4">{this.props.text}</span>
            </article>
            </>
        );
    }
}

export default Follows