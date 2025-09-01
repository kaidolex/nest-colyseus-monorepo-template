import { Client, Room } from 'colyseus';
import { BaseSchema } from '../schema/base.schema';

export class BaseRoom extends Room<BaseSchema> {
  constructor() {
    super();
  }

  async onCreate(options: any) {
    console.info('Base room created: ', options);

    // Initialize the room state
    this.state = new BaseSchema();

    this.setMetadata({
      name: this.constructor.name,
      createdAt: Date.now(),
      ...options,
    });
  }

  async onJoin(client: Client, options: any) {
    console.info(`Client ${client.sessionId} joined`);
  }

  async onLeave(client: Client, consented: boolean) {
    console.info(`Client ${client.sessionId} left (consented: ${consented})`);
  }

  async onDispose() {
    console.info('Base room disposed');
  }
}
