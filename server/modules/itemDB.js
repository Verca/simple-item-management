import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  'name': String,
  'price': String,
  'picture': String
});
const Item = mongoose.model('item', schema);

export function getListOfItems() {
  return Item.find();
};

export function saveItem(data) {
	if(!data._id) {
		delete data._id;
  	return (new Item(data)).save();
	} else {
		// update
		const id = data._id;
		delete data._id;
    return Item.findOneAndUpdate({_id: id}, {$set: data}, {upsert: true}).exec();
	}
};

export function deleteItem(id) {
		return Item.findByIdAndRemove({_id: id}).exec();
};

