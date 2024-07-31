import { IService } from '~/interfaces';

export const eventTypes: IService = {
  id: 'webhook_events',
  name: 'Event Types',
  description: [
    `You can retrieve the event types for webhook configuration from this API, which can be used for creating and updating webhook configuration.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/settings/webhook/events',

    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Webhook event types retrieved successfully",
        "event_types": [
            "charge.ach.canceled",
            "charge.ach.updated",
            "charge.captured",
            "charge.expired",
            "charge.failed",
            "charge.refunded",
            "charge.succeeded",
            "subscription.canceled",
            "subscription.created",
            "subscription.renewal.failed",
            "subscription.renewal.succeeded",
            "subscription.resumed",
            "subscription.started",
            "subscription.suspended"
        ]
      },
    },
  },
};
