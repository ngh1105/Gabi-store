import PageLayout from "components/page-layout"
import SliderSection from "./slider"
import CategorySection from "./category"
import DescriptionSection from "./description"
import BestSellingSection from "./best-selling"

import NewProducts from "./NewProducts"
import Question from "./Question"
import Story from "./Story"

export default function HomePage () {
    return (
        <PageLayout title="Trang chủ">
            <SliderSection />
            {/* <Question/> */}
            <CategorySection />
            <BestSellingSection />
            <NewProducts type="GabiStore mùa hè"/>
            <DescriptionSection />
            <Story />
        </PageLayout>
    )
}