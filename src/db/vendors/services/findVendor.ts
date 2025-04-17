import { IService } from '~/interfaces';

export const findVendor: IService = {
  id: 'find_vendor',
  name: 'Find Vendor',
  description: [`Retrieve specific vendor by id and their saved details.`],
  endpoint: {
    method: 'get',
    url: '/v1/vendors/{vendor_id}',
    params: [
      {
        required: true,
        attributeId: 'vendor_id',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "message": "Vendors Retrieved successfully",
        "status": true,
        "total": 1,
        "vendors": {
            "vendor_id": "vendor_6e729d41-b27f-4548-9dac-b60d8449074a",
            "first_name": "Test",
            "last_name": "Vendor",
            "personal_identification_number": "32323",
            "driver_license_number": "",
            "email": "ezramp@lifepay.io",
            "phone": "+13232323232",
            "address": "3,Sullivan street",
            "dob": "2025-02-03",
            "city": "Los Angels",
            "country": "ae",
            "state": "AL",
            "zip": "91423",
            "status": "active",
            "date_created": "2025-01-27 13:38:49",
            "ipn_url": "",
            "frequency": "weekly",
            "minimum_withdraw_limit": "500.00",
            "default_payout_currency": "USD",
            "business": {
                "name": "Test Business name",
                "email": "testbusiness@test.io",
                "phone": "+12323123123",
                "address": "Test Address",
                "city": "Los Angels",
                "country": "ca",
                "state": "",
                "zip": "91423",
                "tax_id": null,
                "vat_id": null,
                "website_url": "test.com",
                "commission_percent": "10"
            },
            "payout_info": [
                {
                    "payout_type": "ACH",
                    "base_currency": "USD",
                    "minimal_payout_amount": "0",
                    "account_name": "Test Acc Name",
                    "bank_account_class": "PERSONAL",
                    "bank_account_type": "CHECKING",
                    "payment_token": null,
                    "token_partner": null,
                    "account_number_last_four": null,
                    "bank_name": "Test Bank",
                    "address": "Test Address",
                    "city": "Test City",
                    "zip": "Test Zip",
                    "country": "us",
                    "state": "AL",
                    "payment_reference": "Tsesr ssdsa",
                    "refund_reserve": "12122",
                    "date_modified": null,
                    "date_created": "2025-02-03 06:54:05"
                }
            ]
        }
      },
    },
  },
};
