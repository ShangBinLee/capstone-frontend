import React from 'react';
import ChatRoom from './ChatRoom.js';
import { db } from '../DB/db.js';
import { useLiveQuery } from 'dexie-react-hooks';
import { fetchProduct } from '../lib/fetch_product.js';
import { fetchUserOfStudentId } from '../lib/fetch_user.js';

const ChatRoomList = ({ userName, rootUrl }) => {
    const chatRoomInfos = useLiveQuery(async () => {
        const chatRooms = await db.chat_room.orderBy('modified_date').toArray();

        if(chatRooms === undefined) {
            return [];
        }

        return Promise.all(chatRooms
            .map(async (room) => {
                // 채팅방 상품 정보 fetch
                const {
                    saleProductName,
                    imgUrl,
                    studentId
                } = await fetchProduct(room.product_id, rootUrl).catch((err) => {
                    if(err instanceof Error) {
                        throw err;
                    }
                    
                    // 상품이 존재하지 않을 경우
                    if(err.status === 404) {
                        return {
                            saleProductName : null,
                            imgUrl : null,
                            studentId : null
                        };
                    }
                });

                // 상품 판매자 정보 fetch
                const {
                    userName : sellerName
                } = await fetchUserOfStudentId(studentId, rootUrl).catch((err) => {
                    if(err instanceof Error) {
                        throw err;
                    }
                    
                    // 계정이 존재하지 않을 경우
                    if(err.status === 404) {
                        return {
                            userName : null
                        };
                    }
                });

                // 본인이 판매자일 경우 구매자의 정보를 알아야 함

                // 구매자 채팅방만 일단 구현
                const otherUserName = sellerName === userName ? null : sellerName;

                const chats = await db.chat
                .where('chat_room_id')
                .equals(room.id)
                .reverse()
                .sortBy('create_date');
            
                const lastChat =  chats.length === 0
                ? {
                    chat_content : '아직 채팅이 없습니다. 첫 번째 채팅을 보내보세요',
                    create_date : null
                }
                : chats[0];
                
                // 계정이 존재하지 않을 경우 기존 채팅방에 해당 사실을 알림
                const name = otherUserName === null ? '존재하지 않는 유저입니다' : otherUserName

                return {
                    user : {
                        name
                    },
                    product : {
                        imgUrl,
                        title : saleProductName
                    },
                    chatRoom : {
                        chat_room_id : room.id
                    },
                    lastChat : {
                        chat_content : lastChat.chat_content,
                        create_date : lastChat.create_date
                    }
                }
            })
        );
    });

    return chatRoomInfos?.map((roomInfo) => <ChatRoom chatRoomInfo={roomInfo} />);
};

export default ChatRoomList;