<template>
  <div class="home">
    <h1>Homepage</h1>

    <v-btn class="purple white--text">click me</v-btn>
    <v-btn depressed color="dark blue">click me too</v-btn>
    <v-btn flat color="pink">me too</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn fab depressed small dark color=purple>
      <v-icon>favorite</v-icon>
    </v-btn>

  </div>
</template>

<script>

export default {
    
}
</script>
