const { Schema, model } = require('mongoose');
//We also need a way to handle a password in the resolvers. We start by importing bcrypt, a library that is used to safely store a password in the Profile model:
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
});

// set up pre-save middleware to create password
// we add a save hook to encrypt a password when a new profile is created:
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
// We also add an isCorrectPassword() method that checks to determine if the correct password was provided by the user:
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;
