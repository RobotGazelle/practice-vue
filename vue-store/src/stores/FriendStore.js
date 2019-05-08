const FriendStore = {
    data: {
        friends: [
            {
                name: 'Sanyi',
                id: 1
            },
            {
                name: 'Tibi',
                id: 2
            }
        ]
    },
    methods: {
        addFriend (name) {
            let newId = FriendStore.data.friends[FriendStore.data.friends.length - 1].id + 1
            let newFriend = {
                name: name,
                id: newId
            }
            FriendStore.data.friends.push(newFriend)
        }
    }
}

export default FriendStore
