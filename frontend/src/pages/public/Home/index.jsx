import PageLayout from "components/page-layout"
import SliderSection from "./slider"
import CategorySection from "./category"
import BrandSection from "./brand"
import DescriptionSection from "./description"
import BestSellingSection from "./best-selling"
import SuggestionSection from "./suggestion"
import BlogSection from "./blog"

export default function HomePage() {
    return (
        <PageLayout title="Trang chủ">
            <SliderSection />
            <CategorySection />
            <BrandSection />
            <BestSellingSection />
            <SuggestionSection />
            <DescriptionSection />
            <BlogSection />
        </PageLayout>
    )
}