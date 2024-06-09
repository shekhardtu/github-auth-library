const axios = require("axios");
const OAuthService = require("./OAuthService");

class GitHubOAuthService extends OAuthService {
  constructor(clientId, clientSecret) {
    super();
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  async getToken(code, redirectUri) {
    const response = await axios.post(
      "https://github.com/login/oauth/access_token",
      null,
      {
        params: {
          client_id: this.clientId,
          client_secret: this.clientSecret,
          code,
          redirect_uri: redirectUri,
        },
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.data;
  }

  async getUserInfo(token) {
    const response = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "User-Agent": "Node.js Server",
      },
    });
    return response.data;
  }
}

module.exports = GitHubOAuthService;
