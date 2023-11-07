import BestSeller from "./BestSeller"
import Category from "./Catelogory"
import Description from "./Description"
import Slider from "./Slider"
import Story from "./Story"

export const HomePage = () => {
    return (
        <>
            <Slider />
            <p>Question</p>
            <Category />
            <BestSeller />
            <p>NewProducts</p>
            <Description />
            <Story />
        </>
    )
}