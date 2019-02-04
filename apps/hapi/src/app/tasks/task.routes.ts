import { TaskService } from './task.service';

const taskService = new TaskService();

export const routes = [{
    method: "GET",
    path: "/tasks",
    handler: (req, h) => taskService.findAll()
},
{
    method: "GET",
    path: "/tasks/search",
    handler: (req, h) => taskService.findAll(req.query.title)
},
{ 
    method: "POST", 
    path: "/tasks", 
    handler: (req, h) => taskService.create(req.payload)
},
{
    method: "PATCH",
    path: "/tasks",
    handler: async (req, h) => taskService.update(req.payload)
},
{
    method: "DELETE",
    path: "/tasks/{id}",
    handler: (req, h) => taskService.delete(req.params.id)
}]