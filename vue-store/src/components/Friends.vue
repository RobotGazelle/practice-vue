<template>
    <div>
        <h1>My Friends</h1>
        <li v-for="friend in friends" v-bind:key="friend.id">
            id: {{friend.id}}
             name: {{friend.name}}
        </li>
        <input v-model="newFriend" v-on:keyup.13="addFriend(newFriend)"/>
    </div>
</template>

<script>
import friendStore from "../stores/FriendStore"

export default {
    data() {
        return {
            newFriend: null,
            friends: friendStore.data.friends
        };
    },
    methods: {
        addFriend(name) {
            friendStore.methods.addFriend(name)
            this.newFriend = null
        }
    }
}
</script>

<style>

</style>