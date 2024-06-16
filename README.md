# GitHub Auth Library

The `github-auth-library` is a Node.js library designed to handle OAuth authentication with GitHub. It provides a simple interface to authenticate users, retrieve access tokens, and fetch user details using GitHub's API. This library is designed to follow the SOLID principles, making it extensible and maintainable.

## Features

- Easy-to-use methods for GitHub OAuth authentication.
- Methods to exchange authorization code for access token.
- Methods to fetch user details using the access token.
- Structured to follow SOLID principles for better maintainability and extensibility.
- Ready for integration into your Node.js application.

## Installation

```bash
npm install github-auth-library
```

## Usage

### Initialize the GitHub SDK

To use the library, you need to initialize the `GitHubSDK` with your GitHub OAuth application's client ID and client secret.

```javascript
const GitHubSDK = require("github-auth-library");

const githubSDK = new GitHubSDK(
  "YOUR_GITHUB_CLIENT_ID",
  "YOUR_GITHUB_CLIENT_SECRET"
);
```

### Exchange Authorization Code for Access Token

You can exchange the authorization code received from GitHub for an access token using the `getToken` method.

```javascript
const code = "AUTHORIZATION_CODE_RECEIVED_FROM_GITHUB";
const redirectUri = "YOUR_REDIRECT_URI";

githubSDK
  .getToken(code, redirectUri)
  .then((token) => {
    console.log("Access Token:", token);
  })
  .catch((error) => {
    console.error("Error getting access token:", error);
  });
```

### Fetch User Details

Once you have the access token, you can fetch the user details using the `getUserInfo` method.

```javascript
const token = {
  access_token: "YOUR_ACCESS_TOKEN",
};

githubSDK
  .getUserInfo(token)
  .then((userInfo) => {
    console.log("User Info:", userInfo);
  })
  .catch((error) => {
    console.error("Error getting user info:", error);
  });
```

## Methods

### `getToken(code, redirectUri)`

- **Description**: Exchanges the authorization code for an access token.
- **Parameters**:
  - `code` (string): The authorization code received from GitHub.
  - `redirectUri` (string): The redirect URI registered with your GitHub OAuth application.
- **Returns**: A promise that resolves to the access token.
- **Reference**: [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)

### `getUserInfo(token)`

- **Description**: Fetches user details using the access token.
- **Parameters**:
  - `token` (object): An object containing the access token (`access_token`).
- **Returns**: A promise that resolves to the user details.
- **Reference**: [GitHub Users API Documentation](https://docs.github.com/en/rest/reference/users#get-the-authenticated-user)

## Example

Here is an example of using the `github-auth-library` in an Express.js application to handle GitHub OAuth authentication.

```javascript
const express = require("express");
const GitHubSDK = require("github-auth-library");
const app = express();

const githubSDK = new GitHubSDK(
  "YOUR_GITHUB_CLIENT_ID",
  "YOUR_GITHUB_CLIENT_SECRET"
);

app.post("/github-auth", async (req, res) => {
  const { code, redirectUri } = req.body;

  try {
    const token = await githubSDK.getToken(code, redirectUri);
    const userInfo = await githubSDK.getUserInfo(token);
    res.status(200).json({ user: userInfo, token });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Resources

- **Github Auth Library** [Github-Auth-Library on NPM](https://www.npmjs.com/package/github-auth-library)
- **Github Auth Library** [Github-Auth-Library on Github](https://github.com/shekhardtu/github-auth-library)
- **GitHub Repository:** [OAuthify on GitHub](https://github.com/shekhardtu/oauthify)
- **NPM Package:** [OAuthify on NPM](https://www.npmjs.com/package/oauthify)
- **Google OAuth Documentation:** [Google Identity Platform](https://developers.google.com/identity/protocols/oauth2)
- **GitHub OAuth Documentation:** [GitHub OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)
