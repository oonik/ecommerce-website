import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContextProvider';
import dropdown_icon from '../Component/Assets/dropdown_icon.png';
import Item from '../Component/Item/Item';

const ShopCategory = ({banner, category}) => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img className='shop-category-banner' src={banner} alt="" />
            <div className="shop-category-index-sort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shop-category-products">
                {
                    all_product.map((item, i)=>{
                        if(category === item.category){
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        }
                        else{
                            return null;
                        }
                    })
                }
            </div>
            <div className="shop-category-load-more">
                Explore more
            </div>
        </div>
    );
};

export default ShopCategory;