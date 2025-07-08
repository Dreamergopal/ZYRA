import config from "./config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.url).setProject(config.projectID);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAcount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAcount) {
        // if here useraccount is found then calling another method `login`
        return this.login({ email, password });
      }
    } catch (error) {
      console.log(error.message);
      return this.login({ email, password });
    }
  }

  async login({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
      const userData = this.account.get();
      return userData;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error.message);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(error.message);
    }
  }
}

const AUTH = new AuthService();

export default AUTH;
