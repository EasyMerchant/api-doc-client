import { IService } from '~/interfaces';

export const listAllVendors: IService = {
  id: 'list_vendors',
  name: 'List All Vendors',
  description: [`Retrieve All Vendors and their saved details.`],
  endpoint: {
    method: 'get',
    url: '/v1/vendors',

    response: {
      type: 'application/json',
      data: {
        "message": "Vendors Retrieved successfully",
        "status": true,
        "total": 36,
        "vendors": [
            {
                "vendor_id": "vendor_859de652-e446-4d33-92ff-2d364f6e1185",
                "first_name": "Test",
                "last_name": "Vendor",
                "personal_identification_number": "",
                "driver_license_number": "",
                "email": "vendor@example.com",
                "phone": "1-123-455-8765",
                "address": "25 Business Avenue",
                "dob": "9999-09-28",
                "city": "Boston",
                "country": "US",
                "state": "MA",
                "zip": "12345",
                "status": "active",
                "date_created": "2024-12-30 13:05:30",
                "ipn_url": "https://ipnaddress.com",
                "frequency": "",
                "minimum_withdraw_limit": "100.00",
                "default_payout_currency": "USD",
                "business": {
                    "name": "Business ABC",
                    "email": "vendor@example.com",
                    "phone": null,
                    "address": "25 Business Avenue",
                    "city": "Boston",
                    "country": "US",
                    "state": "",
                    "zip": "12345",
                    "tax_id": null,
                    "vat_id": null,
                    "website_url": "",
                    "commission_percent": "0"
                },
                "payout_info": [
                    {
                        "payout_type": "ACH",
                        "base_currency": "USD",
                        "minimal_payout_amount": "50",
                        "account_name": "name of vendor account",
                        "bank_account_class": "CORPORATE",
                        "bank_account_type": "CHECKING",
                        "payment_token": null,
                        "token_partner": null,
                        "account_number_last_four": null,
                        "bank_name": "Bank of America",
                        "address": "1 bank address",
                        "city": "Boston",
                        "zip": "12345",
                        "country": "US",
                        "state": "MA",
                        "payment_reference": "Payment for vendor 1234",
                        "refund_reserve": "200",
                        "date_modified": null,
                        "date_created": "2024-12-25 04:36:47"
                    },
                    {
                        "payout_type": "ACH",
                        "base_currency": "USD",
                        "minimal_payout_amount": "50",
                        "account_name": "name of vendor account",
                        "bank_account_class": "CORPORATE",
                        "bank_account_type": "CHECKING",
                        "payment_token": null,
                        "token_partner": null,
                        "account_number_last_four": null,
                        "bank_name": "Bank of America",
                        "address": "1 bank address",
                        "city": "Boston",
                        "zip": "12345",
                        "country": "US",
                        "state": "MA",
                        "payment_reference": "Payment for vendor 1234",
                        "refund_reserve": "200",
                        "date_modified": null,
                        "date_created": "2024-12-25 10:43:51"
                    }
                ]
            },
            {
                "vendor_id": "vendor_d529a285-8c0b-42e1-9fa8-d00caa719e9b",
                "first_name": "Test Vendor",
                "last_name": "Two",
                "personal_identification_number": "",
                "driver_license_number": "",
                "email": "vendor@example.com",
                "phone": "1-123-455-8765",
                "address": "25 Business Avenue",
                "dob": "9999-09-28",
                "city": "Boston",
                "country": "US",
                "state": "MA",
                "zip": "12345",
                "status": "active",
                "date_created": "2024-12-31 13:12:55",
                "ipn_url": "https://ipnaddress.com",
                "frequency": "",
                "minimum_withdraw_limit": "0.00",
                "default_payout_currency": "USD",
                "business": {
                    "name": "Business ABC",
                    "email": "vendor@example.com",
                    "phone": null,
                    "address": "25 Business Avenue",
                    "city": "Boston",
                    "country": "US",
                    "state": "",
                    "zip": "12345",
                    "tax_id": null,
                    "vat_id": null,
                    "website_url": "",
                    "commission_percent": "0"
                },
                "payout_info": [
                    {
                        "payout_type": "ACH",
                        "base_currency": "USD",
                        "minimal_payout_amount": "50",
                        "account_name": "name of vendor account",
                        "bank_account_class": "CORPORATE",
                        "bank_account_type": "CHECKING",
                        "payment_token": null,
                        "token_partner": null,
                        "account_number_last_four": null,
                        "bank_name": "Bank of America",
                        "address": "1 bank address",
                        "city": "Boston",
                        "zip": "12345",
                        "country": "US",
                        "state": "MA",
                        "payment_reference": "Payment for vendor 1234",
                        "refund_reserve": "200",
                        "date_modified": null,
                        "date_created": "2024-12-26 01:47:33"
                    }
                ]
            }
        ]
    }
    },
  },
};
