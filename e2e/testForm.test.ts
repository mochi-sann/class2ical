import { test, expect } from "@playwright/test";

test("フォームのテスト", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("開始日").fill("2022-12-07");
  await page
    .locator("tr:nth-child(3) > td:nth-child(5) > .chakra-button")
    .click();
  await page.getByPlaceholder("授業名").fill("aaaaaaaaaaaa");

  await page.getByRole("button", { name: "追加" }).click();
  await expect(page.locator("form")).toHaveText(/aaaaaaaaaaaa/);

  await page
    .locator("tr:nth-child(4) > td:nth-child(6) > .chakra-button")
    .click();
  await page.getByPlaceholder("授業名").fill("bbbbbbbbbbbb");

  await page.getByRole("button", { name: "追加" }).click();

  await expect(page.locator("form")).toHaveText(/bbbbbbbbbbbb/);

  await page
    .getByRole("row", {
      name: "4 授業を追加する 授業を追加する 授業を追加する 授業を追加する Close bbbbbbbbbbbb 開く 授業を追加する",
    })
    .getByRole("button", { name: "授業を追加する" })
    .nth(1)
    .click();
  await page.getByPlaceholder("授業名").fill("ccccccccccccccc");
  await page.getByPlaceholder("メモ").click();
  await page.getByPlaceholder("メモ").fill("ccccccccc");
  await page.getByRole("button", { name: "追加" }).click();
  await expect(page.locator("form")).toHaveText(/ccccccccc/);
  await page
    .getByRole("gridcell", { name: "Close ccccccccccccccc 開く" })
    .getByRole("button", { name: "開く" })
    .click();
  await page.getByRole("button", { name: "削除する" }).click();
  await page
    .locator("tr:nth-child(6) > td:nth-child(4) > .chakra-button")
    .click();
  await page.getByPlaceholder("授業名").fill("aaaaadddddddddddd");
  await page.getByRole("button", { name: "追加" }).click();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "ダウンロード" }).click();
  await downloadPromise;
});
