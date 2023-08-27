// @ts-check
import { test, expect } from "@playwright/test"

const LOCALHOST_URL = "https://localhost:5173/"
const CAT_ENDPOINT_RANDOM_FACT = "http://cataas.com"

test("app shows random fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole("paragraph")
  const img = await page.getByRole("img")

  const textContent = await text.textContent()
  const imgSrc = await img.getAttribute("src")

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(CAT_ENDPOINT_RANDOM_FACT)).toBeTruthy()
})
