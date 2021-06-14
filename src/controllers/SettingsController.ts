import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });

      return response.json(settings);
    } catch (error) {
        return response.status(401).json({ message: error.message })
    }
  }

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params;
    console.log('user: ',username );
    
    const settingsService = new SettingsService();

    const settings = await settingsService.findByUserName(username);

    return response.json(settings);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat);
    console.log('teste', settings);
    
    return response.json(settings);
  }
}

export { SettingsController };
