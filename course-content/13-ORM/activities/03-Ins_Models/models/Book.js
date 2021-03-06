const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Book extends Model {}

Book.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    // Will become `is_paperback` in table due to `underscored` flag
    isPaperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    // freezeTableName: true, 
    //https://sequelize.org/master/manual/naming-strategies.html
    // underscored: true,
    //Sequelize provides the underscored option for a model. When true, this option will set the field option on all attributes to the snake_case version of its name. This also applies to foreign keys automatically generated by associations and other automatically generated fields. Example:
    modelName: 'book'
  }
);

module.exports = Book;
