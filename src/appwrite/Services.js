import config from "../appwrite/config";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class service {
  client = new Client();
  database;
  storage;

  constructor() {
    this.client.setEndpoint(config.url).setProject(config.projectID);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({
    slug,
    title,
    content,
    userId,
    is_published,
    author,
    image,
  }) {
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
          image,
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
          views,
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
  async uploadImage(file) {
    try {
      return await this.storage.createFile(config.bucketID, ID.unique(), file);
    } catch (error) {
      console.log(error.message);
    }
  }
  preview(fileID) {
    // it will provide a preview of image
    return this.storage.getFilePreview(config.bucketID, fileID);
  }
  getFileURL(fileID) {
    // it will give url to view or download image
    return this.storage.getFileView(config.bucketID, fileID);
  }
}

const SERVICE = new service();
export default SERVICE;
