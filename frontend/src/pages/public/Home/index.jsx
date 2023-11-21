import PageLayout from "components/page-layout"
import BestSeller from "./BestSeller"
import Category from "./Catelogory"
import Description from "./Description"
import NewProducts from "./NewProducts"
import Question from "./Question"
import Slider from "./Slider"
import Story from "./Story"

export const HomePage = () => {
    return (
        <PageLayout title="Trang chủ">
            <Slider />
            {/* <Question/> */}
            <Category />
            <BestSeller />
            <NewProducts type="GabiStore mùa hè"/>
            <Description />
            <Story />
        </PageLayout>
    )
}