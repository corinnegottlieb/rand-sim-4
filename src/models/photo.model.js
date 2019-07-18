import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RGBSchema = new Schema( {
    r: Number,
    g: Number,
    b: Number
} )

const colorSchema = new Schema( {
    name: String,
    hex: String,
    rgb: RGBSchema
} )

const photoSchema = new Schema( {
    photo_id: String,
    width: Number,
    height: Number,
    color: colorSchema,
    description: String,
    url: String,
    likes: Number,
    tags: [ String ]
} )

export default mongoose.model( 'photo', photoSchema )
