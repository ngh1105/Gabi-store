import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { User } from './user/entities/user.entity';
import { UserRole } from './user/user.constants';
import * as bcrypt from 'bcrypt';

async function createAdmin() {
    const app = await NestFactory.createApplicationContext(AppModule);
    console.log('Database connection established.');

    const adminEmail = 'admin2@example.com';
    const adminPassword = 'admin123';

    try {
        const existingAdmin = await User.findOne({ where: { email: adminEmail } });

        if (existingAdmin) {
            console.log(`User ${adminEmail} already exists.`);
        } else {
            console.log(`Creating admin user ${adminEmail}...`);
            const hashedPassword = await bcrypt.hash(adminPassword, 10);
            await User.create({
                email: adminEmail,
                password: hashedPassword,
                fullName: 'Quản Trị Viên 2',
                role: UserRole.ADMIN,
                isEmailVerified: true,
            });
            console.log('Admin user created successfully.');
            console.log(`Email: ${adminEmail}`);
            console.log(`Password: ${adminPassword}`);
        }
    } catch (error) {
        console.error('Failed to create admin:', error);
    } finally {
        await app.close();
    }
}

createAdmin();
