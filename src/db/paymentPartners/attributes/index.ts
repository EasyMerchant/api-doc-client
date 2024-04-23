import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'partner_id',
    name: 'partner_id',
    data_type: 'string',
    description: 'An unique id for the payment partner_id',
  },
  {
    id: 'name',
    name: 'name',
    data_type: 'string',
    description: 'An user defined name for the payment partner',
  },
  {
    id: 'is_active',
    name: 'is_active',
    data_type: 'boolean',
    description: 'Represents if the partner is active or not',
  },
  {
    id: 'supports_card',
    name: 'supports_card',
    data_type: 'boolean',
    description: 'Represents if the partner supports credit card transactions or not',
  },
  {
    id: 'supports_ach',
    name: 'supports_ach',
    data_type: 'boolean',
    description: 'Represents if the partner supports ACH transactions or not',
  },
  {
    id: 'supports_crypto',
    name: 'supports_crypto',
    data_type: 'boolean',
    description: 'Represents if the partner supports ACH transactions or not',
  },
  {
    id: 'is_default_card_processor',
    name: 'is_default_card_processor',
    data_type: 'boolean',
    description: 'If the partner is set as default for card payments, this represents whether it will be used for credit card transactions when no partner id is provided',
  },
  {
    id: 'is_default_ach_processor',
    name: 'is_default_ach_processor',
    data_type: 'boolean',
    description: 'If the partner is set as default for ACH payments, this represents whether it will be used for ACH transactions when no partner id is provided',
  },
];
