const User = require('./User');
const Comment = require('./Comment');
const Event = require('./Event')

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Event.belongsTo(User, {
    foreignKey: 'user_id'
})

Event.hasMany(Comment, {
foreignKey: 'comment_id',
onDelete: 'CASCADE'

})

Comment.belongsTo(Event, {
    foreignKey: 'comment_id'

})

module.exports = { User, Comment, Event };
