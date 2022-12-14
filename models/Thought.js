const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'Must fill out text',
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Username required'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat (createdAtVal)
    }
});

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "Please fill out text",
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat (createdAtVal)
        },
        username: {
            type: String,
            required: 'Username required'
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;