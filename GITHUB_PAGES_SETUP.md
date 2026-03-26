# Free Hosting with GitHub Pages (No Coding Required)

Since you don't have `git` installed on your computer, the easiest way to host your site for free is to use the **GitHub website directly**. 

Here are the step-by-step instructions:

### Step 1: Create a GitHub Account
1. Go to [https://github.com/](https://github.com/)
2. Click **Sign up** in the top right corner.
3. Follow the instructions to create your free account.

### Step 2: Create a New Repository (Project)
1. Once logged in, click the **+** (Plus) icon in the top right corner and select **New repository**.
2. **Repository name**: Type `feedback-form` (or any name you like).
3. **Public/Private**: Keep it as **Public** (required for free hosting).
4. **Initialize**: Check the box that says **"Add a README file"**.
5. Click the green **Create repository** button.

### Step 3: Upload Your Files
1. In your new repository, click the **Add file** button near the center/top right.
2. Select **Upload files** from the dropdown menu.
3. Open your project folder on your computer (`c:\Users\admin\Desktop\feedback-form`).
4. Select all your website files (`index.html`, `script.js`, `style.css`, and any other related files like `README.md`) and **drag and drop** them into the box on the GitHub website.
5. Wait for the upload to complete.
6. Click the green **Commit changes** button at the bottom.

### Step 4: Turn on GitHub Pages
1. In your repository, click the **Settings** tab (the gear icon near the top right).
2. On the left sidebar, scroll down and click on **Pages**.
3. Under the **Build and deployment** section:
    - Set the **Source** dropdown to **Deploy from a branch**.
    - In the **Branch** section, select **main** (or **master**) from the dropdown that currently says "None".
    - Keep the folder as `/ (root)`.
    - Click **Save**.
4. GitHub will now start building your site. It usually takes 1-2 minutes.
5. Refresh the page after a minute or two. You will see a message at the top saying: 
   **"Your site is live at https://[yourusername].github.io/feedback-form/"**

You can now share this new link with everyone, and the form will continue saving to your Google Sheet without any Netlify form limits!
