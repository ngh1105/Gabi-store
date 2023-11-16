import BestSeller from "./BestSeller"
import Catelog from "./Catelog"
import Description from "./Description"
import NewProducts from "./NewProducts"
import PostItem from "./PostItem"

import Slider from "./Slider"
import Story from "./Story"

export const HomePage = () => {
    return (
        <>
             <Slider  />
            <Catelog />
            {/* <PostItem/> */}
            <BestSeller />
           
            <Description />
            <Story />
            
        </>
    )
}