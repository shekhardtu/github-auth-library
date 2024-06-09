class OAuthService {
  async getToken(code, redirectUri) {
    throw new Error("Method not implemented.");
  }

  async getUserInfo(token) {
    throw new Error("Method not implemented.");
  }
}

module.exports = OAuthService;
