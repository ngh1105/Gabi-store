import PageLayout from "components/page-layout"
import SliderSection from "./slider"
import CategorySection from "./category"

import BestSeller from "./BestSeller"
import Description from "./Description"
import NewProducts from "./NewProducts"
import Question from "./Question"
import Story from "./Story"

export default function HomePage () {
    return (
        <PageLayout title="Trang chủ">
            <SliderSection />
            {/* <Question/> */}
            <CategorySection />
            <BestSeller />
            <NewProducts type="GabiStore mùa hè"/>
            <Description />
            <Story />
        </PageLayout>
    )
}