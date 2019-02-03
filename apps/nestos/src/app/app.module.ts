import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/task.module';

@Module({
    imports: [TasksModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
