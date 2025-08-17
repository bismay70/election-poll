const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true},
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        enum: ['voter', 'admin', 'candidate'], 
        default: 'voter'},
        hasVoted: {type: Boolean, default: 'false'}
},
{
    timestamps: true,
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.matchPassword = function (password) {
    return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', userSchema);