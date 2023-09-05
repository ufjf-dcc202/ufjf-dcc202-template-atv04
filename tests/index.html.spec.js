// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('index.html', () => {
  test('deve ter um título', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);

    // Espera que a página tenha um título.
    await expect(page).toHaveTitle(/Document/);
  });

  test('deve ter um título no corpo', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    // Espera que o elemento h1 tenha o texto 'Document'.
    await expect(page.locator('h1')).toContainText('Document');
  });
});