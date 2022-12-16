import React from "react"


class Descriptions extends React.Component {
    render() {
        let imageOrder = 1
        if (this.props.textOrder == 1) {
            imageOrder = 2
        }

        return (
            <>
                <section className="relative w-full">

                    <article className={`mx-8 md:mx-16 mt-32 grid grid-cols-1 sm:grid-cols-2`}>

                        <img className={`order-${imageOrder}`} src={this.props.img} alt="" />
                        
                        <article className={`order-${this.props.textOrder} flex flex-col justify-center items-center`}>
                            <h2 className="text-center font-bold text-xl mt-16 sm:mt-0 md:text-2xl">{this.props.title}</h2>
                            <p className="leading-6 text-center mt-4 md:text-xl">{this.props.paragraph}</p>
                        </article>

                    </article>

                    <div className={`absolute -top-32 -z-10 ${this.props.hidden}`}>
                        <img src={this.props.sectionTop} alt="" className="w-full block" />
                        <div className="h-[600px] sm:h-[400px] w-full bg-custom-very-pale-blue"></div>
                        <img src={this.props.sectionBottom} alt="" className="w-full block" />
                    </div>

                </section>

            </>
        );
    }
}

export default Descriptions