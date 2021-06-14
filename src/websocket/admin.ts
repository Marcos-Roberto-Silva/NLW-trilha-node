import { io } from '../http';
import { ConnectionsService } from '../services/ConnectionsService';
import { MessagesService } from '../services/MessagesServices';

io.on('connect', async (socket) => {
    const connectionsService = new ConnectionsService();
    const messagesService = new MessagesService();

    const allConnectionsWithoutAdmin = await connectionsService.allConnectionsWithoutAdmin();

    io.emit("admin_list_all_users", allConnectionsWithoutAdmin);

    socket.on("admin_list_messages_by_user", async (params, callback) => {
        console.log(params);
        
        const { user_id } = params;

        const allMessages = await messagesService.listByUser(user_id);
        
        callback(allMessages);
    });
});