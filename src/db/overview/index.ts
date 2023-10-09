import { IApiData } from '~/interfaces';

export const overview: IApiData = {
  id: 'overview',
  name: 'Overview',
  defaultOpen: true,
  description: [
    'Deluxe Payments Platform (DPP) offers REST APIs that use form-encoded request for initial authentication and runs all other API requests using JSON-encoded request bodies. The APIs use standard HTTP response codes, authentication, and verbs.',
    "The API uses Client ID, Client Secret, and Access Token to Authenticate a merchant. It also uses a temporary Bearer Token that is requested by passing Client ID, Client Secret, and Access Token. The Bearer Token lasts for 60 minutes, but it's best to refresh it every 45 minutes to ensure a secure connection.",
    'The APIs have five resource end-points: <ul><li>Health check - Test API credentials and connection.</li><li>Transactions - Run all Credit Card and ACH/EFT transaction functions, like Sale, Resale, Refund, and Void.</li><li>Vault - Run all Customer Vault functions, like Creating a new vault, updating a vault</li><li>Reports - Fetch reports for a given date range</li><li>Webhooks - Subscribe/Unsubscribe to receive new data [Coming Soon]</li></ul>',
    'The documentation covers each API use case in a separate article. Please refer to the left menu for use-case articles. Developers can directly refer to API endpoints in the API Reference section.',
  ],
};
