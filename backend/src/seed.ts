import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { User } from './user/entities/user.entity';
import { Category } from './category/entities/category.entity';
import { Brand } from './brand/entities/brand.entity';
import { Product } from './product/entities/product.entity';
import { UserRole } from './user/user.constants';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    console.log('Database connection established.');

    try {
        // Force sync to drop and recreate tables with correct charset/collation
        const sequelize = app.get('SEQUELIZE');
        await sequelize.sync({ force: true });
        console.log('--- Database Reset (Force Sync) ---');

        // Note: This drops ALL tables, so we need to re-seed everything including users.

        await seedUsers();
        await seedCategoriesAndBrands();
        await seedProducts();
        console.log('Seeding complete! Database is now rich with data.');
    } catch (error) {
        console.error('Seeding failed:', error);
    } finally {
        await app.close();
    }
}

async function seedUsers() {
    const adminEmail = 'admin@example.com';
    const existingAdmin = await User.findOne({ where: { email: adminEmail } });

    if (!existingAdmin) {
        console.log('Creating admin user...');
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await User.create({
            email: adminEmail,
            password: hashedPassword,
            fullName: 'Quản Trị Viên',
            role: UserRole.ADMIN,
            isEmailVerified: true,
        });
    }

    const userEmail = 'user@example.com';
    const existingUser = await User.findOne({ where: { email: userEmail } });
    if (!existingUser) {
        console.log('Creating sample user...');
        const hashedPassword = await bcrypt.hash('user123', 10);
        await User.create({
            email: userEmail,
            password: hashedPassword,
            fullName: 'Người Dùng Mẫu',
            role: UserRole.GUEST,
            isEmailVerified: true,
        });
    }
}

