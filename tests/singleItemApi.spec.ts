import { test, expect } from '@playwright/test';

test.describe('API Testing - Process JSON in Memory', () => {
  test('Validate JSON response from /price/1', async ({ request }) => {
    // Make the GET request to the endpoint
    const response = await request.get('https://hoff.is/store2/api/v1/price/1');

    // Assert the response status
    expect(response.status()).toBe(200);

    // Convert the response body (Buffer) to a string
    const responseBody = (await response.body()).toString('utf-8');

    // Parse the JSON directly from the response body
    const jsonData = JSON.parse(responseBody);

    // Validate the JSON structure and data
    expect(jsonData).toEqual({
      id: 1,
      price: 15,
      vat: 3,
      name: 'Apple',
    });

    // Optionally, validate individual fields
    expect(jsonData.id).toBe(1);
    expect(jsonData.price).toBe(15);
    expect(jsonData.vat).toBe(3);
    expect(jsonData.name).toBe('Apple');
  });

  
});


