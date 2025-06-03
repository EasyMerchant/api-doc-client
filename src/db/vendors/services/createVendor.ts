import { IService } from '~/interfaces';

export const createVendor: IService = {
  id: 'create_vendor',
  name: 'Create Vendor',
  description: [
    `To create a vendor, you need to provide the following information:`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/vendors',
    params: [
      {
        required: true,
        attributeId: 'first_name',
      },
      {
        required: true,
        attributeId: 'last_name',
      },
     
      {
        required: true,
        attributeId: 'dob',
      },
      {
        required: true,
        attributeId: 'email',
      },
      {
        required: false,
        attributeId: 'phone',
      },
      {
        required: false,
        attributeId: 'address',
      },
      {
        required: false,
        attributeId: 'city',
      },
      {
        required: true,
        attributeId: 'country',
      },
      {
        required: false,
        attributeId: 'state',
      },
      {
        required: false,
        attributeId: 'zip',
      },
      {
        required: false,
        attributeId: 'personal_identification_number',
      },
      {
        required: false,
        attributeId: 'driver_license_number',
      },
      {
        required: false,
        attributeId: 'ipn_url',
      },
      {
        required: false,
        attributeId: 'default_payout_currency',
      },
      {
        required: false,
        attributeId: 'minimum_withdraw_limit',
      },
      {
        required: false,
        attributeId: 'frequency',
      },
      
      {
        required: true,
        attributeId: 'business',
      },
      {
        required: true,
        attributeId: 'business[name]',
      },
      
      {
        required: true,
        attributeId: 'business[email]',
      },
      {
        required: true,
        attributeId: 'business[address]',
      },
      {
        required: true,
        attributeId: 'business[city]',
      },
      {
        required: true,
        attributeId: 'business[state]',
      },
      {
        required: true,
        attributeId: 'business[phone]',
      },
      {
        required: true,
        attributeId: 'business[vat_id]',
      },
      {
        required: true,
        attributeId: 'business[tax_id]',
      },
      {
        required: true,
        attributeId: 'business[website_url]',
      },
      {
        required: true,
        attributeId: 'vendor_agreement',
      },
      {
        required: true,
        attributeId: 'vendor_agreement[commission_percent]',
      },
      
    
      {
        required: true,
        attributeId: 'payout_info',
      },
      {
        required: true,
        attributeId: 'payout_info[][payout_type]',
      },
      {
        required: true,
        attributeId: 'payout_info[][base_currency]',
      },
      {
        required: true,
        attributeId: 'payout_info[][account_name]',
      },
      {
        required: true,
        attributeId: 'payout_info[][bank_account_type]',
      },
      {
        required: true,
        attributeId: 'payout_info[][bank_account_class]',
      },
      {
        required: true,
        attributeId: 'payout_info[][bank_name]',
      },
      {
        required: true,
        attributeId: 'payout_info[][bank_id]',
      },
      {
        required: true,
        attributeId: 'payout_info[][bank_account_id]',
      },
      {
        required: true,
        attributeId: 'payout_info[][iban]',
      },
      {
        required: true,
        attributeId: 'payout_info[][swift_bic]',
      },
      {
        required: true,
        attributeId: 'payout_info[][address]',
      },
      {
        required: true,
        attributeId: 'payout_info[][state]',
      },
      {
        required: true,
        attributeId: 'payout_info[][zip]',
      },
      {
        required: true,
        attributeId: 'payout_info[][country]',
      },
      {
        required: true,
        attributeId: 'payout_info[][minimal_payout_amount]',
      },
      {
        required: true,
        attributeId: 'payout_info[][payment_reference]',
      },
      {
        required: true,
        attributeId: 'payout_info[][refund_reserve]',
      },
         
    ],
    response: {
      type: 'application/json',
      data: {
        "message": "Vendor created successfully.",
        "status": 200,
        "data": {
          "vendor_id": "vendor_381c57a3-6538-47b4-8e0c-799357f46d4f"
        }
      },
    },
  },
};
