// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("index.html", () => {
  test("deve ter o charset em utf-8 no meta dentro do head", async ({
    page,
  }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("meta[charset]")).toHaveAttribute(
      "charset",
      "UTF-8"
    );
  });

  test("deve ter o viewport em width=device-width, initial-scale=1.0 no meta dentro do head", async ({
    page,
  }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
      "content",
      "width=device-width, initial-scale=1.0"
    );
  });

  test("deve ter o lang em pt-BR no html", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  });

  test("deve ter um título no head com \"DCC202 - ATV04: SEU NOME\"", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page).toHaveTitle(/DCC202 - ATV04: (.*)/);
  });

  
  test("deve ter um main", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main")).toBeVisible();
  });
  
  test("deve ter um título no main com \"DCC202 - ATV04: SEU NOME\"", async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > h1")).toHaveText(/DCC202 - ATV04: (.*)/);
  });

  test('o main deve ter um parágrafo logo após o título', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > h1+p")).toBeVisible();
  });

  test('o parágrafo do main deve ter algum conteúdo (pode ser um olá mundo!)', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > h1+p")).not.toBeEmpty();
  });


  test('o main deve ter duas seções', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > section")).toHaveCount(2);
  });

  test('a primeira seção deve ter um título \"Naturalidade\"', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > section:nth-child(3) > h2")).toHaveText(/Naturalidade/);
  });

  test('a primeira seção deve ter um parágrafo', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > section:nth-child(3) > p")).toBeDefined();
  });
  test('O parágrafo da seção não pode ser vazio', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > section:nth-child(3) > p")).not.toBeEmpty();
  });
 
  test('a segunda seção deve ter um título \"O que eu gosto de fazer?\"', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > section:nth-child(4) > h2")).toHaveText("O que eu gosto de fazer?");
  });

  test('a segunda seção deve ter um parágrafo', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > section:nth-child(4) > p")).toBeVisible();
  });

    test('o parágrafo da segunda seção não pode ser vazio', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);
    await expect(page.locator("main > section:nth-child(4) > p")).not.toBeEmpty();
  });

});
