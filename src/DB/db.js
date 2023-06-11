import Dexie from 'dexie';

export const db = new Dexie('bit_chat');
db.version(1).stores({
  chat_room: 'id, modified_date, product_id, buyer_id',
  chat : 'id, chat_content, create_date, modified_date, chat_room_id, sender_id'
});