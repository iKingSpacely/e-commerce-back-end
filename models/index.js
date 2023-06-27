// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignkey: 'category_id',
  onDelete: 'CASCADE'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignkey: 'category_id',
  onDelete: 'CASCADE'

});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignkey: 'product_id',
  through: {
    model: ProductTag
  },

}),

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignkey: 'tag_id',
  through: {
    model: ProductTag
  },

}),

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