async function seedCategoriesAndBrands() {
    const categoriesData = [
        { name: 'Điện Thoại & Phụ Kiện', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80' },
        { name: 'Máy Tính & Laptop', imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80' },
        { name: 'Thời Trang Nam', imageUrl: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80' },
        { name: 'Thời Trang Nữ', imageUrl: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&q=80' },
        { name: 'Giày Dép', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80' },
        { name: 'Đồng Hồ', imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80' },
        { name: 'Nhà Cửa & Đời Sống', imageUrl: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80' },
        { name: 'Sách', imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80' }
    ];

    // Specific official logo URLs for "likeness"
    // Specific official logo URLs for "likeness"
    const brandsData = [
        { name: 'Apple', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
        { name: 'Samsung', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
        { name: 'Xiaomi', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg' },
        { name: 'Sony', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Sony_logo.svg' },
        { name: 'Asus', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg' },
        { name: 'Nike', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
        { name: 'Adidas', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
        { name: 'Puma', imageUrl: '/upload/brands/puma.png' },
        { name: 'Zara', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' },
        { name: 'H&M', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg' },
        { name: 'Uniqlo', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg' },
        { name: 'Casio', imageUrl: '/upload/brands/casio.png' },
        { name: 'Rolex', imageUrl: '/upload/brands/rolex.png' },
        { name: 'IKEA', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg' },
        { name: 'Lock&Lock', imageUrl: '/upload/brands/lock-n-lock.png' },
        { name: 'Fahasa', imageUrl: 'https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png' },
        { name: 'Nhã Nam', imageUrl: '/upload/brands/nha-nam.png' }
    ];

    for (const cat of categoriesData) {
        const existing = await Category.findOne({ where: { name: cat.name } });
        if (!existing) {
            await Category.create(cat);
            console.log(`Created category: ${cat.name}`);
        }
    }

    for (const brand of brandsData) {
        const existing = await Brand.findOne({ where: { name: brand.name } });
        if (!existing) {
            await Brand.create({ name: brand.name, imageUrl: brand.imageUrl });
            console.log(`Created brand: ${brand.name}`);
        }
    }
}

async function seedProducts() {
    console.log('Seeding products...');

    const categories = await Category.findAll();
    const brands = await Brand.findAll();

    if (categories.length === 0 || brands.length === 0) {
        console.log('No categories or brands found, skipping product seed.');
        return;
    }

    // Helpers to find IDs
    const getCatId = (name: string) => categories.find(c => c.name === name)?.id;
    const getBrandId = (name: string) => brands.find(b => b.name === name)?.id || brands[0].id;

    // Define rich products
    const products = [
        // --- Điện Thoại ---
        {
            name: 'iPhone 15 Pro Max Titanium',
            price: 34990000,
            description: 'iPhone 15 Pro Max thiết kế titan, chip A17 Pro, nút Action hoàn toàn mới. Camera sắc nét, zoom quang học 5x.',
            categoryId: getCatId('Điện Thoại & Phụ Kiện'),
            brandId: getBrandId('Apple'),
            imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80',
            colors: ['Titan Tự Nhiên', 'Titan Xanh', 'Titan Đen', 'Titan Trắng'],
            sizes: ['256GB', '512GB', '1TB'],
        },
        {
            name: 'Samsung Galaxy S24 Ultra',
            price: 31990000,
            description: 'Galaxy S24 Ultra với quyền năng Galaxy AI. Khung viền titan bền bỉ, bút S Pen tích hợp, camera 200MP.',
            categoryId: getCatId('Điện Thoại & Phụ Kiện'),
            brandId: getBrandId('Samsung'),
            imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80', // Generic Galaxy look
            colors: ['Xám Titan', 'Đen Titan', 'Tím Titan', 'Vàng Titan'],
            sizes: ['256GB', '512GB', '1TB'],
        },
        {
            name: 'Xiaomi 14 Ultra',
            price: 24990000,
            description: 'Đỉnh cao nhiếp ảnh di động với lăng kính Leica huyền thoại. Hiệu năng vượt trội Snapdragon 8 Gen 3.',
            categoryId: getCatId('Điện Thoại & Phụ Kiện'),
            brandId: getBrandId('Xiaomi'),
            imageUrl: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=600&q=80', // Updated Generic Phone
            colors: ['Đen', 'Trắng'],
            sizes: ['12GB/256GB', '16GB/512GB'],
        },

        // --- Laptop ---
        {
            name: 'MacBook Pro 14 M3 Pro',
            price: 49990000,
            description: 'MacBook Pro với chip M3 Pro mạnh mẽ. Màn hình Liquid Retina XDR tuyệt đẹp, thời lượng pin lên đến 18 giờ.',
            categoryId: getCatId('Máy Tính & Laptop'),
            brandId: getBrandId('Apple'),
            imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80', // Updated MacBook
            colors: ['Bạc', 'Đen Không Gian'],
            sizes: ['18GB/512GB', '18GB/1TB'],
        },
        {
            name: 'Asus Zenbook 14 OLED',
            price: 24990000,
            description: 'Laptop mỏng nhẹ, thiết kế sang trọng. Màn hình OLED 2.8K rực rỡ, hiệu năng Intel Core Ultra mới nhất.',
            categoryId: getCatId('Máy Tính & Laptop'),
            brandId: getBrandId('Asus'),
            imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
            colors: ['Xanh Dương', 'Bạc'],
            sizes: ['16GB/512GB', '16GB/1TB'],
        },

        // --- Giày Dép ---
        {
            name: 'Nike Air Force 1 \'07',
            price: 2929000,
            description: 'Huyền thoại sống mãi với thời gian. Thiết kế cổ điển, đệm Air êm ái, phù hợp mọi phong cách hàng ngày.',
            categoryId: getCatId('Giày Dép'),
            brandId: getBrandId('Nike'),
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
            colors: ['Trắng', 'Đen'],
            sizes: ['38', '39', '40', '41', '42', '43'],
        },
        {
            name: 'Adidas Ultraboost Light',
            price: 5200000,
            description: 'Trải nghiệm năng lượng hoàn trả vô tận với Ultraboost nhẹ nhất từ trước đến nay. Công nghệ Light BOOST.',
            categoryId: getCatId('Giày Dép'),
            brandId: getBrandId('Adidas'),
            imageUrl: '/upload/products/adidas-ultraboost-light.png', // User provided local file
            colors: ['Trắng/Đỏ', 'Đen/Trắng', 'Xám'],
            sizes: ['39', '40', '41', '42'],
        },

        // --- Thời Trang Nam ---
        {
            name: 'Áo Thun Cơ Bản Cotton',
            price: 199000,
            description: 'Chiếc áo thun không thể thiếu trong tủ đồ. Chất liệu 100% cotton thoáng mát, thấm hút mồ hôi tốt.',
            categoryId: getCatId('Thời Trang Nam'),
            brandId: getBrandId('Uniqlo'),
            imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
            colors: ['Trắng', 'Đen', 'Xám', 'Xanh Navy'],
            sizes: ['S', 'M', 'L', 'XL'],
        },
        {
            name: 'Áo Sơ Mi Linen Form Rộng',
            price: 599000,
            description: 'Áo sơ mi chất liệu Linen tự nhiên, phóng khoáng. Form rộng thoải mái, thích hợp đi biển hoặc dạo phố.',
            categoryId: getCatId('Thời Trang Nam'),
            brandId: getBrandId('Zara'),
            imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
            colors: ['Be', 'Trắng', 'Xanh Nhạt'],
            sizes: ['S', 'M', 'L', 'XL'],
        },

        // --- Thời Trang Nữ ---
        {
            name: 'Đầm Maxi Hoa Nhí',
            price: 750000,
            description: 'Vẻ đẹp dịu dàng và nữ tính. Đầm maxi họa tiết hoa nhí vintage, chất liệu voan nhẹ nhàng bay bổng.',
            categoryId: getCatId('Thời Trang Nữ'),
            brandId: getBrandId('H&M'),
            imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80',
            colors: ['Hoa Vàng', 'Hoa Xanh'],
            sizes: ['XS', 'S', 'M'],
        },
        {
            name: 'Túi Xách Da Đeo Chéo',
            price: 1200000,
            description: 'Phụ kiện hoàn hảo cho quý cô hiện đại. Thiết kế tối giản, da PU cao cấp bền đẹp.',
            categoryId: getCatId('Thời Trang Nữ'),
            brandId: getBrandId('Zara'),
            imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
            colors: ['Đen', 'Nâu Bò', 'Kem'],
            sizes: ['Tiêu Chuẩn'],
        },

        // --- Đồng Hồ ---
        {
            name: 'Casio G-Shock GA-2100',
            price: 3500000,
            description: 'Biểu tượng của sự bền bỉ. Thiết kế bát giác độc đáo, cấu trúc bảo vệ lõi carbon siêu nhẹ.',
            categoryId: getCatId('Đồng Hồ'),
            brandId: getBrandId('Casio'),
            imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80', // Generic watch
            colors: ['Full Đen', 'Xanh Rêu'],
            sizes: ['One Size'],
        },
        {
            name: 'Đồng Hồ Cơ Lộ Máy',
            price: 8900000,
            description: 'Nghệ thuật cơ khí trên cổ tay. Mặt số lộ máy skeleton phô diễn chuyển động tinh xảo.',
            categoryId: getCatId('Đồng Hồ'),
            brandId: getBrandId('Rolex'), // Just example brand logic, obviously fake price for Rolex :D
            imageUrl: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80',
            colors: ['Vàng Gold', 'Bạc'],
            sizes: ['40mm', '42mm'],
        },

        // --- Nhà Cửa ---
        {
            name: 'Ghế Sofa Băng 3 Chỗ',
            price: 8900000,
            description: 'Điểm nhấn cho phòng khách hiện đại. Sofa băng nỉ êm ái, khung gỗ tự nhiên chắc chắn.',
            categoryId: getCatId('Nhà Cửa & Đời Sống'),
            brandId: getBrandId('IKEA'),
            imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
            colors: ['Xám Ghi', 'Xanh Navy'],
            sizes: ['2m', '2m4'],
        },
        {
            name: 'Bộ Hộp Cơm Thủy Tinh',
            price: 450000,
            description: 'An toàn cho sức khỏe. Thủy tinh chịu nhiệt cao cấp, dùng được trong lò vi sóng và lò nướng.',
            categoryId: getCatId('Nhà Cửa & Đời Sống'),
            brandId: getBrandId('Lock&Lock'),
            imageUrl: 'https://locknlock.vn/media/catalog/product/l/l/llg422s3-1.jpg',
            colors: ['Trong Suốt'],
            sizes: ['Combo 3 Hộp'],
        },
        {
            name: 'Đèn Bàn Học Làm Việc',
            price: 350000,
            description: 'Ánh sáng bảo vệ mắt. Thiết kế hiện đại, điều chỉnh đa góc độ, tích hợp sạc không dây.',
            categoryId: getCatId('Nhà Cửa & Đời Sống'),
            brandId: getBrandId('IKEA'),
            imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80',
            colors: ['Trắng', 'Đen'],
            sizes: ['Tiêu Chuẩn'],
        },

        // --- Sách ---
        {
            name: 'Nhà Giả Kim',
            price: 79000,
            description: 'Một trong những cuốn sách bán chạy nhất mọi thời đại. Câu chuyện về giấc mơ và hành trình đi tìm kho báu.',
            categoryId: getCatId('Sách'),
            brandId: getBrandId('Nhã Nam'),
            imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80', // Generic book
            colors: ['Bìa Mềm'],
            sizes: ['Tiêu Chuẩn'],
        },
        {
            name: 'Harry Potter và Hòn Đá Phù Thủy',
            price: 155000,
            description: 'Khởi đầu của huyền thoại. Bước vào thế giới pháp thuật kỳ diệu cùng cậu bé phù thủy Harry Potter.',
            categoryId: getCatId('Sách'),
            brandId: getBrandId('Fahasa'),
            imageUrl: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=600&q=80',
            colors: ['Bìa Cứng', 'Bìa Mềm'],
            sizes: ['Tiêu Chuẩn'],
        }
    ];

    for (const p of products) {
        if (p.categoryId && p.brandId) {
            await Product.create(p);
            console.log(`Created product: ${p.name}`);
        } else {
            console.log(`Skipping product ${p.name} due to missing Brand/Category ID`);
        }
    }
}

bootstrap();
