from playwright.sync_api import sync_playwright
import time
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Wait for server - simple retry loop
        for i in range(10):
            try:
                page.goto("http://localhost:3000", timeout=5000)
                break
            except Exception:
                print("Waiting for server...")
                time.sleep(2)

        print("Server loaded or timed out")

        # Screenshot Home
        time.sleep(3) # Hydration wait
        page.screenshot(path="verification_home.png", full_page=True)
        print("Home screenshot taken")

        # Screenshot About
        page.goto("http://localhost:3000/about-neko")
        time.sleep(2)
        page.screenshot(path="verification_about.png", full_page=True)
        print("About screenshot taken")

        # Screenshot Settings
        page.goto("http://localhost:3000/settings")
        time.sleep(2)
        page.screenshot(path="verification_settings.png", full_page=True)
        print("Settings screenshot taken")

        # Screenshot Onslaught
        page.goto("http://localhost:3000/game-modes/onslaught-protocol")
        time.sleep(2)
        page.screenshot(path="verification_onslaught.png", full_page=True)
        print("Onslaught screenshot taken")

        browser.close()

if __name__ == "__main__":
    run()
