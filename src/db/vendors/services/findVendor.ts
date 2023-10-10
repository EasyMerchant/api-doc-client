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
        data: {
          id: '1',
          zip: '12345',
          city: 'Boston',
          name: '',
          email: 'vendor@example.com',
          phone: 'asdasda',
          state: 'MA',
          bankId: '123456789',
          ipnUrl: 'https://ipnaddress.com',
          po_zip: '12345',
          vp_dob: '9999-09-28',
          vp_zip: '123456',
          address: '123 Main Street',
          country: 'US',
          po_city: 'Juneau',
          vp_city: 'Boston',
          bankName: 'Leumi',
          lastName: 'Smith',
          po_state: 'MA',
          vp_email: 'individual.vendor@easymerchant.io',
          vp_fname: 'Joe',
          vp_lname: 'Smith',
          firstName: 'Joe',
          parent_id: '5064',
          vendor_id: '981819',
          payoutType: 'ACH',
          po_address: '1 bank address',
          po_country: 'US',
          vp_address: '123 Main Street',
          vp_country: 'US',
          baseCurrency: 'USD',
          date_created: '2022-01-24 11:20:02',
          bankAccountId: '36628822',
          date_modified: null,
          nameOnAccount: 'vendor',
          bankAccountType: 'CHECKING',
          commisionAmount: '0',
          last_updated_by: '5064',
          bankAccountClass: 'PERSONAL',
          paymentReference: 'Payment for vendor 1234',
          commissionPercent: '30',
          parent_account_id: 'bs_10435336',
          driverLicenseNumber: '561196411',
          minimalPayoutAmount: '50',
          defaultPayoutCurrency: 'USD',
          personalIdentificationNumber: '1234',
        },
        status: 200,
        message: '',
      },
    },
  },
};