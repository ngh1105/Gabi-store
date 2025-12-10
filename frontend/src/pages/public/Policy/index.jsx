import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import PageTitle from "components/page-title";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PolicyPage() {
    return (
        <PageLayout title="ChÃ­nh sÃ¡ch">
            <PageTitle name="ChÃ­nh sÃ¡ch" imageUrl={`${API_URL}${"/upload/page/contact.avif"}`} />
            <div className="max-w-screen-xl mx-auto pb-6">
                <main className="mt-2">
                    <div className="flex flex-col lg:flex-row ">
                        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-4/4">
                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                ChÃ­nh sÃ¡ch Ä‘á»•i tráº£
                            </h2>
                            <p className="pb-6">
                                Tháº­t khÃ³ chá»‹u náº¿u pháº£i lÃ m cÃ´ng tÃ¡c Ä‘á»•i/ tráº£ cho Ä‘Æ¡n hÃ ng vá»«a mua!
                            </p>
                            <p className="pb-6">
                                {" "}
                                VÃ  cÅ©ng khÃ´ng máº¥y dá»… chá»‹u khi Ä‘á»c nhá»¯ng trang "ChÃ­nh sÃ¡ch Ä‘á»•i tráº£"
                                dÃ i ngoáº±ng vÃ  Ä‘á»§ thá»© Ä‘iá»u rÃ ng buá»™c (thÆ°á»ng lÃ  nhÆ° tháº¿)
                            </p>
                            <p className="pb-6">
                                {" "}
                                Do Ä‘Ã³ E-Shop sáº½ viáº¿t ngáº¯n gá»n nháº¥t cÃ³ thá»ƒ, cÆ¡ báº£n lÃ :
                            </p>
                            <p className="pb-6">
                                {" "}
                                - KhÃ¡ch hÃ ng <span>Ä‘Æ°á»£c Ä‘á»•i hoáº·c tráº£ MIá»„N PH</span>Ã sáº£n pháº©m
                                trong vÃ²ng <span>60 ngÃ y</span> ká»ƒ tá»« ngÃ y nháº­n Ä‘Æ°á»£c sáº£n pháº©m.
                            </p>
                            <p className="pb-6">
                                - Báº¥t ká»³ sáº£n pháº©m nÃ o Ä‘áº·t mua táº¡i Coolmate (ngoáº¡i trá»« Outlet, sáº£n
                                pháº©m SÄƒn deal, sáº£n pháº©m Ä‘áº·t riÃªng theo yÃªu cáº§u vÃ  sáº£n pháº©m
                                Pre-Order phiÃªn báº£n sá»‘ lÆ°á»£ng giá»›i háº¡n, khÃ´ng vá» thÃªm hÃ ng) cÅ©ng
                                Ä‘Æ°á»£c Ã¡p dá»¥ng chÃ­nh sÃ¡ch nÃ y, ká»ƒ cáº£ sáº£n pháº©m Ä‘Ã£ giáº·t hay cáº¯t mÃ¡c.
                                (Ai mÃ  chá»‹u Ä‘Æ°á»£c má»™t chiáº¿c Ã¡o quÃ¡ rá»™ng hay quáº§n sá»‹p quÃ¡ cháº­t chá»©)
                            </p>
                            <p className="pb-6">
                                - TrÆ°á»ng há»£p tráº£, Coolmate sáº½ hoÃ n láº¡i tiá»n hÃ ng (khÃ´ng bao gá»“m
                                tiá»n phÃ­ váº­n chuyá»ƒn náº¿u cÃ³) cho khÃ¡ch trong vÃ²ng 24h qua TÃ€I KHOáº¢N
                                NGÃ‚N HÃ€NG cá»§a khÃ¡ch (khÃ´ng tÃ­nh Thá»© 7, CN vÃ  ngÃ y lá»…). Äá»“ng thá»i,
                                Coolmate sáº½ Ä‘áº¿n táº­n nÆ¡i láº¥y hÃ ng tráº£ vÃ  khÃ´ng thu thÃªm báº¥t cá»© phÃ­
                                gÃ¬ (KhÃ¡ch hÃ ng cÅ©ng cÃ³ thá»ƒ tá»± gá»Ÿi láº¡i hÃ ng cho Coolmate)
                            </p>

                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                3 BÆ°á»›c nhanh chÃ³ng Ä‘á»ƒ Ä‘á»•i tráº£:
                            </h2>
                            <p className="pb-6">
                                <span>BÆ°á»›c 1</span>: Äiá»n thÃ´ng tin Äá»•i/ Tráº£ hÃ ng á»Ÿ Ä‘Ã¢y, hoáº·c qua
                                sá»‘ hotline 0362378890.
                            </p>

                            <p className="pb-6">
                                {" "}
                                <span>BÆ°á»›c 2</span>: Nháº­n cuá»™c gá»i xÃ¡c nháº­n tá»« Coolmate vá» sáº£n
                                pháº©m vÃ  thá»i gian nháº­n hÃ ng
                            </p>
                            <p className="pb-6">
                                <span>BÆ°á»›c 3</span>: Ngay khi xÃ¡c nháº­n chÃºng tÃ´i sáº½ gá»Ÿi báº¡n Ä‘Æ¡n
                                hÃ ng má»›i (hoáº·c láº¥y Ä‘Æ¡n hÃ ng vá»), báº¡n chá»‰ cáº§n gá»Ÿi hÃ ng cáº§n Ä‘á»•i/tráº£
                                cho shipper lÃ  Ä‘Æ°á»£c.
                            </p>
                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                Äá»‘i vá»›i viá»‡c tráº£ hÃ ng:
                            </h2>
                            <p className="pb-6">
                                {" "}
                                ChÃºng tÃ´i sáº½ hoÃ n láº¡i sá»‘ tiá»n hÃ ng (sau khi Ä‘Ã£ trá»« 25.000 VNÄ phÃ­
                                ship hÃ ng) vÃ o tÃ i khoáº£n mÃ  báº¡n cung cáº¥p tá»‘i Ä‘a trong 24h lÃ m viá»‡c
                                (khÃ´ng tÃ­nh thá»© 7 & Chá»§ Nháº­t) sau khi yÃªu cáº§u hoÃ n tiá»n Ä‘Æ°á»£c CSKH
                                xÃ¡c nháº­n.
                            </p>
                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                LÆ°u Ã½:
                            </h2>
                            <p className="pb-6">
                                {" "}
                                - E-Shop há»— trá»£ Ä‘á»•i tá»‘i Ä‘a 3 láº§n/1 khÃ¡ch hÃ ng.
                            </p>
                            <p className="pb-6">
                                {" "}
                                - E-Shop cÃ³ quyá»n quyáº¿t Ä‘á»‹nh dá»«ng viá»‡c há»— trá»£ Ä‘á»•i tráº£ vÃ  tráº£ láº¡i
                                tiá»n cho khÃ¡ch hÃ ng náº¿u phÃ¡t hiá»‡n khÃ¡ch hÃ ng sá»­ dá»¥ng chÃ­nh sÃ¡ch Ä‘á»ƒ
                                trá»¥c lá»£i (nhÆ° viá»‡c Ä‘á»•i quÃ¡ nhiá»u láº§n).
                            </p>
                            <p className="pb-6">
                                {" "}
                                - Vá»›i cÃ¡c Ä‘Æ¡n sÃ n TMÄT thÃ¬ sáº½ Ã¡p dá»¥ng chÃ­nh sÃ¡ch tráº£ hÃ ng cá»§a sÃ n
                                TMÄT. Tuy nhiÃªn, trÆ°á»ng há»£p quÃ¡ thá»i gian tráº£ hÃ ng cá»§a sÃ n TMÄT sáº½
                                Ä‘Æ°á»£c Ã¡p dá»¥ng chÃ­nh sÃ¡ch tráº£ hÃ ng cá»§a E-Shop
                            </p>

                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                ChÃºng tÃ´i lÃ m gÃ¬ vá»›i hÃ ng Ä‘á»•i tráº£:
                            </h2>
                            <p className="pb-6">
                                Ão thun, quáº§n short: thu gom vÃ  gá»Ÿi cho cÃ¡c chÆ°Æ¡ng trÃ¬nh tá»« thiá»‡n
                            </p>
                            <p className="pb-6"> BÃ­t táº¥t, boxer: huá»· bá» 100%</p>
                        </div>
                    </div>
                </main>
            </div>
        </PageLayout>

    );
}
