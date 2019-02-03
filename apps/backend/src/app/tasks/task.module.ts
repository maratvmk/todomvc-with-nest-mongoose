import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { TasksService } from './task.service';
import { tasksProviders } from './tasks.providers';
import { TasksController } from './task.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [TasksController],
    providers: [TasksService, ...tasksProviders],
})
export class TasksModule { }
