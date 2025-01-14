const  MongoConnection = require('../DataBase/Connection');

class CategoryService {
    constructor() {
        this.collection = 'categories';
        this.connection = new MongoConnection();
    }

    async getCategories() {
        const categories = await this.connection.getAll(this.collection);
        return categories || [];        
    }

    async getCategory(categoryId) {
        const category = await this.connection.get(this.collection, categoryId);
        return category || {};
    }

    async createCategory(category) {
        const insertedCategoryId = await this.connection.create(this.collection, category);
        return insertedCategoryId;
    }

    async updateCategory(categoryId, category) {
        const updatedProductId = await this.connection.update(this.collection, categoryId, category);
        return updatedProductId;
    }

    async deleteCategory(categoryId) {
        const wasDeleted = await this.connection.delete(this.collection, categoryId);
        return wasDeleted;
    }

    async getProductsByCategory(categoryId) {
        const products = await this.connection.getAll('products', { categoryId: categoryId });
        return products || [];
    }
}

module.exports = CategoryService;