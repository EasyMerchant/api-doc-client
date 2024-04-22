import { IService } from '~/interfaces';

export const findCharge: IService = {
  id: 'find_charge',
  name: 'Find Charge',
  description: [
    `Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and the server will return the corresponding charge information. The same information is returned when creating or refunding the charge.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/charges/:transaction_id',
    params: [
      {
        required: true,
        attributeId: 'charge_id',
        isUrlParam: true,
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Charge data is retrieved successfully. ",
        "data": {
          "invoice_id": null,
          "customer_id": "cus_64998b545b1cb5114",
          "name": "EM_QA",
          "email": "qa@easymerchant.io",
          "amount": "11.00",
          "balance": "0.00",
          "subscription_id": "0",
          "description": "Charge done on Card",
          "status": "Paid",
          "city": "qa@easymerchant.io",
          "state": "AL",
          "zip": "41526",
          "date_created": "2023-11-14 11:54:38",
          "expiry_date": "2023-11-15 11:54:38",
          "transaction_id": "cha_6553b45d46e705114",
          "hpp_id": null,
          "merchant_account_id": "fortis_654ddc002dd6e",
          "cheque_notes": null,
          "metadata": {
            "order_id": "1233",
            "customer_id": "101"
          }
        }
      },
    },
  },
};
