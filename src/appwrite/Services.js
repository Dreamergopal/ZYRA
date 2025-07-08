import config from "../appwrite/config";
import { Client, ID, Databases, Query } from "appwrite";

export class service {
  client = new Client();
  database;

  constructor() {
    this.client.setEndpoint(config.url).setProject(config.projectID);
    this.database = new Databases(this.client);
  }

  async createPost({ slug, title, content, userId, is_published, author,  }) {
    try {
      return await this.database.createDocument(
        config.databaseID,
        config.collectionID,
        ID.unique(),

        {
          slug,
          title,
          content,
          userId,
          is_published,
          author,
          
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  async updatePost(slug, { title, content, views }) {
    try {
      return await this.database.updateDocument(
        config.databaseID,
        config.collectionID,
        slug,
        {
          title,
          content,
          views
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.databaseID,
        config.collectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.databaseID,
        config.collectionID,
        slug
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  async allPost() {
    try {
      return await this.database.listDocuments(
        config.databaseID,
        config.collectionID
      );
    } catch (error) {
      console.log(error.message);
    }
  }
}

const SERVICE = new service();
export default SERVICE;
