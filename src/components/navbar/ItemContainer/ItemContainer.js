import './ItemContainer.css'

import ItemProduct from "../ItemProduct/ItemProduct"

const Itemcontainer = ({section}) => {
    return(
        <div className='listproduct'>
            <h2>{section}</h2>
            <ItemProduct title="Pikachu" price={15000} image={`pikachu.jpg`}/>
            <ItemProduct title="Charizard" price={10000} image={`charizard1.png`}/>
        </div>
    )
}

export default Itemcontainer