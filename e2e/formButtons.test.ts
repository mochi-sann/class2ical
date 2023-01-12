import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      await page
        .locator(
          `tr:nth-child(${i + 1}) > td:nth-child(${j + 2}) > .chakra-button`
        )
        .click();

      await page.getByPlaceholder("授業名").fill(`授業 ${i} ${j}`);
      await page.getByPlaceholder("メモ").fill(`ノート
                                               ${i} ${j}`);
      await page.getByPlaceholder("URL").fill(`https://example.com`);
      await page.getByPlaceholder("場所").fill(`東京都千代田区`);
      await page.getByRole("button", { name: "追加" }).click();
    }
  }
  await page.getByPlaceholder("開始日").fill("2023-01-13");
  await page.getByPlaceholder("授業の週数").click({
    clickCount: 3,
  });
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "ダウンロード" }).click();
  await downloadPromise;
});
