<template>
    <div>
        <h1>My Friends</h1>
        {{id}}
        {{age}}
        {{weight}}
        <!-- {{$route.params.id}}
        {{$route.params.age}}
        {{$route.params.weight}} -->
        <!-- <router-link>Sanyi</router-link>
        <router-link>Zoli</router-link>
        <router-link>Jolan</router-link> -->
    </div>
</template>

<script>
export default {
    props: [
        'id',
        'age',
        'weight'
    ]
}
</script>