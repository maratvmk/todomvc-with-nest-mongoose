import { Module } from '@nestjs/common';
import { CatsController } from './task.controller';
import { DatabaseModule } from '../database/database.module';
import { TasksService } from './task.service';
import { tasksProviders } from './tasks.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [CatsController],
    providers: [TasksService, ...tasksProviders],
})
export class TasksModule { }
