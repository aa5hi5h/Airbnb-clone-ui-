import house1 from "@/assets/house1.jpg"
import house2 from "@/assets/house2.jpg"
import house3 from"@/assets/house3.jpg"
import house4 from "@/assets/house4.jpg"
import house5 from "@/assets/house5.jpg"
import house6 from "@/assets/house6.png"
import house7 from "@/assets/house7.png"
import house8 from"@/assets/house8.png"
import house9 from "@/assets/house9.png"
import house10 from "@/assets/house10.png"
import house11 from "@/assets/house11.png"
import house12 from "@/assets/house12.png"

import Image from "next/image"
import Rental from "./Rental"


const Rentals = () => {
    const Rentals = [
        {title:"Jhibi,India",image:house1,price:"$120",distance:"17 kilometers away",date:"1-6 May" , review:"4.83"},
        {title:"Munnar,India",image:house2,price:"$109",distance:"1073 kilometers away",date:"11-19 May" , review:"4.63"},
        {title:"Sainj,India",image:house3,price:"$85",distance:"820 kilometers away",date:"22-29 May" , review:"4.23"},
        {title:"Hiriwadunna,India",image:house4,price:"$169",distance:"250 kilometers away",date:"25-30 April " , review:"3.9"},
        {title:"Siloti Pant,India",image:house5,price:"$105",distance:"120 kilometers away",date:"28-7 June" , review:"4.9"},
        {title:"Tandi,India",image:house6,price:"$111",distance:"540 kilometers away",date:"7-13 May" , review:"3.7"},
        {title:"Auroville,India",image:house7,price:"$125",distance:"119 kilometers away",date:"1-9 May" , review:"4.73"},
        {title:"Dehradun,India",image:house8,price:"$70",distance:"225 kilometers away",date:"16-25 June" , review:"4.92"},
        {title:"Kochi,India",image:house9,price:"$85",distance:"98 kilometers away",date:"11-17 May" , review:"4.18"},
        {title:"Lonavala,India",image:house10,price:"$95",distance:"210 kilometers away",date:"20-25 April" , review:"3.22"},
        {title:"kasol,India",image:house11,price:"$100",distance:"1450 kilometers away",date:"19-27 May" , review:"4.05"},
        {title:"shimla,India",image:house12,price:"$130",distance:"205 kilometers away",date:"24-28 May" , review:"4.63"}
    ]
    return (
        <div className="mt-8 mb-2  mx-4 grid grid-cols-3  gap-4">
            {Rentals.map((rentals) => (<Rental key={rentals.title} title={rentals.title} image={rentals.image} price={rentals.price} distance={rentals.distance} date={rentals.date} review={rentals.review} />))}
        </div>
    )
}

export default Rentals