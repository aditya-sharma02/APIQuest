import React from "react";
import "../styles/component.css"
const Card = (props) => {
    let elem = props.data;
    let id = props.id
    return (
        <>
            <div className="card">
                <div className="details">
                    <div className="name">{elem.name}</div>
                    
                    <div className="tag">{elem.tagline}</div>
                    <hr/>
                    <div className="des">↪ {elem.description}</div>
                    <div className="date">{elem.first_brewed}</div>
                    <br/>
                    <span style={{color:'green'}} className="hopes">↪ Hopes : </span>


                    {elem.ingredients.hops.map((item, ind) => {
                        return (
                            <span className="ingre" key={ind}>{item.name}</span>
                        )
                    })}
                    <br />
                    <span style={{ color: 'green' }}>↪ Malt : </span>


                    {elem.ingredients.malt.map((item, ind) => {
                        return (
                            <span className="ingre" key={ind}>{item.name}</span>
                        )
                    })}


                    <div ><span style={{ color: 'green' }}>↪ Boil volume :</span> {elem.boil_volume.value} {elem.boil_volume.unit}</div>
                    <br/>
                    <div style={{ color: "gray" }}>{elem.brewers_tips}</div>
                    <br/>
                    <span style={{ color: "green" }}>↪ Serve with : </span>


                    {elem.food_pairing.map((item, ind) => {
                        return (
                            <span className="ingre" key={ind}>{item}</span>
                        )
                    })}

                    <div className="" style={{ color: "green" }}>↪ Fermentation: {elem.method.fermentation.temp.value} {elem.method.fermentation.temp.unit}</div>
                    {elem.method.mash_temp.map((item, ind) => {
                        return (
                            <div key={ind}>
                                <span className="ingre" >Duration : {item.duration}</span><br />
                                <span className="ingre" >temp : {item.temp.value} {item.temp.unit}</span>
                            </div>
                        )
                    })}
                    <div className="ph">pH : {elem.ph}</div>
                    <div className="">{elem.ingredients.yeast}</div>
                </div>
                <div className="img">
                    <img className="image" src={elem.image_url} />
                </div>
            </div>
        </>
    )

}

export default Card;