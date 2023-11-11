import BestSeller from "./BestSeller"
import Category from "./Catelogory"
import Description from "./Description"
import NewProducts from "./NewProducts"
import Question from "./Question"
import Slider from "./Slider"
import Story from "./Story"

export const HomePage = () => {
    return (
        <div>
            <Slider />
            <Question/>
            <Category />
            <BestSeller />
            <NewProducts type="GabiStore mùa hè"/>
            <Description />
            <Story />
        </div>
    )
}