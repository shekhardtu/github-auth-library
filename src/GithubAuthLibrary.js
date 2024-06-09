const GitHubOAuthService = require("./GitHubOAuthService");

class GithubAuthLibrary {
  constructor(clientId, clientSecret) {
    this.oauthService = new GitHubOAuthService(clientId, clientSecret);
  }

  async getToken(code, redirectUri) {
    return this.oauthService.getToken(code, redirectUri);
  }

  async getUserInfo(token) {
    return this.oauthService.getUserInfo(token);
  }
}

module.exports = GithubAuthLibrary;
