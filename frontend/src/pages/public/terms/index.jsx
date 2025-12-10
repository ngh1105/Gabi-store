import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import PageTitle from "components/page-title";
import React from "react";

export default function TermsPage() {
    return (
        <PageLayout title="Dieu khoan su dung">
            <section className="bg-white dark:bg-gray-900">
                <PageTitle name="Dieu khoan su dung" imageUrl={`${API_URL}/upload/page/terms.avif`} />
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg text-gray-600 sm:text-lg dark:text-gray-400 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tong quan</h2>
                        <p>Bang cach su dung website E-Shop, ban dong y voi cac dieu khoan su dung chung va chinh sach bao mat cua he thong. Vui long doc ky truoc khi tao tai khoan hoac dat hang.</p>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Tai khoan & bao mat</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Ban can cung cap thong tin chinh xac va bao mat thong tin dang nhap.</li>
                            <li>Khong chia se tai khoan cho ben thu ba. Chung toi co the tam khoa tai khoan neu phat hien vi pham.</li>
                            <li>Moi so dien thoai/email chi nen tao mot tai khoan ca nhan.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Dat hang & gia ca</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Don hang chi hop le sau khi duoc he thong xac nhan.</li>
                            <li>Trong truong hop thong tin chua ro rang, chung toi se lien he de xac nhan hoac huy don.</li>
                            <li>Gia co the thay doi va se duoc cap nhat cong khai tren he thong.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Thanh toan</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Ho tro thanh toan truc tuyen qua PayPal va cac vi dien tu khac (neu duoc bat).</li>
                            <li>Voi don giao hang, co the thanh toan khi nhan hang neu cua hang cho phep.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Giao hang & thay doi don</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Khach hang can cung cap dia chi va so dien thoai chinh xac de giao hang.</li>
                            <li>Yeu cau thay doi don chi duoc chap nhan truoc khi don duoc xu ly.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Ho tro</h3>
                        <p>Neu can ho tro, vui long lien he qua email support@example.com.</p>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
