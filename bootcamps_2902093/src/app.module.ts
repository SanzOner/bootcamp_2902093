import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BootcampsModule } from './bootcamps/bootcamps.module';


@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'bootcamps_2902093',
        entities: [],
        synchronize: true,
        autoLoadEntities: true
      }),
      BootcampsModule, UsersModule, ReviewsModule, CoursesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}