import { expect, test } from '@playwright/test';

test.describe('Integrity checks', () => {
  test('should have a title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Next.js');
  });

  test('should serve all requests from localhost', async ({page}) => {
    const networkRequests: string[] = [];

    page.on('request', (request) => {
      networkRequests.push(request.url());
    });

    await page.goto('/', {waitUntil: 'networkidle'});

    const nonLocalhostRequests = networkRequests.filter(url => !url.startsWith('http://localhost') && !url.startsWith('https://localhost'));

    expect(nonLocalhostRequests.length, `Expected all requests to be from localhost, but found non-localhost requests:\n${nonLocalhostRequests.join('\n')}`).toBe(0);
  });
});
