import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer, Consumer } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;

  constructor() {
    this.kafka = new Kafka({
      clientId: 'waitlist',
      brokers: ['localhost:9092'],
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'waitlist-group' });
  }

  async onModuleInit() {
    await this.producer.connect();
    await this.consumer.connect();
  }

  async sendMessage(topic: string, message: any, partitionKey: string) {
    await this.producer.send({
      topic,
      messages: [{ key: partitionKey, value: JSON.stringify(message) }],
    });
  }

  async consumeMessages(topic: string, callback: (message: any) => void) {
    await this.consumer.subscribe({ topic });
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const value = message.value.toString();
        callback(JSON.parse(value));
      },
    });
  }
}
